"use client";

import React, { useState } from 'react';

export default function UpcomingProjects() {
    const [formData, setFormData] = useState({
        your_name: '',
        countrycode: '+91',
        mobile_callback: '',
        email_callback: '',
        location: '',
        propertytype: '',
        source: '',
        agree_to_be_contacted: false,
        whatsapp_nri_request_call_back: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you! Your request has been received. Our team will contact you shortly.');
        console.log('Form Submitted:', formData);
    };

    return (
        <main className="home-page-replica upcomingprojects-page">
            <section className="section section-upcoming-projects-inner-page section-inner-page overflow-visible z-index-1 pt-6">
                <div className="container upcoming-projects-inner-page-wrapper">
                    <div className="columns is-mobile is-multiline upcoming-projects-inner-page-cols">
                        <div className="column is-12-mobile is-12-tablet is-7-desktop is-8-widescreen upcoming-projects-inner-page-col">
                            <div className="upcoming-projects-inner-page-detail js-scroll fade-in-left scrolled">
                                <div className="section-title">
                                    <span className="theme-title">Register &amp; Stay Updated</span>
                                    <h1>
                                        Upcoming Residential Launches Across India
                                    </h1>
                                </div>

                                <p className="mb-4">
                                    Zonah Developers continues to shape the future of urban living with a thoughtfully curated portfolio of upcoming properties across India’s most dynamic cities. With a strong presence in Bangalore, Hyderabad, Delhi NCR, Mumbai, Chennai, Kochi, Kozhikode, Goa, and Mangalore, the brand is preparing to unveil residential communities that blend intelligent design, everyday comfort, and elevated lifestyles.
                                </p>

                                <p className="mb-4">
                                    In Bangalore, the pipeline includes a diverse mix of new upcoming apartments and upcoming villa projects in Bangalore, spanning contemporary high-rises and expansive, low-density enclaves. Select pre launch projects in Bangalore are also set to offer early access to thoughtfully planned communities across emerging growth corridors. Together, these upcoming real estate projects in Bangalore reflect the city’s evolving aspirations and its continued appeal as a preferred residential destination.
                                </p>

                                <p className="mb-4">
                                    Hyderabad is equally poised for growth, with a vibrant lineup of upcoming projects in Hyderabad. The portfolio will feature upcoming residential projects in Hyderabad, including pre launch apartments in Hyderabad and new launch projects in Hyderabad designed for modern families. Buyers can also look forward to pre launch gated community projects in Hyderabad and upcoming gated community projects in Hyderabad, alongside well-planned upcoming apartments in Hyderabad that prioritise connectivity, lifestyle amenities, and community living.
                                </p>

                                <p className="mb-4">
                                    The expansion continues in western and northern markets with upcoming residential projects in Mumbai and thoughtfully located upcoming projects in Delhi NCR, each tailored to suit contemporary urban lifestyles. In the south, upcoming apartments in Chennai and upcoming villa projects in Chennai promise a refined living experience, while upcoming projects in Kochi and upcoming projects in Kozhikode are set to introduce landmark developments rooted in regional character and modern sensibilities.
                                </p>
                                <p className="mb-4">
                                    Across cities, every development is envisioned to offer seamless access, efficient layouts, and vibrant social spaces. These upcoming projects are not just residences, but carefully crafted environments designed to grow with the ambitions of India’s new generation of homeowners.
                                </p>
                            </div>
                        </div>

                        <div className="column is-12-mobile is-12-tablet is-5-desktop is-4-widescreen upcoming-projects-inner-page-col">
                            <div className="gray-border p-5 js-scroll fade-in-right scrolled" style={{ border: '1px solid #e5e5e5', borderRadius: '8px' }}>
                                <h5 className="golden-text mb-4 is-uppercase" style={{ color: '#b8960c', fontWeight: 600, letterSpacing: '1px' }}>
                                    Request a callback
                                </h5>

                                <form className="form sm-form" onSubmit={handleSubmit}>
                                    <div className="columns is-multiline is-gapless">
                                        <div className="column is-12">
                                            <div className="col-form mb-4">
                                                <div className="form-group">
                                                    <label className="form-label mb-1 is-block" style={{ fontSize: '0.85em', color: '#555' }}>Your Name*</label>
                                                    <input
                                                        className="form-control"
                                                        name="your_name"
                                                        placeholder="Enter Your Name"
                                                        type="text"
                                                        value={formData.your_name}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="column is-12">
                                            <div className="col-form mb-4">
                                                <div className="form-group">
                                                    <label className="form-label mb-1 is-block" style={{ fontSize: '0.85em', color: '#555' }}>Mobile*</label>
                                                    <div className="is-flex" style={{ gap: '8px' }}>
                                                        <select
                                                            className="form-control"
                                                            name="countrycode"
                                                            value={formData.countrycode}
                                                            onChange={handleInputChange}
                                                            style={{ maxWidth: '80px' }}
                                                        >
                                                            <option value="+91">+91 (IN)</option>
                                                            <option value="+1">+1 (US)</option>
                                                            <option value="+44">+44 (UK)</option>
                                                            <option value="+971">+971 (UAE)</option>
                                                        </select>
                                                        <input
                                                            className="form-control"
                                                            name="mobile_callback"
                                                            placeholder="Your Mobile"
                                                            type="text"
                                                            value={formData.mobile_callback}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <label className="checkbox is-flex is-align-items-center" style={{ fontSize: '0.85em', cursor: 'pointer' }}>
                                                        <input
                                                            type="checkbox"
                                                            name="whatsapp_nri_request_call_back"
                                                            checked={formData.whatsapp_nri_request_call_back}
                                                            onChange={handleInputChange}
                                                            style={{ marginRight: '8px' }}
                                                        />
                                                        Do you have whatsapp activated on this number?
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="column is-12">
                                            <div className="col-form mb-4">
                                                <div className="form-group">
                                                    <label className="form-label mb-1 is-block" style={{ fontSize: '0.85em', color: '#555' }}>Your Email*</label>
                                                    <input
                                                        className="form-control"
                                                        name="email_callback"
                                                        placeholder="Enter Your Email"
                                                        type="email"
                                                        value={formData.email_callback}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="column is-12">
                                            <div className="col-form mb-4">
                                                <div className="form-group">
                                                    <label className="form-label mb-1 is-block" style={{ fontSize: '0.85em', color: '#555' }}>Location*</label>
                                                    <select
                                                        className="form-control"
                                                        name="location"
                                                        value={formData.location}
                                                        onChange={handleInputChange}
                                                        required
                                                    >
                                                        <option value="">Select Location</option>
                                                        <option value="bangalore">Bangalore</option>
                                                        <option value="hyderabad">Hyderabad</option>
                                                        <option value="mumbai">Mumbai</option>
                                                        <option value="chennai">Chennai</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="column is-12">
                                            <div className="col-form mb-4">
                                                <div className="form-group">
                                                    <label className="form-label mb-1 is-block" style={{ fontSize: '0.85em', color: '#555' }}>Property Type*</label>
                                                    <select
                                                        className="form-control"
                                                        name="propertytype"
                                                        value={formData.propertytype}
                                                        onChange={handleInputChange}
                                                        required
                                                    >
                                                        <option value="">Select Property Type</option>
                                                        <option value="apartments">Apartments</option>
                                                        <option value="villas">Villas</option>
                                                        <option value="plots">Plots</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="column is-12">
                                            <div className="col-form mb-4">
                                                <label className="checkbox" style={{ fontSize: '0.8em', lineHeight: '1.4', cursor: 'pointer', display: 'block' }}>
                                                    <input
                                                        type="checkbox"
                                                        name="agree_to_be_contacted"
                                                        checked={formData.agree_to_be_contacted}
                                                        onChange={handleInputChange}
                                                        style={{ marginRight: '8px', verticalAlign: 'top', marginTop: '3px' }}
                                                        required
                                                    />
                                                    Yes, I want to stay informed and receive newsletter and marketing updates. By submitting this form you agree to the <a className="golden-text" href="/terms-and-conditions" target="_blank">Terms and Conditions</a> and <a className="golden-text" href="/privacy-policy" target="_blank">Privacy Policy</a>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="column is-12">
                                            <div className="col-form mb-0">
                                                <button className="theme-btn line-btn full-width" type="submit" style={{ width: '100%', padding: '14px' }}>Submit Request</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
