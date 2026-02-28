
import React from 'react';

export default function PrivacyPolicy() {
    return (
        <main className="home-page-replica privacypolicy-page" dangerouslySetInnerHTML={{ __html: `

<div id="header-search-menu-detail" class="header-search-menu-detail">
    <div class="header-search-menu-close" onclick="closeModel('header-search-menu-detail');"></div>
    <div class="header-search-menu-detail-wrapper">
        <div class="container find-real-estate-properties-wrapper">
            <div class="columns is-multiline is-vcentered gap-3">
                <div class="column is-12-mobile is-12-tablet is-4-desktop is-4-widescreen real-estate-properties-col">
                    <div class="search-by-project-name">
                                                <div class="form-group input-with-icon">
                            <div class="input-icon">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8.33333" cy="8.96493" r="5.83333" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17.5 18.1316L12.5 13.1316" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <input class="form-control search_enterkey allsearch " type="text" name="bindsearch" id="bindsearch" placeholder="Search by project name, keywords, etc." />
                                                                                    <ul id="search-suggestions" class="search-suggestions-box theme-scrollbar"></ul>
                        </div>
                                                
                    </div>
                </div>
                <div class="column is-12-mobile is-12-tablet is-8-desktop is-8-widescreen real-estate-properties-col">
                    <div class="real-estate-properties-search section1">
                        <ul class="tabs-detail">
                            <li class=" buyrent tab is-active " data-type="Buy" onclick="openTab(event,'properties-search-buy1')">
                                <a>Buy</a>
                            </li>
                            <li class=" buyrent tab " data-type="Rent" onclick="openTab(event,'properties-search-buy1')">
                                <a>Rent</a>
                            </li>
                            <li class=" buyrent tab " data-type="Commercial"  onclick="openTab(event,'properties-search-buy1')">
                                <a>Commercial</a>
                            </li>
                        </ul>
                        <div class="tab-content properties-search-tab-detail">
                            <div id="properties-search-buy1" class="content-tab" style="display: block;">
                                <div class="properties-search-form">
                                    <form class="form" action="">
                                        <div class="columns is-multiline is-vcentered gap-1">
                                            <div class="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen is-hidden remove_in_conn_head hide_show_class_head">
                                                <div class="col-form mb-1">
                                                    <div class="form-group custom-select input-with-icon dark-select">
                                                        <div class="input-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-building-skyscraper">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M3 21l18 0" />
                                                                <path d="M5 21v-14l8 -4v18" />
                                                                <path d="M19 21v-10l-6 -4" />
                                                                <path d="M9 9l0 .01" />
                                                                <path d="M9 12l0 .01" />
                                                                <path d="M9 15l0 .01" />
                                                                <path d="M9 18l0 .01" />
                                                            </svg>
                                                        </div>
                                                        <select name="" id="project_type" class="form-control select project_type allsearch">
                                                                                                                    </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen is-hidden hide_show_class_head">
                                                <div class="col-form mb-1">
                                                    <div class="form-group custom-select input-with-icon dark-select">
                                                        <div class="input-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                                                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                                            </svg>
                                                        </div>
                                                        <select name="" id="bindlocation" class="form-control select bindlocation allsearch">
                                                                                                                    </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen is-hidden remove_in_rent_head remove_in_conn_head hide_show_class_head">
                                                <div class="col-form mb-1">
                                                    <div class="form-group custom-select input-with-icon dark-select">
                                                        <div class="input-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-crane">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M6 21h6" />
                                                                <path d="M9 21v-18l-6 6h18" />
                                                                <path d="M9 3l10 6" />
                                                                <path d="M17 9v4a2 2 0 1 1 -2 2" />
                                                            </svg>
                                                        </div>
                                                        <select name="" id="construction_status" class="form-control select construction_status allsearch">
                                                                                                                    </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen is-hidden remove_in_conn_head hide_show_class_head">
                                                <div class="col-form">
                                                    <div class="form-group custom-select input-with-icon dark-select">
                                                        <div class="input-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-bed">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M7 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                                <path d="M22 17v-3h-20" />
                                                                <path d="M2 8v9" />
                                                                <path d="M12 14h10v-2a3 3 0 0 0 -3 -3h-7v5z" />
                                                            </svg>
                                                        </div>
                                                        <select name="" id="bedrooms" class="form-control select bedrooms allsearch">
                                                                                                                    </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen is-hidden remove_in_conn_head hide_show_class_head">
                                                <div class="col-form">
                                                    <div class="form-group custom-range-slider">
                                                        <ul>
                                                            <li>
                                                                <label class="header_from_search">0</label>
                                                                <input type="number" maxlength="0" value="0" id="searchminrang" class="from custom-range-title is-hidden" />
                                                            </li>
                                                            <li>
                                                                <label class="header_to_search"> 100 Cr</label>
                                                                <input type="number" maxlength="1000000000" value="1000000000" id="searchmaxrang" class="to custom-range-title is-hidden" />
                                                            </li>
                                                        </ul>
                                                        <input type="text" class="properties-range-slider common-range-slider" value="" data-skin="round" data-type="double" data-min="0" data-max="1000000000" data-step="1000000" data-grid="false" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen search-bind">
                                                <div class="col-form">
                                                    <a class="theme-btn line-btn black-btn full-width rounded-pill btn-with-arrow bindsearch" href="javascript:void(0);">
                                                        <div class="append-searchcount">0</div> Projects Found
                                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2 12H22" stroke="#303030" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M19 16L23 12" stroke="#303030" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M19 8L23 12" stroke="#303030" stroke-linecap="round" stroke-linejoin="round" />
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
    </div>
</div>
<div class="full-screen-cookie-block is-hidden" data-cookie-visible="true">
    <ul>
        <li>
            <div class="full-screen-cookie-block-items">
                <div class="section-title mb-4">
                    <h4>We use cookies to improve your experience</h2>
                        <!-- <h4>By clicking “Accept All Cookies”,</h2> -->
                </div>
                <div class="cookie-block-items-desc">
                    <!-- <p>We use cookies to deliver the best possible experience on our website. To learn more, visit our <a href="https://www.Zonah Developersconstructions.com/privacy-policy" class="golden-text fw-bold">Privacy Policy</a>. By continuing to use this site, or closing this box, you consent to our use of cookies. <a href="" class="golden-text fw-bold">Cookie Notice</a>.</p></div> -->
                    <p>By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyse site usage, and assist in our marketing efforts.</p>
                </div>
            </div>
        </li>
        <li class="has-text-centered">
            <div class="cookie-button-group">
                <a href="javascript:void(0);" class="fs-6 fw-semibold text-primary" onclick="toggleModel('cookie-settings-modal');">Cookie Settings</a>
                <a href="javascript:void(0);" class="theme-btn line-btn necessary-btn-pop-up">Necessary Cookies</a>
                <a href="javascript:void(0);" class="theme-btn cookie-accept-btn">Accept All</a>
                <!-- <a href="#" class="theme-btn line-btn cookie-accept-btn"><span>Decline</span></a> -->
            </div>
            <!-- <a href="#" class="theme-btn cookie-accept-btn">Accept All Cookies</a> -->
        </li>
    </ul>
</div>

<div id="cookie-settings-modal" class="theme-modal cookie-settings-modal theme-modal-sm">
    <div class="theme-modal-background"></div>
    <div class="theme-modal-card p-0">
        <div class="theme-modal-card-header border-light-gray border-bottom px-5 py-3 mb-0">
            <h3 class="modal-title">Cookie Settings</h3>
            <button class="close close1" aria-label="close" onclick="closeModel('cookie-settings-modal')">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <div class="p-5 theme-modal-card-body">
            <small class="is-block mb-4">When you visit any of our websites, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and manage your preferences. Please note, blocking some types of cookies may impact your experience of the site and the services we are able to offer.</small>
            <a class="mb-4 theme-btn accept-all-cookies" href="javascript:void(0);">Accept all cookies</a>
            <h4 class="fs-4 mb-3">Manage Consent Preferences</h4>
            <div class="accordian">
                <div class="accordian_item">
                    <div class="accordian_title active is-align-items-center is-flex is-gap-4 is-justify-content-space-between">
                        <h4 class="dark-1 fw-bold">Necessary Cookies</h4>
                        <span class="fw-bold is-flex-shrink-0 text-primary fs-6">Always Active</span>
                    </div>
                    <div class="accordian_desc" style="display: block;">
                        <small>These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.</small>
                    </div>
                </div>
                
                <div class="accordian_item">
                    <div class="switch-item">
                        <label class="switch-label">
                            <input type="checkbox" name="checkbox" class="switch-input">
                            <span class="switch-mark"></span>
                        </label>
                    </div>
                    <div class="accordian_title is-align-items-center is-flex is-gap-3 is-justify-content-space-between">
                        <h4 class="fw-bold">Performance Cookies</h4>
                    </div>
                    <div class="accordian_desc">
                        <small>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.</small>
                    </div>
                </div>
            </div>
        </div>
        <div class="theme-modal-card-footer border-light-gray border-top px-5 py-3 is-flex is-gap-4 is-justify-content-end">
            <a class="theme-btn confirm-my-choices" href="javascript:void(0);">Confirm My Choices</a>
        </div>
    </div>
</div>
<!-- <div class="full-screen-cookie-block" data-cookie-visible="true">
    <ul>
        <li>
            <div class="full-screen-cookie-block-items">
                <div class="section-title mb-4">
                    <h4>We use cookies to improve your experience</h2>
                        
                </div>
                <div class="cookie-block-items-desc">
                   
                    <p>By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyse site usage, and assist in our marketing efforts.</p>
                </div>
            </div>
        </li>
        <li class="has-text-centered">
        <div class="cookie-button-group">
            <a href="#" class="theme-btn cookie-accept-btn">Accept All Cookies</a>
              
        </div>
            
        </li>
    </ul>
</div> -->
<a href="javascript:void(0);" class="theme-btn enquire-now-sticky-btn enquirylabel passenquiry" open-sidebar="enquire-sidebar">Enquire Now</a>
<script nonce="randomValue">
    // properties-search-tab
    function openTab(evt, tabName) {
        var i, x, tablinks;
        x = document.getElementsByClassName("content-tab");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tab");
        for (i = 0; i < x.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" is-active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " is-active";
    }
    // properties-search-tab

     // Function to get cookies start
      // Get cookies function
      document.addEventListener("DOMContentLoaded", function () {
        function checkNull(value) {
          return value && value !== "null" && value !== "undefined" ? value : '';
        }

        function getCookies(names) {
          var cookies = {};
          var documentCookies = "; " + document.cookie;

          names.forEach(function (name) {
            var parts = documentCookies.split("; " + name + "=");
            if (parts.length === 2) {
              cookies[name] = parts.pop().split(";").shift();
            } else {
              cookies[name] = null;
            }
          });

          return cookies;
        }

        var cookieNames = [
          'customer_FirstName',
          'customer_LastName',
          'customer_Email',
          'customer_Mobile',
          'customer_Mobile_CountryCode',
          'customer_Country_Code',
          'customers_CustomerID'
        ];

        var userCookies = getCookies(cookieNames);

        if (userCookies) {
          try {
            var customer_FirstName = decodeURIComponent(userCookies['customer_FirstName'] || "");
            var customer_LastName = decodeURIComponent(userCookies['customer_LastName'] || "");
            var customer_Email = decodeURIComponent(userCookies['customer_Email'] || "");
            var customer_Mobile = decodeURIComponent(userCookies['customer_Mobile'] || "");
            var customer_Mobile_CountryCode = decodeURIComponent(userCookies['customer_Mobile_CountryCode'] || "");
            var customers_CustomerID = decodeURIComponent(userCookies['customers_CustomerID'] || "");

            var fullMobile = checkNull(customer_Mobile_CountryCode) + checkNull(customer_Mobile);
            var storedID = localStorage.getItem("last_customer_id");
            

            if (typeof Moengage !== "undefined") {
              // ✅ Prefer Customer ID if available and different from stored
              if (customers_CustomerID && customers_CustomerID !== storedID) {
                // console.log("✅ Updating MoEngage ID with new Customer ID:", customers_CustomerID);
                Moengage.update_unique_user_id(customers_CustomerID);
                // Moengage.setAlias(customers_CustomerID);
                localStorage.setItem("last_customer_id", customers_CustomerID);
              
              // ✅ Fallback to fullMobile if customer ID not available and mobile is new
              } else if (!customers_CustomerID && fullMobile && fullMobile !== storedID) {
                // console.log("✅ Updating MoEngage ID with new Mobile:", fullMobile);
                Moengage.update_unique_user_id(fullMobile);
                localStorage.setItem("last_customer_id", fullMobile);
              }
              // ❌ Otherwise, no update needed
              // console.log("❌ Otherwise, no update needed");
              
            }

            // DOM updates
            var profile = document.querySelector(".profile");
            var hasEssentialData = customer_FirstName && customer_Mobile;

            if (hasEssentialData && profile) {
              profile.classList.remove("is-hidden");

              var initials = document.querySelectorAll(".user-name-latter");
              initials.forEach(el => el.textContent = customer_FirstName.charAt(0).toUpperCase());

              var fullnameEl = document.querySelector(".customer_fullname");
              if (fullnameEl) fullnameEl.textContent = checkNull(customer_FirstName) + " " + checkNull(customer_LastName);

              var mobileEl = document.querySelector(".customer_Mobile");
              if (mobileEl) mobileEl.textContent = fullMobile;

              var emailEl = document.querySelector(".customer_Email");
              if (emailEl) emailEl.textContent = checkNull(customer_Email);
            } else {
              if (profile) profile.classList.add("is-hidden");
            }

          } catch (e) {
            var profile = document.querySelector(".profile");
            if (profile) profile.classList.add("is-hidden");
          }
        }
      });



    // Function to get cookies end
</script>    <section class="section section-cms section-inner-page overflow-visible pt-6">
    <div class="container cms-wrapper">
        <div class="columns is-multiline cms-cols">
            <div class="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen cms-col">
                <div class="cms-detail js-scroll fade-in-top scrolled">
                    <div class="section-title">
                        <h1 class="text-primary">
                            Privacy Policy
                        </h1>
                    </div>

                    <div class="bind_privacy_policy bind_data">
                        <div class="col-12">
                           <p>This policy was last modified on 1st January 2025.</p>
                            <p>This Privacy Policy governs the collection, use, storage, and disclosure of personal
                                data provided by users on this platform. It reflects our commitment to data
                                protection and compliance with applicable regulations, including the <b> Digital
                                    Personal Data Protection Act (DPDP) </b> 2023 and <b>SEBI guidelines. </b></p>
                            <p>The content on this website is presented for informational purposes only and does not
                                constitute a legal offering. The promoter reserves the right to amend, modify,
                                supplement, or remove any part of this Privacy Policy or the website content without
                                prior notice. Users are encouraged to periodically review the Privacy Policy to
                                remain informed of updates or changes.</p>
                            <p>We collect personal data through the following means:</p>
                            <ul>
                                <li><strong>Direct User Input: </strong>Information entered into forms on our
                                    website.</li>
                                <li><strong>Email Interactions: </strong>Data provided in response to email campaigns
                                    or inquiries.</li>
                                <li><strong>Third-Party Platforms: </strong>Personal information collected via social
                                    media channels, lead-generation platforms, or third-party websites.</li>
                                <li><strong>Operational Channels: </strong>Data gathered through site visit forms,
                                    channel partners, or other internal mechanisms.</li>
                            </ul>
                            <p>The data we collect is processed solely for the following purposes:</p>
                            <ul>
                                <li>Enhancing user experience and personalizing interactions.</li>
                                <li>Facilitating lead generation and communication.</li>
                                <li>Sharing data with trusted vendor partners for operational and service delivery
                                    purposes.</li>
                                <li>Conducting marketing campaigns across social media, email, and other third-party
                                    platforms.</li>
                            </ul>
                            <p>We obtain explicit user consent before collecting, processing, or sharing personal
                                information. Consent is captured via:</p>
                            <ul>
                                <li>Clearly indicated checkboxes.</li>
                                <li>Forms or other mechanisms that outline the intended purpose of the data.
                                    Users retain the right to withdraw their consent at any time by contacting us via
                                    [email address].</li>
                            </ul>
                            <p>Personal information may be shared with third parties under the following conditions:</p>
                            <ul>
                                <li><strong>Operational Requirements: </strong>Sharing with trusted vendors or partners
                                    to facilitate service delivery or respond to inquiries.</li>
                                <li><strong>Vendor Compliance: </strong>Third-party service providers are contractually
                                    obligated to maintain confidentiality and adhere to relevant data protection laws.
                                </li>
                                <li><strong>Legal Obligations: </strong> Disclosure required to comply with applicable
                                    laws, enforce our policies, or protect the rights and safety of stakeholders.</li>
                            </ul>
                            <p>Non-personally identifiable information may also be shared for analytical or marketing
                                purposes, subject to this policy.</p>
                            <p>In compliance with the <b> DPDP Act, 2023, </b> users have the following rights regarding
                                their personal data:</p>
                            <ul>
                                <li><strong>Access: </strong>The right to request details of their personal data held by
                                    us.</li>
                                <li><strong>Correction: </strong>The right to rectify inaccurate or incomplete personal
                                    information.</li>
                                <li><strong>Erasure: </strong>The right to request deletion of personal data no longer
                                    required for stated purposes.</li>
                                <li><strong>Portability: </strong>The right to request the transfer of personal data to
                                    another service provider.</li>
                                <li><strong>Restriction: </strong>The right to limit processing of personal data under
                                    specific circumstances.</li>
                                <li><strong>Withdrawal: </strong>The right to revoke previously granted consent for data
                                    processing. Users may exercise these rights by submitting a formal request.</li>
                            </ul>

                            <p>If users wish to unsubscribe from future emails, they can respond to any email they
                                receive from us, indicating their preference to opt out. We will promptly remove them
                                from our database upon receiving the request.</p>
                            <p>Personal data is retained only for as long as necessary to fulfill the purposes outlined
                                in this policy or as required by applicable law. Upon expiration of the retention
                                period, data will be securely erased using industry-standard deletion protocols.</p>
                            <p>Cookies are small text files used to enhance user experience and collect visitor
                                insights. By consenting to cookies, users agree to the collection of information
                                necessary for website optimization. Users may disable cookies through their browser
                                settings, but doing so may impact website functionality.</p>
                            <p>We do not engage in selling, trading, or transferring your personally identifiable
                                information to external parties. However, we may share your information with trusted
                                third parties who:</p>
                            <ul>
                                <li>Support us in website operation, business conduct, or service provision.</li>
                                <li>Agree to maintain confidentiality.</li>
                            </ul>
                            <p>Your information may also be disclosed if deemed necessary to:</p>
                            <ul>
                                <li>Comply with the law.</li>
                                <li>Enforce site policies.</li>
                                <li>Safeguard our or others' rights, property, or safety.</li>
                            </ul>
                            <p>Non-personally identifiable visitor data may be shared with other parties for marketing,
                                advertising, or similar purposes.</p>
                            <p>We employ robust security measures to protect personal data against unauthorized access,
                                alteration, or destruction. These measures include:</p>
                            <ul>
                                <li>Encryption of sensitive data.</li>
                                <li>Firewalls and intrusion detection systems.</li>
                                <li>Regular security audits to identify and address vulnerabilities.</li>
                                <li>Secure, password-protected storage mechanisms.</li>
                            </ul>
                            <p>Personal data collected via third-party platforms (such as social media or
                                lead-generation websites) is processed in compliance with this Privacy Policy. Users are
                                notified of such data collection and are provided with the option to opt out of further
                                processing or communication.</p>

                            <p>To ensure continued compliance with the <b>DPDPA,</b> we will implement the following
                                accountability measures:</p>
                            <ul>
                                <li><strong>Regular Internal Audits: </strong>We will conduct regular audits of our data
                                    processing activities to identify and address any compliance gaps.</li>
                                <li><strong>Staff Training: </strong>All employees involved in data processing will
                                    undergo periodic training on data protection principles and the DPDP Act.</li>
                                <li><strong>Reporting Mechanism: </strong> A system will be implemented to allow
                                    employees and users to report potential data breaches or policy violations.</li>

                            </ul>
                            <p>To clarify the roles of entities involved in processing personal data:</p>
                            <ul>
                                <li><strong>Data Fiduciary Responsibilities: </strong>As a data fiduciary, we are
                                    responsible for ensuring the lawful processing of personal data and implementing
                                    measures to protect it.</li>
                                <li><strong>Data Processor Responsibilities: </strong>Third-party processors engaged to
                                    handle personal data will be contractually obligated to follow the same data
                                    protection standards and comply with the DPDP Act.</li>
                            </ul>
                            <p>We comply with all applicable laws, including the <b>Digital Personal Data Protection
                                    Act, 2023 </b> and <b> SEBI guidelines, </b>to ensure lawful and responsible
                                handling of personal information.</p>
                            <p>In the event of a data breach, we are committed to notifying both the <b>Data Protection
                                    Board of India (DPBI) </b> and affected individuals as soon as possible. This will
                                include:</p>
                            <ul>
                                <li><strong>Timely Notification: </strong> We will notify the DPBI within 72 hours of
                                    discovering a significant breach, as required by the DPDP Act.</li>
                                <li><strong>Notification to Affected Individuals: </strong> If the breach is likely to
                                    cause harm to individuals' rights or freedoms, we will inform affected individuals
                                    without undue delay, detailing the nature of the breach, its potential consequences,
                                    and any measures taken to mitigate its impact.</li>
                            </ul>
                            <p>Our website may include links to external websites or services. These platforms are
                                governed by their own privacy policies, and we bear no responsibility for their content
                                or practices. We encourage users to review these third-party policies independently.</p>
                            <p>We comply with the relevant provisions of the <b> Children's Online Privacy Protection
                                    Act (COPPA) </b> and the <b> DPDP Act</b> regarding children's data. Specifically:
                            </p>
                            <ul>
                                <li><strong>Parental Consent: </strong> We will obtain verifiable parental consent
                                    before collecting personal data from children under 13 years of age.</li>
                                <li><strong>Age Verification: </strong> We will ensure that data collection mechanisms
                                    have an age-verification process to prevent the collection of data from children who
                                    are underage without appropriate consent.</li>
                            </ul>
                            <p>This Privacy Policy applies to data collected through this website and does not cover
                                offline data collection methods. Any changes to this policy will be communicated via
                                updates to this page. Updated policies will apply only to data collected after the
                                effective date of the change.</p>
                        </div>
                    </div>
                </div>

                <div class="column is-12-mobile is-12-tablet is-4-desktop is-4-widescreen cms-col">
                    &nbsp;
                </div>
            </div>
        </div>
    </div>
</section>

    ` }} />
    );
}
