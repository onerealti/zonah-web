import React from 'react';

const PropertySearchBox = () => {
    return (
        <section className="section section-find-real-estate-properties light-gray-bg overflow-visible">
            <div className="container find-real-estate-properties-wrapper">
                <div className="columns is-multiline gap-1 is-vcentered real-estate-properties-cols">
                    <div className="column is-12-mobile is-12-tablet is-4-desktop is-4-widescreen real-estate-properties-col">
                        <div className="section-title">
                            <h2>
                                Find the most<br />
                                <span>reliable</span> &amp; <span>appreciating</span><br />
                                Real Estate&nbsp;Properties
                            </h2>
                        </div>
                    </div>
                    <div className="column is-12-mobile is-12-tablet is-8-desktop is-8-widescreen real-estate-properties-col">
                        <div className="real-estate-properties-search section2">
                            <ul className="tabs-detail">
                                <li className="buyrentdata tab is-active" data-type="Buy">
                                    <a>Buy</a>
                                </li>
                                <li className="buyrentdata tab" data-type="Rent">
                                    <a>Rent</a>
                                </li>
                                <li className="buyrentdata" data-type="Commercial">
                                    <a>Commercial</a>
                                </li>
                            </ul>
                            <div className="properties-search-tab-detail">
                                <div className="content-tab" id="properties-search-buy" style={{ display: 'block' }}>
                                    <div className="properties-search-form">
                                        <form action="#" className="form">
                                            {/* Form fields can be added here mirroring index.html */}
                                            <div className="columns is-multiline is-vcentered gap-1">
                                                <div className="column is-12-mobile searchbind">
                                                    <div className="col-form">
                                                        <a className="theme-btn line-btn black-btn full-width rounded-pill btn-with-arrow searchbinds" href="#">
                                                            <span className="appendsearchcount">0</span> Projects Found
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

export default PropertySearchBox;
