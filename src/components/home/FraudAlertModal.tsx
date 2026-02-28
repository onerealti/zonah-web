"use client";

import React, { useState, useEffect } from 'react';

const FraudAlertModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if cookie exists to hide modal
        const isHidden = localStorage.getItem('fraud-alert-hidden');
        if (!isHidden) {
            setIsOpen(true);
        }
    }, []);

    const closeModal = () => {
        setIsOpen(false);
        localStorage.setItem('fraud-alert-hidden', 'true');
    };

    if (!isOpen) return null;

    return (
        <div id="pop-up-info" className="theme-modal theme-home-modal is-active" data-cookie-visible="true">
            <div className="theme-modal-background" onClick={closeModal}></div>
            <div className="theme-modal-card">
                <div className="is-justify-content-center theme-modal-card-header">
                    <h3 className="has-text-centered modal-title">
                        <span className="is-block mb-1">⚠️</span>
                        Fraud Alert: Protect Yourself from Scams
                    </h3>
                </div>
                <div className="theme-modal-card-body">
                    <p>It has come to our attention that fraudsters are misusing the name of Prestige Group to promote fake investment schemes, falsely promising high returns in properties. We urge everyone to be cautious and avoid falling prey to such scams.</p>
                    <p>Please note that we have already reported these fraudulent activities to the authorities and are taking steps to address the situation.</p>
                    <p>For authentic information about our projects, always visit our official website: <b><a href="/">www.zonahdevelopers.com</a></b></p>
                    <p>Stay vigilant, and thank you for your continued trust.</p>
                    <div className="has-text-right d-block">
                        <a className="btn-pop-up full-width theme-btn" href="javascript:void(0);" onClick={closeModal}>Ok</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FraudAlertModal;
