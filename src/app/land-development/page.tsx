'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const LAND_PROJECTS = [
    {
        slug: 'pearl-valley',
        name: 'Pearl Valley',
        location: 'Maheswaram, Hyderabad',
        status: 'Completed',
        statusClass: 'ready-to-move',
        type: 'Mega Housing Township',
        description: 'Pearl Valley is a mega future housing township site, strategically located just 5 km away from ORR and 7 kms away from the boundary of the Rajiv Gandhi International Airport.',
        gradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    },
    {
        slug: 'ruby-enclave',
        name: 'Ruby Enclave',
        location: 'Maheswaram Mandal, Hyderabad',
        status: 'Completed',
        statusClass: 'ready-to-move',
        type: 'Mega Housing Township',
        description: 'Ruby Enclave is keeping in mind the needs of our future settlements. Strategically placed between the upcoming Hardware Park at Maheswaram Mandal and Rajiv Gandhi International Airport.',
        gradient: 'linear-gradient(135deg, #7b4397 0%, #dc2430 100%)',
    },
    {
        slug: 'sapphire-slope',
        name: 'Sapphire Slope',
        location: 'Maheswaram Mandal, Hyderabad',
        status: 'Completed',
        statusClass: 'ready-to-move',
        type: 'Mega Housing Township',
        description: 'Sapphire Slopes is an ultra-modern development site which reflects the innovative essence of our urban community. It is a land development keeping in mind the needs of our future settlements.',
        gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    },
    {
        slug: 'emerald-park',
        name: 'Emerald Park',
        location: 'Shamshabad, Hyderabad',
        status: 'Completed',
        statusClass: 'ready-to-move',
        type: 'Mega Housing Township',
        description: 'Emerald Park is a mega future housing township site, offering complete tranquility and privacy to its members in a green and fertile land spread over 30 acres.',
        gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    },
];

const CITIES = ['All Cities', 'Hyderabad'];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function LandDevelopmentListing() {
    const [selectedCity, setSelectedCity] = useState('Hyderabad');

    const filteredProjects = selectedCity === 'All Cities'
        ? LAND_PROJECTS
        : LAND_PROJECTS.filter(p => p.location.includes(selectedCity));

    return (
        <main className="home-page-replica">
            {/* Hero Section */}
            <section className="section section-inner-page pt-6 pb-0">
                <div className="container">
                    <div className="section-title js-scroll fade-in-top scrolled">
                        <span className="theme-title">Our Ventures</span>
                        <h1>Land Development</h1>
                        <p className="mt-4" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
                            Zonah Developers takes immense pleasure in creating successful, dynamic, and innovative housing townships.
                            Our land development projects are strategically located near major hubs like the International Airport and Hardware Parks,
                            ensuring a high-quality living environment and immense investment potential.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="section py-5">
                <div className="container">
                    <div className="is-flex is-justify-content-center mb-6">
                        <div className="tabs-detail rounded-tabs is-flex is-gap-3 theme-scrollbar-horizontal">
                            {CITIES.map(city => (
                                <button
                                    key={city}
                                    onClick={() => setSelectedCity(city)}
                                    className={`theme-btn gray-btn line-btn rounded-pill ${selectedCity === city ? 'is-active' : ''}`}
                                    style={{
                                        background: selectedCity === city ? '#856d47' : 'transparent',
                                        borderColor: selectedCity === city ? '#856d47' : '#eee',
                                        color: selectedCity === city ? '#fff' : '#666',
                                        padding: '10px 24px',
                                    }}
                                >
                                    {city}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="columns is-multiline">
                        {filteredProjects.map((project, index) => (
                            <div key={project.slug} className="column is-12-mobile is-6-tablet is-4-desktop">
                                <ScrollReveal direction="up" distance={30} delay={index * 0.1}>
                                    <div className="project-card rounded-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl" style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
                                        {/* Image Placeholder */}
                                        <div className="project-card-img" style={{
                                            background: project.gradient,
                                            height: '240px',
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            <div className="project-status ready-to-move" style={{ position: 'absolute', top: '15px', right: '15px', background: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, color: '#856d47' }}>
                                                {project.status}
                                            </div>
                                            <div style={{ textAlign: 'center' }}>
                                                <div style={{ color: 'rgba(255,255,255,0.15)', fontSize: '80px', fontWeight: 200, letterSpacing: '10px', fontFamily: 'Georgia, serif' }}>ZD</div>
                                                <p style={{ color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '3px', marginTop: '10px' }}>Land Development</p>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="project-card-content p-5" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                            <div className="mb-2">
                                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest" style={{ color: '#aaa', fontSize: '0.7rem' }}>{project.type}</span>
                                                <h3 className="title is-4 mb-1" style={{ fontSize: '1.25rem', marginTop: '4px' }}>{project.name}</h3>
                                                <p className="flex items-center text-sm text-gray-500" style={{ fontSize: '0.85rem', color: '#888' }}>
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '14px', height: '14px', marginRight: '4px', display: 'inline' }}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    {project.location}
                                                </p>
                                            </div>
                                            <p className="description text-sm mb-5 text-gray-600" style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6, flex: 1, margin: '15px 0' }}>
                                                {project.description}
                                            </p>
                                            <Link href={`/land-development/${project.slug}`} className="theme-btn text-center" style={{ width: '100%', padding: '12px' }}>
                                                Explore Project
                                            </Link>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
