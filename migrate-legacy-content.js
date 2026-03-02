/**
 * Legacy Website Content Migration Script
 * Extracts project data from scraped HTML files and prepares for Sanity import
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Configuration
const SOURCE_DIR = 'C:\\Users\\User\\Desktop\\zd\\zonahd\\www.zonahdevelopers.com';
const OUTPUT_DIR = path.join(__dirname, 'migrated-data');
const IMAGES_OUTPUT_DIR = path.join(__dirname, 'public', 'legacy-images');

// Ensure output directories exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}
if (!fs.existsSync(IMAGES_OUTPUT_DIR)) {
  fs.mkdirSync(IMAGES_OUTPUT_DIR, { recursive: true });
}

/**
 * Extract text content from HTML, removing extra whitespace
 */
function cleanText(text) {
  if (!text) return '';
  return text.replace(/\s+/g, ' ').trim();
}

/**
 * Parse project detail page
 */
function parseProjectPage(htmlPath, segment) {
  const html = fs.readFileSync(htmlPath, 'utf-8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  const project = {
    segment: segment,
    images: [],
    highlights: [],
    floorPlans: [],
  };

  // Extract title from breadcrumb or heading
  let breadcrumbText = '';
  const breadcrumb = doc.querySelector('.head1');
  if (breadcrumb) {
    breadcrumbText = cleanText(breadcrumb.textContent);
    const titleMatch = breadcrumbText.match(/>\s*([^>]+)$/);
    if (titleMatch) {
      project.title = cleanText(titleMatch[1]);
    }
  }

  // Extract logo image (often contains project name)
  const logoImg = doc.querySelector('img[src*="_logo"]');
  if (logoImg && !project.title) {
    const logoSrc = logoImg.getAttribute('src');
    const nameMatch = logoSrc.match(/([^/]+)_logo/);
    if (nameMatch) {
      project.title = nameMatch[1].replace(/_/g, ' ');
    }
  }

  // Extract main description paragraphs
  const contentDiv = doc.querySelector('td[align="left"][valign="top"] div');
  if (contentDiv) {
    const paragraphs = contentDiv.querySelectorAll('p');
    const descriptions = [];
    paragraphs.forEach(p => {
      const text = cleanText(p.textContent);
      if (text && text.length > 20 && !text.includes('Highlights') && !text.includes('Floor Plan')) {
        descriptions.push(text);
      }
    });
    project.description = descriptions;
  }

  // Extract highlights (bullet points)
  const lists = doc.querySelectorAll('ul');
  lists.forEach(ul => {
    const items = ul.querySelectorAll('li');
    items.forEach(li => {
      const highlight = cleanText(li.textContent);
      if (highlight) {
        project.highlights.push(highlight);
      }
    });
  });

  // Extract property info
  const propertyInfoTable = doc.querySelector('table:has(td:contains("Property Info"))');
  if (propertyInfoTable) {
    const rows = propertyInfoTable.querySelectorAll('tr');
    rows.forEach(row => {
      const text = cleanText(row.textContent);
      
      if (text.includes('Property Type:')) {
        project.projectTypeDetail = text.split(':')[1].trim();
      }
      
      if (text.includes('Address:')) {
        const address = text.split('Address:')[1].trim();
        project.location = address;
        
        // Try to extract city
        const cities = ['Hyderabad', 'Bangalore', 'Chennai', 'Mumbai', 'Kochi', 'Goa', 'Mangalore'];
        for (const city of cities) {
          if (address.toLowerCase().includes(city.toLowerCase())) {
            project.city = city;
            break;
          }
        }
      }
    });
  }

  // Extract images
  const contentImages = doc.querySelectorAll('img[src^="images/"]');
  contentImages.forEach(img => {
    const src = img.getAttribute('src');
    if (src && !src.includes('_logo') && !src.includes('banner') && !src.includes('icon')) {
      project.images.push(src.replace('images/', ''));
    }
  });

  // Determine status from URL/breadcrumb
  const fileName = path.basename(htmlPath);
  if (fileName.includes('ongoing') || breadcrumbText?.includes('Ongoing')) {
    project.status = 'ongoing';
  } else if (fileName.includes('completed') || breadcrumbText?.includes('Completed')) {
    project.status = 'completed';
  } else if (fileName.includes('future') || breadcrumbText?.includes('Future')) {
    project.status = 'upcoming';
  }

  return project;
}

/**
 * Scan directory for project HTML files
 */
function findProjectFiles() {
  const files = fs.readdirSync(SOURCE_DIR);
  const projectFiles = {
    residential: [],
    commercial: [],
    'land-development': []
  };

  files.forEach(file => {
    if (!file.endsWith('.html')) return;

    // Residential projects
    if (file.match(/residential\d+_\d+\.html/)) {
      projectFiles.residential.push(path.join(SOURCE_DIR, file));
    }
    
    // Commercial projects
    if (file.match(/commercial\d+_\d+\.html/) || file.match(/commercial\d+\.html/)) {
      projectFiles.commercial.push(path.join(SOURCE_DIR, file));
    }
    
    // Land development projects
    if (file.match(/landdev\d+_\d+/)) {
      projectFiles['land-development'].push(path.join(SOURCE_DIR, file));
    }
  });

  return projectFiles;
}

/**
 * Copy images from source to public folder
 */
function copyImages() {
  const sourceImagesDir = path.join(SOURCE_DIR, 'images');
  
  if (!fs.existsSync(sourceImagesDir)) {
    console.log('⚠️  Source images directory not found');
    return;
  }

  const images = fs.readdirSync(sourceImagesDir);
  let copiedCount = 0;

  images.forEach(image => {
    const sourcePath = path.join(sourceImagesDir, image);
    const destPath = path.join(IMAGES_OUTPUT_DIR, image);
    
    if (fs.statSync(sourcePath).isFile()) {
      fs.copyFileSync(sourcePath, destPath);
      copiedCount++;
    }
  });

  console.log(`✓ Copied ${copiedCount} images to ${IMAGES_OUTPUT_DIR}`);
}

/**
 * Generate slug from title
 */
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Main migration function
 */
function migrate() {
  console.log('🚀 Starting legacy content migration...\n');

  // Find all project files
  const projectFiles = findProjectFiles();
  console.log(`Found ${Object.values(projectFiles).flat().length} project files\n`);

  const allProjects = [];
  const errors = [];

  // Parse each segment
  Object.entries(projectFiles).forEach(([segment, files]) => {
    console.log(`\n📁 Processing ${segment} projects (${files.length} files)...`);
    
    files.forEach(file => {
      try {
        const project = parseProjectPage(file, segment);
        
        if (project.title) {
          project.slug = { current: generateSlug(project.title) };
          allProjects.push(project);
          console.log(`  ✓ ${project.title} (${project.status || 'unknown'})`);
        } else {
          console.log(`  ⚠️  Skipped ${path.basename(file)} - no title found`);
        }
      } catch (error) {
        errors.push({ file: path.basename(file), error: error.message });
        console.log(`  ❌ Error parsing ${path.basename(file)}: ${error.message}`);
      }
    });
  });

  // Copy images
  console.log('\n📸 Copying images...');
  copyImages();

  // Write output files
  console.log('\n💾 Saving migration data...');
  
  // Save as JSON for review
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'projects.json'),
    JSON.stringify(allProjects, null, 2)
  );
  
  // Save as NDJSON for Sanity import
  const ndjson = allProjects.map(p => JSON.stringify({
    _type: 'project',
    ...p
  })).join('\n');
  
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'sanity-import.ndjson'),
    ndjson
  );

  // Generate summary
  const summary = {
    totalProjects: allProjects.length,
    bySegment: {
      residential: allProjects.filter(p => p.segment === 'residential').length,
      commercial: allProjects.filter(p => p.segment === 'commercial').length,
      'land-development': allProjects.filter(p => p.segment === 'land-development').length,
    },
    byStatus: {
      ongoing: allProjects.filter(p => p.status === 'ongoing').length,
      completed: allProjects.filter(p => p.status === 'completed').length,
      upcoming: allProjects.filter(p => p.status === 'upcoming').length,
      unknown: allProjects.filter(p => !p.status).length,
    },
    errors: errors.length
  };

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'summary.json'),
    JSON.stringify(summary, null, 2)
  );

  console.log('\n✅ Migration complete!');
  console.log(`\n📊 Summary:`);
  console.log(`   Total projects: ${summary.totalProjects}`);
  console.log(`   Residential: ${summary.bySegment.residential}`);
  console.log(`   Commercial: ${summary.bySegment.commercial}`);
  console.log(`   Land Development: ${summary.bySegment['land-development']}`);
  console.log(`\n📁 Output files:`);
  console.log(`   ${path.join(OUTPUT_DIR, 'projects.json')}`);
  console.log(`   ${path.join(OUTPUT_DIR, 'sanity-import.ndjson')}`);
  console.log(`   ${path.join(OUTPUT_DIR, 'summary.json')}`);
  
  if (errors.length > 0) {
    console.log(`\n⚠️  ${errors.length} errors occurred:`);
    errors.forEach(e => console.log(`   - ${e.file}: ${e.error}`));
  }
}

// Run migration
if (require.main === module) {
  migrate();
}

module.exports = { migrate, parseProjectPage };
