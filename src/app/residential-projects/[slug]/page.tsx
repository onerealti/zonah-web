import React from 'react';

const PROJECTS: Record<string, {
    name: string;
    location: string;
    city: string;
    price: string;
    bhk: string;
    status: string;
    statusClass: string;
    area: string;
    possession: string;
    rera: string;
    type: string;
    description: string[];
    amenities: string[];
    highlights: string[];
}> = {
    'serene-heights': {
        name: 'Zonah Serene Heights',
        location: 'Whitefield, Bangalore',
        city: 'Bangalore',
        price: '₹1.2 Cr+',
        bhk: '2, 3 BHK',
        status: 'Under Construction',
        statusClass: 'badge-warning',
        area: '1,180 – 1,980 sq.ft.',
        possession: 'Q3 2027',
        rera: 'PRM/KA/RERA/1251/309/PR/2024/000841',
        type: 'Residential Apartments',
        description: [
            'Zonah Serene Heights is a landmark residential development in Whitefield, Bangalore — one of the city\'s most sought-after neighbourhoods. Offering thoughtfully designed 2 and 3 BHK apartments, Serene Heights brings together intelligent architecture, natural light, and a vibrant community lifestyle.',
            'Situated within easy reach of major IT campuses, international schools, shopping centres, and healthcare facilities, Serene Heights is conceived for modern families seeking the perfect balance of comfort and convenience.',
            'Every unit at Serene Heights has been planned to maximise cross-ventilation, natural light, and space efficiency. The project\'s green corridors, water harvesting systems, and solar-powered common areas reflect Zonah Developers\' commitment to responsible, future-ready development.',
        ],
        amenities: ['Swimming Pool', 'Gymnasium', 'Clubhouse', 'Children\'s Play Area', 'Jogging Track', 'Meditation Deck', 'Indoor Games Room', 'Multi-purpose Hall', '24x7 Security', 'EV Charging Points', 'Rainwater Harvesting', 'STP'],
        highlights: ['200+ residences', 'RERA Registered', '2 Acres of landscaped open space', 'IGBC Pre-certified Green Building', 'Ground + 18 floors', 'Ready-to-move by Q3 2027'],
    },
    'haven-gardens': {
        name: 'Zonah Haven Gardens',
        location: 'Gachibowli, Hyderabad',
        city: 'Hyderabad',
        price: '₹98 L+',
        bhk: '2, 3 BHK',
        status: 'Ready to Move',
        statusClass: 'badge-success',
        area: '1,050 – 1,720 sq.ft.',
        possession: 'Ready',
        rera: 'P02400006248',
        type: 'Residential Apartments',
        description: [
            'Zonah Haven Gardens is a completed residential community nestled in the heart of Gachibowli — Hyderabad\'s premier professional and residential hub. Haven Gardens offers ready-to-move-in 2 and 3 BHK apartments designed for IT professionals and families who value connectivity, comfort, and quality.',
            'Strategically located minutes from the Financial District, HITEC City, and major arterial roads, Haven Gardens provides residents with seamless access to work, leisure, and education destinations.',
        ],
        amenities: ['Swimming Pool', 'Clubhouse', 'Gymnasium', 'Landscaped Gardens', 'Children\'s Play Area', 'Party Hall', 'Indoor Badminton Court', 'Yoga Deck', '24x7 CCTV & Security'],
        highlights: ['Ready to Move In', '150+ families', 'Prime Gachibowli location', 'RERA Registered', '3 Acres of green spaces'],
    },
    'marina-crest': {
        name: 'Zonah Marina Crest',
        location: 'OMR, Chennai',
        city: 'Chennai',
        price: '₹1.05 Cr+',
        bhk: '2, 3, 4 BHK',
        status: 'Under Construction',
        statusClass: 'badge-warning',
        area: '1,270 – 2,540 sq.ft.',
        possession: 'Q4 2026',
        rera: 'TN/01/Building/0234/2023',
        type: 'Residential Apartments',
        description: [
            'Zonah Marina Crest is an architecturally distinguished residential project on Old Mahabalipuram Road (OMR) — Chennai\'s technology and lifestyle corridor. Featuring 2, 3, and 4 BHK apartments across twin towers, Marina Crest is designed for discerning homeowners who seek resort-inspired living within the city.',
            'With direct access to the Tech Corridor, international schools, the ECR beaches, and top healthcare facilities, Marina Crest is perfectly positioned for a balanced urban lifestyle.',
        ],
        amenities: ['Infinity Pool', 'Spa & Wellness Centre', 'Grand Clubhouse', 'Gymnasium', 'Squash & Tennis Courts', 'Rooftop Lounge', 'Children\'s Aqua Zone', 'Landscaped Terrace Gardens', 'EV Charging Bays', '24x7 Concierge'],
        highlights: ['Twin Towers', 'Ground + 24 floors', 'RERA Registered', 'LEED Pre-certified', 'Sea-facing upper floors', 'Ready Q4 2026'],
    },
    'skyline-residences': {
        name: 'Zonah Skyline Residences',
        location: 'Thane, Mumbai',
        city: 'Mumbai',
        price: '₹1.85 Cr+',
        bhk: '2, 3, 4 BHK',
        status: 'Under Construction',
        statusClass: 'badge-warning',
        area: '1,200 – 2,200 sq.ft.',
        possession: 'Q2 2028',
        rera: 'P51700043786',
        type: 'Residential Apartments',
        description: [
            'Zonah Skyline Residences brings a new benchmark of luxury living to Thane — one of the MMR\'s fastest-growing corridors. Rising majestically against the Sahyadri mountain backdrop, Skyline Residences offers 2, 3, and 4 BHK residences with panoramic hill and city views.',
            'Its strategic location on the Eastern Freeway corridor ensures excellent connectivity to Mumbai Central, Bandra-Kurla Complex, and Navi Mumbai, making it ideal for professionals and families across the Mumbai metropolitan region.',
        ],
        amenities: ['Skyline Infinity Pool', 'Rooftop Observatory Deck', 'Grand Clubhouse', 'Gymnasium', 'Indoor Theatre', 'Children\'s Adventure Zone', 'Yoga & Meditation Pavilion', 'Jogging Trail', 'Organic Garden', 'EV Station'],
        highlights: ['Ground + 32 floors', 'Hill & city views', 'RERA Registered', 'Thane-Eastern Freeway corridor', 'Ready Q2 2028'],
    },
    'emerald-bay': {
        name: 'Zonah Emerald Bay',
        location: 'Marine Drive, Kochi',
        city: 'Kochi',
        price: '₹78 L+',
        bhk: '2, 3 BHK',
        status: 'Ready to Move',
        statusClass: 'badge-success',
        area: '950 – 1,600 sq.ft.',
        possession: 'Ready',
        rera: 'K-RERA/PRJ/2022/00312',
        type: 'Residential Apartments',
        description: [
            'Zonah Emerald Bay is a serene waterfront residential community along the iconic Marine Drive in Kochi. Completed and ready to move in, Emerald Bay offers 2 and 3 BHK apartments with breathtaking views of the Kerala backwaters and Vembanad Lake.',
            'For homeowners seeking an exceptional quality of life in the cultural capital of Kerala, Emerald Bay offers an unmatched combination of location, design, and lifestyle amenities.',
        ],
        amenities: ['Infinity Pool with Backwater Views', 'Waterfront Clubhouse', 'Gymnasium', 'Landscaped Gardens', 'Jogging Track', 'Children\'s Play Area', '24x7 Security', 'Ample Car Parking'],
        highlights: ['Backwater & lake views', 'Ready to Move In', 'RERA Registered', 'Marine Drive address', '100+ residences'],
    },
    'seabreeze-villas': {
        name: 'Zonah Seabreeze Villas',
        location: 'Candolim, Goa',
        city: 'Goa',
        price: '₹2.4 Cr+',
        bhk: '3, 4, 5 BHK Villas',
        status: 'Under Construction',
        statusClass: 'badge-warning',
        area: '2,800 – 4,500 sq.ft.',
        possession: 'Q1 2027',
        rera: 'RERA/GOA/GRP/2023/000085',
        type: 'Luxury Villas',
        description: [
            'Zonah Seabreeze Villas is an exclusive collection of luxury villas in Candolim, one of Goa\'s most coveted coastal destinations. Designed for those who seek true privacy, space, and the Goan lifestyle at its finest, Seabreeze Villas offers 3, 4, and 5 BHK standalone villas set within a gated estate of verdant tropical gardens.',
            'Each villa features private pool terraces, high ceilings, Italian marble finishes, and smart home automation. The project is minutes from Candolim Beach and enjoys easy access to North Goa\'s finest restaurants, beach clubs, and shopping avenues.',
        ],
        amenities: ['Private Pool for Each Villa', 'Clubhouse with Spa', 'Community Swimming Pool', 'Gymnasium', 'Landscaped Gardens', 'Tennis Court', 'BBQ Deck', 'Smart Home Automation', '24x7 Security & Concierge'],
        highlights: ['Only 36 exclusive villas', 'Private pool with each villa', 'Minutes from Candolim Beach', 'RERA Registered', 'Smart Home Series', 'Gated estate with 24x7 security'],
    },
};

export async function generateStaticParams() {
    return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export default function ResidentialProjectDetail({ params }: { params: { slug: string } }) {
    const project = PROJECTS[params.slug];

    if (!project) {
        return (
            <main className="home-page-replica" dangerouslySetInnerHTML={{
                __html: `
        <section class="section section-inner-page pt-6">
          <div class="container has-text-centered">
            <h2>Project not found.</h2>
            <a href="/residential-projects" class="theme-btn mt-4" style="display:inline-block;">View All Residential Projects</a>
          </div>
        </section>
      ` }} />
        );
    }

    const html = `
<section class="section section-inner-page overflow-visible pt-6 pb-6">
  <div class="container">
    <div class="mb-4">
      <a href="/residential-projects" class="text-primary" style="text-decoration:none;font-size:0.9em;">← Residential Projects</a>
    </div>

    <div class="columns is-multiline is-vcentered">
      <!-- Image / Hero -->
      <div class="column is-12-mobile is-12-tablet is-7-desktop is-7-widescreen">
        <div style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 60%,#0f3460 100%);width:100%;height:400px;display:flex;align-items:center;justify-content:center;border-radius:8px;margin-bottom:24px;">
          <div style="text-align:center;">
            <div style="color:rgba(255,255,255,0.2);font-size:96px;font-weight:200;letter-spacing:8px;line-height:1;">ZD</div>
            <p style="color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase;font-size:0.85em;margin-top:12px;">${project.name}</p>
          </div>
        </div>
        <div class="section-title js-scroll fade-in-top scrolled">
          <span class="theme-title">${project.city}</span>
          <h1>${project.name}</h1>
          <div class="is-flex is-align-items-center is-gap-2 mt-2">
            <span class="badge ${project.statusClass}">${project.status}</span>
            <span class="text-primary fw-bold" style="font-size:1.2em;">${project.price}</span>
          </div>
        </div>
        <div class="mt-4">
          ${project.description.map(p => `<p class="mb-4" style="line-height:1.85;">${p}</p>`).join('')}
        </div>
        <div class="mt-5">
          <h4 class="golden-text mb-3">Highlights</h4>
          <div class="columns is-multiline">
            ${project.highlights.map(h => `
            <div class="column is-6-mobile is-6-tablet is-6-desktop">
              <div class="is-flex is-align-items-center is-gap-2">
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <small>${h}</small>
              </div>
            </div>
            `).join('')}
          </div>
        </div>
        <div class="mt-5">
          <h4 class="golden-text mb-3">Amenities</h4>
          <div class="columns is-multiline">
            ${project.amenities.map(a => `
            <div class="column is-6-mobile is-6-tablet is-4-desktop" style="padding:4px 8px;">
              <small>• ${a}</small>
            </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="column is-12-mobile is-12-tablet is-5-desktop is-5-widescreen">
        <div class="gray-border p-4" style="border:1px solid #e5e5e5;border-radius:8px;position:sticky;top:80px;">
          <h5 class="golden-text mb-4">Project Details</h5>
          <table style="width:100%;border-collapse:collapse;">
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Location</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;">${project.location}</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Type</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;">${project.type}</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Configuration</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;">${project.bhk}</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Area</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;">${project.area}</td></tr>
            <tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:10px 0;color:#555;font-size:0.9em;">Price</td><td style="padding:10px 0;font-weight:600;font-size:0.9em;color:#b8960c;">${project.price}</td></tr>
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
        <main className="home-page-replica residential-project-detail-page" dangerouslySetInnerHTML={{ __html: html }} />
    );
}
