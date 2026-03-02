/**
 * Sanity Cleanup Script
 * Removes generic entries and duplicate projects
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env.local') });

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
 * List all projects
 */
async function listProjects() {
  try {
    const projects = await client.fetch(`*[_type == "project"] {
      _id,
      title,
      slug,
      _createdAt
    } | order(_createdAt desc)`);
    
    return projects;
  } catch (error) {
    console.error('❌ Failed to fetch projects:', error.message);
    throw error;
  }
}

/**
 * Delete projects by ID
 */
async function deleteProjects(ids) {
  if (ids.length === 0) return;

  try {
    const transaction = client.transaction();
    ids.forEach(id => {
      transaction.delete(id);
    });
    
    await transaction.commit();
    console.log(`✓ Deleted ${ids.length} projects`);
  } catch (error) {
    console.error('❌ Failed to delete projects:', error.message);
    throw error;
  }
}

/**
 * Main cleanup function
 */
async function cleanup() {
  console.log('🧹 Sanity Project Cleanup\n');

  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ SANITY_WRITE_TOKEN environment variable is required');
    process.exit(1);
  }

  // Get all projects
  console.log('📋 Fetching all projects...\n');
  const projects = await listProjects();

  console.log(`Found ${projects.length} total projects:\n`);

  // Identify projects to delete
  const toDelete = [];
  const keepers = [];

  // Map to track unique real projects
  const uniqueProjects = new Map();

  projects.forEach(project => {
    const title = project.title || '';
    
    // Skip generic project list pages
    if (title.match(/^(Ongoing|Completed|Future)\s+Projects$/i)) {
      console.log(`❌ [DELETE] Generic list page: "${title}"`);
      toDelete.push(project._id);
      return;
    }

    // For Pearl Valley and Ruby Enclave, keep only the first one
    if (title.includes('Pearl Valley') || title.includes('Ruby Enclave')) {
      // Extract base project name
      const baseName = title.split('[')[0].trim();
      
      if (!uniqueProjects.has(baseName)) {
        console.log(`✅ [KEEP] ${baseName}`);
        uniqueProjects.set(baseName, project._id);
        keepers.push(project);
      } else {
        console.log(`⏭️  [SKIP DUPLICATE] ${title}`);
        toDelete.push(project._id);
      }
      return;
    }

    // Keep all other projects
    console.log(`✅ [KEEP] ${title}`);
    keepers.push(project);
  });

  console.log(`\n📊 Cleanup Summary:`);
  console.log(`   Total projects: ${projects.length}`);
  console.log(`   Projects to keep: ${keepers.length}`);
  console.log(`   Projects to delete: ${toDelete.length}`);

  if (toDelete.length > 0) {
    console.log(`\n🗑️  Deleting ${toDelete.length} projects...\n`);
    await deleteProjects(toDelete);
    console.log(`\n✅ Cleanup complete!`);
    console.log(`\n📊 Final count: ${keepers.length} real projects remaining`);
    
    // Show what's left
    console.log(`\n✅ Remaining projects:`);
    keepers.forEach(p => {
      console.log(`   - ${p.title} (${p.slug?.current || 'no-slug'})`);
    });
  } else {
    console.log('\n✅ No cleanup needed - all projects are valid!');
  }
}

// Run cleanup
if (require.main === module) {
  cleanup().catch(error => {
    console.error('\n❌ Cleanup failed:', error);
    process.exit(1);
  });
}

module.exports = { cleanup };
