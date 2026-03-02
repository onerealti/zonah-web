/**
 * Sanity Upload Script
 * Uploads migrated project data directly to Sanity CMS
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
  token: process.env.SANITY_WRITE_TOKEN, // Required for write operations
});

/**
 * Upload single project to Sanity
 */
async function uploadProject(project) {
  try {
    // Create the document
    const result = await client.create({
      _type: 'project',
      title: project.title,
      slug: project.slug,
      segment: project.segment,
      status: project.status || 'upcoming',
      city: project.city || 'Hyderabad',
      location: project.location || '',
      subLocation: project.subLocation || '',
      projectTypeDetail: project.projectTypeDetail || 'Project',
      description: project.description || [],
      highlights: project.highlights || [],
      priceRange: project.priceRange || 'Price on Request',
      bedrooms: project.bedrooms || '',
      // Add other fields as needed
    });

    console.log(`  ✓ Uploaded: ${project.title} (${result._id})`);
    return result;
  } catch (error) {
    console.error(`  ❌ Failed to upload ${project.title}:`, error.message);
    throw error;
  }
}

/**
 * Upload image to Sanity
 */
async function uploadImage(imagePath, projectSlug) {
  try {
    if (!fs.existsSync(imagePath)) {
      console.log(`    ⚠️  Image not found: ${imagePath}`);
      return null;
    }

    const imageBuffer = fs.readFileSync(imagePath);
    const asset = await client.assets.upload('image', imageBuffer, {
      filename: path.basename(imagePath),
    });

    console.log(`    ✓ Uploaded image: ${path.basename(imagePath)}`);
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    };
  } catch (error) {
    console.error(`    ❌ Failed to upload image ${imagePath}:`, error.message);
    return null;
  }
}

/**
 * Main upload function
 */
async function uploadToSanity() {
  console.log('🚀 Starting Sanity upload...\n');

  // Check for write token
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ SANITY_WRITE_TOKEN environment variable is required');
    console.log('\nTo create a token:');
    console.log('1. Go to https://www.sanity.io/manage');
    console.log('2. Select your project (j6dtunal)');
    console.log('3. Go to API > Tokens');
    console.log('4. Create a new token with "Editor" permissions');
    console.log('5. Add it to your .env.local file:\n');
    console.log('   SANITY_WRITE_TOKEN=your_token_here\n');
    process.exit(1);
  }

  // Load migrated data
  const dataPath = path.join(__dirname, 'migrated-data', 'projects.json');
  
  if (!fs.existsSync(dataPath)) {
    console.error(`❌ Migration data not found at ${dataPath}`);
    console.log('\nPlease run the migration script first:');
    console.log('   node migrate-legacy-content.js\n');
    process.exit(1);
  }

  const projects = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  console.log(`📦 Loaded ${projects.length} projects from migration data\n`);

  const results = {
    success: [],
    failed: [],
  };

  // Upload each project
  for (const project of projects) {
    try {
      console.log(`\n📝 Processing: ${project.title}`);
      
      // Upload main image if available
      if (project.images && project.images.length > 0) {
        const mainImagePath = path.join(
          __dirname,
          'public',
          'legacy-images',
          project.images[0]
        );
        
        const mainImage = await uploadImage(mainImagePath, project.slug.current);
        if (mainImage) {
          project.mainImage = mainImage;
        }
      }

      // Upload project
      const result = await uploadProject(project);
      results.success.push(result._id);

    } catch (error) {
      results.failed.push({
        title: project.title,
        error: error.message,
      });
    }

    // Rate limiting - wait 500ms between uploads
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Summary
  console.log('\n\n✅ Upload complete!');
  console.log(`\n📊 Summary:`);
  console.log(`   Successfully uploaded: ${results.success.length}`);
  console.log(`   Failed: ${results.failed.length}`);

  if (results.failed.length > 0) {
    console.log(`\n❌ Failed uploads:`);
    results.failed.forEach(f => {
      console.log(`   - ${f.title}: ${f.error}`);
    });
  }

  // Save results
  const resultsPath = path.join(__dirname, 'migrated-data', 'upload-results.json');
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  console.log(`\n💾 Results saved to ${resultsPath}`);
}

// Run upload
if (require.main === module) {
  uploadToSanity().catch(error => {
    console.error('\n❌ Upload failed:', error);
    process.exit(1);
  });
}

module.exports = { uploadToSanity, uploadProject, uploadImage };
