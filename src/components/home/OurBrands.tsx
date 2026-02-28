"use client";

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import ScrollReveal from '../animations/ScrollReveal';

const OurBrands = () => {
    return (
        <section className="section section-our-brand light-gray-bg">
            <div className="container our-brand-wrapper">
                <ScrollReveal direction="up" distance={30} className="section-title mb-5 has-text-centered">
                    <span className="theme-title">Verticals</span>
                    <h2>Our Brands</h2>
                </ScrollReveal>
            </div>
            <ScrollReveal direction="up" distance={30} delay={0.1} className="our-brand-logo-detail">
                <Splide
                    options={{
                        type: 'loop',
                        drag: 'free',
                        focus: 'center',
                        perPage: 6,
                        arrows: false,
                        pagination: false,
                        autoScroll: {
                            speed: 1,
                        },
                        breakpoints: {
                            1024: { perPage: 4 },
                            768: { perPage: 3 },
                            480: { perPage: 2 }
                        }
                    }}
                    extensions={{ AutoScroll }}
                    className="our-brand-logo-slider"
                    id="our-brand-logo-slider"
                >
                    <SplideSlide>
                        <img src="https://placehold.co/200x100/222222/FFF?text=Brand+1" alt="Brand 1" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="https://placehold.co/200x100/222222/FFF?text=Brand+2" alt="Brand 2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="https://placehold.co/200x100/222222/FFF?text=Brand+3" alt="Brand 3" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="https://placehold.co/200x100/222222/FFF?text=Brand+4" alt="Brand 4" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="https://placehold.co/200x100/222222/FFF?text=Brand+5" alt="Brand 5" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="https://placehold.co/200x100/222222/FFF?text=Brand+6" alt="Brand 6" />
                    </SplideSlide>
                </Splide>
                <Splide
                    options={{
                        type: 'loop',
                        drag: 'free',
                        focus: 'center',
                        perPage: 6,
                        arrows: false,
                        pagination: false,
                        direction: 'rtl',
                        autoScroll: {
                            speed: 1,
                        },
                        breakpoints: {
                            1024: { perPage: 4 },
                            768: { perPage: 3 },
                            480: { perPage: 2 }
                        }
                    }}
                    extensions={{ AutoScroll }}
                    className="our-brand-logo-slider"
                    id="our-brand-logo-slider2"
                >
                    <SplideSlide>
                        <img src="https://placehold.co/200x100/111111/FFF?text=Brand+7" alt="Brand 7" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="https://placehold.co/200x100/111111/FFF?text=Brand+8" alt="Brand 8" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="https://placehold.co/200x100/111111/FFF?text=Brand+9" alt="Brand 9" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="https://placehold.co/200x100/111111/FFF?text=Brand+10" alt="Brand 10" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="https://placehold.co/200x100/111111/FFF?text=Brand+11" alt="Brand 11" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="https://placehold.co/200x100/111111/FFF?text=Brand+12" alt="Brand 12" />
                    </SplideSlide>
                </Splide>
            </ScrollReveal>
        </section>
    );
};

export default OurBrands;
