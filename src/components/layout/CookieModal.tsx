"use client";

import React, { useState } from 'react';

export default function CookieModal() {
    const [isVisible, setIsVisible] = useState(() => {
        if (typeof window !== 'undefined') {
            const consent = localStorage.getItem('cookie-consent');
            return !consent;
        }
        return false;
    });

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="full-screen-cookie-block" data-cookie-visible="true" style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 9999, background: '#fff', borderTop: '1px solid #eee', boxShadow: '0 -4px 20px rgba(0,0,0,0.1)' }}>
            <div className="container py-4 px-5">
                <div className="columns is-vcentered">
                    <div className="column">
                        <h4 className="mb-2 text-dark fw-bold">We use cookies to improve your experience</h4>
                        <p className="is-size-7" style={{ color: '#666' }}>
                            By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyse site usage, and assist in our marketing efforts.
                        </p>
                    </div>
                    <div className="column is-narrow has-text-centered">
                        <div className="cookie-button-group is-flex is-gap-3 is-justify-content-center">
                            <button onClick={handleAccept} className="theme-btn cookie-accept-btn" style={{ padding: '10px 24px' }}>
                                Accept All
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
