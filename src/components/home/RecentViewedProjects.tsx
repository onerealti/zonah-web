"use client";

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// @ts-ignore
import { SplideTrack } from '@splidejs/react-splide';

import ScrollReveal from '../animations/ScrollReveal';

const RecentViewedProjects = () => {
    return (
        <section className="section section-recent-viewed-projects">
            <div className="container recent-viewed-projects-wrapper">
                <ScrollReveal direction="up" distance={30} className="section-title section-title-with-arrow has-text-centered">
                    <span className="theme-title">Recently Viewed</span>
                    <h2>Projects</h2>
                </ScrollReveal>

                <ScrollReveal direction="up" distance={30} delay={0.1}>
                    <Splide
                        hasTrack={false}
                        options={{
                            type: 'slide',
                            perPage: 4,
                            perMove: 1,
                            gap: '30px',
                            pagination: false,
                            arrows: true,
                            breakpoints: {
                                1024: {
                                    perPage: 2,
                                    gap: '24px'
                                },
                                768: {
                                    perPage: 1
                                }
                            }
                        }}
                        id="recent-viewed-projects-slider"
                    >
                        <SplideTrack>
                            <SplideSlide>
                                <div className="projects-col">
                                    <div className="project-vertical-block theme-block">
                                        <div className="projects-img theme-block-img">
                                            <picture>
                                                <img src="https://placehold.co/470x260/222222/FFF?text=Recent+1" alt="Recent 1" className="img-fixed-ratio" width="470" height="260" />
                                            </picture>
                                            <a href="#" className="block-link" data-cursor="Know<br>More"></a>
                                        </div>
                                        <div className="project-title-and-price mt-4">
                                            <div className="project-title">
                                                <h2>Zonah City</h2>
                                            </div>
                                            <div className="project-desc-price">
                                                <span>Sarjapur Road, Bangalore</span>
                                            </div>
                                            <a href="#" className="block-link" data-cursor="Know<br>More"></a>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="projects-col">
                                    <div className="project-vertical-block theme-block">
                                        <div className="projects-img theme-block-img">
                                            <picture>
                                                <img src="https://placehold.co/470x260/333333/FFF?text=Recent+2" alt="Recent 2" className="img-fixed-ratio" width="470" height="260" />
                                            </picture>
                                            <a href="#" className="block-link" data-cursor="Know<br>More"></a>
                                        </div>
                                        <div className="project-title-and-price mt-4">
                                            <div className="project-title">
                                                <h2>Zonah Golfshire</h2>
                                            </div>
                                            <div className="project-desc-price">
                                                <span>Nandi Hills, Bangalore</span>
                                            </div>
                                            <a href="#" className="block-link" data-cursor="Know<br>More"></a>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        </SplideTrack>

                        <div className="splide__arrows arrow-top-slider">
                            <button aria-controls="" aria-label="Go to last slide" className="splide__arrow splide__arrow--prev" type="button">
                                <svg className="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                    <path d="M5 12l14 0"></path>
                                    <path d="M13 18l6 -6"></path>
                                    <path d="M13 6l6 6"></path>
                                </svg>
                            </button>
                            <button aria-controls="" aria-label="Next slide" className="splide__arrow splide__arrow--next" type="button">
                                <svg className="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                    <path d="M5 12l14 0"></path>
                                    <path d="M13 18l6 -6"></path>
                                    <path d="M13 6l6 6"></path>
                                </svg>
                            </button>
                        </div>
                    </Splide>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default RecentViewedProjects;
