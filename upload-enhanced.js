/**
 * Enhanced Sanity Upload Script
 * Properly transforms migrated data to match Sanity schema
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env.local') });

const fs = require('fs');
const sanityClient = require('@sanity/client');

// Initialize Sanity client
const client = sanityClient.createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'j6dtunal',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2025-02-27',
  token: process.env.SANITY_WRITE_TOKEN,
});

// Gradient color map for projects
const GRADIENT_MAP = {
  'residential': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'commercial': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'land-development': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
};

// Badge status mapping
const BADGE_STATUS_MAP = {
  'completed': 'Ready to Move',
  'ongoing': 'Under Construction',
  'upcoming': 'Upcoming',
};

/**
 * Clean and enhance project data for Sanity schema
 */
function transformProjectForSanity(project, cleanedProjects = null) {
  // Find matching cleaned project for additional data
  const cleanedProject = cleanedProjects?.find(p => 
    p.slug.current === project.slug?.current
  );

  // Base transformation
  const transformed = {
    _type: 'project',
    title: project.title || '',
    slug: project.slug || { current: '' },
    segment: project.segment || 'residential',
    city: project.city || 'Hyderabad',
    subLocation: project.subLocation || '',
    location: project.location || '',
    status: project.status || 'completed',
    badgeStatus: BADGE_STATUS_MAP[project.status] || 'Ready to Move',
    projectTypeDetail: project.projectTypeDetail || 'Project',
    
    // Amenities array - ensure proper structure
    amenities: (project.amenities || []).map(amenity => ({
      label: amenity.label || amenity,
      amenityType: amenity.amenityType || 'default',
    })),
    
    // Floor plans
    floorPlans: (project.floorPlans || []).map(plan => ({
      label: plan.label || '',
      type: plan.type || 'Standard',
      area: plan.area || 'N/A',
      gradient: plan.gradient || GRADIENT_MAP[project.segment],
    })),
    
    // Description - ensure it's an array of strings
    description: Array.isArray(project.description)
      ? project.description.filter(d => d && d.length > 0)
      : project.description ? [project.description] : [],
    
    // Highlights
    highlights: project.highlights || [],
    
    // Numeric and string fields
    bedrooms: project.bedrooms || 'N/A',
    priceRange: project.priceRange || 'Price on Request',
    developmentSize: project.developmentSize || 'N/A',
    totalUnits: project.totalUnits || 'N/A',
    area: project.area || 'N/A',
    budgetCr: parseInt(project.budgetCr) || 0,
    
    // Display fields
    mainImageGradient: GRADIENT_MAP[project.segment] || 'linear-gradient(135deg, #333, #666)',
    possession: project.possession || '',
    rera: project.rera || '',
    
    // Use cleaned data if available
    ...(cleanedProject && {
      city: cleanedProject.city || project.city,
      subLocation: cleanedProject.subLocation || project.subLocation,
      location: cleanedProject.location || project.location,
      bedrooms: cleanedProject.bedrooms || project.bedrooms,
      area: cleanedProject.area || project.area,
      priceRange: cleanedProject.priceRange || project.priceRange,
    }),
  };

  return transformed;
}

/**
 * Delete existing projects to avoid duplicates
 */
async function deleteExistingProjects() {
  try {
    console.log('🧹 Checking for existing projects...');
    
    const query = '*[_type == "project"]._id';
    const ids = await client.fetch(query);
    
    if (ids.length === 0) {
      console.log('   No existing projects found');
      return;
    }

    console.log(`   Found ${ids.length} existing projects, deleting...`);
    
    const transaction = client.transaction();
    ids.forEach(id => {
      transaction.delete(id);
    });
    
    await transaction.commit();
    console.log(`   ✓ Deleted ${ids.length} projects`);
  } catch (error) {
    console.log('   ⚠️  Could not delete existing projects:', error.message);
  }
}

/**
 * Upload single project to Sanity
 */
async function uploadProject(project) {
  try {
    const result = await client.create(project);
    console.log(`  ✓ ${project.title}`);
    return result;
  } catch (error) {
    console.error(`  ❌ Failed to upload ${project.title}:`, error.message);
    throw error;
  }
}

/**
 * Main upload function
 */
async function uploadToSanity() {
  console.log('🚀 Enhanced Sanity Content Upload\n');

  // Check for write token
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ SANITY_WRITE_TOKEN environment variable is required\n');
    process.exit(1);
  }

  // Load cleaned data (primary) and raw data (fallback)
  const cleanedPath = path.join(__dirname, 'migrated-data', 'cleaned-projects.json');
  const rawPath = path.join(__dirname, 'migrated-data', 'projects.json');
  
  let projects = [];
  let cleanedProjects = null;

  // Try to load cleaned data first
  if (fs.existsSync(cleanedPath)) {
    cleanedProjects = JSON.parse(fs.readFileSync(cleanedPath, 'utf-8'));
    console.log(`📦 Loaded ${cleanedProjects.length} cleaned projects\n`);
  }

  // Load raw data as fallback
  if (fs.existsSync(rawPath)) {
    projects = JSON.parse(fs.readFileSync(rawPath, 'utf-8'));
  } else {
    console.error('❌ Migration data not found');
    console.log('Please run the migration scripts first');
    process.exit(1);
  }

  if (projects.length === 0) {
    console.error('❌ No projects to upload');
    process.exit(1);
  }

  // Delete existing projects to avoid duplicates
  await deleteExistingProjects();

  // Transform and upload projects
  console.log('📤 Uploading projects to Sanity...\n');

  const results = {
    success: [],
    failed: [],
  };

  for (const project of projects) {
    try {
      // Transform for Sanity schema
      const transformedProject = transformProjectForSanity(project, cleanedProjects);
      
      // Only upload if has valid title and slug
      if (transformedProject.title && transformedProject.slug?.current) {
        await uploadProject(transformedProject);
        results.success.push(transformedProject.title);
      } else {
        console.log(`  ⚠️  Skipped (missing title/slug): ${project.title}`);
      }
    } catch (error) {
      results.failed.push({
        title: project.title,
        error: error.message,
      });
    }

    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 300));
  }

  // Summary
  console.log('\n✅ Upload Complete!\n');
  console.log('📊 Summary:');
  console.log(`   Successfully uploaded: ${results.success.length}`);
  console.log(`   Failed: ${results.failed.length}`);

  if (results.failed.length > 0) {
    console.log('\n❌ Failed uploads:');
    results.failed.forEach(f => {
      console.log(`   - ${f.title}: ${f.error}`);
    });
  }

  // Save results
  const resultsPath = path.join(__dirname, 'migrated-data', 'upload-results-enhanced.json');
  fs.writeFileSync(resultsPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    successful: results.success,
    failed: results.failed,
  }, null, 2));

  console.log(`\n💾 Results saved to upload-results-enhanced.json`);
  console.log('\n🎉 Ready to view: http://localhost:3000/projects');
}

// Run upload
if (require.main === module) {
  uploadToSanity().catch(error => {
    console.error('\n❌ Upload failed:', error);
    process.exit(1);
  });
}

module.exports = { uploadToSanity };
