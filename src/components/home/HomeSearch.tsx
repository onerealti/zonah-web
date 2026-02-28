'use client';

import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

type Tab = 'Buy' | 'Rent' | 'Commercial';

const MIN_PRICE = 0;
const MAX_PRICE = 100000000; // 10 Cr in lakhs (100Cr × 1,00,000 = 10,000,000,000 / stepping by 10L each)
const STEP = 500000; // 5 Lakhs per step

function formatPrice(val: number): string {
    if (val === 0) return '₹0';
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(1).replace(/\.0$/, '')} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(0)}L`;
    return `₹${val.toLocaleString('en-IN')}`;
}

const PriceRangeSlider = () => {
    const [minVal, setMinVal] = useState(MIN_PRICE);
    const [maxVal, setMaxVal] = useState(MAX_PRICE);

    const handleSliderChange = (value: number | number[]) => {
        if (Array.isArray(value)) {
            setMinVal(value[0]);
            setMaxVal(value[1]);
        }
    };

    return (
        <div className="form-group custom-range-slider" style={{ padding: '0 5px' }}>
            {/* Labels row */}
            <ul className="price-range-labels">
                <li><label className="index_from">{formatPrice(minVal)}</label></li>
                <li><label className="index_to">{formatPrice(maxVal)}</label></li>
            </ul>

            {/* Slider track */}
            <div className="price-slider-track-wrapper" style={{ marginTop: '10px' }}>
                <Slider
                    range
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    step={STEP}
                    value={[minVal, maxVal]}
                    onChange={handleSliderChange}
                    allowCross={false}
                    trackStyle={[{ backgroundColor: 'var(--color-primary, #9a7845)', height: 4 }]}
                    handleStyle={[
                        {
                            borderColor: '#fff',
                            height: 16,
                            width: 16,
                            marginTop: -6,
                            backgroundColor: 'var(--color-primary, #9a7845)',
                            boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                            opacity: 1,
                        },
                        {
                            borderColor: '#fff',
                            height: 16,
                            width: 16,
                            marginTop: -6,
                            backgroundColor: 'var(--color-primary, #9a7845)',
                            boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                            opacity: 1,
                        },
                    ]}
                    railStyle={{ backgroundColor: '#ddd', height: 4 }}
                />
            </div>
        </div>
    );
};

const HomeSearch = () => {
    const [activeTab, setActiveTab] = useState<Tab>('Buy');

    return (
        <section className="section section-find-real-estate-properties light-gray-bg overflow-visible">
            <div className="container find-real-estate-properties-wrapper">
                <div className="columns is-multiline gap-1 is-vcentered real-estate-properties-cols">
                    {/* Left heading */}
                    <div className="column is-12-mobile is-12-tablet is-4-desktop is-4-widescreen real-estate-properties-col">
                        <div className="section-title">
                            <h2>
                                Find the most<br />
                                <span>reliable</span> &amp; <span>appreciating</span><br />
                                Real Estate&nbsp;Properties
                            </h2>
                        </div>
                    </div>

                    {/* Right: search form */}
                    <div className="column is-12-mobile is-12-tablet is-8-desktop is-8-widescreen real-estate-properties-col">
                        <div className="real-estate-properties-search section2">
                            {/* Tabs */}
                            <ul className="tabs-detail">
                                {(['Buy', 'Rent', 'Commercial'] as Tab[]).map((tab) => (
                                    <li
                                        key={tab}
                                        className={`buyrentdata tab${activeTab === tab ? ' is-active' : ''}`}
                                        data-type={tab}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        <a>{tab}</a>
                                    </li>
                                ))}
                            </ul>

                            <div className="properties-search-tab-detail">
                                <div className="content-tab" id="properties-search-buy" style={{ display: 'block' }}>
                                    <div className="properties-search-form">
                                        <form action="#" className="form">
                                            <div className="columns is-multiline is-vcentered gap-1">

                                                {/* Project Type — hidden for Commercial & Rent */}
                                                {activeTab !== 'Commercial' && activeTab !== 'Rent' && (
                                                    <div className="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen">
                                                        <div className="col-form mb-1">
                                                            <div className="form-group custom-select input-with-icon dark-select">
                                                                <div className="input-icon">
                                                                    <svg className="icon icon-tabler icons-tabler-outline icon-tabler-building-skyscraper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                                                        <path d="M3 21l18 0"></path>
                                                                        <path d="M5 21v-14l8 -4v18"></path>
                                                                        <path d="M19 21v-10l-6 -4"></path>
                                                                        <path d="M9 9l0 .01"></path>
                                                                        <path d="M9 12l0 .01"></path>
                                                                        <path d="M9 15l0 .01"></path>
                                                                        <path d="M9 18l0 .01"></path>
                                                                    </svg>
                                                                </div>
                                                                <select className="form-control select project_type customsearch" id="projecttype" name="">
                                                                    <option value="">Project Type</option>
                                                                    <option value="apartment">Apartment</option>
                                                                    <option value="villa">Villa</option>
                                                                    <option value="plot">Plot</option>
                                                                    <option value="row-house">Row House</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Location */}
                                                <div className="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen">
                                                    <div className="col-form mb-1">
                                                        <div className="form-group custom-select input-with-icon dark-select">
                                                            <div className="input-icon">
                                                                <svg className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                                                                </svg>
                                                            </div>
                                                            <select className="form-control select bindlocation customsearch" id="locationbind" name="">
                                                                <option value="">Location</option>
                                                                <option value="sarjapur">Sarjapur Road</option>
                                                                <option value="whitefield">Whitefield</option>
                                                                <option value="kr-puram">K.R. Puram</option>
                                                                <option value="yelahanka">Yelahanka</option>
                                                                <option value="hebbal">Hebbal</option>
                                                                <option value="jp-nagar">JP Nagar</option>
                                                                <option value="kanakapura">Kanakapura Road</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Status — only for Buy */}
                                                {activeTab === 'Buy' && (
                                                    <div className="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen">
                                                        <div className="col-form mb-1">
                                                            <div className="form-group custom-select input-with-icon dark-select">
                                                                <div className="input-icon">
                                                                    <svg className="icon icon-tabler icons-tabler-outline icon-tabler-crane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                                                        <path d="M6 21h6"></path>
                                                                        <path d="M9 21v-18l-6 6h18"></path>
                                                                        <path d="M9 3l10 6"></path>
                                                                        <path d="M17 9v4a2 2 0 1 1 -2 2"></path>
                                                                    </svg>
                                                                </div>
                                                                <select className="form-control select construction_status customsearch" id="constructionstatus" name="">
                                                                    <option value="">Status</option>
                                                                    <option value="under-construction">Under Construction</option>
                                                                    <option value="ready-to-move">Ready to Move</option>
                                                                    <option value="new-launch">New Launch</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Bedrooms — hidden for Commercial */}
                                                {activeTab !== 'Commercial' && (
                                                    <div className="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen">
                                                        <div className="col-form">
                                                            <div className="form-group custom-select input-with-icon dark-select">
                                                                <div className="input-icon">
                                                                    <svg className="icon icon-tabler icons-tabler-outline icon-tabler-bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                                                        <path d="M7 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                                                        <path d="M22 17v-3h-20"></path>
                                                                        <path d="M2 8v9"></path>
                                                                        <path d="M12 14h10v-2a3 3 0 0 0 -3 -3h-7v5z"></path>
                                                                    </svg>
                                                                </div>
                                                                <select className="form-control select bedrooms customsearch" id="bedroomsbind" name="">
                                                                    <option value="">Bedrooms</option>
                                                                    <option value="1">1 BHK</option>
                                                                    <option value="2">2 BHK</option>
                                                                    <option value="3">3 BHK</option>
                                                                    <option value="4">4 BHK</option>
                                                                    <option value="5">5+ BHK</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Price Range Slider — hidden for Rent */}
                                                {activeTab !== 'Rent' && (
                                                    <div className="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen">
                                                        <div className="col-form">
                                                            <PriceRangeSlider />
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Search button */}
                                                <div className="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen searchbind">
                                                    <div className="col-form">
                                                        <a className="theme-btn line-btn black-btn full-width rounded-pill btn-with-arrow searchbinds" href="/residential-projects">
                                                            <span className="appendsearchcount">128</span> Projects Found&nbsp;
                                                            <svg fill="none" height="24" viewBox="0 0 25 24" width="25" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2 12H22" stroke="#303030" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M19 16L23 12" stroke="#303030" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M19 8L23 12" stroke="#303030" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSearch;
