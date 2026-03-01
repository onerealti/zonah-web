import React from 'react';

const directors = [
  {
    slug: 'ali-azam',
    name: 'Mr. Ali Azam (B. Tech)',
    role: 'Managing Director',
    initials: 'AA',
    bg: 'linear-gradient(135deg,#1a1a2e,#0f3460)',
    bio: 'The man behind all the laurels, Mr. Azam graduated in Civil Engineering from Jawaharlal Nehru Technological University (JNTU). Improvising on the vast expertise of planning, design and implementation of large residential, commercial and infrastructure projects acquired while working in the Middle East, he established Zonah.',
  },
  {
    slug: 'hasan-azam',
    name: 'Mr. Hasan Azam (BBA)',
    role: 'Director of Construction',
    initials: 'HA',
    bg: 'linear-gradient(135deg,#2c1a3e,#6b3a8a)',
    bio: 'Mr. Hasan Azam graduated in Business Administration from University of Exeter, England. His punctual and dedicated nature, facilitated by an international exposure to innovative technology and methodologies, assist the organization in delivering competence.',
  },
  {
    slug: 'osama-azam',
    name: 'Mr. Osama Azam (MBA)',
    role: 'Business Development Manager',
    initials: 'OA',
    bg: 'linear-gradient(135deg,#0a2a1a,#0f4d37)',
    bio: 'Mr. Osama Azam\'s firm principles based on commitment and perfection are instrumental in the top quality performance of the company.',
  },
  {
    slug: 'zain-azam',
    name: 'Mr. Zain Azam (B.E)',
    role: 'Project Manager',
    initials: 'ZA',
    bg: 'linear-gradient(135deg,#1a0a0a,#7a2020)',
    bio: 'Mr. Zain Azam graduated in Engineering from Leeds University, England. He supervises the construction projects with utmost zest and focus. His flair for technology and adventure resulted in the inception of Zonah Entertainment in India.',
  },
];

export default function BoardOfDirectors() {
  return (
    <main className="home-page-replica board-of-directors-page" dangerouslySetInnerHTML={{
      __html: `

<section class="section section-inner-page overflow-visible pt-6">
  <div class="container">

    <div class="section-title text-center mb-6 js-scroll fade-in-top scrolled">
      <span class="theme-title">Our Leadership</span>
      <h1>Management Team</h1>
      <p class="mt-2" style="max-width:680px;margin-left:auto;margin-right:auto;">What Zonah takes an immense pleasure in today, for being a very successful, fulfilling, dynamic and an innovative organization, is all because of the relentless hard work and dedication of every member in our team.</p>
    </div>

    <div class="columns is-multiline is-centered">
      ${directors.map(d => `
      <div class="column is-12-mobile is-6-tablet is-3-desktop is-3-widescreen">
        <a href="/about-us/board-of-directors/${d.slug}" class="board-member-card is-block" style="text-decoration:none;color:inherit;">
          <div style="background:${d.bg};width:100%;height:280px;display:flex;align-items:center;justify-content:center;border-radius:6px;margin-bottom:16px;box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <span style="color:rgba(255,255,255,0.35);font-size:72px;font-weight:200;letter-spacing:4px;">${d.initials}</span>
          </div>
          <h3 style="margin-bottom:4px;font-size:1.15rem;">${d.name}</h3>
          <span class="text-primary" style="font-size:0.9em;color:#856d47;font-weight:500;">${d.role}</span>
        </a>
      </div>
      `).join('')}
    </div>

  </div>
</section>

    ` }} />
  );
}
