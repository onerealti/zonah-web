const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env.local') });
const fs = require('fs');
const sanity = require('@sanity/client');

const client = sanity.createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-02-27',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

async function main() {
  const cleaned = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'migrated-data', 'cleaned-projects.json'), 'utf8')
  );

  const docs = await client.fetch('*[_type == "project"]{_id, title, slug, mainImage}');
  const bySlug = new Map(cleaned.map((p) => [p.slug?.current, p]));

  let updated = 0;
  let skipped = 0;

  for (const doc of docs) {
    const slug = doc.slug?.current;
    const source = bySlug.get(slug);

    if (!source || !Array.isArray(source.images) || source.images.length === 0) {
      skipped++;
      continue;
    }

    const preferred = source.images.find((name) => /\.(jpg|jpeg|png|webp|gif)$/i.test(name));
    const fileName = preferred || source.images[0];
    const abs = path.join(__dirname, 'public', 'legacy-images', fileName);

    if (!fs.existsSync(abs)) {
      skipped++;
      continue;
    }

    try {
      const imageBuffer = fs.readFileSync(abs);
      const asset = await client.assets.upload('image', imageBuffer, { filename: fileName });

      await client
        .patch(doc._id)
        .set({
          mainImage: {
            _type: 'image',
            asset: { _type: 'reference', _ref: asset._id },
          },
        })
        .commit();

      updated++;
      console.log(`✓ ${doc.title} -> ${fileName}`);
    } catch (error) {
      skipped++;
      console.log(`⚠ ${doc.title} -> ${error.message}`);
    }
  }

  console.log(`\nDone. Updated: ${updated}, Skipped: ${skipped}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
