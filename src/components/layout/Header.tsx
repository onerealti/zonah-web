'use client';

import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle body class when menu is opened/closed
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('insomenu-active');
            // Prevent scrolling on the body when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.classList.remove('insomenu-active');
            document.body.style.overflow = '';
        }

        return () => {
            document.body.classList.remove('insomenu-active');
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <header id="header" className={scrolled ? "scrolled" : ""}>
            <div id="header-wrap">
                <div className="navbar">
                    <div className="container">
                        <div className="columns is-vcentered is-mobile is-gapless">
                            <div className="column col-header col-middle">
                                <div className="theme-logo">
                                    <Link href="/">
                                        <div className="flex items-center mt-2">
                                            <h1 className="text-xl md:text-2xl font-serif text-white uppercase tracking-wider">
                                                Zonah Developers
                                            </h1>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="column col-header col-middle">
                                <ul className="theme-menu is-hidden-mobile">
                                    <li><Link href="/about-us">About</Link></li>
                                    <li><Link href="/residential-projects">Residential</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-detail-wrapper">
                    <div className="container">
                        <div className="menu-detail">
                            <div className="menu-btn-wrapper">
                                <Link className="theme-btn line-btn black-btn" href="/upcoming-projects">Upcoming Projects</Link>
                            </div>
                            <div className="header-search-menu is-flex cursor-pointer" onClick={() => { }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                    <path d="M21 21l-6 -6" />
                                </svg>
                            </div>
                            <div className="header-primary-menu-wrapper">
                                <div className="header-primary-menu-wrapper-inner">
                                    <div
                                        id="menu-trigger"
                                        className={`menu-trigger insomenu-bars ${menuOpen ? 'active' : ''}`}
                                        onClick={() => setMenuOpen(!menuOpen)}
                                    >
                                        <span />
                                    </div>
                                </div>
                            </div>
                            <div className="avatar-wrapper avatar-profile custom-dropdown profile is-hidden">
                                <div className="avatar theme-radius custom-dropdown-toggle">
                                    <span className="latter-j rounded-circle user-name-latter" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 z-[9998] transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMenuOpen(false)}
            />

            <nav id="header-primary-menu">
                <button id="closemenu" className="close" onClick={() => setMenuOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                </button>
                <ul id="header-menu" className="theme-scrollbar mt-12">
                    <li className="header-menu-item is-hidden-tablet">
                        <Link className="header-menu-link" href="/residential-projects" onClick={() => setMenuOpen(false)}>Residential</Link>
                    </li>
                    <li className="header-menu-item">
                        <Link className="header-menu-link" href="/about-us" onClick={() => setMenuOpen(false)}>About</Link>
                    </li>
                    <li className="header-menu-item">
                        <Link className="header-menu-link" href="/faq" onClick={() => setMenuOpen(false)}>FAQs</Link>
                    </li>
                    <li className="header-menu-item">
                        <Link className="header-menu-link" href="/contact-us" onClick={() => setMenuOpen(false)}>Contact</Link>
                    </li>
                </ul>
                <div className="social-icons-detail">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/ZonahDevelopers" target="_blank" rel="nofollow" className="social-icons">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/zonahdevelopers" target="_blank" rel="nofollow" className="social-icons">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M16.5 7.5l0 .01" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/zonahdevelopers" target="_blank" rel="nofollow" className="social-icons">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/zonah-developers" target="_blank" rel="nofollow" className="social-icons">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
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
                            <a href="https://www.youtube.com/@zonahdevelopers" target="_blank" rel="nofollow" className="social-icons">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                                    <path d="M10 9l5 3l-5 3z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header >
    );
}
