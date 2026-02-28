"use client";

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// @ts-ignore
import { SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const HeroSlider = () => {
    return (
        <section className="section section-banner p-0">
            <Splide
                id="main-slider"
                hasTrack={false}
                options={{
                    type: 'loop',
                    perPage: 1,
                    autoplay: true,
                    pauseOnHover: false,
                    pagination: false,
                    arrows: true,
                }}
                className="arrow-white"
            >
                <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev" type="button">
                        <svg className="icon icon-tabler icon-tabler-arrow-right" fill="none" height={24} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                            <path d="M5 12l14 0" />
                            <path d="M13 18l6 -6" />
                            <path d="M13 6l6 6" />
                        </svg>
                    </button>
                    <button className="splide__arrow splide__arrow--next" type="button">
                        <svg className="icon icon-tabler icon-tabler-arrow-right" fill="none" height={24} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                            <path d="M5 12l14 0" />
                            <path d="M13 18l6 -6" />
                            <path d="M13 6l6 6" />
                        </svg>
                    </button>
                </div>
                <SplideTrack>
                    {/* Slide 1 */}
                    <SplideSlide>
                        <div className="banner-placeholder w-full h-full relative">
                            <picture>
                                <source media="(min-width:768px)" srcSet="https://placehold.co/1920x800/222222/FFF?text=Hero+Banner+1" />
                                <img src="https://placehold.co/800x800/222222/FFF?text=Hero+Banner+1+(Mobile)" alt="Banner 1" style={{ width: '100%', display: 'block' }} />
                            </picture>
                        </div>
                    </SplideSlide>
                    {/* Slide 2 */}
                    <SplideSlide>
                        <div className="banner-placeholder w-full h-full relative">
                            <picture>
                                <source media="(min-width:768px)" srcSet="https://placehold.co/1920x800/111111/FFF?text=Hero+Banner+2" />
                                <img src="https://placehold.co/800x800/111111/FFF?text=Hero+Banner+2+(Mobile)" alt="Banner 2" style={{ width: '100%', display: 'block' }} />
                            </picture>
                        </div>
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        </section>
    );
};

export default HeroSlider;
