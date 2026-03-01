import React from 'react';

const PROJECTS: Record<string, {
  name: string;
  location: string;
  city: string;
  type: string;
  landExtent: string;
  completion: string;
  development: string;
  floors?: string;
  rera: string;
  description: string[];
  features: string[];
  specifications: string[];
}> = {
  'zonah-crescent': {
    name: 'Zonah Crescent',
    location: 'Road no 12, Banjara Hills, Hyderabad',
    city: 'Hyderabad',
    type: 'Commercial Complex',
    landExtent: '7,456 sq.ft.',
    completion: 'Ongoing (Leasing Open)',
    development: '43,024 sq.ft.',
    floors: 'Cellar 1-3 + Ground + 4 floors',
    rera: 'Ongoing Project',
    description: [
      'Zonah Crescent is a premium commercial complex strategically located on Road No. 12, Banjara Hills — one of Hyderabad\'s most upscale and sought-after business addresses. Positioned between landmark locations like Ohri\'s and Landmark, it offers unparalleled visibility and business prestige.',
      'The project features a total super built-up area of 43,024 sq.ft. across four floors and a ground level, supported by an extensive three-level cellar parking system of 29,850 sq.ft. to ensure ample space for tenants and visitors.',
      'Conceived as a boutique business hub, Zonah Crescent is ideal for corporate offices, premium retail flagship stores, and high-end clinics seeking a foothold in the heart of Hyderabad.',
    ],
    features: ['Prime Banjara Hills Location', 'Excellent Visibility on Road No. 12', '43,024 sq.ft. Total Floor Space', 'Three Levels of Cellar Parking (29,850 sq.ft.)', 'Vibrant Business Neighborhood', 'Modern Architectural Design', 'Dedicated Leasing Options Available'],
    specifications: ['Ground Floor: 7,456 sq.ft.', 'Typical Floor (1st-4th): 8,892 sq.ft.', 'Cellar levels: ~10,000 sq.ft. each', 'Total Parking: 3 Cellars', 'Power: High-capacity back-up', 'Status: Ongoing / Ready for Lease'],
  },
  'paradise-pearl': {
    name: 'Paradise Pearl',
    location: 'MG Road, Secunderabad',
    city: 'Hyderabad',
    type: 'Commercial & Residential Complex',
    landExtent: '45,000 sq.ft.',
    completion: 'Completed',
    development: '45,000 sq.ft.',
    floors: 'Ground + 5 floors',
    rera: 'Completed Project',
    description: [
      'Paradise Pearl is a landmark 45,000 sq.ft. five-storied complex located on the historic MG Road in Secunderabad. Situated in one of the most commercially active hubs of the twin cities, it enjoys proximity to iconic landmarks like Paradise Hotel, KFC, and Chermas.',
      'The project was designed to bring elegant yet affordable spaces to one of the most happening areas in Secunderabad, offering a mix of commercial viability and residential comfort.',
      'With its prime position and high footfall counts, Paradise Pearl remains one of the most sought-after developments in the Secunderabad corridor.',
    ],
    features: ['Centrally located on MG Road', 'High-footfall Commercial Hub', 'Close to Paradise Hotel & KFC', '45,000 sq.ft. Total Area', 'Multi-storied Development', 'Proximity to Public Transport', 'Robust Infrastructure'],
    specifications: ['Total Area: 45,000 sq.ft.', 'Structure: Ground + 5 floors', 'Location: Commercial epicenter', 'Status: Fully Completed', 'Occupancy: Mixed use'],
  },
  'zonah-neptune': {
    name: 'Zonah Neptune (SVM Mall)',
    location: 'Road no 36, Jubilee Hills, Hyderabad',
    city: 'Hyderabad',
    type: 'Retail & Entertainment Hub',
    landExtent: '1,400 sq.m.',
    completion: 'Completed',
    development: '53,923 sq.ft.',
    floors: 'Basements + Ground + 4 floors',
    rera: 'Completed Project',
    description: [
      'Zonah Neptune, widely known as the home of SVM Mall, is a landmark retail and entertainment destination in Jubilee Hills — Hyderabad\'s premier lifestyle district. Since its inception, it has redefined innovative entertainment in the city.',
      'The hub boasts the largest console gaming station in the country, spanning a massive 9,000 sq.ft. arcade, and features India\'s first "glow" lane Bowling Alley. The vibrant interiors and ultra-contemporary design cater to the youth and families of Hyderabad.',
      'With a total retail built-up area of 53,923 sq.ft., including basements, the complex houses a variety of entertainment zones, fine dining, bar options, and lifestyle retail stores.',
    ],
    features: ['Premier Jubilee Hills Address', 'Home to SVM Mall & Gaming Zone', 'Largest console gaming station in India (9,000 sq.ft.)', 'India\'s first "glow" lane Bowling Alley', 'High-traffic Retail Zone', 'Diverse F&B Options & Bar', 'Two Levels of Basement Parking'],
    specifications: ['Retail Built Up: 53,923 sq.ft.', 'Plot Area: 1,400 sq.m.', 'Basements: 2 Levels', 'Gaming Zone: 9,000 sq.ft.', 'Status: Fully Operational'],
  },
};

export async function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export default function CommercialProjectDetail({ params }: { params: { slug: string } }) {
  const project = PROJECTS[params.slug];

  if (!project) {
    return (
      <main className="home-page-replica" dangerouslySetInnerHTML={{
        __html: `
        <section class="section section-inner-page pt-6">
          <div class="container has-text-centered">
            <h2>Project not found.</h2>
            <a href="/commercial-projects" class="theme-btn mt-4" style="display:inline-block;">View All Commercial Projects</a>
          </div>
        </section>
      ` }} />
    );
  }

  const html = `
<section class="section section-inner-page overflow-visible pt-6 pb-6">
  <div class="container">
    <div class="mb-4">
      <a href="/commercial-projects" class="text-primary" style="text-decoration:none;font-size:0.9em;">← Commercial Projects</a>
    </div>

    <div class="columns is-multiline is-vcentered">
      <div class="column is-12-mobile is-12-tablet is-7-desktop is-7-widescreen">
        <div style="background:linear-gradient(135deg,#0d1117 0%,#1a2744 60%,#1e3a5f 100%);width:100%;height:380px;display:flex;align-items:center;justify-content:center;border-radius:8px;margin-bottom:24px;">
          <div style="text-align:center;">
            <div style="color:rgba(255,255,255,0.15);font-size:96px;font-weight:200;letter-spacing:8px;line-height:1;">ZD</div>
            <p style="color:rgba(255,255,255,0.35);letter-spacing:2px;text-transform:uppercase;font-size:0.85em;margin-top:12px;">${project.name}</p>
          </div>
        </div>
        <div class="section-title js-scroll fade-in-top scrolled">
          <span class="theme-title">${project.city}</span>
          <h1>${project.name}</h1>
          <span class="text-primary" style="font-size:0.95em;">${project.type}</span>
        </div>
        <div class="mt-4">
          ${project.description.map(p => `<p class="mb-4" style="line-height:1.85;">${p}</p>`).join('')}
        </div>
        <div class="mt-5">
          <h4 class="golden-text mb-3">Key Features</h4>
          <div class="columns is-multiline">
            ${project.features.map(f => `
            <div class="column is-12-mobile is-6-tablet is-6-desktop" style="padding:4px 8px;">
              <div class="is-flex is-align-items-center is-gap-2">
                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <small>${f}</small>
              </div>
            </div>
            `).join('')}
          </div>
        </div>
        <div class="mt-5">
          <h4 class="golden-text mb-3">Technical Specifications</h4>
          <div class="columns is-multiline">
            ${project.specifications.map(s => `
            <div class="column is-12-mobile is-6-tablet is-6-desktop" style="padding:4px 8px;">
              <small>• ${s}</small>
            </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="column is-12-mobile is-12-tablet is-5-desktop is-5-widescreen">
        <div class="gray-border p-4" style="border:1px solid #e5e5e5;border-radius:8px;position:sticky;top:80px;">
          <h5 class="golden-text mb-4">Project Overview</h5>
          <table style="width:100%;border-collapse:collapse;">
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Location</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;">${project.location}</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Type</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;">${project.type}</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Land Extent</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;">${project.landExtent}</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Development</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;">${project.development}</td></tr>
            ${project.floors ? `<tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Floors</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;">${project.floors}</td></tr>` : ''}
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Expected Completion</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;">${project.completion}</td></tr>
            <tr><td style="padding:10px 0;color:#555;font-size:0.9em;">RERA No.</td><td style="padding:10px 0;font-weight:600;font-size:0.85em;">${project.rera}</td></tr>
          </table>
          <a href="javascript:void(0);" class="theme-btn full-width mt-4 passenquiry" open-sidebar="enquire-sidebar" style="display:block;text-align:center;padding:14px;">Enquire Now</a>
          <a href="tel:+918022345678" class="theme-btn line-btn full-width mt-2" style="display:block;text-align:center;padding:12px;">+91 80 2234 5678</a>
          <p class="mt-3 has-text-centered" style="font-size:0.8em;color:#888;">For leasing enquiries, reach us at<br><a href="mailto:commercial@zonahdevelopers.com" class="text-primary">commercial@zonahdevelopers.com</a></p>
        </div>
      </div>

    </div>
  </div>
</section>
  `;

  return (
    <main className="home-page-replica commercial-project-detail-page" dangerouslySetInnerHTML={{ __html: html }} />
  );
}
