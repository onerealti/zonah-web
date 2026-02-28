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
                        <div className="column is-6-mobile is-3-tablet is-3-desktop is-4-widescreen col-footer-menu">
                            <div className="footer-menu-detail footer-contact-detail">
                                <h4>Reach Us</h4>
                                <ul>
                                    <li>
                                        <span>
                                            <b className="has-text-weight-semibold">Corporate Address: </b>
                                            <a href="https://maps.app.goo.gl/3BMxbJ8ae54hP64UA" target="_blank" rel="nofollow">
                                                Zonah Developers Tower,<br /> 19, Brunton Road,<br /> Bengaluru - 560025,<br /> Karnataka, India
                                            </a>
                                        </span>
                                    </li>
                                    <li>
                                        <span>For sales enquiries:<a href="tel:18003130080"><b className="has-text-weight-semibold click_sales_enquiry_number">1800 313 0080</b></a></span>
                                    </li>
                                    <li>
                                        <span>For other enquiries:<a href="tel:+918025591080"><b className="has-text-weight-semibold click_other_enquiry_number">+91 80 2559 1080</b></a></span>
                                    </li>
                                    <li>
                                        <span>Email:<a className="email-text" href="mailto:contact@zonahdevelopers.com"><b className="has-text-weight-semibold click_website_email_properties">contact@zonahdevelopers.com</b></a></span>
                                    </li>
                                    <li>
                                        <div className="social-icons-detail footer-social-icons mt-5">
                                            <ul>
                                                <li>
                                                    <a href="https://www.facebook.com/Prestige.group" target="_blank" rel="nofollow" className="social-icons" data-description="facebook">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/prestigeconstructions" target="_blank" rel="nofollow" className="social-icons" data-description="instagram">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                                                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                                            <path d="M16.5 7.5l0 .01"></path>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/prestigegroup" target="_blank" rel="nofollow" className="social-icons" data-description="twitter">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.linkedin.com/company/prestige-group-bangalore" target="_blank" rel="nofollow" className="social-icons" data-description="linkedin">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                                            <path d="M8 11l0 5" />
                                                            <path d="M8 8l0 .01" />
                                                            <path d="M12 16l0 -5" />
                                                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.youtube.com/@prestigegroupindia/videos" target="_blank" rel="nofollow" className="social-icons" data-description="youtube">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path>
                                                            <path d="M10 9l5 3l-5 3z"></path>
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
                        <div className="column is-6-mobile is-3-tablet is-3-desktop is-3-widescreen col-footer-menu">
                            <div className="footer-menu-detail">
                                <h4>Quick Menu</h4>
                                <ul>
                                    <li><Link href="/about-us">About Us</Link></li>
                                    <li><Link href="/residential-projects">Residential</Link></li>
                                    <li><Link href="/offices">Offices</Link></li>
                                    <li><Link href="/resale-projects">Resale</Link></li>
                                    <li><Link href="/videos">Videos</Link></li>
                                    <li><Link href="/events">Events</Link></li>
                                    <li><Link href="/news" className="bindnewsdynamicurl">News Corner</Link></li>
                                    <li><Link href="/blog">Blogs</Link></li>
                                    <li><Link href="/faq">FAQs</Link></li>
                                    <li><Link href="/awards">Awards</Link></li>
                                    <li>
                                        <a href="https://jobs.prestigeconstructions.com/" target="_blank" rel="nofollow" title="Open Careers page in new tab">
                                            <div className="know-more-btn mt-0">
                                                Careers
                                                <div className="know-more-btn-icon">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.05078 5.05029L10.9503 5.05029" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M1.05036 14.9498L10.9499 5.05028" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M10.9497 14.9497L10.9497 5.05025" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li><a href="https://prestigepartnercircle.com/cp-web" rel="nofollow">Become a Channel Partner</a></li>
                                    <li>
                                        <a href="https://prestigefalconnews.com/" target="_blank" rel="nofollow" title="Open prestigefalconnews.com in new tab">
                                            <div className="know-more-btn mt-0">
                                                Falcon News
                                                <div className="know-more-btn-icon">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.05078 5.05029L10.9503 5.05029" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M1.05036 14.9498L10.9499 5.05028" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M10.9497 14.9497L10.9497 5.05025" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="column is-6-mobile is-3-tablet is-3-desktop is-3-widescreen col-footer-menu">
                            <div className="footer-menu-detail">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li>
                                        <a href="/falcon-connect" target="_blank" title="Open Customer Portal in new tab">
                                            <div className="know-more-btn mt-0">
                                                Customer Portal
                                                <div className="know-more-btn-icon">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.05078 5.05029L10.9503 5.05029" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M1.05036 14.9498L10.9499 5.05028" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M10.9497 14.9497L10.9497 5.05025" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li><Link href="/crisil-rating">Crisil Rating</Link></li>
                                    <li><Link href="/prestige-connect">Referral</Link></li>
                                    <li><Link href="/emi-calculator">EMI Calculator</Link></li>
                                    <li>
                                        <a href="https://morphdesigns.com/" target="_blank" rel="nofollow" title="Open morphdesigns.com in new tab">
                                            <div className="know-more-btn mt-0">
                                                Interior Design
                                                <div className="know-more-btn-icon">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.05078 5.05029L10.9503 5.05029" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M1.05036 14.9498L10.9499 5.05028" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M10.9497 14.9497L10.9497 5.05025" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li><Link href="/nri-corner">NRIs</Link></li>
                                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li>
                                    <li><Link href="/disclaimer">Disclaimer</Link></li>
                                    <li><Link href="/public-notices">Public Notices</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Investors */}
                        <div className="column is-6-mobile is-3-tablet is-3-desktop is-2-widescreen col-footer-menu">
                            <div className="footer-menu-detail">
                                <h4>Investors</h4>
                                <ul>
                                    <li><Link href="/our-investors">Investors</Link></li>
                                    <li><Link href="/our-investors/investors-downloads/financial-performance">Financial Performance</Link></li>
                                    <li><Link href="/our-investors/investors-downloads/share-holding-patterns">Share Holding Pattern</Link></li>
                                    <li>
                                        <a href="#" target="_blank" rel="nofollow" title="Open AGM Notice PDF in new tab">
                                            <div className="know-more-btn mt-0">
                                                AGM Notice
                                                <div className="know-more-btn-icon">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.05078 5.05029L10.9503 5.05029" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M1.05036 14.9498L10.9499 5.05028" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M10.9497 14.9497L10.9497 5.05025" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank" rel="nofollow" title="Open Annual Report PDF in new tab">
                                            <div className="know-more-btn mt-0">
                                                Annual Report
                                                <div className="know-more-btn-icon">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.05078 5.05029L10.9503 5.05029" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M1.05036 14.9498L10.9499 5.05028" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M10.9497 14.9497L10.9497 5.05025" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li><Link href="/esg">ESG</Link></li>
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
