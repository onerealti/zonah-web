
import React from 'react';

export default function CommercialProjects() {
  return (
    <main className="home-page-replica commercialprojects-page" dangerouslySetInnerHTML={{
      __html: `

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
</script>    <!-- ============================================================
     HERO SECTION
============================================================ -->
<!-- <link rel="stylesheet" href="https://d1t2fddy6amcvs.cloudfront.net/commercial-projects-new/css/commercial-new.css"> -->
<link rel="stylesheet" href="https://d1t2fddy6amcvs.cloudfront.net/commercial-projects-new/css/commercial-new-v2.css">
<!-- <link rel="preload" href="{{URL::asset('resources')}}/media/css/commercial-new-v2.css" as="style" onload="this.rel='stylesheet'"> -->
<style>
  .project-vertical-block .details {
    position: relative;
    z-index: 2;
  }
  .project-overview {
  font-size: 13px !important;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
}
.enquire-btn{
  border-radius: 0;
}
</style>

<section class="section section-commercial-banner section-inner-page p-0">
  <picture>
    <img class="esg-banner-bg" src="https://d1t2fddy6amcvs.cloudfront.net/commercial-projects-new/all-projects-banner.png"
      width="1350" height="600" alt="ESG Banner">
  </picture>
</section>



<section class="commercial-projects container has-text-centered">
  <section class="has-text-center pt-0 overflow-visible">
    <h2 class="is-fullwidth-important commercial-project-title is-3 mb-5 ">Commercial Projects</h2>

    <!-- City Filter Pills -->
    <div class="is-flex is-align-items-center is-flex-wrap-wrap is-justify-content-center is-gap-2 append-commercial-project-city">
      <!-- <button class="btn-gradient-rounded btn-gradient-rounded-active is-selected" data-city="all">All</button>
      <button class="btn-gradient-rounded" data-city="bangalore">Bangalore</button>
      <button class="btn-gradient-rounded" data-city="hyderabad">Hyderabad</button>
      <button class="btn-gradient-rounded" data-city="mumbai">Mumbai</button>
      <button class="btn-gradient-rounded" data-city="delhi">Delhi</button>
      <button class="btn-gradient-rounded" data-city="chennai">Chennai</button>
      <button class="btn-gradient-rounded" data-city="pune">Pune</button>
      <button class="btn-gradient-rounded" data-city="cochin">Cochin</button> -->
    </div>

    <!-- Dropdown Filters -->
    <div class="filter-bar is-flex is-flex-wrap-wrap is-justify-content-center is-align-items-center mt-6 is-gap-3 ">
      <div class="custom-select-block form-group custom-select custom-select-rounded">
        <select class="dropdown append-commercial-project-city-drop select">
          <!-- <option>Select City</option>
          <option>Bangalore</option>
          <option>Delhi</option>
          <option>Hyderabad</option> -->
        </select>
      </div>

      <div class="custom-select-block form-group custom-select custom-select-rounded">
        <select class="dropdown append-commercial-project-city-wise-project-drop select">
          <option value="">Select Project</option>
          <!-- <option>The Zonah Developers</option>
          <option>Trade Centre</option>
          <option>Skytech</option> -->
        </select>
      </div>

      <!-- <button class="button is-light is-rounded ml-3 btn-gradient-rounded">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" fill="none">
          <path
            d="M16.1383 17.1923L9.8575 10.9113C9.3575 11.3241 8.7825 11.6472 8.1325 11.8805C7.4825 12.1138 6.81008 12.2305 6.11525 12.2305C4.40608 12.2305 2.95958 11.6388 1.77575 10.4553C0.591917 9.27175 0 7.82558 0 6.11675C0 4.40808 0.59175 2.96142 1.77525 1.77675C2.95875 0.59225 4.40492 0 6.11375 0C7.82242 0 9.26908 0.591916 10.4537 1.77575C11.6382 2.95958 12.2305 4.40608 12.2305 6.11525C12.2305 6.82942 12.1107 7.5115 11.871 8.1615C11.6312 8.8115 11.3112 9.37683 10.9113 9.8575L17.192 16.1383L16.1383 17.1923ZM6.11525 10.7308C7.40375 10.7308 8.49508 10.2836 9.38925 9.38925C10.2836 8.49508 10.7308 7.40375 10.7308 6.11525C10.7308 4.82675 10.2836 3.73542 9.38925 2.84125C8.49508 1.94692 7.40375 1.49975 6.11525 1.49975C4.82675 1.49975 3.73542 1.94692 2.84125 2.84125C1.94692 3.73542 1.49975 4.82675 1.49975 6.11525C1.49975 7.40375 1.94692 8.49508 2.84125 9.38925C3.73542 10.2836 4.82675 10.7308 6.11525 10.7308Z"
            fill="#514B36" />
        </svg>
      </button> -->
    </div>
  </section>

  <!-- Project Cards -->
  <!-- <div class="projects-grid grid">
    <div class="project-card p-4 cell is-gap-2" data-city="mumbai">
      <img src="https://d1t2fddy6amcvs.cloudfront.net/commercial-projects-new/offices/the_Zonah Developers.png" width="150"
        height="150" alt="ESG Banner">
      <div class="card-content px-0">
        <h3>The Zonah Developers</h3>
        <p>Zonah Developers’s iconic boutique office, blending global business infrastructure and premium hospitality.
        </p>
        <a href="#" class="location is-flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path
              d="M11.1416 7.95444C11.4434 7.95444 11.701 7.84698 11.9143 7.63206C12.1278 7.41714 12.2345 7.15877 12.2345 6.85696C12.2345 6.55514 12.127 6.29751 11.912 6.08406C11.6971 5.87072 11.4387 5.76405 11.1369 5.76405C10.8351 5.76405 10.5775 5.87151 10.3641 6.08643C10.1507 6.30135 10.044 6.55972 10.044 6.86153C10.044 7.16335 10.1515 7.42098 10.3665 7.63443C10.5814 7.84777 10.8398 7.95444 11.1416 7.95444ZM11.1392 14.2519C9.54599 12.8429 8.34585 11.5289 7.53883 10.3097C6.73169 9.09073 6.32812 7.98144 6.32812 6.98187C6.32812 5.54761 6.79514 4.36459 7.72917 3.43281C8.66309 2.50104 9.79978 2.03516 11.1392 2.03516C12.4787 2.03516 13.6154 2.50104 14.5493 3.43281C15.4834 4.36459 15.9504 5.54761 15.9504 6.98187C15.9504 7.98144 15.5468 9.09073 14.7397 10.3097C13.9326 11.5289 12.7325 12.8429 11.1392 14.2519Z"
              fill="black" fill-opacity="0.54" />
          </svg> <Span class="is-underlined">Mahalaxmi, Mumbai</span>
        </a>
        <div class="details">
          <div>
            <p class="p-0 m-0 title">Land Extent</p>
            <p class="text">5.5 Acres</p>
          </div>
          <div>
            <p class="p-0 m-0 title">Completion</p>
            <p class="text">Q4 2028</p>
          </div>
          <div>
            <p class="p-0 m-0 title">Massing</p>
            <p class="text">Sky & Bay Towers</p>
          </div>

          <div>
            <p class="p-0 m-0 title">Development</p>
            <p class="text">3 Mn Sqft</p>
          </div>
        </div>
        <button class="button is-fullwidth is-rounded enquire-btn">
          <img src="https://d1t2fddy6amcvs.cloudfront.net/commercial-projects-new/up-right-arrow.svg"
            style="width:10px;border:none"> Enquire Now
        </button>
      </div>
    </div>
    <div class="project-card p-4 cell is-gap-2" data-city="delhi">
      <img src="https://d1t2fddy6amcvs.cloudfront.net/commercial-projects-new/offices/the_Zonah Developers.png" width="150"
        height="150" alt="ESG Banner">
      <div class="card-content px-0">
        <h3>The Zonah Developers</h3>
        <p>Zonah Developers’s iconic boutique office, blending global business infrastructure and premium hospitality.
        </p>
        <a href="#" class="location is-flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path
              d="M11.1416 7.95444C11.4434 7.95444 11.701 7.84698 11.9143 7.63206C12.1278 7.41714 12.2345 7.15877 12.2345 6.85696C12.2345 6.55514 12.127 6.29751 11.912 6.08406C11.6971 5.87072 11.4387 5.76405 11.1369 5.76405C10.8351 5.76405 10.5775 5.87151 10.3641 6.08643C10.1507 6.30135 10.044 6.55972 10.044 6.86153C10.044 7.16335 10.1515 7.42098 10.3665 7.63443C10.5814 7.84777 10.8398 7.95444 11.1416 7.95444ZM11.1392 14.2519C9.54599 12.8429 8.34585 11.5289 7.53883 10.3097C6.73169 9.09073 6.32812 7.98144 6.32812 6.98187C6.32812 5.54761 6.79514 4.36459 7.72917 3.43281C8.66309 2.50104 9.79978 2.03516 11.1392 2.03516C12.4787 2.03516 13.6154 2.50104 14.5493 3.43281C15.4834 4.36459 15.9504 5.54761 15.9504 6.98187C15.9504 7.98144 15.5468 9.09073 14.7397 10.3097C13.9326 11.5289 12.7325 12.8429 11.1392 14.2519Z"
              fill="black" fill-opacity="0.54" />
          </svg> <Span class="is-underlined">Mahalaxmi, Mumbai</span>
        </a>
        <div class="details">
          <div>
            <p class="p-0 m-0 title">Land Extent</p>
            <p class="text">5.5 Acres</p>
          </div>
          <div>
            <p class="p-0 m-0 title">Completion</p>
            <p class="text">Q4 2028</p>
          </div>
          <div>
            <p class="p-0 m-0 title">Massing</p>
            <p class="text">Sky & Bay Towers</p>
          </div>

          <div>
            <p class="p-0 m-0 title">Development</p>
            <p class="text">3 Mn Sqft</p>
          </div>
        </div>
        <button class="button is-fullwidth is-rounded enquire-btn">
          <img src="https://d1t2fddy6amcvs.cloudfront.net/commercial-projects-new/up-right-arrow.svg"
            style="width:10px;border:none"> Enquire Now
        </button>
      </div>
    </div>


    <div class="project-card p-4 cell is-gap-2" data-city="chennai">
      <img src="https://d1t2fddy6amcvs.cloudfront.net/commercial-projects-new/offices/the_Zonah Developers.png" width="150"
        height="150" alt="ESG Banner">
      <div class="card-content px-0">
        <h3>The Zonah Developers</h3>
        <p>Zonah Developers’s iconic boutique office, blending global business infrastructure and premium hospitality.
        </p>
        <a href="#" class="location is-flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path
              d="M11.1416 7.95444C11.4434 7.95444 11.701 7.84698 11.9143 7.63206C12.1278 7.41714 12.2345 7.15877 12.2345 6.85696C12.2345 6.55514 12.127 6.29751 11.912 6.08406C11.6971 5.87072 11.4387 5.76405 11.1369 5.76405C10.8351 5.76405 10.5775 5.87151 10.3641 6.08643C10.1507 6.30135 10.044 6.55972 10.044 6.86153C10.044 7.16335 10.1515 7.42098 10.3665 7.63443C10.5814 7.84777 10.8398 7.95444 11.1416 7.95444ZM11.1392 14.2519C9.54599 12.8429 8.34585 11.5289 7.53883 10.3097C6.73169 9.09073 6.32812 7.98144 6.32812 6.98187C6.32812 5.54761 6.79514 4.36459 7.72917 3.43281C8.66309 2.50104 9.79978 2.03516 11.1392 2.03516C12.4787 2.03516 13.6154 2.50104 14.5493 3.43281C15.4834 4.36459 15.9504 5.54761 15.9504 6.98187C15.9504 7.98144 15.5468 9.09073 14.7397 10.3097C13.9326 11.5289 12.7325 12.8429 11.1392 14.2519Z"
              fill="black" fill-opacity="0.54" />
          </svg> <Span class="is-underlined">Mahalaxmi, Mumbai</span>
        </a>
        <div class="details">
          <div>
            <p class="p-0 m-0 title">Land Extent</p>
            <p class="text">5.5 Acres</p>
          </div>
          <div>
            <p class="p-0 m-0 title">Completion</p>
            <p class="text">Q4 2028</p>
          </div>
          <div>
            <p class="p-0 m-0 title">Massing</p>
            <p class="text">Sky & Bay Towers</p>
          </div>

          <div>
            <p class="p-0 m-0 title">Development</p>
            <p class="text">3 Mn Sqft</p>
          </div>
        </div>
        <button class="button is-fullwidth is-rounded enquire-btn">
          <img src="https://d1t2fddy6amcvs.cloudfront.net/commercial-projects-new/up-right-arrow.svg"
            style="width:10px;border:none"> Enquire Now
        </button>
      </div>
    </div>

    <div class="project-card p-4 cell is-gap-2" data-city="hyderabad">
      <img src="https://d1t2fddy6amcvs.cloudfront.net/commercial-projects-new/offices/the_Zonah Developers.png" width="150"
        height="150" alt="ESG Banner">
      <div class="card-content px-0">
        <h3>The Zonah Developers</h3>
        <p>Zonah Developers’s iconic boutique office, blending global business infrastructure and premium hospitality.
        </p>
        <a href="#" class="location is-flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path
              d="M11.1416 7.95444C11.4434 7.95444 11.701 7.84698 11.9143 7.63206C12.1278 7.41714 12.2345 7.15877 12.2345 6.85696C12.2345 6.55514 12.127 6.29751 11.912 6.08406C11.6971 5.87072 11.4387 5.76405 11.1369 5.76405C10.8351 5.76405 10.5775 5.87151 10.3641 6.08643C10.1507 6.30135 10.044 6.55972 10.044 6.86153C10.044 7.16335 10.1515 7.42098 10.3665 7.63443C10.5814 7.84777 10.8398 7.95444 11.1416 7.95444ZM11.1392 14.2519C9.54599 12.8429 8.34585 11.5289 7.53883 10.3097C6.73169 9.09073 6.32812 7.98144 6.32812 6.98187C6.32812 5.54761 6.79514 4.36459 7.72917 3.43281C8.66309 2.50104 9.79978 2.03516 11.1392 2.03516C12.4787 2.03516 13.6154 2.50104 14.5493 3.43281C15.4834 4.36459 15.9504 5.54761 15.9504 6.98187C15.9504 7.98144 15.5468 9.09073 14.7397 10.3097C13.9326 11.5289 12.7325 12.8429 11.1392 14.2519Z"
              fill="black" fill-opacity="0.54" />
          </svg> <Span class="is-underlined">Mahalaxmi, Mumbai</span>
        </a>
        <div class="details">
          <div>
            <p class="p-0 m-0 title">Land Extent</p>
            <p class="text">5.5 Acres</p>
          </div>
          <div>
            <p class="p-0 m-0 title">Completion</p>
            <p class="text">Q4 2028</p>
          </div>
          <div>
            <p class="p-0 m-0 title">Massing</p>
            <p class="text">Sky & Bay Towers</p>
          </div>

          <div>
            <p class="p-0 m-0 title">Development</p>
            <p class="text">3 Mn Sqft</p>
          </div>
        </div>
        <button class="button is-fullwidth is-rounded enquire-btn">
          <img src="https://d1t2fddy6amcvs.cloudfront.net/commercial-projects-new/up-right-arrow.svg"
            style="width:10px;border:none"> Enquire Now
        </button>
      </div>
    </div>
  </div> -->
  <div class="projects-grid grid append-project-list">

    <div class="project-card p-4 cell is-gap-2" data-city="bangalore">
      <div style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 60%,#0f3460 100%);display:flex;align-items:center;justify-content:center;width:100%;height:150px;margin-bottom:12px;border-radius:4px;">
        <span style="color:rgba(255,255,255,0.25);font-size:36px;font-weight:300;letter-spacing:4px;">ZD</span>
      </div>
      <div class="card-content px-0">
        <h3>Zonah The Exchange</h3>
        <p>A premium Grade-A office tower designed for global enterprises, offering intelligent workspaces and unparalleled connectivity in Bangalore's business district.</p>
        <a href="/commercial-projects/the-exchange" class="location is-flex is-align-items-center is-gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span class="is-underlined">Hebbal, Bangalore</span>
        </a>
        <div class="details">
          <div><p class="p-0 m-0 title">Land Extent</p><p class="text">4.2 Acres</p></div>
          <div><p class="p-0 m-0 title">Completion</p><p class="text">Q2 2027</p></div>
          <div><p class="p-0 m-0 title">Type</p><p class="text">Office Tower</p></div>
          <div><p class="p-0 m-0 title">Development</p><p class="text">1.8 Mn Sqft</p></div>
        </div>
        <a href="javascript:void(0);" class="button is-fullwidth is-rounded enquire-btn passenquiry" open-sidebar="enquire-sidebar">Enquire Now</a>
      </div>
    </div>

    <div class="project-card p-4 cell is-gap-2" data-city="hyderabad">
      <div style="background:linear-gradient(135deg,#0d1b2a 0%,#1b3a5c 60%,#2e6da4 100%);display:flex;align-items:center;justify-content:center;width:100%;height:150px;margin-bottom:12px;border-radius:4px;">
        <span style="color:rgba(255,255,255,0.25);font-size:36px;font-weight:300;letter-spacing:4px;">ZD</span>
      </div>
      <div class="card-content px-0">
        <h3>Zonah Tech Park One</h3>
        <p>A next-generation technology park with state-of-the-art infrastructure, designed to attract leading IT and ITES companies to Hyderabad's growing corridor.</p>
        <a href="/commercial-projects/tech-park-one" class="location is-flex is-align-items-center is-gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span class="is-underlined">Hitec City, Hyderabad</span>
        </a>
        <div class="details">
          <div><p class="p-0 m-0 title">Land Extent</p><p class="text">7.8 Acres</p></div>
          <div><p class="p-0 m-0 title">Completion</p><p class="text">Q4 2027</p></div>
          <div><p class="p-0 m-0 title">Type</p><p class="text">IT Park</p></div>
          <div><p class="p-0 m-0 title">Development</p><p class="text">3.2 Mn Sqft</p></div>
        </div>
        <a href="javascript:void(0);" class="button is-fullwidth is-rounded enquire-btn passenquiry" open-sidebar="enquire-sidebar">Enquire Now</a>
      </div>
    </div>

    <div class="project-card p-4 cell is-gap-2" data-city="mumbai">
      <div style="background:linear-gradient(135deg,#1a0a0a 0%,#3d1a1a 60%,#7a3535 100%);display:flex;align-items:center;justify-content:center;width:100%;height:150px;margin-bottom:12px;border-radius:4px;">
        <span style="color:rgba(255,255,255,0.25);font-size:36px;font-weight:300;letter-spacing:4px;">ZD</span>
      </div>
      <div class="card-content px-0">
        <h3>Zonah Boulevard Square</h3>
        <p>A landmark mixed-use commercial destination in Mumbai, bringing Grade-A offices, fine dining, and upscale retail under one iconic roof at Mahalaxmi.</p>
        <a href="/commercial-projects/boulevard-square" class="location is-flex is-align-items-center is-gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span class="is-underlined">Mahalaxmi, Mumbai</span>
        </a>
        <div class="details">
          <div><p class="p-0 m-0 title">Land Extent</p><p class="text">5.5 Acres</p></div>
          <div><p class="p-0 m-0 title">Completion</p><p class="text">Q4 2028</p></div>
          <div><p class="p-0 m-0 title">Massing</p><p class="text">Sky &amp; Bay Towers</p></div>
          <div><p class="p-0 m-0 title">Development</p><p class="text">3 Mn Sqft</p></div>
        </div>
        <a href="javascript:void(0);" class="button is-fullwidth is-rounded enquire-btn passenquiry" open-sidebar="enquire-sidebar">Enquire Now</a>
      </div>
    </div>

    <div class="project-card p-4 cell is-gap-2" data-city="chennai">
      <div style="background:linear-gradient(135deg,#0a1a0a 0%,#1a3d1a 60%,#2e6b2e 100%);display:flex;align-items:center;justify-content:center;width:100%;height:150px;margin-bottom:12px;border-radius:4px;">
        <span style="color:rgba(255,255,255,0.25);font-size:36px;font-weight:300;letter-spacing:4px;">ZD</span>
      </div>
      <div class="card-content px-0">
        <h3>Zonah Gateway Towers</h3>
        <p>Twin high-rise office towers offering flexible Grade-A workspaces with panoramic city views, positioned at Chennai's thriving commercial gateway.</p>
        <a href="/commercial-projects/gateway-towers" class="location is-flex is-align-items-center is-gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span class="is-underlined">Anna Salai, Chennai</span>
        </a>
        <div class="details">
          <div><p class="p-0 m-0 title">Land Extent</p><p class="text">3.8 Acres</p></div>
          <div><p class="p-0 m-0 title">Completion</p><p class="text">Q1 2027</p></div>
          <div><p class="p-0 m-0 title">Type</p><p class="text">Twin Towers</p></div>
          <div><p class="p-0 m-0 title">Development</p><p class="text">1.5 Mn Sqft</p></div>
        </div>
        <a href="javascript:void(0);" class="button is-fullwidth is-rounded enquire-btn passenquiry" open-sidebar="enquire-sidebar">Enquire Now</a>
      </div>
    </div>

  </div>





  <div class="mt-3" id="loadMoreBtnForResidential">
    <a class="is-flex is-justify-content-center is-align-items-center loadMoreBtnForResidential">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="30" height="30" viewBox="0 0 35 35" fill="none">
        <path d="M11.2611 17.5L17.5 23.7389L23.7389 17.5L21.9712 15.7322L18.75 18.9534L18.75 11.0577L16.25 11.0577L16.25 18.9534L13.0288 15.7322L11.2611 17.5ZM-7.65096e-07 17.5034C-6.60245e-07 15.1046 0.455448 12.8417 1.36634 10.7144C2.27724 8.58718 3.53061 6.72532 5.12644 5.12884C6.72227 3.53237 8.58333 2.27836 10.7096 1.36683C12.8359 0.455608 15.0982 -8.69934e-07 17.4966 -7.65096e-07C19.9274 -6.58844e-07 22.1984 0.455448 24.3096 1.36635C26.4208 2.27724 28.2747 3.53061 29.8712 5.12644C31.4676 6.72228 32.7216 8.58333 33.6332 10.7096C34.5444 12.8359 35 15.0982 35 17.4966C35 19.9274 34.5446 22.1984 33.6337 24.3096C32.7228 26.4208 31.4694 28.2747 29.8736 29.8712C28.2777 31.4676 26.4247 32.7216 24.3144 33.6332C22.2042 34.5444 19.9338 35 17.5034 35C15.1046 35 12.8417 34.5446 10.7144 33.6337C8.58718 32.7228 6.72532 31.4694 5.12885 29.8736C3.53237 28.2777 2.27836 26.4247 1.36682 24.3144C0.455607 22.2042 -8.71335e-07 19.9338 -7.65096e-07 17.5034Z" fill="black"></path>
      </svg>
      Load More
    </a>
  </div>

</section>
<div id="enquire-now-sidebar" class="theme-sidebar theme-sidebar-sm">
  <div class="theme-sidebar-card">
    <div class="theme-sidebar-header">
      <div class="theme-sidebar-action">
        <span class="close-sidebar" close-sidebar="enquire-now-sidebar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </span>
      </div>
    </div>
    <div class="theme-sidebar-detail project-enquiry-sidebar">
      <div class="project-vertical-block">
        <div class="projects-img bind_enquiry_images">
        </div>
        <div class="project-title-and-price mt-4">
          <div class="project-title">
            <h2 class="bind_enquiry_project_name"></h2>
          </div>
          <div class="project-desc-price">
            <span class="bind_enquiry_project_address"></span>
            <span class="project-price bind_enquiry_project_price"></span>
          </div>
        </div>
        <div class="request-callback-form-detail">
          <div class="mb-4">
            <span class="is-uppercase has-text-weight-semibold">Request a callback</span>
          </div>
          <form class="form" id="request_call_back_frm">
            <div class="columns is-multiline is-vcentered">
              <div class="hide_infromation column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
                <div class="col-form">
                  <div class="form-group">
                    <label class="form-label">Your Name*</label>
                    <input type="text" id="your_name" name="your_name" class="form-control customer_fullname" placeholder="Enter Your Name">
                  </div>
                </div>
              </div>
              <div class="hide_infromation column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
                <div class="col-form">
                  <div class="form-group with-country-code dark-select">
                    <label class="form-label">Mobile*</label>
                    <div class="sm-select is-flex">
                      <select name="countrycode" id="countrycode" class="form-control select customer_Mobile_CountryCode customer_Country_Code countrycodeno">
                      </select>
                      <input type="text" id="mobile_callback" name="mobile_callback" class="form-control customer_Mobile numbervalidate" placeholder="Your Mobile">
                    </div>
                  </div>
                </div>
                <div class="col-form mt-3 is_whatsapp ">
                  <div class="form-group">
                    <div class="checkbox-item-update">
                      <div class="checkbox-container">
                        <label class="custom-checkbox">
                          <input type="checkbox" name="whatsapp_nri_request_call_back" id="whatsapp_nri_request_call_back">
                        </label>
                        <span class="checkbox-text">Do you have whatsapp activated on this number ?</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hide_infromation column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
                <div class="col-form">
                  <div class="form-group">
                    <label class="form-label">Your Email*</label>
                    <input type="email" id="email_callback" name="email_callback" class="form-control customer_Email emailvalidator" placeholder="Enter Your Email">
                  </div>
                </div>
              </div>
              <div class="hide_infromation column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
                <div class="col-form">
                  <div class="form-group">
                    <label class="form-label">Schedule Date</label>
                    <input type="date" name="schedule_date" id="schedule_date" class="form-control" placeholder="Enter Schedule Date" />
                  </div>
                </div>
              </div>
              <div class="hide_infromation column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
                <div class="col-form">
                  <div class="form-group">
                    <label class="form-label">Schedule Time</label>
                    <div class="input-with-icon input-icon-right">
                      <input type="text" class="form-control flatpickrtime font-times-new-roman flatpickr-input valid" placeholder="Select Time" id="requestcallback_time" name="requestcallback_time">
                      <div class="input-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="9" stroke="#A88944" stroke-linecap="round" stroke-linejoin="round"></circle>
                          <path d="M12 7V12L15 15" stroke="#A88944" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="hide_infromation column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
                <div class="col-form">
                  <div class="form-group">
                    <div class="checkbox-item-update">
                      <div class="checkbox-container">
                        <label class="custom-checkbox">
                          <input type="checkbox" name="agree_to_be_contacted">
                        </label>
                        <span class="checkbox-text">Yes, I want to stay informed and receive newsletter and marketing updates.</span>
                      </div>
                      <!-- <span class="checkbox-desc">By subscribing, you agree to our <a href="https://www.Zonah Developersconstructions.com/privacy-policy" target="_blank" class="golden-text">Privacy Policy</a> and <a href="https://www.Zonah Developersconstructions.com/terms-and-conditions" target="_blank" class="golden-text">Terms of Use</a>. You can unsubscribe at any time. We respect your privacy and will never share your information with third parties.</span> -->
                      <span class="checkbox-desc">By submitting this form you agree to the <a href="https://www.Zonah Developersconstructions.com/terms-and-conditions" target="_blank" class="golden-text">Terms and Conditions</a> and <a href="https://www.Zonah Developersconstructions.com/privacy-policy" target="_blank" class="golden-text">Privacy Policy</a></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
                <div class="col-form mb-0">
                  <button type="submit" class="theme-btn line-btn full-width enquiry_now_submit">Send OTP</button>
                </div>
              </div>
            </div>
          </form>

          <form class="form sm-form is-relative" id="otp_verify_frm">
            <div class="theme-loader form-loader theme-page-loader">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="100" height="100" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g>
                  <circle cx="38" cy="50" fill="#3f3f3f" r="12">
                    <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="38;62;38" begin="-0.5s"></animate>
                  </circle>
                  <circle cx="62" cy="50" fill="#ad9050" r="12">
                    <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="38;62;38" begin="0s"></animate>
                  </circle>
                  <circle cx="38" cy="50" fill="#3f3f3f" r="12">
                    <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="38;62;38" begin="-0.5s"></animate>
                    <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" dur="1s" repeatCount="indefinite"></animate>
                  </circle>
                  <g></g>
                </g>
              </svg>
            </div>
            <div class="show_infromation is-hidden columns is-multiline is-gapless is-vcentered">

              <div class="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
                <div class="col-form">
                  <div class="form-group">
                    <label class="form-label" for="bind_hidden_name">Name : </label>
                    <span class="bind_hidden_name"></span>
                  </div>
                </div>
                <div class="col-form">
                  <div class="form-group">
                    <label class="form-label" for="bind_hidden_number">Number : </label>
                    <span class="bind_hidden_number"></span>
                  </div>
                </div>
                <div class="col-form">
                  <div class="form-group">
                    <label class="form-label" for="bind_hidden_email">Email : </label>
                    <span class="bind_hidden_email"></span>
                  </div>
                </div>
                <div class="col-form">
                  <div class="form-group">
                    <label class="form-label">OTP*</label>
                    <input type="text" name="otp_dd" id="otp_dd" class="form-control numbervalidate" placeholder="OTP" maxlength="6">
                  </div>
                </div>
                <div id="timer_display" class="resend-btn-timer timer_display">Resend OTP in 0s</div>
                <div id="resend_otp_container" class="has-text-right resend_otp_container">
                  <button id="resend_otp_btn_request_call_back" type="button" class="border-0 fs-6 fw-bold p-0 text-primary white-bg resend_otp_btn_request_call_back">Resend OTP</button>
                </div>
                <div class="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
                  <div class="col-form mb-0">
                    <button type="submit" class="theme-btn line-btn full-width otp_submit_btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<input type="hidden" id="otp_verify">
<input type="hidden" id="requestotp_verify">
<input type="hidden" id="custom_search">
<!-- <input type="hidden" id="is_active_filter"> -->

    ` }} />
  );
}
