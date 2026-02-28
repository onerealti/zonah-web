"use client";

import React, { useState } from 'react';

const StickyEnquiry = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Sticky side button */}
            <a
                href="javascript:void(0);"
                className="theme-btn enquire-now-sticky-btn enquirylabel passenquiry"
                onClick={() => setIsOpen(true)}
            >
                Enquire Now
            </a>

            {/* Dark overlay */}
            {isOpen && (
                <div
                    style={{
                        position: 'fixed', inset: 0,
                        background: 'rgba(0,0,0,0.75)',
                        zIndex: 1110,
                    }}
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar panel — mirrors source DOM exactly */}
            <div id="enquire-sidebar" className={`theme-sidebar theme-sidebar-sm${isOpen ? ' active' : ''}`}>
                <div className="theme-sidebar-card">

                    {/* Header with close button */}
                    <div className="theme-sidebar-header">
                        <div className="theme-sidebar-action">
                            <span
                                className="close-sidebar enquirylabel"
                                style={{ cursor: 'pointer' }}
                                onClick={() => setIsOpen(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="feather feather-x">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="theme-sidebar-detail project-enquiry-sidebar">
                        <div className="mb-4 ml-5" style={{ padding: '0 30px' }}>
                            <span className="is-uppercase has-text-weight-semibold" style={{ fontWeight: 600, letterSpacing: 1 }}>
                                Enquire Now
                            </span>
                        </div>

                        <div className="project-vertical-block theme-scrollbar" style={{ border: 0, padding: '0 30px', height: 'calc(100vh - 115px)', overflowY: 'auto' }}>
                            <form
                                className="form"
                                id="enquiry_common_frm_submit"
                                noValidate
                                onSubmit={(e) => { e.preventDefault(); alert('Enquiry submitted! Our team will contact you shortly.'); setIsOpen(false); }}
                            >
                                <div className="columns is-multiline is-vcentered">

                                    {/* Name */}
                                    <div className="hide_infromation column is-12">
                                        <div className="col-form">
                                            <div className="form-group">
                                                <label className="form-label nodtranslate">Your Name*</label>
                                                <input
                                                    type="text"
                                                    className="form-control customer_fullname nodtranslate"
                                                    name="enquiry_name"
                                                    id="enquiry_name"
                                                    placeholder="Enter Your Name"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mobile with country code */}
                                    <div className="hide_infromation column is-12">
                                        <div className="col-form">
                                            <div className="form-group with-country-code">
                                                <label className="form-label nodtranslate">Mobile*</label>
                                                <div className="sm-select is-flex" style={{ gap: 8 }}>
                                                    <select
                                                        name="enquiry_country"
                                                        id="enquiry_country"
                                                        className="form-control select-cc customer_Mobile_CountryCode"
                                                        style={{ maxWidth: 70 }}
                                                        defaultValue="IN"
                                                    >
                                                        <option value="">Country</option>
                                                        <option value="IN" data-description="India">+91 India</option>
                                                        <option value="US">+1 United States</option>
                                                        <option value="GB">+44 UK</option>
                                                        <option value="AE">+971 UAE</option>
                                                        <option value="SG">+65 Singapore</option>
                                                        <option value="AU">+61 Australia</option>
                                                        <option value="CA">+1 Canada</option>
                                                    </select>
                                                    <input
                                                        type="text"
                                                        className="form-control numbervalidate nodtranslate customer_Mobile"
                                                        name="enquiry_number"
                                                        id="enquiry_number"
                                                        placeholder="Your Mobile"
                                                        maxLength={15}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* WhatsApp checkbox */}
                                    <div className="column is-12" style={{ paddingTop: 0 }}>
                                        <label className="form-check" style={{ cursor: 'pointer', fontSize: 13, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                                            <input type="checkbox" className="form-check-input" style={{ marginTop: 2, flexShrink: 0 }} />
                                            <span>Do you have whatsapp activated on <span style={{ color: '#856d47', fontWeight: 600 }}>this number</span>?</span>
                                        </label>
                                    </div>

                                    {/* Email */}
                                    <div className="hide_infromation column is-12">
                                        <div className="col-form">
                                            <div className="form-group">
                                                <label className="form-label nodtranslate">Your Email*</label>
                                                <input
                                                    type="email"
                                                    className="form-control customer_email nodtranslate"
                                                    name="enquiry_email"
                                                    id="enquiry_email"
                                                    placeholder="Enter Your Email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Type */}
                                    <div className="hide_infromation column is-12">
                                        <div className="col-form">
                                            <div className="form-group">
                                                <label className="form-label nodtranslate">Projects Type*</label>
                                                <select
                                                    className="form-control"
                                                    name="enquiry_project_type"
                                                    id="enquiry_project_type"
                                                    required
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled>Select Project Type</option>
                                                    <option value="residential">Residential</option>
                                                    <option value="commercial">Commercial</option>
                                                    <option value="upcoming">Upcoming</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Newsletter checkbox */}
                                    <div className="column is-12" style={{ paddingTop: 0 }}>
                                        <label className="form-check" style={{ cursor: 'pointer', fontSize: 13, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                                            <input type="checkbox" className="form-check-input" style={{ marginTop: 2, flexShrink: 0 }} />
                                            <span>Yes, I want to stay informed and receive <span style={{ color: '#856d47' }}>newsletter and marketing updates.</span></span>
                                        </label>
                                    </div>

                                    {/* Disclaimer */}
                                    <div className="column is-12" style={{ paddingTop: 0 }}>
                                        <p style={{ fontSize: 12, color: '#545454', margin: 0 }}>
                                            By submitting this form you agree to the{' '}
                                            <a href="/terms-and-conditions" style={{ color: '#856d47', fontWeight: 600 }}>Terms and Conditions</a>
                                            {' '}and{' '}
                                            <a href="/privacy-policy" style={{ color: '#856d47', fontWeight: 600 }}>Privacy Policy</a>
                                        </p>
                                    </div>

                                    {/* Submit */}
                                    <div className="column is-12">
                                        <div className="col-form mb-0">
                                            <button
                                                type="submit"
                                                className="theme-btn line-btn full-width enquiry_submit_btn"
                                                id="enquiry_submit_btn"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default StickyEnquiry;
