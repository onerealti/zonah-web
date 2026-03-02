import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../animations/ScrollReveal';

const Footer = () => {
    return (
        <footer className="section section-footer">
            <video preload="none" className="is-hidden-mobile" width="100%" height="auto" autoPlay muted loop playsInline>
                <source src="/resources/media/images/footer-video-bg.mp4" type="video/mp4" />
            </video>
            <ScrollReveal direction="up" distance={30} className="container">
                <div className="footer-menu dark">
                    <div className="columns is-multiline is-mobile">
                        {/* Reach Us */}
                        <div className="column is-6-mobile is-3-tablet is-4-desktop is-4-widescreen col-footer-menu">
                            <div className="footer-menu-detail footer-contact-detail">
                                <h4>Reach Us</h4>
                                <ul>
                                    <li>
                                        <span>
                                            <b className="has-text-weight-semibold">Corporate Address: </b>
                                            <a href="https://www.google.com/maps/search/Zonah+s+Crescent+Road+No.12+Banjara+Hills+Hyderabad" target="_blank" rel="nofollow">
                                                8-2-682/2/E, 5th Floor zonah&apos;s Crescent,<br /> Road No.12, Banjara Hills,<br /> Hyderabad, Telangana, India
                                            </a>
                                        </span>
                                    </li>
                                    <li>
                                        <span>For sales enquiries:<a href="tel:+91995998980"><b className="has-text-weight-semibold click_sales_enquiry_number">+91 99599 8980</b></a></span>
                                    </li>
                                    <li>
                                        <span>For other enquiries:<a href="tel:+914040246789"><b className="has-text-weight-semibold click_other_enquiry_number">+91 40 4024 6789</b></a></span>
                                    </li>
                                    <li>
                                        <span>Email:<a className="email-text" href="mailto:aliazam@zonahdevelopers.com"><b className="has-text-weight-semibold click_website_email_properties">aliazam@zonahdevelopers.com</b></a></span>
                                    </li>
                                    <li>
                                        <div className="social-icons-detail footer-social-icons mt-5">
                                            <ul>
                                                <li>
                                                    <a href="https://www.facebook.com/zonahdevelopers?ref=hl" target="_blank" rel="nofollow" className="social-icons" data-description="facebook">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Quick Menu */}
                        <div className="column is-6-mobile is-3-tablet is-3-desktop is-4-widescreen col-footer-menu">
                            <div className="footer-menu-detail">
                                <h4>Quick Menu</h4>
                                <ul>
                                    <li><Link href="/about-us">About Us</Link></li>
                                    <li><Link href="/projects">Projects</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="column is-6-mobile is-3-tablet is-5-desktop is-4-widescreen col-footer-menu">
                            <div className="footer-menu-detail">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li>
                                    <li><Link href="/disclaimer">Disclaimer</Link></li>
                                    <li><Link href="/about-us/board-of-directors">Management Team</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="copyright-detail dark mb-3">
                    <small>&copy; <span className="bind_current_year">{new Date().getFullYear()}</span> Official Website of Zonah Developers | All Rights Reserved.</small>
                </div>
            </ScrollReveal>
        </footer>
    );
};

export default Footer;
