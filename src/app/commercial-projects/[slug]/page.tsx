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
    'the-exchange': {
        name: 'Zonah The Exchange',
        location: 'Hebbal, Bangalore',
        city: 'Bangalore',
        type: 'Grade A Office Tower',
        landExtent: '4.2 Acres',
        completion: 'Q2 2027',
        development: '1.8 Mn Sq.ft.',
        floors: 'Ground + 28 floors',
        rera: 'PRM/KA/RERA/1251/309/OC/2024/000032',
        description: [
            'Zonah The Exchange is a landmark Grade-A office tower in Hebbal — one of Bangalore\'s premier commercial corridors with direct access to the Airport Highway, Outer Ring Road, and Manyata Tech Park.',
            'Designed to international specifications, The Exchange offers large, column-free floor plates, intelligent building management systems, and premium lobby experiences. Targeting LEED Platinum certification, the tower reflects Zonah Developers\' commitment to sustainable, future-ready commercial development.',
            'With a curated mix of anchor tenants, amenity floors, and high-street retail at the podium, The Exchange is conceived as a full-service workplace destination.',
        ],
        features: ['Large 25,000+ sq.ft. Column-free Floor Plates', 'Smart Building Management System (BMS)', 'LEED Platinum Pre-certified', 'Premium Double-height Lobby', 'High-speed Elevators (18 Lifts)', 'Basement + 4 Levels of Structured Parking', 'Rooftop Restaurant & Lounge', 'On-site EV Charging Infrastructure'],
        specifications: ['Floor Plate: ~25,000 sq.ft. per floor', 'Floor-to-ceiling height: 3.2m', 'Efficiency Ratio: 82%+', 'Loading: 100 kg/sq.ft.', 'Power: 10 W/sq.ft.', 'HVAC: Variable Refrigerant Volume (VRV)', 'Seismic Zone: II (compliant)'],
    },
    'tech-park-one': {
        name: 'Zonah Tech Park One',
        location: 'Hitec City, Hyderabad',
        city: 'Hyderabad',
        type: 'IT & Technology Park',
        landExtent: '7.8 Acres',
        completion: 'Q4 2027',
        development: '3.2 Mn Sq.ft.',
        floors: 'Multiple blocks, Ground + 20 floors each',
        rera: 'P02400009871',
        description: [
            'Zonah Tech Park One is a next-generation, campus-style technology park in HITEC City — the epicentre of Hyderabad\'s world-class IT industry. Comprising three interconnected office blocks set within a master-planned precinct, Tech Park One offers scalable, flexible workspaces from 50,000 to 500,000 sq.ft.',
            'With direct access to Raidurg Metro Station and the Financial District Expressway, Tech Park One prioritises both talent accessibility and business visibility. The campus incorporates extensive green spaces, a world-class food court, creche facilities, and a range of amenity offerings for occupiers.',
        ],
        features: ['Campus-style IT Park (3 blocks)', 'SEZ & non-SEZ options', '25,000+ sq.ft. average floor plate', 'Dedicated food court (800 pax)', 'Creche & day care facility', 'Direct metro access', 'IGBC Green Building Certified', 'Rainwater harvesting & STP'],
        specifications: ['Floor Plate: ~25,000 sq.ft.', 'SEZ Notified: Yes (applicable blocks)', 'Power: 12 W/sq.ft.', 'Efficiency Ratio: 80%+', 'Parking: 1 bay per 100 sq.ft.', 'Data Centre-ready infrastructure'],
    },
    'boulevard-square': {
        name: 'Zonah Boulevard Square',
        location: 'Mahalaxmi, Mumbai',
        city: 'Mumbai',
        type: 'Mixed-use Commercial',
        landExtent: '5.5 Acres',
        completion: 'Q4 2028',
        development: '3 Mn Sq.ft.',
        floors: 'Sky Tower (Ground + 38) & Bay Tower (Ground + 32)',
        rera: 'P51900041234',
        description: [
            'Zonah Boulevard Square is an iconic mixed-use commercial destination at Mahalaxmi — one of South Mumbai\'s most prestigious business addresses. Rising across two landmark towers, Boulevard Square redefines the Mumbai skyline while offering a curated blend of Grade-A offices, premium retail, and fine dining.',
            'The Sky Tower and Bay Tower together offer over 3 million sq.ft. of best-in-class commercial space, catering to global corporations, financial institutions, and professional services firms seeking a prestigious South Mumbai address.',
            'A 250,000 sq.ft. luxury retail podium connecting both towers brings together flagship stores, restaurants, and lifestyle brands — creating Mumbai\'s most desirable work-play destination.',
        ],
        features: ['Twin landmark towers', 'Grade-A Office floors (Sky & Bay Towers)', 'Luxury retail podium (2.5L sq.ft.)', 'Fine dining rooftop (Sky Tower)', 'Premium lobby with double-height atria', '8-level structured parking (2,000+ bays)', 'LEED Platinum pre-certified', 'Helipads on both towers'],
        specifications: ['Sky Tower: Ground + 38 floors', 'Bay Tower: Ground + 32 floors', 'Floor Plate: ~30,000 sq.ft.', 'Power: 10 W/sq.ft.', 'Efficiency Ratio: 85%+', 'Floor-to-ceiling height: 3.4m'],
    },
    'gateway-towers': {
        name: 'Zonah Gateway Towers',
        location: 'Anna Salai, Chennai',
        city: 'Chennai',
        type: 'Twin Office Towers',
        landExtent: '3.8 Acres',
        completion: 'Q1 2027',
        development: '1.5 Mn Sq.ft.',
        floors: 'Twin towers — Ground + 26 floors each',
        rera: 'TN/01/Commercial/0051/2023',
        description: [
            'Zonah Gateway Towers is a landmark commercial development on Anna Salai — the historic and commercially significant arterial road at the heart of Chennai\'s central business district.',
            'Comprising twin 26-storey office towers, Gateway Towers offers flexible Grade-A workspaces designed to accommodate a wide range of occupiers — from boutique firms to large multinational corporations. The project\'s visibility, central location, and premium specification make it the address of choice for Chennai\'s business elite.',
        ],
        features: ['Twin office towers', 'Panoramic city views from upper floors', 'Premium grade-A specification', 'Large flexible floor plates', 'Conference & event facilities', 'Ground-floor retail & F&B', 'Multi-level basement parking', 'IGBC Green Building Certified'],
        specifications: ['Floor Plate: ~18,000 sq.ft.', 'Floor-to-ceiling height: 3.0m', 'Efficiency Ratio: 80%+', 'Power: 10 W/sq.ft.', 'Parking: 1,200+ bays (both towers)'],
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
