'use client';

import React, { useState } from 'react';

const PROJECTS = [
  {
    slug: 'zonah-crescent',
    name: 'Zonah Crescent',
    location: 'Road No 12, Banjara Hills',
    city: 'Hyderabad',
    status: 'Ongoing',
    type: 'Commercial Complex',
    image: '/images/commercial/crescent.jpg',
    description: 'A premium commercial complex in the heart of Banjara Hills between Ohri\'s and Landmark.'
  },
  {
    slug: 'paradise-pearl',
    name: 'Paradise Pearl',
    location: 'MG Road, Secunderabad',
    city: 'Hyderabad',
    status: 'Completed',
    type: 'Commercial & Residential',
    image: '/images/commercial/pearl.jpg',
    description: 'A 45,000 sq.ft. five-storied complex on the historic MG Road, Secunderabad.'
  },
  {
    slug: 'zonah-neptune',
    name: 'Zonah Neptune (SVM Mall)',
    location: 'Road No 36, Jubilee Hills',
    city: 'Hyderabad',
    status: 'Completed',
    type: 'Retail & Entertainment',
    image: '/images/commercial/neptune.jpg',
    description: 'Home to SVM Mall, featuring India\'s first glow-lane bowling alley and largest gaming arcade.'
  }
];

const CITIES = ['Hyderabad'];
const STATUSES = ['All', 'Ongoing', 'Completed'];

export default function CommercialProjects() {
  const [selectedCity, setSelectedCity] = useState('Hyderabad');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredProjects = PROJECTS.filter(project => {
    const cityMatch = project.city === selectedCity;
    const statusMatch = selectedStatus === 'All' || project.status === selectedStatus;
    return cityMatch && statusMatch;
  });

  return (
    <main className="home-page-replica">
      {/* Hero Section */}
      <section className="section section-inner-page pt-6 pb-6" style={{ background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/banners/commercial_banner.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '400px', display: 'flex', alignItems: 'center' }}>
        <div className="container has-text-centered">
          <h1 className="title is-1 has-text-white mb-4">Commercial Projects</h1>
          <p className="subtitle is-4 has-text-white">Landmark business addresses in the heart of the city.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section py-5 gray-bg">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <div className="is-flex is-gap-3 is-flex-wrap-wrap">
                {CITIES.map(city => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`theme-btn ${selectedCity === city ? '' : 'line-btn'}`}
                    style={{ padding: '8px 24px', fontSize: '0.9em' }}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
            <div className="column is-narrow">
              <div className="is-flex is-gap-2">
                {STATUSES.map(status => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`theme-btn is-small ${selectedStatus === status ? 'is-primary' : 'line-btn'}`}
                    style={{ padding: '6px 16px', borderRadius: '20px', fontSize: '0.85em', background: selectedStatus === status ? '#A88944' : 'transparent', color: selectedStatus === status ? 'white' : '#333' }}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section py-6">
        <div className="container">
          {filteredProjects.length > 0 ? (
            <div className="columns is-multiline">
              {filteredProjects.map(project => (
                <div key={project.slug} className="column is-12-mobile is-6-tablet is-4-desktop">
                  <div className="card project-card-modern shadow-sm" style={{ height: '100%', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
                    <div className="card-image" style={{ position: 'relative', height: '240px', background: '#f5f5f5' }}>
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)' }}>
                        <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: '48px', fontWeight: 'bold' }}>ZD</span>
                      </div>
                      <div className="project-status-tag" style={{ position: 'absolute', top: '15px', right: '15px', background: project.status === 'Completed' ? '#4CAF50' : '#A88944', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75em', fontWeight: 'bold', textTransform: 'uppercase' }}>
                        {project.status}
                      </div>
                    </div>
                    <div className="card-content p-5">
                      <p className="subtitle is-7 mb-1 golden-text is-uppercase font-weight-bold">{project.type}</p>
                      <h3 className="title is-4 mb-2">{project.name}</h3>
                      <p className="is-size-7 mb-3" style={{ color: '#666' }}>
                        <span className="icon-text">
                          <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
                          <span>{project.location}</span>
                        </span>
                      </p>
                      <p className="is-size-6 mb-5" style={{ color: '#444', height: '48px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                        {project.description}
                      </p>
                      <a href={`/commercial-projects/${project.slug}`} className="theme-btn is-fullwidth" style={{ display: 'block', textAlign: 'center', padding: '12px' }}>Explore Details</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="has-text-centered py-6">
              <p className="is-size-5 color-gray">No commercial projects found for the selected filters.</p>
              <button onClick={() => { setSelectedCity('Hyderabad'); setSelectedStatus('All'); }} className="theme-btn mt-4">Reset Filters</button>
            </div>
          )}
        </div>
      </section>

      {/* Land Development CTA */}
      <section className="section py-6 has-background-dark has-text-white">
        <div className="container has-text-centered">
          <h2 className="title is-2 has-text-white mb-5">Looking for Land Development?</h2>
          <p className="is-size-5 mb-5" style={{ opacity: 0.8 }}>We specialize in strategic land acquisition and plotted development across prime locations.</p>
          <a href="/land-development" className="theme-btn line-btn" style={{ borderColor: 'white', color: 'white' }}>View Land Projects</a>
        </div>
      </section>
    </main>
  );
}
