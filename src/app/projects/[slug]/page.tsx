'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { getDetailedProject, type DetailedProject } from '@/data/projects';

// ─── TYPES ───────────────────────────────────────────────────────────────────

const SECTION_IDS = ['project-about', 'project-plans', 'project-amenities', 'project-location'];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const [project, setProject] = useState<DetailedProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getDetailedProject(slug).then((data) => {
      if (data) {
        setProject(data);
      } else {
        setError(true);
      }
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <main className="home-page-replica">
        <section className="section section-inner-page pt-6">
          <div className="container has-text-centered py-6">
            <h2 className="mb-4">Loading project...</h2>
          </div>
        </section>
      </main>
    );
  }

  if (error || !project) {
    return (
      <main className="home-page-replica">
        <section className="section section-inner-page pt-6">
          <div className="container has-text-centered py-6">
            <h2 className="mb-4">Project not found.</h2>
            <Link href="/projects" className="theme-btn" style={{ display: 'inline-block' }}>
              View All Projects
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return <ProjectDetailUI project={project} />;
}

// ─── UI ───────────────────────────────────────────────────────────────────────

function ProjectDetailUI({ project }: { project: DetailedProject }) {
  const [activePlan, setActivePlan] = useState('All');
  const [activeSection, setActiveSection] = useState('project-about');
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '', scheduleDate: '', scheduleTime: '', whatsapp: false, newsletter: false });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = 160;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const planTypes = ['All', ...Array.from(new Set(project.floorPlans.map(p => p.type)))];
  const filteredPlans = activePlan === 'All' ? project.floorPlans : project.floorPlans.filter(p => p.type === activePlan);

  const navLinks = [
    { id: 'project-about', label: 'About' },
    { id: 'project-plans', label: 'Plans' },
    { id: 'project-amenities', label: 'Amenities' },
    { id: 'project-location', label: 'Location' },
    { id: 'project-gallery', label: 'Gallery' },
  ];

  return (
    <main className="home-page-replica">
      <section className="section section-featured-project-inner-page section-inner-page pt-3">
        <div className="container">

          <div className="columns is-variable is-6 is-multiline">

            <div className="column project-inner-page-col is-12-mobile is-12-tablet is-7-desktop">
              <div className="mb-4">
                <Link href="/projects" style={{ textDecoration: 'none', fontSize: '0.88em', color: '#856d47' }}>
                  ← Projects
                </Link>
              </div>

              <div className="project-hero-slider mb-4" style={{ position: 'relative' }}>
                {project.status && (
                  <div className={`project-status ${project.statusClass}`} style={{ position: 'absolute', top: 12, left: 12, zIndex: 10 }}>
                    <span>{project.status}</span>
                  </div>
                )}
                <Splide
                  id="featured-projects-img-slider"
                  options={{ type: 'loop', perPage: 1, arrows: true, pagination: true, autoplay: false }}
                >
                  {[1, 2, 3].map(i => (
                    <SplideSlide key={i}>
                      <div style={{
                        background: project.gradient,
                        width: '100%', height: '420px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        borderRadius: '4px',
                      }}>
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ color: 'rgba(255,255,255,0.1)', fontSize: '100px', fontWeight: 200, letterSpacing: '12px', lineHeight: 1, fontFamily: 'Georgia, serif' }}>ZD</div>
                          <p style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.8em', marginTop: 14 }}>{project.name}</p>
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              </div>

              <div className="projects-properties-menu position-sticky-block">
                <ul id="project-menu" className="is-flex is-align-items-center is-gap-2 theme-scrollbar-horizontal js-scroll fade-in-bottom scrolled">
                  {navLinks.map(({ id, label }) => (
                    <li key={id} className={`projects-properties-menu-item hide_${label.toLowerCase()}${activeSection === id ? ' active' : ''}`}>
                      <a
                        className={`theme-btn gray-btn line-btn rounded-pill${activeSection === id ? ' is-active' : ''}`}
                        href={`#${id}`}
                        onClick={e => { e.preventDefault(); scrollTo(id); }}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div id="project-about" className="projects-sub-section mb-5 project-about hide_about">
                <div className="sub-section-title js-scroll fade-in-top scrolled">
                  <span className="theme-title">{project.city}</span>
                  <h1>{project.name}</h1>
                  <div className="is-flex is-align-items-center is-gap-3 mt-2" style={{ flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '1.2em', fontWeight: 800, color: '#b8960c' }}>{project.price}</span>
                    <span style={{ color: '#bbb' }}>|</span>
                    <span style={{ color: '#777', fontSize: '0.88em' }}>{project.location}</span>
                  </div>
                </div>

                <div className="project-configurations mt-4 mb-4">
                  <ul className="is-flex is-flex-wrap-wrap" style={{ gap: '1px', background: '#eee', border: '1px solid #eee', borderRadius: 4, overflow: 'hidden', listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      { label: 'Project Type', value: project.type, icon: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>` },
                      { label: 'Bedrooms', value: project.bhk, icon: `<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>` },
                      { label: 'Development Size', value: project.developmentSize, icon: `<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>` },
                      { label: 'Total Units', value: project.totalUnits, icon: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>` },
                    ].map((s, i) => (
                      <li key={i} style={{ background: '#fff', padding: '14px 20px', flex: '1 1 25%', minWidth: 120, display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div className="project-configurations-icon">
                          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#b8960c" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: s.icon }} />
                        </div>
                        <div className="project-configurations-desc">
                          <h4 style={{ margin: 0, fontSize: '0.7em', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: 500 }}>{s.label}</h4>
                          <span style={{ fontWeight: 700, fontSize: '0.85em', color: '#222' }}>{s.value}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-about-detail js-scroll fade-in-bottom scrolled">
                  {project.description.map((p, i) => <p key={i} className="mb-4" style={{ lineHeight: 1.9, color: '#444' }}>{p}</p>)}
                </div>

                <div className="mt-5">
                  <h4 className="golden-text mb-3" style={{ fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '1px' }}>Highlights</h4>
                  <div className="columns is-multiline">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="column is-6" style={{ paddingTop: 4, paddingBottom: 4 }}>
                        <div className="is-flex is-align-items-center is-gap-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b8960c" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                          <small style={{ color: '#444' }}>{h}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div id="project-plans" className="projects-sub-section mb-5 project-plans hide_plans">
                <div className="sub-section-title js-scroll fade-in-top scrolled">
                  <h2>Plans</h2>
                </div>

                <div className="tabs-detail rounded-tabs is-flex is-align-items-center is-gap-2 mb-4" style={{ flexWrap: 'wrap' }}>
                  {planTypes.map(pt => (
                    <button
                      key={pt}
                      onClick={() => setActivePlan(pt)}
                      className={`theme-btn gray-btn line-btn rounded-pill${activePlan === pt ? ' is-active' : ''}`}
                      style={{
                        background: activePlan === pt ? '#b8960c' : 'transparent',
                        borderColor: activePlan === pt ? '#b8960c' : undefined,
                        color: activePlan === pt ? '#fff' : undefined,
                      }}
                    >
                      {pt}
                    </button>
                  ))}
                  <div className="ml-auto is-flex is-gap-2">
                    <button className="theme-btn line-btn" style={{ padding: '6px 10px', borderRadius: '50%' }}>‹</button>
                    <button className="theme-btn line-btn" style={{ padding: '6px 10px', borderRadius: '50%' }}>›</button>
                  </div>
                </div>

                <div className="columns is-multiline js-scroll fade-in-bottom scrolled">
                  {filteredPlans.map((plan, i) => (
                    <div key={i} className="column is-6-mobile is-6-tablet is-6-desktop">
                      <div className="project-floor-plan-card" style={{ border: '1px solid #eee', borderRadius: 4, overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)')}
                        onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                      >
                        <div style={{ background: plan.gradient, height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7">
                            <rect x="3" y="3" width="18" height="18" rx="1" /><path d="M3 9h18M3 15h18M9 3v18" />
                          </svg>
                        </div>
                        <div style={{ padding: '12px 16px' }}>
                          <strong style={{ fontSize: '0.88em' }}>{plan.label}</strong>
                          <div style={{ fontSize: '0.8em', color: '#b8960c', marginTop: 2 }}>{plan.area}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="project-amenities" className="projects-sub-section mb-5 project-amenities hide_amenities">
                <div className="sub-section-title js-scroll fade-in-top scrolled">
                  <h2>Amenities</h2>
                </div>
                <div className="project-amenities-detail has-text-centered js-scroll fade-in-bottom scrolled">
                  <div className="columns is-multiline is-mobile is-gapless project-amenities-cols">
                    {project.amenities.map((a, i) => (
                      <div key={i} className="column is-6-mobile is-4-tablet is-2-desktop">
                        <div className="project-amenities-items">
                          <div className="project-amenities-icon">
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: a.svgPath }} />
                          </div>
                          <div className="project-amenities-desc">
                            <span>{a.label}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div id="project-location" className="projects-sub-section mb-5 hide_location">
                <div className="sub-section-title js-scroll fade-in-top scrolled">
                  <h2>Location</h2>
                </div>
                <div id="map" style={{
                  background: '#e8e8e8', height: 320, borderRadius: 4, overflow: 'hidden',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid #ddd', position: 'relative',
                }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,#e4e4e4,#d0d0d0)', opacity: 0.6 }} />
                  <div style={{ position: 'relative', textAlign: 'center' }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#856d47" strokeWidth="1.5" style={{ marginBottom: 8 }}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    <p style={{ color: '#666', fontSize: '0.88em', fontWeight: 600, margin: 0 }}>{project.location}</p>
                    <p style={{ color: '#999', fontSize: '0.78em', margin: '4px 0 0' }}>RERA: {project.rera}</p>
                  </div>
                </div>
              </div>

              <div id="project-gallery" className="projects-sub-section mb-5 hide_gallery">
                <div className="sub-section-title js-scroll fade-in-top scrolled">
                  <h2>Gallery</h2>
                </div>
                <div className="columns is-multiline is-mobile">
                  {[1, 2, 3, 4].map(n => (
                    <div key={n} className="column is-6-mobile is-3-tablet">
                      <div style={{ background: project.gradient, height: 140, borderRadius: 4, opacity: n % 2 === 0 ? 0.7 : 1 }} />
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="column project-inner-page-col is-12-mobile is-12-tablet is-5-desktop">
              <div className="project-details-sidebar sticky-sidebar" style={{ position: 'sticky', top: 88 }}>
                <div className="theme-sidebar-card" style={{ border: '1px solid #e8e8e8', borderRadius: 6, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>

                  <div className="project-logo-and-name" style={{ padding: '20px 24px', borderBottom: '1px solid #f0f0f0' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                      <div style={{ width: 48, height: 48, background: '#856d47', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 900, color: '#fff', letterSpacing: '1px', flexShrink: 0 }}>ZONAH</div>
                      <div>
                        <h2 className="address" style={{ margin: 0, fontSize: '1.05em', fontWeight: 800, lineHeight: 1.25 }}>{project.name}</h2>
                        <p className="address" style={{ margin: '4px 0 0', fontSize: '0.78em', color: '#999' }}>{project.location}</p>
                      </div>
                    </div>
                    <div className="rera-no" style={{ fontSize: '0.72em', color: '#bbb', lineHeight: 1.5, marginBottom: 8 }}>
                      <strong style={{ color: '#999' }}>RERA No:</strong> {project.rera}
                    </div>
                    <div className="price" style={{ background: 'linear-gradient(135deg,#c9a84c,#b8960c)', color: '#fff', padding: '10px 16px', borderRadius: 4, textAlign: 'center', fontWeight: 800, fontSize: '1.1em', letterSpacing: '0.5px' }}>
                      {project.price}
                    </div>
                  </div>

                  <div className="project-stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
                    {[
                      { label: 'PROJECT TYPE', value: project.type, icon: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>` },
                      { label: 'BEDROOMS', value: project.bhk, icon: `<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>` },
                      { label: 'DEVELOPMENT SIZE', value: project.developmentSize, icon: `<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>` },
                      { label: 'TOTAL UNITS', value: project.totalUnits, icon: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>` },
                    ].map((s, i) => (
                      <div key={i} style={{ background: '#fff', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b8960c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: s.icon }} />
                        <div>
                          <div style={{ fontSize: '0.62em', color: '#aaa', letterSpacing: '0.5px', marginBottom: 2 }}>{s.label}</div>
                          <div style={{ fontSize: '0.82em', fontWeight: 700, color: '#222' }}>{s.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ padding: '14px 20px', borderBottom: '1px solid #f0f0f0' }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <a href="#brochure" className="theme-btn black-btn" style={{ flex: 1, textAlign: 'center', padding: '11px 0', fontSize: '0.85em', fontWeight: 600 }}>
                        Download Brochure
                      </a>
                      <a href="tel:+918022345678" className="theme-btn line-btn" style={{ padding: '10px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        title="Call Us">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.54 5.54l.76-.76a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                      </a>
                      <a href={`https://maps.google.com/?q=${encodeURIComponent(project.location)}`} target="_blank" rel="noopener noreferrer" className="theme-btn line-btn" style={{ padding: '10px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        title="View on Map">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                      </a>
                    </div>
                  </div>

                  <div style={{ padding: '20px 24px' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.85em', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 16, color: '#222' }}>
                      Request a Callback
                    </div>

                    {submitted ? (
                      <div style={{ textAlign: 'center', padding: '20px 0' }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="1.5" style={{ marginBottom: 12 }}>
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <p style={{ fontWeight: 700, color: '#333', marginBottom: 4 }}>Thank you!</p>
                        <p style={{ fontSize: '0.85em', color: '#888' }}>Our team will contact you shortly.</p>
                      </div>
                    ) : (
                      <form id="request_callback_form" className="form" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                        <div className="form-group mb-3">
                          <label className="form-label" style={{ fontSize: '0.82em', color: '#555', display: 'block', marginBottom: 4 }}>Your Name*</label>
                          <input type="text" className="form-control" id="your_name" placeholder="Enter Your Name" required
                            value={formData.name} onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
                            style={{ width: '100%', padding: '9px 0', border: 'none', borderBottom: '1px solid #ddd', outline: 'none', fontSize: '0.875em', background: 'transparent' }}
                          />
                        </div>

                        <div className="form-group with-country-code mb-3">
                          <label className="form-label" style={{ fontSize: '0.82em', color: '#555', display: 'block', marginBottom: 4 }}>Mobile*</label>
                          <div className="sm-select is-flex" style={{ gap: 8, borderBottom: '1px solid #ddd', paddingBottom: 4 }}>
                            <select className="form-control select" style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: '0.85em', color: '#555', width: 'auto', padding: '6px 0' }}>
                              <option value="+91">▾ +91 India</option>
                              <option value="+971">+971 UAE</option>
                              <option value="+1">+1 USA</option>
                              <option value="+44">+44 UK</option>
                            </select>
                            <input type="tel" className="form-control" id="mobile_callback" placeholder="Your Mobile" required
                              value={formData.mobile} onChange={e => setFormData(f => ({ ...f, mobile: e.target.value }))}
                              style={{ flex: 1, border: 'none', outline: 'none', fontSize: '0.875em', background: 'transparent' }}
                            />
                          </div>
                        </div>

                        <div className="form-group mb-3">
                          <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.78em', color: '#666', cursor: 'pointer' }}>
                            <input type="checkbox" checked={formData.whatsapp} onChange={e => setFormData(f => ({ ...f, whatsapp: e.target.checked }))} />
                            Do you have WhatsApp activated on this number?
                          </label>
                        </div>

                        <div className="form-group mb-3">
                          <label className="form-label" style={{ fontSize: '0.82em', color: '#555', display: 'block', marginBottom: 4 }}>Your Email*</label>
                          <input type="email" className="form-control" id="email_callback" placeholder="Enter Your Email" required
                            value={formData.email} onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
                            style={{ width: '100%', padding: '9px 0', border: 'none', borderBottom: '1px solid #ddd', outline: 'none', fontSize: '0.875em', background: 'transparent' }}
                          />
                        </div>

                        <div className="form-group mb-3">
                          <label className="form-label" style={{ fontSize: '0.82em', color: '#555', display: 'block', marginBottom: 4 }}>Schedule Date</label>
                          <input type="date" className="form-control" placeholder="Enter Schedule Date"
                            value={formData.scheduleDate} onChange={e => setFormData(f => ({ ...f, scheduleDate: e.target.value }))}
                            style={{ width: '100%', padding: '9px 0', border: 'none', borderBottom: '1px solid #ddd', outline: 'none', fontSize: '0.875em', background: 'transparent', color: formData.scheduleDate ? '#333' : '#aaa' }}
                          />
                        </div>

                        <div className="form-group mb-3">
                          <label className="form-label" style={{ fontSize: '0.82em', color: '#555', display: 'block', marginBottom: 4 }}>Schedule Time</label>
                          <div style={{ borderBottom: '1px solid #ddd', paddingBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                            <select className="form-control" value={formData.scheduleTime} onChange={e => setFormData(f => ({ ...f, scheduleTime: e.target.value }))}
                              style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: '0.875em', color: formData.scheduleTime ? '#333' : '#aaa', padding: '6px 0' }}>
                              <option value="">Select Time</option>
                              <option>09:00 AM</option><option>10:00 AM</option><option>11:00 AM</option>
                              <option>12:00 PM</option><option>02:00 PM</option><option>03:00 PM</option>
                              <option>04:00 PM</option><option>05:00 PM</option><option>06:00 PM</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group mb-3">
                          <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.78em', color: '#666', cursor: 'pointer' }}>
                            <input type="checkbox" checked={formData.newsletter} onChange={e => setFormData(f => ({ ...f, newsletter: e.target.checked }))} style={{ marginTop: 2 }} />
                            <span>Yes, I want to stay informed and receive newsletter and marketing updates.</span>
                          </label>
                        </div>

                        <p style={{ fontSize: '0.72em', color: '#aaa', lineHeight: 1.6, marginBottom: 14 }}>
                          By submitting this form you agree to the{' '}
                          <Link href="/terms-and-conditions" style={{ color: '#856d47' }}>Terms and Conditions</Link>{' '}
                          and{' '}
                          <Link href="/privacy-policy" style={{ color: '#856d47' }}>Privacy Policy</Link>
                        </p>

                        <button type="submit" className="theme-btn" style={{ width: '100%', padding: '12px', textAlign: 'center', fontSize: '0.9em', letterSpacing: '0.5px' }}>
                          Send OTP
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
