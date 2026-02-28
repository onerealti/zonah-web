'use client';

import React from 'react';
import ScrollReveal from '../animations/ScrollReveal';

const AboutUs = () => {
    return (
        <section className="section section-about-us">
            <div className="container home-about-us-wrapper">
                <ScrollReveal direction="up" distance={30} className="section-title">
                    <span className="theme-title">About Zonah Developers</span>
                </ScrollReveal>

                <div className="columns is-multiline is-vcentered about-us-cols gap-5">
                    {/* Left column: text content */}
                    <div className="column is-12-mobile is-12-tablet is-7-desktop is-7-widescreen about-us-col">
                        <ScrollReveal direction="up" distance={30} delay={0.1} className="about-us-detail">
                            <h2 className="mb-4">
                                Building Real Estate that is <br />
                                <span>appreciating</span> &amp; <span>reliable</span>
                            </h2>
                            <p className="mb-4">
                                Over the last decade, Zonah Developers has firmly established itself as one of the leading and most successful developers of real estate in India by imprinting its indelible mark across all asset classes.
                            </p>
                            <p className="mb-4">
                                With a portfolio spanning residential, commercial, hospitality, and retail segments, Zonah has delivered landmark developments that redefine skylines across major Indian cities — from Bangalore and Hyderabad to Chennai and Mumbai.
                            </p>
                            <a href="/about-us" className="theme-btn mt-4">Know More</a>
                        </ScrollReveal>
                    </div>

                    {/* Right column: stats */}
                    <div className="column is-12-mobile is-12-tablet is-5-desktop is-5-widescreen about-us-col border-left border-theme">
                        <ScrollReveal direction="up" distance={30} delay={0.2} className="about-us-counter-detail">
                            <div className="columns is-multiline is-mobile about-us-counter-cols">
                                <div className="column is-6-mobile is-6-tablet is-6-desktop is-6-widescreen">
                                    <div className="counter-item">
                                        <h3>300+</h3>
                                        <p>Projects Completed</p>
                                    </div>
                                </div>
                                <div className="column is-6-mobile is-6-tablet is-6-desktop is-6-widescreen">
                                    <div className="counter-item">
                                        <h3>190+</h3>
                                        <p>Total mn sq.ft Delivered</p>
                                    </div>
                                </div>
                                <div className="column is-6-mobile is-6-tablet is-6-desktop is-6-widescreen">
                                    <div className="counter-item">
                                        <h3>45+</h3>
                                        <p>Years of Excellence</p>
                                    </div>
                                </div>
                                <div className="column is-6-mobile is-6-tablet is-6-desktop is-6-widescreen">
                                    <div className="counter-item">
                                        <h3>50,000+</h3>
                                        <p>Happy Families</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
