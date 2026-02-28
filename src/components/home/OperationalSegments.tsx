'use client';

import React, { useState } from 'react';

type SegmentTab = 'residential' | 'commercial';

type LocationItem = {
    location: string;
    count: number;
};

type SegmentData = {
    [key in SegmentTab]: LocationItem[];
};

import ScrollReveal from '../animations/ScrollReveal';

const segmentData: SegmentData = {
    residential: [
        { location: 'Bangalore', count: 86 },
        { location: 'Hyderabad', count: 14 },
        { location: 'Chennai', count: 10 },
        { location: 'Mumbai', count: 8 },
        { location: 'Kochi', count: 6 },
        { location: 'Mangalore', count: 4 },
    ],
    commercial: [
        { location: 'Bangalore', count: 35 },
        { location: 'Hyderabad', count: 8 },
        { location: 'Chennai', count: 6 },
        { location: 'Mumbai', count: 5 },
    ],
};

const tabs: { key: SegmentTab; label: string }[] = [
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
];

const OperationalSegments = () => {
    const [activeTab, setActiveTab] = useState<SegmentTab>('residential');

    return (
        <section className="section section-our-projects light-gray-bg">
            <div className="container our-projects-wrapper">
                <div className="columns is-multiline is-vcentered our-projects-cols gap-1">
                    {/* Left column: tabs + project counts */}
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
                                            onClick={() => setActiveTab(tab.key)}
                                        >
                                            <a>{tab.label}</a>
                                        </li>
                                    ))}
                                </ul>

                                <div className="our-projects-tab-desc-detail">
                                    {tabs.map((tab) => (
                                        <div
                                            key={tab.key}
                                            className="content-tab"
                                            style={{ display: activeTab === tab.key ? 'block' : 'none' }}
                                            id={`projects-${tab.key}`}
                                        >
                                            <ul className="projects-location-detail">
                                                {segmentData[tab.key].map((item, idx) => (
                                                    <li key={idx}>
                                                        <a href="#">
                                                            <div className="projects-location-detail-items">
                                                                <div className="projects-location-detail-name">
                                                                    <span>{item.location}</span>
                                                                </div>
                                                                <div className="projects-location-detail-count">
                                                                    <span>{item.count}</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Right column: map placeholder */}
                    <div className="column is-12-mobile is-12-tablet is-5-desktop is-5-widescreen our-projects-col">
                        <div className="theme-block card p-1">
                            <div
                                id="map"
                                style={{
                                    width: '100%',
                                    minHeight: '400px',
                                    background: '#e8e8e8',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Map Embed Placeholder */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.99974437!2d77.35075734!3d12.95141012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1609325759875!5m2!1sen!2sin"
                                    width="100%"
                                    height="400"
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

export default OperationalSegments;
