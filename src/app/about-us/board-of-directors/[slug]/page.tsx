import React from 'react';

const DIRECTORS: Record<string, {
  name: string;
  role: string;
  initials: string;
  bg: string;
  bio: string[];
  qualifications: string[];
  responsibilities: string[];
}> = {
  'rajan-nair': {
    name: 'Mr. Rajan Nair',
    role: 'Chairman & Managing Director',
    initials: 'RN',
    bg: 'linear-gradient(135deg,#1a1a2e,#0f3460)',
    bio: [
      'Mr. Rajan Nair is the founder and Chairman & Managing Director of Zonah Developers. With over three decades of leadership in real estate development, he has steered the company from its origins as a regional developer to one of India\'s most trusted and respected real estate brands.',
      'Under his leadership, Zonah Developers has delivered over 12 million square feet of residential, commercial, and mixed-use developments across 8 major Indian cities. His strategic vision has enabled the company to consistently deliver on its promises — bringing together world-class architecture, enduring quality, and a deep understanding of customer aspirations.',
      'Mr. Nair is a passionate advocate for sustainable urban development and community-centric design. He regularly participates in national forums on housing policy, real estate regulation, and ESG practices in construction.',
    ],
    qualifications: ['B.Tech in Civil Engineering, IIT Bombay', 'MBA in Finance, IIM Ahmedabad', 'Fellow, Indian Green Building Council'],
    responsibilities: ['Overall strategic direction and leadership', 'Stakeholder and investor relations', 'Brand, culture, and long-term vision'],
  },
  'priya-mehta': {
    name: 'Ms. Priya Mehta',
    role: 'Vice Chairperson',
    initials: 'PM',
    bg: 'linear-gradient(135deg,#2c1a3e,#6b3a8a)',
    bio: [
      'Ms. Priya Mehta is the Vice Chairperson of Zonah Developers and a veteran of the Indian financial services and corporate governance landscape. She brings over 25 years of experience across banking, private equity, and strategic consulting.',
      'At Zonah Developers, Ms. Mehta has been instrumental in architecting the company\'s capital structure, expanding into new geographies, and professionalizing governance frameworks. She has championed the integration of ESG principles into the company\'s long-term strategy and has led the development of Zonah\'s CSR initiatives.',
      'Ms. Mehta is a recognised voice in India\'s real estate investment ecosystem and represents Zonah on several industry bodies.',
    ],
    qualifications: ['CA (ICAI)', 'MBA, London Business School', 'Certified Corporate Director, IIM Bangalore'],
    responsibilities: ['Board governance & compliance', 'Capital strategy and financial oversight', 'ESG and CSR leadership'],
  },
  'arjun-srinivasan': {
    name: 'Mr. Arjun Srinivasan',
    role: 'Executive Director & CEO',
    initials: 'AS',
    bg: 'linear-gradient(135deg,#0a2a1a,#0f4d37)',
    bio: [
      'Mr. Arjun Srinivasan serves as the Executive Director & Chief Executive Officer of Zonah Developers. In this role, he is responsible for the operational leadership of the company — overseeing project delivery, sales, customer experience, marketing, and technology.',
      'With experience spanning construction, technology, and hospitality, Mr. Srinivasan brings a cross-sectoral perspective to his role. Since joining Zonah Developers, he has accelerated the company\'s digital transformation, improved construction timelines, and built a culture of customer-centricity across all business verticals.',
      'He is recognised for his ability to build high-performing organisations and for scaling businesses rapidly while maintaining quality and integrity.',
    ],
    qualifications: ['B.E. in Construction Engineering, NIT Trichy', 'MBA in Operations, ISB Hyderabad'],
    responsibilities: ['Day-to-day operations and P&L', 'Project delivery and construction excellence', 'Customer experience & digital transformation'],
  },
  'ananya-krishnan': {
    name: 'Dr. Ananya Krishnan',
    role: 'Independent Director',
    initials: 'DK',
    bg: 'linear-gradient(135deg,#1a0a0a,#7a2020)',
    bio: [
      'Dr. Ananya Krishnan is an eminent economist and urban policy expert who serves as an Independent Director on the Zonah Developers Board. She is currently a Professor at a leading policy school and serves on several government advisory panels on urban planning and housing reform.',
      'At Zonah Developers, Dr. Krishnan provides independent oversight on regulatory compliance, statutory filings, and corporate governance matters. She is a strong proponent of rational, evidence-based urban planning and has championed the adoption of green building standards across the industry.',
      'Her expertise in housing economics and policy makes her a valuable voice in Board deliberations on strategy, risk, and sustainable development.',
    ],
    qualifications: ['Ph.D. in Urban Economics, JNU', 'M.Phil. in Public Policy, University of Oxford', 'B.A. (Hons.) in Economics, Delhi School of Economics'],
    responsibilities: ['Independent Board oversight', 'Regulatory and compliance guidance', 'Sustainable development and policy advisory'],
  },
  'vikram-patel': {
    name: 'Mr. Vikram Patel',
    role: 'Non-Executive Director',
    initials: 'VP',
    bg: 'linear-gradient(135deg,#0a1a2a,#1a3d5c)',
    bio: [
      'Mr. Vikram Patel is a veteran of the Indian financial services sector with a distinguished career spanning private equity, real estate funds, and infrastructure finance. He currently serves as a Non-Executive Director on the Zonah Developers Board.',
      'Over his 28-year career, Mr. Patel has managed real estate funds across Asia and has completed transactions valued at over USD 4 billion. He brings an institutional discipline and a global perspective that informs the company\'s capital strategy, joint venture structuring, and investor relations.',
      'Mr. Patel is deeply committed to governance innovation and has helped Zonah Developers build credibility with institutional investors both domestically and internationally.',
    ],
    qualifications: ['B.Com (Hons.), St. Xavier\'s College Mumbai', 'PGDM, IIM Calcutta', 'CFA Charterholder'],
    responsibilities: ['Capital structure and fund strategy', 'Institutional investor relations', 'Joint ventures and strategic partnerships'],
  },
  'lakshmi-iyer': {
    name: 'Ms. Lakshmi Iyer',
    role: 'Independent Director',
    initials: 'LI',
    bg: 'linear-gradient(135deg,#1a1502,#4d3d05)',
    bio: [
      'Ms. Lakshmi Iyer is one of India\'s most acclaimed architects and urban designers. Her portfolio of work spans residential master plans, civic spaces, heritage conservation, and commercial landmarks across Asia and the Middle East.',
      'As an Independent Director at Zonah Developers, Ms. Iyer provides design oversight and ensures that the company\'s projects adhere to the highest standards of architectural quality, livability, and environmental sensitivity. She champions the company\'s belief that great design is the foundation of great communities.',
      'Her membership on the Board reflects Zonah Developers\' deep commitment to design excellence — ensuring that aesthetics, function, and placemaking are always central to every project.',
    ],
    qualifications: ['B.Arch, CEPT University Ahmedabad', 'M.Arch (Urban Design), Harvard GSD', 'Fellow, Indian Institute of Architects'],
    responsibilities: ['Design quality and architectural excellence', 'Sustainability and green building oversight', 'Brand and placemaking strategy'],
  },
  // Home-page BoardOfDirectors component slugs
  'aman-verma': {
    name: 'Mr. Aman Verma',
    role: 'Chairman & Managing Director',
    initials: 'AV',
    bg: 'linear-gradient(135deg,#1a1a2e,#0f3460)',
    bio: [
      'Mr. Aman Verma is the founder and Chairman & Managing Director of Zonah Developers. With over three decades at the helm of the company, he has grown Zonah Developers from a regional builder into one of India\'s most admired real estate brands — renowned for design excellence, quality construction, and enduring community value.',
      'His leadership philosophy is founded on a simple belief: that great homes create great communities. This ethos is reflected across every project Zonah delivers, from compact urban apartments to expansive villa estates.',
      'Mr. Verma is a well-respected voice in India\'s real estate and urban planning community, and has been instrumental in advocating for RERA compliance, ethical business practices, and affordable quality housing.',
    ],
    qualifications: ['B.Tech in Civil Engineering, IIT Delhi', 'MBA in Finance, IIM Calcutta', 'Fellow, Indian Green Building Council'],
    responsibilities: ['Overall strategic direction and leadership', 'Brand, culture, and long-term vision', 'Stakeholder and investor relations'],
  },
  'siddharth-mehta': {
    name: 'Mr. Siddharth Mehta',
    role: 'Joint Managing Director',
    initials: 'SM',
    bg: 'linear-gradient(135deg,#0d1b2a,#1b3a5c)',
    bio: [
      'Mr. Siddharth Mehta serves as the Joint Managing Director of Zonah Developers, sharing executive oversight of the company\'s operations with the Chairman. He brings over 22 years of experience in real estate strategy, business development, and large-scale project execution.',
      'Under his stewardship, Zonah\'s commercial and retail portfolio has expanded significantly, with several landmark mixed-use developments delivered across Bangalore, Hyderabad, and Mumbai.',
      'Mr. Mehta is known for his emphasis on data-driven decision making, efficient capital deployment, and building robust second-line leadership across the organisation.',
    ],
    qualifications: ['B.E. in Civil Engineering, BITS Pilani', 'MBA in Strategy, ISB Hyderabad'],
    responsibilities: ['Joint operational leadership', 'Commercial and mixed-use portfolio', 'Business development and expansion strategy'],
  },
  'vikram-singh': {
    name: 'Mr. Vikram Singh',
    role: 'Director',
    initials: 'VS',
    bg: 'linear-gradient(135deg,#0a2a1a,#1a5c37)',
    bio: [
      'Mr. Vikram Singh is a Director on the Zonah Developers Board, responsible for overseeing the company\'s construction operations, quality assurance, and vendor relations. He brings 25 years of hands-on experience in civil construction, project management, and engineering leadership.',
      'His focus on systems-thinking and process-driven construction management has enabled Zonah to consistently deliver projects on time and to the highest quality benchmarks. He is also the driving force behind the company\'s adoption of MIVAN technology and other modern methods of construction.',
    ],
    qualifications: ['B.E. in Civil Engineering, NIT Surathkal', 'PG Diploma in Construction Management, NICMAR'],
    responsibilities: ['Construction operations and quality control', 'Vendor and contractor management', 'Engineering and technical leadership'],
  },
  'sameer-khanna': {
    name: 'Mr. Sameer Khanna',
    role: 'Director',
    initials: 'SK',
    bg: 'linear-gradient(135deg,#2a1402,#5c3610)',
    bio: [
      'Mr. Sameer Khanna is a Director on the Zonah Developers Board and heads the company\'s sales, marketing, and customer experience functions. A seasoned sales leader with over 20 years in premium real estate, he has built one of the most respected sales organisations in the industry.',
      'Mr. Khanna has led Zonah\'s channel partner network expansion, digital marketing transformation, and CRM modernisation — enabling the company to reach a significantly wider buyer base while maintaining the premium brand experience.',
    ],
    qualifications: ['B.Com (Hons.), Delhi University', 'MBA in Marketing, MDI Gurgaon'],
    responsibilities: ['Sales and marketing leadership', 'Customer experience and CRM', 'Channel partner network management'],
  },
};

export async function generateStaticParams() {
  return Object.keys(DIRECTORS).map((slug) => ({ slug }));
}

export default function DirectorProfile({ params }: { params: { slug: string } }) {
  const director = DIRECTORS[params.slug];

  if (!director) {
    return (
      <main className="home-page-replica" dangerouslySetInnerHTML={{
        __html: `
        <section class="section section-inner-page pt-6">
          <div class="container has-text-centered">
            <h2>Director not found.</h2>
            <a href="/about-us/board-of-directors" class="theme-btn mt-4" style="display:inline-block;">Back to Board of Directors</a>
          </div>
        </section>
      ` }} />
    );
  }

  const html = `
<section class="section section-inner-page overflow-visible pt-6 pb-6">
  <div class="container">
    <div class="mb-4">
      <a href="/about-us/board-of-directors" class="text-primary" style="text-decoration:none;font-size:0.9em;">← Back to Board of Directors</a>
    </div>
    <div class="columns is-multiline is-vcentered">

      <div class="column is-12-mobile is-12-tablet is-4-desktop is-4-widescreen">
        <div style="background:${director.bg};width:100%;height:340px;display:flex;align-items:center;justify-content:center;border-radius:8px;margin-bottom:24px;">
          <span style="color:rgba(255,255,255,0.35);font-size:96px;font-weight:200;letter-spacing:6px;">${director.initials}</span>
        </div>
        <h3 style="margin-bottom:4px;">${director.name}</h3>
        <span class="text-primary">${director.role}</span>

        <div class="mt-4">
          <h5 class="golden-text mb-3">Qualifications</h5>
          <ul style="list-style:disc;padding-left:20px;line-height:1.8;">
            ${director.qualifications.map(q => `<li><small>${q}</small></li>`).join('')}
          </ul>
        </div>

        <div class="mt-4">
          <h5 class="golden-text mb-3">Areas of Responsibility</h5>
          <ul style="list-style:disc;padding-left:20px;line-height:1.8;">
            ${director.responsibilities.map(r => `<li><small>${r}</small></li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="column is-12-mobile is-12-tablet is-8-desktop is-8-widescreen">
        <div class="section-title mb-4 js-scroll fade-in-top scrolled">
          <span class="theme-title">Zonah Developers Leadership</span>
          <h1>${director.name}</h1>
          <h4 class="text-primary" style="font-weight:400;">${director.role}</h4>
        </div>
        ${director.bio.map(p => `<p class="mb-4" style="line-height:1.85;">${p}</p>`).join('')}
      </div>

    </div>
  </div>
</section>
  `;

  return (
    <main className="home-page-replica director-profile-page" dangerouslySetInnerHTML={{ __html: html }} />
  );
}
