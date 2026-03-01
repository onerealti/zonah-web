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
  'ali-azam': {
    name: 'Mr. Ali Azam (B. Tech)',
    role: 'Managing Director',
    initials: 'AA',
    bg: 'linear-gradient(135deg,#1a1a2e,#0f3460)',
    bio: [
      'The man behind all the laurels, Mr. Azam graduated in Civil Engineering from Jawaharlal Nehru Technological University (JNTU).',
      'Improvising on the vast expertise of planning, design and implementation of large residential, commercial and infrastructure projects acquired while working in the Middle East, he established Zonah.',
      'He believes in marking customers\' demands as his highest priority. Observing and implementing new ideas in order to expand the organization worldwide and providing a quality living to the global community is what he has geared up Zonah for.',
    ],
    qualifications: ['B. Tech in Civil Engineering, JNTU'],
    responsibilities: ['Overall strategic direction and leadership', 'Corporate planning and project implementation', 'Global expansion strategy'],
  },
  'hasan-azam': {
    name: 'Mr. Hasan Azam (BBA)',
    role: 'Director of Construction',
    initials: 'HA',
    bg: 'linear-gradient(135deg,#2c1a3e,#6b3a8a)',
    bio: [
      'Mr. Hasan Azam graduated in Business Administration from University of Exeter, England.',
      'His punctual and dedicated nature, facilitated by an international exposure to innovative technology and methodologies, assist the organization in delivering competence.',
      'He oversees the projects right from its scratch to the completion.',
    ],
    qualifications: ['BBA, University of Exeter, England'],
    responsibilities: ['Construction operations and management', 'Project delivery timelines', 'Implementation of innovative construction methodologies'],
  },
  'osama-azam': {
    name: 'Mr. Osama Azam (MBA)',
    role: 'Business Development Manager',
    initials: 'OA',
    bg: 'linear-gradient(135deg,#0a2a1a,#0f4d37)',
    bio: [
      'Mr. Osama Azam\'s firm principles based on commitment and perfection are instrumental in the top quality performance of the company.',
      'He focuses on identifying new opportunities and building strategic partnerships that drive the company\'s growth in new markets.',
    ],
    qualifications: ['MBA'],
    responsibilities: ['Business development and growth strategy', 'Strategic partnerships', 'Market identification and entry'],
  },
  'zain-azam': {
    name: 'Mr. Zain Azam (B.E)',
    role: 'Project Manager',
    initials: 'ZA',
    bg: 'linear-gradient(135deg,#1a0a0a,#7a2020)',
    bio: [
      'Mr. Zain Azam graduated in Engineering from Leeds University, England.',
      'He supervises the construction projects with utmost zest and focus. His flair for technology and adventure resulted in the inception of Zonah Entertainment in India, the first of a kind in the business of entertainment based on technology.',
      'He believes that entrepreneurs constitute an integral role in the progress towards future and envisions on creating value based entertainment.',
    ],
    qualifications: ['B.E. Engineering, Leeds University, England'],
    responsibilities: ['Project management and supervision', 'Technology integration in projects', 'Innovation and new venture development'],
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
            <a href="/about-us/board-of-directors" class="theme-btn mt-4" style="display:inline-block;">Back to Leadership Team</a>
          </div>
        </section>
      ` }} />
    );
  }

  const html = `
<section class="section section-inner-page overflow-visible pt-6 pb-6">
  <div class="container">
    <div class="mb-4">
      <a href="/about-us/board-of-directors" class="text-primary" style="text-decoration:none;font-size:0.9em;color:#856d47;">← Back to Leadership Team</a>
    </div>
    <div class="columns is-multiline is-vcentered mt-5">

      <div class="column is-12-mobile is-12-tablet is-4-desktop is-4-widescreen">
        <div style="background:${director.bg};width:100%;height:380px;display:flex;align-items:center;justify-content:center;border-radius:12px;margin-bottom:24px;box-shadow: 0 20px 40px rgba(0,0,0,0.15);">
          <span style="color:rgba(255,255,255,0.3);font-size:110px;font-weight:200;letter-spacing:8px;">${director.initials}</span>
        </div>
        <h3 style="margin-bottom:4px;font-size:1.5rem;">${director.name}</h3>
        <span class="text-primary" style="color:#856d47;font-weight:600;">${director.role}</span>

        <div class="mt-5">
          <h5 class="golden-text mb-3" style="font-size:0.85em;text-transform:uppercase;letter-spacing:1.5px;color:#856d47;">Qualifications</h5>
          <ul style="list-style:disc;padding-left:20px;line-height:1.8;">
            ${director.qualifications.map(q => `<li><small style="color:#555;">${q}</small></li>`).join('')}
          </ul>
        </div>

        <div class="mt-4">
          <h5 class="golden-text mb-3" style="font-size:0.85em;text-transform:uppercase;letter-spacing:1.5px;color:#856d47;">Responsibilities</h5>
          <ul style="list-style:disc;padding-left:20px;line-height:1.8;">
            ${director.responsibilities.map(r => `<li><small style="color:#555;">${r}</small></li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="column is-12-mobile is-12-tablet is-8-desktop is-8-widescreen">
        <div class="section-title mb-5 js-scroll fade-in-top scrolled">
          <span class="theme-title" style="color:#856d47;">Zonah Developers Leadership</span>
          <h1 style="font-family:var(--font-primary-serif);font-size:3rem;margin-top:10px;">${director.name}</h1>
          <h4 class="text-primary mt-2" style="font-weight:500;font-size:1.1rem;color:#856d47;">${director.role}</h4>
        </div>
        <div class="director-bio-content mt-5">
           ${director.bio.map(p => `<p class="mb-5" style="line-height:2.1;font-size:1.05rem;color:#444;">${p}</p>`).join('')}
        </div>
      </div>

    </div>
  </div>
</section>
  `;

  return (
    <main className="home-page-replica director-profile-page" dangerouslySetInnerHTML={{ __html: html }} />
  );
}
