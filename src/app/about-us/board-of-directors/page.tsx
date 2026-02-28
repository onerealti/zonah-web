import React from 'react';

const directors = [
    {
        slug: 'rajan-nair',
        name: 'Mr. Rajan Nair',
        role: 'Chairman & Managing Director',
        initials: 'RN',
        bg: 'linear-gradient(135deg,#1a1a2e,#0f3460)',
        bio: 'Mr. Rajan Nair is the founder and driving force behind Zonah Developers. With over three decades of experience in real estate development, he has led the company from a regional developer to a nationally recognised brand. His vision for sustainable, design-led communities continues to inspire every project the company undertakes.',
    },
    {
        slug: 'priya-mehta',
        name: 'Ms. Priya Mehta',
        role: 'Vice Chairperson',
        initials: 'PM',
        bg: 'linear-gradient(135deg,#2c1a3e,#6b3a8a)',
        bio: 'Ms. Priya Mehta brings deep expertise in finance, governance, and strategy to the Board. She has been instrumental in the company\'s expansion into new geographies and segments, championing stakeholder value at every stage of growth.',
    },
    {
        slug: 'arjun-srinivasan',
        name: 'Mr. Arjun Srinivasan',
        role: 'Executive Director & CEO',
        initials: 'AS',
        bg: 'linear-gradient(135deg,#0a2a1a,#0f4d37)',
        bio: 'Mr. Arjun Srinivasan oversees the day-to-day operations of Zonah Developers. A seasoned professional with experience across construction, technology, and hospitality sectors, he focuses on operational excellence, customer experience, and delivering projects on time and within scope.',
    },
    {
        slug: 'ananya-krishnan',
        name: 'Dr. Ananya Krishnan',
        role: 'Independent Director',
        initials: 'DK',
        bg: 'linear-gradient(135deg,#1a0a0a,#7a2020)',
        bio: 'Dr. Ananya Krishnan is a respected economist and urban policy expert. As an Independent Director, she provides the Board with critical insights on regulatory trends, sustainable development, and ESG best practices, ensuring that Zonah Developers operates at the highest standards of corporate governance.',
    },
    {
        slug: 'vikram-patel',
        name: 'Mr. Vikram Patel',
        role: 'Non-Executive Director',
        initials: 'VP',
        bg: 'linear-gradient(135deg,#0a1a2a,#1a3d5c)',
        bio: 'Mr. Vikram Patel is a veteran of the Indian financial services sector with experience across private equity, real estate funds, and infrastructure finance. He brings institutional discipline and a global perspective to the Board, guiding the company\'s capital strategy and investor relations.',
    },
    {
        slug: 'lakshmi-iyer',
        name: 'Ms. Lakshmi Iyer',
        role: 'Independent Director',
        initials: 'LI',
        bg: 'linear-gradient(135deg,#1a1502,#4d3d05)',
        bio: 'Ms. Lakshmi Iyer is a leading architect and urban designer whose work has been recognised across Asia and the Middle East. Her membership of the Board reflects Zonah Developers\' commitment to design excellence and thoughtful placemaking, ensuring that aesthetics and livability are always central to the company\'s projects.',
    },
];

export default function BoardOfDirectors() {
    return (
        <main className="home-page-replica board-of-directors-page" dangerouslySetInnerHTML={{
            __html: `

<section class="section section-inner-page overflow-visible pt-6">
  <div class="container">

    <div class="section-title text-center mb-6 js-scroll fade-in-top scrolled">
      <span class="theme-title">Leadership</span>
      <h1>Board of Directors</h1>
      <p class="mt-2" style="max-width:680px;margin-left:auto;margin-right:auto;">Our Board comprises visionary leaders with decades of combined experience across real estate, finance, architecture, and public policy — united by a commitment to building communities that endure.</p>
    </div>

    <div class="columns is-multiline">
      ${directors.map(d => `
      <div class="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen">
        <a href="/about-us/board-of-directors/${d.slug}" class="board-member-card is-block" style="text-decoration:none;color:inherit;">
          <div style="background:${d.bg};width:100%;height:260px;display:flex;align-items:center;justify-content:center;border-radius:6px;margin-bottom:16px;">
            <span style="color:rgba(255,255,255,0.35);font-size:72px;font-weight:200;letter-spacing:4px;">${d.initials}</span>
          </div>
          <h3 style="margin-bottom:4px;">${d.name}</h3>
          <span class="text-primary" style="font-size:0.9em;">${d.role}</span>
        </a>
      </div>
      `).join('')}
    </div>

  </div>
</section>

    ` }} />
    );
}
