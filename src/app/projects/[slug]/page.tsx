import React from 'react';

const PROJECTS: Record<string, {
    name: string;
    location: string;
    city: string;
    tagline: string;
    type: string;
    bhk: string;
    price: string;
    status: string;
    area: string;
    totalUnits: string;
    landExtent: string;
    possession: string;
    rera: string;
    description: string[];
    amenities: string[];
    highlights: string[];
    gradient: string;
}> = {
    'zonah-city': {
        name: 'Zonah City',
        location: 'Sarjapur Road, Bangalore',
        city: 'Bangalore',
        tagline: 'A landmark integrated township on Sarjapur Road',
        type: 'Integrated Township — Apartments',
        bhk: '1, 2, 3 BHK',
        price: 'Price on Request',
        status: 'Under Construction',
        area: '650 – 1,800 sq.ft.',
        totalUnits: '500 Units',
        landExtent: '10 Acres',
        possession: 'Q2 2028',
        rera: 'PRM/KA/RERA/1251/309/PR/2024/001122',
        gradient: 'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)',
        description: [
            'Zonah City is Zonah Developers\' most ambitious integrated township project to date — a self-contained community of 500 residences spread across 10 acres in one of Bangalore\'s most sought-after growth corridors: Sarjapur Road.',
            'Designed around the principles of walkability, green spaces, and community connection, Zonah City offers 1, 2, and 3 BHK apartments across multiple towers, each surrounded by thoughtfully designed landscaped precincts, sports facilities, and everyday conveniences.',
            'Sarjapur Road\'s infrastructure advantages — proximity to Electronic City, Whitefield, Outer Ring Road, and the upcoming Metro Phase 3 — make Zonah City an outstanding long-term living and investment choice.',
            'At Zonah City, every detail has been considered: from double-height entrance lobbies and panoramic upper-floor views to a 30,000 sq.ft. clubhouse, electric vehicle infrastructure, and township-scale green certification.',
        ],
        amenities: [
            'Grand Township Clubhouse (30,000 sq.ft.)', 'Outdoor & Indoor Swimming Pools', 'Fully-equipped Gymnasium',
            'Multi-Purpose Sports Courts (Tennis, Basketball, Badminton)', 'Cricket Practice Nets', 'Jogging & Cycling Track',
            'Landscaped Parks & Pocket Gardens', 'Children\'s Adventure Play Zone', 'Senior Citizen Zen Garden',
            'Amphitheatre', 'Supermarket & Convenience Store', 'Crèche + Day Care Centre',
            'EV Charging Stations', 'Rainwater Harvesting', 'STP & Organic Waste Management',
            '24x7 Security with CCTV', 'Smart Home Pre-wiring', 'Visitor Management System',
        ],
        highlights: [
            '500 homes across 10 acres', 'Integrated township with in-campus retail', 'IGBC Green Gold Pre-certified',
            'RERA Registered', 'Sarjapur Road — Bangalore\'s growth corridor', 'EV-ready township', 'Possession Q2 2028',
        ],
    },
    'zonah-golfshire': {
        name: 'Zonah Golfshire',
        location: 'Nandi Hills, Bangalore',
        city: 'Bangalore',
        tagline: 'Ultra-luxury golf villas beside Nandi Hills',
        type: 'Ultra-Luxury Villas',
        bhk: '4 BHK Villas',
        price: '₹5.5 Cr onwards',
        status: 'Under Construction',
        area: '4,500 – 7,000 sq.ft.',
        totalUnits: '100 Villas',
        landExtent: '50 Acres',
        possession: 'Q4 2027',
        rera: 'PRM/KA/RERA/1251/309/PR/2023/000719',
        gradient: 'linear-gradient(135deg,#0a2a0a 0%,#1a4a1a 50%,#2e6b2e 100%)',
        description: [
            'Zonah Golfshire is a once-in-a-generation ultra-luxury villa community nestled at the foothills of Nandi Hills — one of South India\'s most iconic natural landscapes. A collection of just 100 bespoke 4 BHK villas, each set on generous individual plots within a 50-acre gated estate.',
            'Each villa at Golfshire is designed by internationally acclaimed architects, featuring dramatic double-volume living spaces, private swimming pools, landscaped private gardens, and floor-to-ceiling glass facades that frame the breathtaking hills beyond.',
            'Golfshire\'s amenity ecosystem is unmatched in the region: a 9-hole signature golf course, a 5-star calibre clubhouse, an equestrian paddock, a world-class spa, and nature trails meandering through fruit orchards and native forest.',
            'For those who have arrived — Zonah Golfshire is the ultimate statement of living.',
        ],
        amenities: [
            '9-Hole Signature Golf Course', 'Private Pool with Each Villa', '5-Star Clubhouse with Fine Dining',
            'Equestrian Paddock', 'Luxury Spa & Wellness Centre', 'Tennis & Squash Courts',
            'Outdoor Amphitheatre', 'Nature & Hiking Trails', 'Organic Farm & Orchards',
            'Concierge & Butler Service', 'Helipad', '24x7 Security with Biometric Access',
            'Smart Home Automation (Integrated)', 'EV Charging with Solar Canopy', 'Private Wine Cellar (select villas)',
        ],
        highlights: [
            'Only 100 exclusive villas', 'Private pool with every villa', '9-hole golf course within estate',
            '5-star clubhouse & spa', 'RERA Registered', 'Nandi Hills location — coolest microclimate in Bangalore',
            'Internationally acclaimed architects', 'Ready Q4 2027',
        ],
    },
};

export async function generateStaticParams() {
    return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
    const project = PROJECTS[params.slug];

    if (!project) {
        return (
            <main className="home-page-replica" dangerouslySetInnerHTML={{
                __html: `
        <section class="section section-inner-page pt-6">
          <div class="container has-text-centered">
            <h2>Project not found.</h2>
            <a href="/residential-projects" class="theme-btn mt-4" style="display:inline-block;">View All Projects</a>
          </div>
        </section>
      ` }} />
        );
    }

    const html = `
<section class="section section-inner-page overflow-visible pt-6 pb-6">
  <div class="container">
    <div class="mb-4">
      <a href="/residential-projects" class="text-primary" style="text-decoration:none;font-size:0.9em;">← All Residential Projects</a>
    </div>

    <div class="columns is-multiline">
      <div class="column is-12-mobile is-12-tablet is-7-desktop is-7-widescreen">
        <div style="background:${project.gradient};width:100%;height:420px;display:flex;align-items:center;justify-content:center;border-radius:8px;margin-bottom:32px;position:relative;overflow:hidden;">
          <div style="text-align:center;position:relative;z-index:1;">
            <div style="color:rgba(255,255,255,0.15);font-size:96px;font-weight:200;letter-spacing:8px;line-height:1;">ZD</div>
            <p style="color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase;font-size:0.85em;margin-top:12px;">${project.name}</p>
          </div>
        </div>

        <div class="section-title js-scroll fade-in-top scrolled">
          <span class="theme-title">${project.city}</span>
          <h1>${project.name}</h1>
          <p class="mt-2" style="font-style:italic;color:#888;">${project.tagline}</p>
        </div>

        <div class="mt-4">
          ${project.description.map(p => `<p class="mb-4" style="line-height:1.9;">${p}</p>`).join('')}
        </div>

        <div class="mt-5">
          <h4 class="golden-text mb-3">Highlights</h4>
          <div class="columns is-multiline">
            ${project.highlights.map(h => `
            <div class="column is-6-mobile is-6-tablet is-6-desktop" style="padding:4px 8px;">
              <div class="is-flex is-align-items-center" style="gap:8px;">
                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <small>${h}</small>
              </div>
            </div>
            `).join('')}
          </div>
        </div>

        <div class="mt-5">
          <h4 class="golden-text mb-3">Amenities & Facilities</h4>
          <div class="columns is-multiline">
            ${project.amenities.map(a => `
            <div class="column is-6-mobile is-6-tablet is-4-desktop" style="padding:4px 8px;">
              <small>• ${a}</small>
            </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="column is-12-mobile is-12-tablet is-5-desktop is-5-widescreen">
        <div style="border:1px solid #e5e5e5;border-radius:8px;padding:24px;position:sticky;top:80px;">
          <h5 class="golden-text mb-4">Project Details</h5>
          <table style="width:100%;border-collapse:collapse;">
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Location</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;">${project.location}</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Type</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;">${project.type}</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Configuration</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;">${project.bhk}</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Area Range</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;">${project.area}</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Price</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;color:#b8960c;">${project.price}</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Total Units</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;">${project.totalUnits}</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Land Extent</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;">${project.landExtent}</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Status</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;">${project.status}</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Possession</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;">${project.possession}</td></tr>
            <tr><td style="padding:10px 0;color:#555;font-size:0.9em;">RERA No.</td><td style="padding:10px 0;font-weight:600;font-size:0.85em;">${project.rera}</td></tr>
          </table>
          <a href="javascript:void(0);" class="theme-btn full-width mt-4 passenquiry" open-sidebar="enquire-sidebar" style="display:block;text-align:center;padding:14px;">Enquire Now</a>
          <a href="tel:+918022345678" class="theme-btn line-btn full-width mt-2" style="display:block;text-align:center;padding:12px;">+91 80 2234 5678</a>
        </div>
      </div>
    </div>
  </div>
</section>
  `;

    return (
        <main className="home-page-replica project-detail-page" dangerouslySetInnerHTML={{ __html: html }} />
    );
}
