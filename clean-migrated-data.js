/**
 * Data Cleaning Script
 * Cleans and enhances the migrated project data
 */

const fs = require('fs');
const path = require('path');

// UI/navigation images to filter out
const UI_IMAGES = [
  'facebook.png',
  'twitter.png',
  'youtube.png',
  'zonah_logo',
  'zonah_caption',
  'home_img_',
  'links_',
  'inner_',
  'head_bg',
  'bg.gif',
  'bg3.gif',
];

// Map highlights to amenity types
const AMENITY_MAPPING = {
  'swimming pool': 'pool',
  'pool': 'pool',
  'gym': 'gym',
  'gymnasium': 'gym',
  'fitness': 'gym',
  'security': 'security',
  '24-hr security': 'security',
  'round-the-clock security': 'security',
  'play area': 'play',
  'kids play': 'play',
  'children': 'play',
  'garden': 'garden',
  'landscaping': 'garden',
  'bbq': 'bbq',
  'ev charging': 'ev',
  'electric vehicle': 'ev',
  'club': 'club',
  'clubhouse': 'club',
  'community hall': 'club',
};

/**
 * Filter out UI/navigation images
 */
function filterImages(images) {
  return images.filter(img => {
    const imageLower = img.toLowerCase();
    return !UI_IMAGES.some(uiImg => imageLower.includes(uiImg.toLowerCase()));
  });
}

/**
 * Map highlights to amenities with icons
 */
function extractAmenities(highlights) {
  const amenities = [];
  const seenTypes = new Set();

  highlights.forEach(highlight => {
    const highlightLower = highlight.toLowerCase();
    
    // Check each amenity mapping
    for (const [keyword, type] of Object.entries(AMENITY_MAPPING)) {
      if (highlightLower.includes(keyword) && !seenTypes.has(type)) {
        amenities.push({
          label: highlight,
          amenityType: type,
        });
        seenTypes.add(type);
        break;
      }
    }
    
    // If no specific mapping, add as default amenity
    if (!seenTypes.has(highlightLower)) {
      amenities.push({
        label: highlight,
        amenityType: 'default',
      });
    }
  });

  return amenities;
}

/**
 * Extract location info from description and property info
 */
function extractLocationInfo(project) {
  const location = {
    city: project.city || 'Hyderabad',
    subLocation: '',
    fullLocation: project.location || '',
  };

  // Try to extract sub-location from full location
  if (location.fullLocation) {
    // Common patterns: "Located in X", "at X", "near X"
    const patterns = [
      /located in ([^,\.]+)/i,
      /\bat\s+([^,\.]+)/i,
      /\bin\s+([^,\.]+)/i,
      /\bnear\s+([^,\.]+)/i,
    ];

    for (const pattern of patterns) {
      const match = location.fullLocation.match(pattern);
      if (match) {
        location.subLocation = match[1].trim();
        break;
      }
    }
  }

  return location;
}

/**
 * Extract BHK configuration from description and highlights
 */
function extractBedrooms(project) {
  const allText = [
    ...(project.description || []),
    ...(project.highlights || []),
  ].join(' ');

  // Look for patterns like "2BHK", "3 BHK", "2 and 3 BHK", "3bhks"
  const bhkMatch = allText.match(/(\d+)\s*(?:and\s*(\d+)\s*)?bhk/i);
  if (bhkMatch) {
    if (bhkMatch[2]) {
      return `${bhkMatch[1]}, ${bhkMatch[2]} BHK`;
    }
    return `${bhkMatch[1]} BHK`;
  }

  return '';
}

/**
 * Extract size/area from description
 */
function extractArea(project) {
  const allText = [
    ...(project.description || []),
    ...(project.highlights || []),
  ].join(' ');

  // Look for patterns like "3700 sq ft", "1250 sq.ft.", "800 to 1300 sft"
  const patterns = [
    /(\d+(?:,\d+)?)\s*(?:sq\.?\s*(?:ft|yds?|yards?))/i,
    /(\d+)\s*(?:to|-)?\s*(\d+)\s*sft/i,
  ];

  for (const pattern of patterns) {
    const match = allText.match(pattern);
    if (match) {
      if (match[2]) {
        return `${match[1]}-${match[2]} sq.ft.`;
      }
      return `${match[1]} sq.ft.`;
    }
  }

  return 'N/A';
}

/**
 * Generate price range from project type and location
 */
function estimatePriceRange(project) {
  // This is a placeholder - in real scenario, you'd have actual pricing data
  const { segment, bedrooms } = project;
  
  if (segment === 'land-development') {
    return 'Price on Request';
  }
  
  if (segment === 'commercial') {
    return 'Price on Request';
  }
  
  // Residential - rough estimates based on BHK
  if (bedrooms.includes('2 BHK')) {
    return '₹40L - ₹60L';
  } else if (bedrooms.includes('3 BHK')) {
    return '₹60L - ₹1Cr';
  }
  
  return 'Price on Request';
}

/**
 * Clean project data
 */
function cleanProject(project) {
  const cleaned = {
    ...project,
  };

  // Filter images
  if (cleaned.images) {
    cleaned.images = filterImages(cleaned.images);
  }

  // Extract amenities from highlights
  if (cleaned.highlights && cleaned.highlights.length > 0) {
    cleaned.amenities = extractAmenities(cleaned.highlights);
  }

  // Extract location info
  const locationInfo = extractLocationInfo(cleaned);
  cleaned.city = locationInfo.city;
  cleaned.subLocation = locationInfo.subLocation;
  if (!cleaned.location) {
    cleaned.location = locationInfo.fullLocation;
  }

  // Extract bedrooms
  cleaned.bedrooms = extractBedrooms(cleaned);

  // Extract area/size
  cleaned.area = extractArea(cleaned);

  // Estimate price range
  cleaned.priceRange = estimatePriceRange(cleaned);

  // Set default values for Sanity schema
  cleaned.projectTypeDetail = cleaned.projectTypeDetail || 
    (cleaned.segment === 'land-development' ? 'Land Development' :
     cleaned.segment === 'commercial' ? 'Commercial Complex' :
     'Residential Apartments');

  // Clean up titles - remove navigation text
  if (cleaned.title.includes('[') || cleaned.title.includes('Projects')) {
    // Extract actual project name
    const match = cleaned.title.match(/^([A-Za-z\s]+)(?:\[|Projects)/);
    if (match) {
      cleaned.title = match[1].trim();
    }
  }

  // Ensure proper status
  if (!cleaned.status || cleaned.status === 'unknown') {
    cleaned.status = 'completed'; // Default to completed
  }

  return cleaned;
}

/**
 * Remove duplicate projects (based on slug)
 */
function deduplicateProjects(projects) {
  const seen = new Set();
  const unique = [];

  projects.forEach(project => {
    const slug = project.slug.current;
    if (!seen.has(slug)) {
      seen.add(slug);
      unique.push(project);
    } else {
      console.log(`  ⚠️  Skipping duplicate: ${project.title} (${slug})`);
    }
  });

  return unique;
}

/**
 * Main cleaning function
 */
function cleanData() {
  console.log('🧹 Starting data cleaning...\n');

  // Load raw data
  const dataPath = path.join(__dirname, 'migrated-data', 'projects.json');
  if (!fs.existsSync(dataPath)) {
    console.error('❌ projects.json not found');
    process.exit(1);
  }

  const projects = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  console.log(`📦 Loaded ${projects.length} projects\n`);

  // Clean each project
  console.log('🔧 Cleaning projects...');
  const cleaned = projects.map(cleanProject);

  // Remove duplicates
  console.log('\n🔍 Removing duplicates...');
  const unique = deduplicateProjects(cleaned);

  // Filter out generic "Projects" entries
  const filtered = unique.filter(p => {
    const isGeneric = p.title.match(/^(Ongoing|Completed|Future)\s+Projects$/);
    if (isGeneric) {
      console.log(`  ⚠️  Skipping generic entry: ${p.title}`);
      return false;
    }
    return true;
  });

  // Save cleaned data
  console.log('\n💾 Saving cleaned data...');
  fs.writeFileSync(
    path.join(__dirname, 'migrated-data', 'cleaned-projects.json'),
    JSON.stringify(filtered, null, 2)
  );

  // Generate updated NDJSON for Sanity
  const ndjson = filtered.map(p => JSON.stringify({
    _type: 'project',
    ...p
  })).join('\n');
  
  fs.writeFileSync(
    path.join(__dirname, 'migrated-data', 'cleaned-sanity-import.ndjson'),
    ndjson
  );

  // Summary
  console.log('\n✅ Cleaning complete!');
  console.log(`\n📊 Summary:`);
  console.log(`   Original: ${projects.length} projects`);
  console.log(`   After deduplication: ${unique.length} projects`);
  console.log(`   After filtering: ${filtered.length} projects`);
  console.log(`\n   By segment:`);
  console.log(`     Residential: ${filtered.filter(p => p.segment === 'residential').length}`);
  console.log(`     Commercial: ${filtered.filter(p => p.segment === 'commercial').length}`);
  console.log(`     Land Development: ${filtered.filter(p => p.segment === 'land-development').length}`);

  console.log(`\n📁 Output files:`);
  console.log(`   ${path.join(__dirname, 'migrated-data', 'cleaned-projects.json')}`);
  console.log(`   ${path.join(__dirname, 'migrated-data', 'cleaned-sanity-import.ndjson')}`);
}

// Run cleaning
if (require.main === module) {
  cleanData();
}

module.exports = { cleanData, cleanProject };
