import React from 'react';
import Link from 'next/link';

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
      <main className="home-page-replica">
        <section className="section section-inner-page pt-6">
          <div className="container has-text-centered">
            <h2>Project not found.</h2>
            <Link href="/residential-projects" className="theme-btn mt-4" style={{ display: 'inline-block' }}>
              View All Projects
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="home-page-replica project-detail-page">
      <section className="section section-inner-page overflow-visible pt-6 pb-6">
        <div className="container">
          <div className="mb-4">
            <Link href="/residential-projects" className="text-primary" style={{ textDecoration: 'none', fontSize: '0.9em' }}>
              ← All Residential Projects
            </Link>
          </div>

          <div className="columns is-multiline">
            <div className="column is-12-mobile is-12-tablet is-7-desktop is-7-widescreen">
              {/* Project Image Placeholder */}
              <div style={{
                background: project.gradient,
                width: '100%',
                height: '420px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                marginBottom: '32px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{ color: 'rgba(255,255,255,0.15)', fontSize: '96px', fontWeight: 200, letterSpacing: '8px', lineHeight: 1 }}>
                    ZD
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85em', marginTop: '12px' }}>
                    {project.name}
                  </p>
                </div>
              </div>

              {/* Section Header */}
              <div className="section-title js-scroll fade-in-top scrolled">
                <span className="theme-title">{project.city}</span>
                <h1>{project.name}</h1>
                <p className="mt-2" style={{ fontStyle: 'italic', color: '#888' }}>{project.tagline}</p>
              </div>

              {/* Project Description */}
              <div className="mt-4">
                {project.description.map((p, i) => (
                  <p key={i} className="mb-4" style={{ lineHeight: 1.9 }}>{p}</p>
                ))}
              </div>

              {/* Highlights */}
              <div className="mt-5">
                <h4 className="golden-text mb-3">Highlights</h4>
                <div className="columns is-multiline">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="column is-6-mobile is-6-tablet is-6-desktop" style={{ padding: '4px 8px' }}>
                      <div className="is-flex is-align-items-center" style={{ gap: '8px' }}>
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <small>{h}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mt-5">
                <h4 className="golden-text mb-3">Amenities & Facilities</h4>
                <div className="columns is-multiline">
                  {project.amenities.map((a, i) => (
                    <div key={i} className="column is-6-mobile is-6-tablet is-4-desktop" style={{ padding: '4px 8px' }}>
                      <small>• {a}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="column is-12-mobile is-12-tablet is-5-desktop is-5-widescreen">
              <div style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '24px', position: 'sticky', top: '80px' }}>
                <h5 className="golden-text mb-4">Project Details</h5>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {[
                      { label: 'Location', value: project.location },
                      { label: 'Type', value: project.type },
                      { label: 'Configuration', value: project.bhk },
                      { label: 'Area Range', value: project.area },
                      { label: 'Price', value: project.price, highlighted: true },
                      { label: 'Total Units', value: project.totalUnits },
                      { label: 'Land Extent', value: project.landExtent },
                      { label: 'Status', value: project.status },
                      { label: 'Possession', value: project.possession },
                      { label: 'RERA No.', value: project.rera, rera: true }
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: i === 9 ? 'none' : '1px solid #f0f0f0' }}>
                        <td style={{ padding: '10px 0', color: '#555', fontSize: '0.9em' }}>{row.label}</td>
                        <td style={{
                          padding: '10px 0',
                          fontWeight: 600,
                          fontSize: row.rera ? '0.85em' : '0.9em',
                          color: row.highlighted ? '#b8960c' : 'inherit'
                        }}>
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <a href="javascript:void(0);" className="theme-btn full-width mt-4 passenquiry" open-sidebar="enquire-sidebar" style={{ display: 'block', textAlign: 'center', padding: '14px' }}>
                  Enquire Now
                </a>
                <a href="tel:+918022345678" className="theme-btn line-btn full-width mt-2" style={{ display: 'block', textAlign: 'center', padding: '12px' }}>
                  +91 80 2234 5678
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
