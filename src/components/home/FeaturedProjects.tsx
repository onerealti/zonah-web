"use client";

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// @ts-ignore
import { SplideTrack } from '@splidejs/react-splide';
import ScrollReveal from '../animations/ScrollReveal';

const FeaturedProjects = () => {
    return (
        <section className="section section-featured-projects light-gray-bg hide_featured_project">
            <div className="container featured-projects-wrapper">
                <ScrollReveal direction="up" distance={30} className="section-title section-title-with-arrow">
                    <span className="theme-title">Residential</span>
                    <h2>Featured Projects</h2>
                </ScrollReveal>

                <ScrollReveal direction="up" distance={30} delay={0.1}>
                    <Splide
                        hasTrack={false}
                        options={{
                            type: 'slide',
                            perPage: 1,
                            perMove: 1,
                            gap: '30px',
                            padding: {
                                right: '130px'
                            },
                            pagination: false,
                            arrows: true,
                            breakpoints: {
                                1408: {
                                    perPage: 1,
                                    padding: {
                                        right: '100px'
                                    }
                                },
                                1216: {
                                    perPage: 1,
                                    padding: {
                                        right: '0px'
                                    }
                                },
                                1024: {
                                    perPage: 2,
                                    gap: '24px'
                                },
                                768: {
                                    perPage: 1
                                }
                            }
                        }}
                        className="active-slider-visible"
                        id="featured-projects-slider"
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
                            <SplideSlide>
                                <div className="horizontal-projects-block">
                                    <div className="columns is-multiline is-gapless is-vcentered featured-projects-cols">
                                        <div className="column is-12-mobile is-12-tablet is-7-desktop is-7-widescreen featured-projects-col">
                                            <div className="featured-projects-img">
                                                <picture>
                                                    <img src="https://placehold.co/650x370/222222/FFF?text=Featured+Project+1" alt="Featured" className="img-fixed-ratio" width="650" height="370" />
                                                </picture>
                                            </div>
                                            <a href="#" className="block-link" data-cursor="Know<br>More"></a>
                                        </div>
                                        <div className="column is-12-mobile is-12-tablet is-5-desktop is-5-widescreen featured-projects-col">
                                            <div className="project-detail p-5">
                                                <div className="is-flex is-align-items-center is-gap-4">
                                                    <div className="project-logo">
                                                        <picture>
                                                            <img src="https://placehold.co/70x70/222222/FFF?text=Logo" alt="Logo" width="70" height="70" />
                                                        </picture>
                                                    </div>
                                                    <div className="project-title">
                                                        <h4>Zonah City</h4>
                                                        <span>Sarjapur Road, Bangalore</span>
                                                    </div>
                                                </div>
                                                <div className="project-configurations">
                                                    <ul>
                                                        <li>
                                                            <div className="project-configurations-items">
                                                                <div className="project-configurations-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-skyscraper" width="24" height="24" viewBox="0 0 26 26" strokeWidth="0.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                        <path d="M3 21l18 0"></path>
                                                                        <path d="M5 21v-14l8 -4v18"></path>
                                                                        <path d="M19 21v-10l-6 -4"></path>
                                                                        <path d="M9 9l0 .01"></path>
                                                                        <path d="M9 12l0 .01"></path>
                                                                        <path d="M9 15l0 .01"></path>
                                                                        <path d="M9 18l0 .01"></path>
                                                                    </svg>
                                                                </div>
                                                                <div className="project-configurations-desc">
                                                                    <h4>Project Type</h4>
                                                                    <span>Apartment</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="project-configurations-items">
                                                                <div className="project-configurations-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-border-inner" width="24" height="24" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                        <path d="M4 12l16 0"></path>
                                                                        <path d="M12 4l0 16"></path>
                                                                        <path d="M4 4l0 .01"></path>
                                                                        <path d="M8 4l0 .01"></path>
                                                                        <path d="M16 4l0 .01"></path>
                                                                        <path d="M20 4l0 .01"></path>
                                                                        <path d="M4 8l0 .01"></path>
                                                                        <path d="M20 8l0 .01"></path>
                                                                        <path d="M4 16l0 .01"></path>
                                                                        <path d="M20 16l0 .01"></path>
                                                                        <path d="M4 20l0 .01"></path>
                                                                        <path d="M8 20l0 .01"></path>
                                                                        <path d="M16 20l0 .01"></path>
                                                                        <path d="M20 20l0 .01"></path>
                                                                    </svg>
                                                                </div>
                                                                <div className="project-configurations-desc">
                                                                    <h4>Bedrooms</h4>
                                                                    <span>1, 2, 3 BHK</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="project-configurations-items">
                                                                <div className="project-configurations-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shape" width="24" height="24" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                        <path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                                                        <path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                                                        <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                                                        <path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                                                        <path d="M5 7l0 10"></path>
                                                                        <path d="M7 5l10 0"></path>
                                                                        <path d="M7 19l10 0"></path>
                                                                        <path d="M19 7l0 10"></path>
                                                                    </svg>
                                                                </div>
                                                                <div className="project-configurations-desc">
                                                                    <h4>Development Size</h4>
                                                                    <span>10 Acres</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="project-configurations-items">
                                                                <div className="project-configurations-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid-dots" width="24" height="24" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                        <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                        <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                        <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                        <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                        <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                        <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                        <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                        <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                    </svg>
                                                                </div>
                                                                <div className="project-configurations-desc">
                                                                    <h4>Total Units</h4>
                                                                    <span>500 Units</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="project-price-and-contact">
                                                    <ul>
                                                        <li className="project-price-and-contact-item project-price open_enquirey_sidebar" data-projectid="1" data-projectname="Zonah City">
                                                            <span className="theme-btn full-width">Price on Request</span>
                                                        </li>
                                                        <li className="project-price-and-contact-item">
                                                            <a href="#" className="theme-btn line-btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                                                </svg>
                                                            </a>
                                                        </li>
                                                        <li className="project-price-and-contact-item">
                                                            <a href="#" className="theme-btn line-btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send open_enquirey_sidebar_featured enquirylabel" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M10 14l11 -11" />
                                                                    <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                                                                </svg>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <a href="#" className="block-link" data-cursor="Know<br>More"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="horizontal-projects-block">
                                    <div className="columns is-multiline is-gapless is-vcentered featured-projects-cols">
                                        <div className="column is-12-mobile is-12-tablet is-7-desktop is-7-widescreen featured-projects-col">
                                            <div className="featured-projects-img">
                                                <picture>
                                                    <img src="https://placehold.co/650x370/333333/FFF?text=Featured+Project+2" alt="Featured" className="img-fixed-ratio" width="650" height="370" />
                                                </picture>
                                            </div>
                                            <a href="#" className="block-link" data-cursor="Know<br>More"></a>
                                        </div>
                                        <div className="column is-12-mobile is-12-tablet is-5-desktop is-5-widescreen featured-projects-col">
                                            <div className="project-detail p-5">
                                                <div className="is-flex is-align-items-center is-gap-4">
                                                    <div className="project-logo">
                                                        <picture>
                                                            <img src="https://placehold.co/70x70/222222/FFF?text=Logo" alt="Logo" width="70" height="70" />
                                                        </picture>
                                                    </div>
                                                    <div className="project-title">
                                                        <h4>Zonah Golfshire</h4>
                                                        <span>Nandi Hills, Bangalore</span>
                                                    </div>
                                                </div>
                                                <div className="project-configurations">
                                                    <ul>
                                                        <li>
                                                            <div className="project-configurations-items">
                                                                <div className="project-configurations-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-skyscraper" width="24" height="24" viewBox="0 0 26 26" strokeWidth="0.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                        <path d="M3 21l18 0"></path>
                                                                        <path d="M5 21v-14l8 -4v18"></path>
                                                                        <path d="M19 21v-10l-6 -4"></path>
                                                                        <path d="M9 9l0 .01"></path>
                                                                        <path d="M9 12l0 .01"></path>
                                                                        <path d="M9 15l0 .01"></path>
                                                                        <path d="M9 18l0 .01"></path>
                                                                    </svg>
                                                                </div>
                                                                <div className="project-configurations-desc">
                                                                    <h4>Project Type</h4>
                                                                    <span>Villa</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="project-configurations-items">
                                                                <div className="project-configurations-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-border-inner" width="24" height="24" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                        <path d="M4 12l16 0"></path>
                                                                        <path d="M12 4l0 16"></path>
                                                                        <path d="M4 4l0 .01"></path>
                                                                        <path d="M8 4l0 .01"></path>
                                                                        <path d="M16 4l0 .01"></path>
                                                                        <path d="M20 4l0 .01"></path>
                                                                        <path d="M4 8l0 .01"></path>
                                                                        <path d="M20 8l0 .01"></path>
                                                                        <path d="M4 16l0 .01"></path>
                                                                        <path d="M20 16l0 .01"></path>
                                                                        <path d="M4 20l0 .01"></path>
                                                                        <path d="M8 20l0 .01"></path>
                                                                        <path d="M16 20l0 .01"></path>
                                                                        <path d="M20 20l0 .01"></path>
                                                                    </svg>
                                                                </div>
                                                                <div className="project-configurations-desc">
                                                                    <h4>Bedrooms</h4>
                                                                    <span>4 BHK</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="project-configurations-items">
                                                                <div className="project-configurations-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shape" width="24" height="24" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                        <path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                                                        <path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                                                        <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                                                        <path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                                                        <path d="M5 7l0 10"></path>
                                                                        <path d="M7 5l10 0"></path>
                                                                        <path d="M7 19l10 0"></path>
                                                                        <path d="M19 7l0 10"></path>
                                                                    </svg>
                                                                </div>
                                                                <div className="project-configurations-desc">
                                                                    <h4>Development Size</h4>
                                                                    <span>50 Acres</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="project-configurations-items">
                                                                <div className="project-configurations-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid-dots" width="24" height="24" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                        <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                        <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                        <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                        <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                        <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                        <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                        <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                        <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                                    </svg>
                                                                </div>
                                                                <div className="project-configurations-desc">
                                                                    <h4>Total Units</h4>
                                                                    <span>100 Villas</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="project-price-and-contact">
                                                    <ul>
                                                        <li className="project-price-and-contact-item project-price open_enquirey_sidebar" data-projectid="2" data-projectname="Zonah Golfshire">
                                                            <span className="theme-btn full-width">₹ 5.5 Cr onwards</span>
                                                        </li>
                                                        <li className="project-price-and-contact-item">
                                                            <a href="#" className="theme-btn line-btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                                                </svg>
                                                            </a>
                                                        </li>
                                                        <li className="project-price-and-contact-item">
                                                            <a href="#" className="theme-btn line-btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send open_enquirey_sidebar_featured enquirylabel" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M10 14l11 -11" />
                                                                    <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                                                                </svg>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <a href="#" className="block-link" data-cursor="Know<br>More"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        </SplideTrack>
                    </Splide>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default FeaturedProjects;
