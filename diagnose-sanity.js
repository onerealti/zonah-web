/**
 * Sanity Data Diagnostic Script
 * Verifies data completeness and identifies missing fields
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
 * Check which fields are populated for each project
 */
async function diagnostics() {
  console.log('🔍 Sanity Data Diagnostics\n');

  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ SANITY_WRITE_TOKEN environment variable is required');
    process.exit(1);
  }

  try {
    // Fetch all projects
    const projects = await client.fetch(`*[_type == "project"] {
      _id,
      title,
      slug,
      city,
      subLocation,
      bedrooms,
      priceRange,
      projectTypeDetail,
      badgeStatus,
      mainImageGradient,
      status,
      description,
      highlights,
      amenities,
      floorPlans,
      segment
    } | order(title asc)`);

    console.log(`📊 Found ${projects.length} projects\n`);

    // Analyze field completeness
    const fieldStats = {
      city: 0,
      subLocation: 0,
      bedrooms: 0,
      priceRange: 0,
      projectTypeDetail: 0,
      badgeStatus: 0,
      mainImageGradient: 0,
      status: 0,
      description: 0,
      highlights: 0,
      amenities: 0,
      floorPlans: 0,
    };

    const issues = [];

    projects.forEach(project => {
      // Check each field
      if (project.city && project.city.trim()) fieldStats.city++;
      else issues.push(`${project.title}: Missing/empty city`);

      if (project.subLocation && project.subLocation.trim()) fieldStats.subLocation++;
      else issues.push(`${project.title}: Missing/empty subLocation`);

      if (project.bedrooms && project.bedrooms !== 'N/A') fieldStats.bedrooms++;
      else issues.push(`${project.title}: Missing/N/A bedrooms`);

      if (project.priceRange && project.priceRange !== 'Price on Request') fieldStats.priceRange++;

      if (project.projectTypeDetail && project.projectTypeDetail !== 'Project') fieldStats.projectTypeDetail++;

      if (project.badgeStatus) fieldStats.badgeStatus++;

      if (project.mainImageGradient) fieldStats.mainImageGradient++;

      if (project.status) fieldStats.status++;

      if (project.description && Array.isArray(project.description) && project.description.length > 0) {
        fieldStats.description++;
      }

      if (project.highlights && Array.isArray(project.highlights) && project.highlights.length > 0) {
        fieldStats.highlights++;
      }

      if (project.amenities && Array.isArray(project.amenities) && project.amenities.length > 0) {
        fieldStats.amenities++;
      }

      if (project.floorPlans && Array.isArray(project.floorPlans) && project.floorPlans.length > 0) {
        fieldStats.floorPlans++;
      }
    });

    // Display results
    console.log('📈 Field Completeness:\n');
    console.log('Field                 | Populated | %');
    console.log('─────────────────────┼───────────┼────');

    const total = projects.length;
    Object.entries(fieldStats).forEach(([field, count]) => {
      const percent = ((count / total) * 100).toFixed(0);
      const status = count === total ? '✅' : count === 0 ? '❌' : '⚠️ ';
      console.log(`${status} ${field.padEnd(18)} | ${count.toString().padStart(9)} | ${percent.padStart(3)}%`);
    });

    // Display issues
    if (issues.length > 0) {
      console.log(`\n⚠️  Found ${issues.length} issues:\n`);
      issues.forEach(issue => {
        console.log(`  - ${issue}`);
      });
    } else {
      console.log('\n✅ All fields properly populated!');
    }

    // Project summary
    console.log(`\n📋 Projects Summary:\n`);
    projects.forEach((p, i) => {
      const missingFields = [];
      if (!p.bedrooms || p.bedrooms === 'N/A') missingFields.push('bedrooms');
      if (!p.description || p.description.length === 0) missingFields.push('description');
      if (!p.highlights || p.highlights.length === 0) missingFields.push('highlights');
      if (!p.amenities || p.amenities.length === 0) missingFields.push('amenities');
      if (!p.floorPlans || p.floorPlans.length === 0) missingFields.push('floor-plans');

      const status = missingFields.length === 0 ? '✅' : '⚠️ ';
      console.log(`${status} ${(i + 1).toString().padStart(2)}) ${p.title.padEnd(25)} (${p.segment})`);
      if (missingFields.length > 0) {
        console.log(`        Missing: ${missingFields.join(', ')}`);
      }
    });

    console.log(`\n✅ Diagnostics complete!`);
  } catch (error) {
    console.error('❌ Diagnostics failed:', error.message);
    process.exit(1);
  }
}

// Run diagnostics
if (require.main === module) {
  diagnostics().catch(error => {
    console.error('\n❌ Error:', error);
    process.exit(1);
  });
}

module.exports = { diagnostics };
