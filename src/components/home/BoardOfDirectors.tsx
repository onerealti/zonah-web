"use client";

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// @ts-ignore
import { SplideTrack } from '@splidejs/react-splide';
import ScrollReveal from '../animations/ScrollReveal';

const BoardOfDirectors = () => {
    return (
        <section className="section section-board-of-director">
            <div className="container board-of-director-wrapper">
                <ScrollReveal direction="up" distance={30} className="section-title section-title-with-arrow">
                    <span className="theme-title">Board of</span>
                    <h2>Directors</h2>
                </ScrollReveal>

                <ScrollReveal direction="up" distance={30} delay={0.1}>
                    <Splide
                        hasTrack={false}
                        options={{
                            type: 'slide',
                            perPage: 3,
                            perMove: 1,
                            gap: '30px',
                            pagination: false,
                            arrows: true,
                            breakpoints: {
                                1024: { perPage: 2, gap: '24px' },
                                768: { perPage: 1 }
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
                            <SplideSlide>
                                <div className="theme-block">
                                    <div className="theme-block-img theme-block-img-with-link">
                                        <picture>
                                            <img loading="lazy" className="square-img-fixed-ratio" src="https://placehold.co/350x350/222222/FFF?text=Irfan+Razack" alt="Irfan Razack" width="350" height="350" />
                                        </picture>
                                        <a href="#" className="theme-block-icon" data-cursor="Know<br>More">
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.20557 17.7941L17.0996 3.9001" stroke="white" strokeWidth="0.982456" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17.7943 8.76318V3.20557" stroke="white" strokeWidth="0.982456" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12.2367 3.20557H17.7943" stroke="white" strokeWidth="0.982456" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="theme-block-title">
                                        <h4 className="is-capitalized">Irfan Razack</h4>
                                        <span className="is-capitalized">Chairman and Managing Director</span>
                                        <a href="#" className="block-link" data-cursor="Know<br>More"></a>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="theme-block">
                                    <div className="theme-block-img theme-block-img-with-link">
                                        <picture>
                                            <img loading="lazy" className="square-img-fixed-ratio" src="https://placehold.co/350x350/222222/FFF?text=Rezwan+Razack" alt="Rezwan Razack" width="350" height="350" />
                                        </picture>
                                        <a href="#" className="theme-block-icon" data-cursor="Know<br>More">
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.20557 17.7941L17.0996 3.9001" stroke="white" strokeWidth="0.982456" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17.7943 8.76318V3.20557" stroke="white" strokeWidth="0.982456" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12.2367 3.20557H17.7943" stroke="white" strokeWidth="0.982456" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="theme-block-title">
                                        <h4 className="is-capitalized">Rezwan Razack</h4>
                                        <span className="is-capitalized">Joint Managing Director</span>
                                        <a href="#" className="block-link" data-cursor="Know<br>More"></a>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="theme-block">
                                    <div className="theme-block-img theme-block-img-with-link">
                                        <picture>
                                            <img loading="lazy" className="square-img-fixed-ratio" src="https://placehold.co/350x350/222222/FFF?text=Noaman+Razack" alt="Noaman Razack" width="350" height="350" />
                                        </picture>
                                        <a href="#" className="theme-block-icon" data-cursor="Know<br>More">
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.20557 17.7941L17.0996 3.9001" stroke="white" strokeWidth="0.982456" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17.7943 8.76318V3.20557" stroke="white" strokeWidth="0.982456" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12.2367 3.20557H17.7943" stroke="white" strokeWidth="0.982456" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="theme-block-title">
                                        <h4 className="is-capitalized">Noaman Razack</h4>
                                        <span className="is-capitalized">Director</span>
                                        <a href="#" className="block-link" data-cursor="Know<br>More"></a>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="theme-block">
                                    <div className="theme-block-img theme-block-img-with-link">
                                        <picture>
                                            <img loading="lazy" className="square-img-fixed-ratio" src="https://placehold.co/350x350/222222/FFF?text=Tariq+Razack" alt="Tariq Razack" width="350" height="350" />
                                        </picture>
                                        <a href="#" className="theme-block-icon" data-cursor="Know<br>More">
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.20557 17.7941L17.0996 3.9001" stroke="white" strokeWidth="0.982456" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17.7943 8.76318V3.20557" stroke="white" strokeWidth="0.982456" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12.2367 3.20557H17.7943" stroke="white" strokeWidth="0.982456" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="theme-block-title">
                                        <h4 className="is-capitalized">Tariq Razack</h4>
                                        <span className="is-capitalized">Director</span>
                                        <a href="#" className="block-link" data-cursor="Know<br>More"></a>
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

export default BoardOfDirectors;
