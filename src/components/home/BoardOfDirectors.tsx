"use client";

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// @ts-expect-error - SplideTrack type not fully exported
import { SplideTrack } from '@splidejs/react-splide';
import ScrollReveal from '../animations/ScrollReveal';

const BoardOfDirectors = () => {
    return (
        <section className="section section-board-of-director">
            <div className="container board-of-director-wrapper">
                <ScrollReveal direction="up" distance={30} className="section-title section-title-with-arrow">
                    <span className="theme-title">Our</span>
                    <h2>Leadership</h2>
                </ScrollReveal>

                <ScrollReveal direction="up" distance={30} delay={0.1}>
                    <Splide
                        hasTrack={false}
                        options={{
                            type: 'loop',
                            perPage: 4,
                            perMove: 1,
                            gap: '30px',
                            pagination: false,
                            arrows: true,
                            breakpoints: {
                                1024: { perPage: 3, gap: '24px' },
                                768: { perPage: 2 },
                                480: { perPage: 1 }
                            }
                        }}
                        id="board-of-director-slider"
                    >
                        <div className="splide__arrows arrow-top-slider">
                            <button className="splide__arrow splide__arrow--prev" type="button">
                                <svg className="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                    <path d="M5 12l14 0"></path>
                                    <path d="M13 18l6 -6"></path>
                                    <path d="M13 6l6 6"></path>
                                </svg>
                            </button>
                            <button className="splide__arrow splide__arrow--next" type="button">
                                <svg className="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                    <path d="M5 12l14 0"></path>
                                    <path d="M13 18l6 -6"></path>
                                    <path d="M13 6l6 6"></path>
                                </svg>
                            </button>
                        </div>

                        <SplideTrack>
                            {[
                                { name: "Mr. Ali Azam", designation: "Managing Director", initials: "AA" },
                                { name: "Mr. Hasan Azam", designation: "Director of Construction", initials: "HA" },
                                { name: "Mr. Osama Azam", designation: "Business Development Manager", initials: "OA" },
                                { name: "Mr. Zain Azam", designation: "Project Manager", initials: "ZA" }
                            ].map((member, i) => (
                                <SplideSlide key={i}>
                                    <div className="theme-block">
                                        <div className="theme-block-img theme-block-img-with-link">
                                            <div style={{
                                                background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
                                                width: '100%',
                                                height: '350px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: '4px'
                                            }}>
                                                <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: '72px', fontWeight: 'bold' }}>{member.initials}</span>
                                            </div>
                                            <a href="/about-us" className="theme-block-icon" data-cursor="Know<br>More">
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.20557 17.7941L17.0996 3.9001" stroke="white" strokeWidth="0.982456" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M17.7943 8.76318V3.20557" stroke="white" strokeWidth="0.982456" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M12.2367 3.20557H17.7943" stroke="white" strokeWidth="0.982456" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="theme-block-title">
                                            <h4 className="is-capitalized">{member.name}</h4>
                                            <span className="is-capitalized">{member.designation}</span>
                                            <a href="/about-us" className="block-link" data-cursor="Know<br>More"></a>
                                        </div>
                                    </div>
                                </SplideSlide>
                            ))}
                        </SplideTrack>
                    </Splide>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default BoardOfDirectors;
