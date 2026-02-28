'use client';

import React, { useState } from 'react';

type SegmentTab = 'residential' | 'commercial' | 'hospitality' | 'retail';

type LocationItem = {
    location: string;
    count: number;
    href: string;
};

import ScrollReveal from '../animations/ScrollReveal';

const segmentData: Record<SegmentTab, LocationItem[]> = {
    residential: [
        { location: 'Bengaluru', count: 86, href: '/residential-projects?city=bengaluru' },
        { location: 'Hyderabad', count: 14, href: '/residential-projects?city=hyderabad' },
        { location: 'Chennai', count: 10, href: '/residential-projects?city=chennai' },
        { location: 'Mumbai', count: 8, href: '/residential-projects?city=mumbai' },
        { location: 'Kochi', count: 6, href: '/residential-projects?city=kochi' },
        { location: 'Mangalore', count: 4, href: '/residential-projects?city=mangalore' },
    ],
    commercial: [
        { location: 'Bengaluru', count: 35, href: '/commercial-projects?city=bengaluru' },
        { location: 'Hyderabad', count: 8, href: '/commercial-projects?city=hyderabad' },
        { location: 'Chennai', count: 6, href: '/commercial-projects?city=chennai' },
        { location: 'Mumbai', count: 5, href: '/commercial-projects?city=mumbai' },
    ],
    hospitality: [
        { location: 'Bengaluru', count: 12, href: '/hospitality-projects?city=bengaluru' },
        { location: 'Hyderabad', count: 4, href: '/hospitality-projects?city=hyderabad' },
        { location: 'Chennai', count: 3, href: '/hospitality-projects?city=chennai' },
        { location: 'Kochi', count: 2, href: '/hospitality-projects?city=kochi' },
    ],
    retail: [
        { location: 'Bengaluru', count: 18, href: '/retail-projects?city=bengaluru' },
        { location: 'Hyderabad', count: 5, href: '/retail-projects?city=hyderabad' },
        { location: 'Chennai', count: 4, href: '/retail-projects?city=chennai' },
        { location: 'Mumbai', count: 3, href: '/retail-projects?city=mumbai' },
    ],
};

const tabs: { key: SegmentTab; label: string }[] = [
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'hospitality', label: 'Hospitality' },
    { key: 'retail', label: 'Retail' },
];

const OurProjects = () => {
    const [activeTab, setActiveTab] = useState<SegmentTab>('residential');
    const [activeLocation, setActiveLocation] = useState<string>('Bengaluru');

    const handleTabChange = (tabKey: SegmentTab) => {
        setActiveTab(tabKey);
        if (segmentData[tabKey].length > 0) {
            setActiveLocation(segmentData[tabKey][0].location);
        }
    };

    return (
        <section className="section section-our-projects light-gray-bg">
            <div className="container our-projects-wrapper">
                <div className="columns is-multiline is-vcentered our-projects-cols gap-1">
                    {/* Left column: tabs + project location counts */}
                    <div className="column is-12-mobile is-12-tablet is-7-desktop is-7-widescreen our-projects-col">
                        <div className="our-projects-detail">
                            <ScrollReveal direction="up" distance={30} className="section-title">
                                <span className="theme-title">Operational Segments</span>
                                <h2>Projects</h2>
                            </ScrollReveal>

                            <ScrollReveal direction="up" distance={30} delay={0.1} className="our-projects-tab-detail section3">
                                <ul className="tabs-detail">
                                    {tabs.map((tab) => (
                                        <li
                                            key={tab.key}
                                            className={`tab${activeTab === tab.key ? ' is-active' : ''}`}
                                            onClick={() => handleTabChange(tab.key)}
                                        >
                                            <a>{tab.label}</a>
                                        </li>
                                    ))}
                                </ul>

                                <div className="our-projects-tab-desc-detail">
                                    {tabs.map((tab) => (
                                        <div
                                            key={tab.key}
                                            className={`content-tab ${tab.key === 'residential' ? 'residential_count_bind' : ''} ${tab.key === 'commercial' ? 'commercial_count_bind' : ''} ${tab.key === 'hospitality' ? 'hospitality_count_bind' : ''} ${tab.key === 'retail' ? 'retail_count_bind' : ''}`}
                                            id={`projects-${tab.key}`}
                                            style={{ display: activeTab === tab.key ? 'block' : 'none' }}
                                        >
                                            <ul className="projects-location-detail">
                                                {segmentData[tab.key].map((item, idx) => {
                                                    const viewAllLink = tab.key !== 'hospitality' && tab.key !== 'retail' ? (
                                                        <a className="projects-location-view-all view_projects call_project" data-type={tab.label} data-citycode={item.location.toLowerCase()} href={item.href}>
                                                            View All
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.25" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                <path d="M17 7l-10 10"></path>
                                                                <path d="M8 7l9 0l0 9"></path>
                                                            </svg>
                                                        </a>
                                                    ) : null;

                                                    const isActive = activeTab === tab.key && activeLocation === item.location;

                                                    return (
                                                        <li key={idx}>
                                                            <div
                                                                className={`projects-location-items-index cursor-pointer click_projects${isActive ? ' active' : ''}`}
                                                                data-type={tab.label}
                                                                data-citycode={item.location.toLowerCase()}
                                                                onClick={() => setActiveLocation(item.location)}
                                                            >
                                                                <h4>{item.location}</h4>
                                                                <span>{item.count} Projects Available</span>
                                                                {viewAllLink}
                                                            </div>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Right column: map */}
                    <div className="column is-12-mobile is-12-tablet is-5-desktop is-5-widescreen our-projects-col">
                        <div className="theme-block card p-1">
                            <div id="map" style={{ height: '420px', borderRadius: '4px', overflow: 'hidden' }}>
                                <iframe
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent(activeLocation + ', India')}&t=&z=10&ie=UTF8&iwloc=&output=embed`}
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
