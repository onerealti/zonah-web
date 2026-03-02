'use client';

import React, { useState, useEffect } from 'react';
import { getListingProjects, projectSegments, type ListingProject } from '@/data/projects';

import ScrollReveal from '../animations/ScrollReveal';

const OurProjects = () => {
    const [projects, setProjects] = useState<ListingProject[]>([]);

    useEffect(() => {
        getListingProjects().then((data) => {
            setProjects(data);
        });
    }, []);

    const segmentCards = projectSegments.map((segment) => ({
        key: segment.id,
        label: segment.name,
        count: projects.filter((project) => project.segment === segment.id).length,
        href: `/projects?segment=${segment.id}`,
    }));

    return (
        <section className="section section-our-projects light-gray-bg">
            <div className="container our-projects-wrapper">
                <div className="columns is-multiline is-vcentered our-projects-cols gap-1">
                    {/* Left column: segment cards */}
                    <div className="column is-12-mobile is-12-tablet is-7-desktop is-7-widescreen our-projects-col">
                        <div className="our-projects-detail">
                            <ScrollReveal direction="up" distance={30} className="section-title">
                                <span className="theme-title">Operational Segments</span>
                                <h2>Projects</h2>
                            </ScrollReveal>

                            <ScrollReveal direction="up" distance={30} delay={0.1} className="our-projects-tab-detail section3">
                                <div className="our-projects-tab-desc-detail">
                                    <ul className="projects-location-detail">
                                        {segmentCards.map((card) => (
                                            <li key={card.key}>
                                                <div className="projects-location-items-index cursor-pointer click_projects">
                                                    <h4>{card.label}</h4>
                                                    <span>{card.count} Projects Available</span>
                                                    <a className="projects-location-view-all view_projects call_project" data-type={card.label} href={card.href}>
                                                        View All
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.25" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M17 7l-10 10"></path>
                                                            <path d="M8 7l9 0l0 9"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Right column: map */}
                    <div className="column is-12-mobile is-12-tablet is-5-desktop is-5-widescreen our-projects-col">
                        <div className="theme-block card p-1">
                            <div id="map" style={{ height: '420px', borderRadius: '4px', overflow: 'hidden' }}>
                                <iframe
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent('India')}&t=&z=5&ie=UTF8&iwloc=&output=embed`}
                                    width="100%"
                                    height="420"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Project Locations Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurProjects;
