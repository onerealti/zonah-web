"use client";

import React from 'react';
import Link from 'next/link';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function AboutUs() {
    const directors = [
        {
            name: "Mr. Ali Azam (B. Tech)",
            designation: "Managing Director",
            initials: "AA",
            link: "/about-us/board-of-directors/ali-azam",
            gradient: "linear-gradient(135deg,#1a1a2e,#0f3460)"
        },
        {
            name: "Mr. Hasan Azam (BBA)",
            designation: "Director of Construction",
            initials: "HA",
            link: "/about-us/board-of-directors/hasan-azam",
            gradient: "linear-gradient(135deg,#2c1a3e,#6b3a8a)"
        },
        {
            name: "Mr. Osama Azam (MBA)",
            designation: "Business Development Manager",
            initials: "OA",
            link: "/about-us/board-of-directors/osama-azam",
            gradient: "linear-gradient(135deg,#0a2a1a,#0f4d37)"
        },
        {
            name: "Mr. Zain Azam (B.E)",
            designation: "Project Manager",
            initials: "ZA",
            link: "/about-us/board-of-directors/zain-azam",
            gradient: "linear-gradient(135deg,#1a0a0a,#7a2020)"
        }
    ];

    const splideOptions = {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        gap: '2rem',
        arrows: true,
        pagination: false,
        breakpoints: {
            1024: { perPage: 3 },
            768: { perPage: 2 },
            480: { perPage: 1 }
        }
    };

    return (
        <main className="home-page-replica aboutus-page">
            {/* Intro Section */}
            <section className="section section-about-us section-inner-page pt-6 aboutus-projects">
                <div className="container about-us-wrapper">
                    <div className="section-title js-scroll fade-in-top scrolled">
                        <h1 className="text-primary" style={{ fontFamily: 'var(--font-primary-serif)', color: '#856d47' }}>About us</h1>
                    </div>

                    <div className="section-title js-scroll fade-in-top scrolled">
                        <span className="theme-title">Our Philosophy</span>
                    </div>

                    <div className="columns is-multiline about-us-cols gap-5">
                        <div className="column is-12-mobile is-12-tablet is-7-desktop about-us-col">
                            <div className="js-scroll fade-in-bottom scrolled">
                                <h3 className="title is-4 golden-text mb-4" style={{ color: '#856d47' }}>Mission</h3>
                                <p className="mb-5" style={{ lineHeight: '1.8' }}>Our mission is to be one of the best real estate developers all across the globe, facilitated by the loyalty, dedication and expertise of our skilled staff. We understand the value of our customers&apos; time and hence prioritize on the timely completion of all our projects with equal commitment. We believe in exploring new ideas and technology, and implementing them in order to enhance the standards of our community and translate our clients&apos; vision of living into reality.</p>

                                <h3 className="title is-4 golden-text mb-3" style={{ color: '#856d47' }}>Vision</h3>
                                <p className="mb-4" style={{ lineHeight: '1.8' }}>Expanding our position in the arena of international construction, through the use of innovative technology is our vision. We aim at making the selling and buying of real estate faster, easier and a more affordable proposition. We embody the highest quality of work and envision on building prosperous and environment-friendly homes for our community to live in.</p>
                            </div>
                        </div>

                        <div className="column is-12-mobile is-12-tablet is-5-desktop about-us-col border-left border-theme">
                            <div className="about-us-counter-detail js-scroll fade-in-bottom scrolled">
                                <h3 className="title is-4 golden-text mb-4" style={{ color: '#856d47' }}>Core Values</h3>
                                <div className="columns is-multiline about-us-counter-cols">
                                    {[
                                        { val: "Integrity", label: "Honesty & Fairness" },
                                        { val: "Quality", label: "Immense Credibility" },
                                        { val: "Punctuality", label: "Time-Oriented" },
                                        { val: "Teamwork", label: "Agile Methodology" }
                                    ].map((stat, i) => (
                                        <div key={i} className="column is-6 about-us-counter-col">
                                            <div className="about-us-counter-item">
                                                <h4 className="text-primary mb-1" style={{ fontSize: '1.25rem', fontWeight: 600 }}>{stat.val}</h4>
                                                <span style={{ fontSize: '0.85rem', color: '#666' }}>{stat.label}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-5 is-size-7 has-text-grey">Other values: Competence, Confidence, Enthusiasm, Communication, Corporate Social Responsibility (CSR).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Management Team Section */}
            <section className="section section-board-of-member pb-6">
                <div className="section-title has-text-centered js-scroll fade-in-top scrolled mb-6">
                    <span className="theme-title">Our Leadership</span>
                    <h2>Management Team</h2>
                </div>

                <div className="container board-of-member-wrapper board-member">
                    <div className="about-us-wrapper mb-6">
                        <Splide options={splideOptions} className="board-of-director-slider">
                            {directors.map((director, index) => (
                                <SplideSlide key={index}>
                                    <Link href={director.link} className="board-member-card is-block" style={{ textDecoration: 'none' }}>
                                        <div className="member-img" style={{
                                            background: director.gradient,
                                            width: '100%',
                                            height: '280px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '8px',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                        }}>
                                            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '52px', fontWeight: 300 }}>
                                                {director.initials}
                                            </span>
                                        </div>
                                        <div className="member-info mt-4 has-text-centered">
                                            <h4 className="mb-1 title is-5 mb-1" style={{ color: '#303030' }}>{director.name}</h4>
                                            <span className="text-primary" style={{ fontSize: '0.9rem', color: '#856d47', fontWeight: 500 }}>{director.designation}</span>
                                        </div>
                                    </Link>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </div>
                </div>
            </section>
        </main>
    );
}
