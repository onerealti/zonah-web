/**
 * Direct Sanity Upload Script
 * Uploads cleaned data directly with proper field mapping
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

/**
 * Map cleaned project data directly to Sanity document
 */
function mapToSanityDoc(project) {
  return {
    _type: 'project',
    title: project.title || '',
    slug: project.slug,
    segment: project.segment || 'residential',
    location: project.location || '',
    city: project.city || 'Hyderabad',
    subLocation: project.subLocation || '',
    status: project.status || 'completed',
    badgeStatus: project.badgeStatus || '',
    projectTypeDetail: project.projectTypeDetail || 'Project',
    bedrooms: project.bedrooms || 'N/A',
    priceRange: project.priceRange || 'Price on Request',
    budgetCr: parseInt(project.budgetCr) || 0,
    developmentSize: project.developmentSize || 'N/A',
    totalUnits: project.totalUnits || 'N/A',
    area: project.area || 'N/A',
    mainImageGradient: project.mainImageGradient || 'linear-gradient(135deg, #333, #666)',
    
    // Arrays
    description: Array.isArray(project.description) ? project.description : (project.description ? [project.description] : []),
    highlights: Array.isArray(project.highlights) ? project.highlights : (project.highlights ? [project.highlights] : []),
    
    // Nested objects arrays
    amenities: Array.isArray(project.amenities) ? project.amenities.map(a => ({
      label: a.label || a,
      amenityType: a.amenityType || 'default',
    })) : [],
    
    floorPlans: Array.isArray(project.floorPlans) ? project.floorPlans.map(fp => ({
      label: fp.label || '',
      type: fp.type || 'All',
      area: fp.area || 'N/A',
      gradient: fp.gradient || project.mainImageGradient || 'linear-gradient(135deg, #333, #666)',
    })) : [],
    
    possession: project.possession || '',
    rera: project.rera || '',
  };
}

/**
 * Upload single project
 */
async function uploadProject(doc) {
  try {
    const result = await client.create(doc);
    console.log(`  ✓ ${doc.title}`);
    return result._id;
  } catch (error) {
    console.error(`  ❌ ${doc.title}: ${error.message}`);
    throw error;
  }
}

/**
 * Delete all existing projects
 */
async function deleteAll() {
  try {
    console.log('🧹 Removing old projects...');
    const ids = await client.fetch('*[_type == "project"]._id');
    if (ids.length === 0) {
      console.log('   No old projects found');
      return;
    }
    
    const transaction = client.transaction();
    ids.forEach(id => transaction.delete(id));
    await transaction.commit();
    console.log(`   ✓ Deleted ${ids.length} old projects\n`);
  } catch (error) {
    console.log('   ⚠️  Could not delete old projects\n');
  }
}

/**
 * Main upload function
 */
async function upload() {
  console.log('🚀 Direct Sanity Upload with Proper Field Mapping\n');

  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ SANITY_WRITE_TOKEN not found');
    process.exit(1);
  }

  // Load cleaned projects
  const cleanedPath = path.join(__dirname, 'migrated-data', 'cleaned-projects.json');
  if (!fs.existsSync(cleanedPath)) {
    console.error(`❌ ${cleanedPath} not found`);
    process.exit(1);
  }

  const projects = JSON.parse(fs.readFileSync(cleanedPath, 'utf-8'));
  console.log(`📦 Loaded ${projects.length} cleaned projects\n`);

  // Delete old projects
  await deleteAll();

  // Upload new projects
  console.log('📤 Uploading to Sanity...\n');
  
  let successCount = 0;
  let failCount = 0;

  for (const project of projects) {
    try {
      const doc = mapToSanityDoc(project);
      
      // Log sample for first project
      if (successCount + failCount === 0) {
        console.log('📝 Sample document structure:');
        console.log(`   Amenities: ${doc.amenities.length} items`);
        console.log(`   Description: ${doc.description.length} paragraphs`);
        console.log(`   Highlights: ${doc.highlights.length} items`);
        console.log(`   Floor Plans: ${doc.floorPlans.length} items\n`);
      }

      await uploadProject(doc);
      successCount++;
    } catch (error) {
      failCount++;
    }

    // Rate limit
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`\n✅ Upload Complete`);
  console.log(`\n📊 Results:`);
  console.log(`   Successful: ${successCount}`);
  console.log(`   Failed: ${failCount}`);
  console.log('\n✨ All project data with amenities, descriptions, and floor plans is now in Sanity!');
}

if (require.main === module) {
  upload().catch(e => {
    console.error('❌ Error:', e.message);
    process.exit(1);
  });
}
