const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env.local') });
const sanity = require('@sanity/client');

const client = sanity.createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-02-27',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

(async () => {
  const docs = await client.fetch(`*[_type == "project"] | order(title asc){
    title,
    slug,
    mainImage{asset->{url}},
    mainImageGradient
  }`);

  console.log('Total projects:', docs.length);
  const missing = docs.filter((d) => !d.mainImage?.asset?.url);
  console.log('With image URL:', docs.length - missing.length);
  console.log('Missing image URL:', missing.length);
  if (missing.length) {
    console.log('Missing titles:', missing.map((m) => m.title).join(', '));
  }
  console.log('\nSample:');
  docs.slice(0, 5).forEach((d) => {
    console.log('-', d.title, '=>', d.mainImage?.asset?.url || '(none)');
  });
})();
