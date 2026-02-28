
import React from 'react';

export default function AboutUs() {
    return (
        <main className="home-page-replica aboutus-page" dangerouslySetInnerHTML={{
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
</script>    <section class="section section-about-us section-inner-page pt-6 aboutus-projects">
	<div class="container about-us-wrapper">
		<div class="section-title js-scroll fade-in-top scrolled">
			<h1 class="text-primary">
				About us
			</h1>
		</div>

		<div class="section-title js-scroll fade-in-top scrolled">
			<span class="theme-title">About Zonah Developers</span>
		</div>

		<div class="columns is-multiline is-vcentered about-us-cols gap-5">
			<div class="column is-12-mobile is-12-tablet is-7-desktop is-7-widescreen about-us-col " id="about_details_bind">
                <div class="js-scroll fade-in-bottom scrolled">
                  <p class="mb-4">Founded with a vision to redefine the landscape of Indian real estate, Zonah Developers has grown into one of the most trusted and respected names in the industry. Over the years, we have delivered landmark developments across residential, commercial, hospitality, and retail segments in India's most dynamic cities.</p>
                  <p class="mb-4">Our philosophy is grounded in a deep respect for architecture, sustainability, and the quality of life of those who inhabit our spaces. Each project we undertake is a commitment to our customers — a promise of thoughtful design, enduring quality, and timely delivery.</p>
                  <p class="mb-4">From luxurious apartments and integrated townships to Grade-A office parks and premium retail destinations, Zonah Developers continues to shape skylines and inspire communities. We are not just building spaces — we are building legacies.</p>
                  <a href="/about-us/board-of-directors" class="theme-btn mt-2">Learn More</a>
                </div>
			</div>

			<div class="column is-12-mobile is-12-tablet is-5-desktop is-5-widescreen about-us-col border-left border-theme">
				<div class="about-us-counter-detail js-scroll fade-in-bottom scrolled">
					<div class="columns is-mobile is-multiline about-us-counter-cols appendcount">
						<div class="column is-6 about-us-counter-col">
							<div class="about-us-counter-item">
								<h3 class="text-primary">12 Mn+</h3>
								<span>Sq.ft. Developed</span>
							</div>
						</div>
						<div class="column is-6 about-us-counter-col">
							<div class="about-us-counter-item">
								<h3 class="text-primary">50+</h3>
								<span>Projects Delivered</span>
							</div>
						</div>
						<div class="column is-6 about-us-counter-col">
							<div class="about-us-counter-item">
								<h3 class="text-primary">40K+</h3>
								<span>Happy Homes</span>
							</div>
						</div>
						<div class="column is-6 about-us-counter-col">
							<div class="about-us-counter-item">
								<h3 class="text-primary">8</h3>
								<span>Major Cities</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="section section-awards section-inner-page mt-5">
	<div class="container awards-wrapper">
		<div class="section-title js-scroll  fade-in-top scrolled has-text-centered">
			<h1 class="text-primary">
				History Timeline
			</h1>
		</div>

		<div class="tabs-detail-responsive  js-scroll fade-in-top scrolled">
			<ul class="tabs-detail tab-rounded is-justify-content-center- is-gap-0 pb-2 theme-scrollbar-horizontal bind_year_historytimeline">
			</ul>
		</div>

		<div class="awards-tabs-detail js-scroll fade-in-bottom scrolled bind_historytimeline">
			&nbsp;
		</div>
	</div>
</section>
<section class="section section-landmark-developments light-gray-bg">
    <div class="container landmark-developments-wrapper">
        <div class="section-title section-title-with-arrow js-scroll fade-in-top">
            <span class="theme-title">The Zonah Developers Marquee</span>

            <h2>
                Landmark Developments
            </h2>
        </div>

        <div class="about-us-wrapper mb-6">
            <div class="splide js-scroll fade-in-bottom" id="landmark-developments-slider">
                <div class="splide__track">
                    <ul class="splide__list append-landmark">
                        
                    </ul>
                </div>

                <div class="splide__arrows arrow-top-slider">
                    <button aria-controls="" aria-label="Go to last slide" class="splide__arrow splide__arrow--prev" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M13 18l6 -6"></path>
                            <path d="M13 6l6 6"></path>
                        </svg></button><button aria-controls="" aria-label="Next slide" class="splide__arrow splide__arrow--next" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M13 18l6 -6"></path>
                            <path d="M13 6l6 6"></path>
                        </svg></button>
                </div>
            </div>
        </div>

        <div class="about-us-wrapper mb-6">
            <div class="section-title is-flex is-align-items-center title-with-tagline section-title-with-arrow js-scroll fade-in-top">
                <h5 class="light-gray-bg border-right border-theme">
                    Residential
                </h5>

                <p class="light-gray-bg">
                    Shaping the skylines of commercial business districts and techno zones in India&#39;s major cities.
                </p>
            </div>

            <div class="splide js-scroll fade-in-bottom" id="residential-slider">
                <div class="splide__track">
                    <ul class="splide__list append-residential">
                        
                    </ul>
                </div>

                <div class="splide__arrows arrow-top-slider">
                    <button aria-controls="" aria-label="Go to last slide" class="splide__arrow splide__arrow--prev" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M13 18l6 -6"></path>
                            <path d="M13 6l6 6"></path>
                        </svg></button><button aria-controls="" aria-label="Next slide" class="splide__arrow splide__arrow--next" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M13 18l6 -6"></path>
                            <path d="M13 6l6 6"></path>
                        </svg></button>
                </div>
            </div>
        </div>

        <div class="about-us-wrapper mb-6">
            <div class="section-title is-flex is-align-items-center title-with-tagline section-title-with-arrow js-scroll fade-in-top">
                <h5 class="light-gray-bg border-right border-theme">
                    Commercial
                </h5>

                <p class="light-gray-bg">
                    Shaping the skylines of commercial business districts and techno zones in India&#39;s major cities.
                </p>
            </div>

            <div class="splide js-scroll fade-in-bottom" id="commercial-slider">
                <div class="splide__track">
                    <ul class="splide__list append-commercial">
                        
                    </ul>
                </div>

                <div class="splide__arrows arrow-top-slider">
                    <button aria-controls="" aria-label="Go to last slide" class="splide__arrow splide__arrow--prev" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M13 18l6 -6"></path>
                            <path d="M13 6l6 6"></path>
                        </svg></button><button aria-controls="" aria-label="Next slide" class="splide__arrow splide__arrow--next" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M13 18l6 -6"></path>
                            <path d="M13 6l6 6"></path>
                        </svg></button>
                </div>
            </div>
        </div>

        <div class="about-us-wrapper mb-6">
            <div class="section-title is-flex is-align-items-center title-with-tagline section-title-with-arrow js-scroll fade-in-top">
                <h5 class="light-gray-bg border-right border-theme">
                    Hospitality
                </h5>

                <p class="light-gray-bg">
                    Shaping the skylines of commercial business districts and techno zones in India&#39;s major cities.
                </p>
            </div>

            <div class="splide js-scroll fade-in-bottom" id="hospitality-slider">
                <div class="splide__track">
                    <ul class="splide__list append-hospitality">
                        
                    </ul>
                </div>

                <div class="splide__arrows arrow-top-slider">
                    <button aria-controls="" aria-label="Go to last slide" class="splide__arrow splide__arrow--prev" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M13 18l6 -6"></path>
                            <path d="M13 6l6 6"></path>
                        </svg></button><button aria-controls="" aria-label="Next slide" class="splide__arrow splide__arrow--next" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M13 18l6 -6"></path>
                            <path d="M13 6l6 6"></path>
                        </svg></button>
                </div>
            </div>
        </div>

        <div class="about-us-wrapper">
            <div class="section-title is-flex is-align-items-center title-with-tagline section-title-with-arrow js-scroll fade-in-top">
                <h5 class="light-gray-bg border-right border-theme">
                    Retail
                </h5>

                <p class="light-gray-bg">
                    Powering a futuristic revolution from a rich retail legacy.
                </p>
            </div>

            <div class="splide js-scroll fade-in-bottom" id="retail-slider">
                <div class="splide__track">
                    <ul class="splide__list append-retail">
                        
                    </ul>
                </div>

                <div class="splide__arrows arrow-top-slider">
                    <button aria-controls="" aria-label="Go to last slide" class="splide__arrow splide__arrow--prev" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M13 18l6 -6"></path>
                            <path d="M13 6l6 6"></path>
                        </svg></button><button aria-controls="" aria-label="Next slide" class="splide__arrow splide__arrow--next" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M13 18l6 -6"></path>
                            <path d="M13 6l6 6"></path>
                        </svg></button>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section section-board-of-member">
<div class="section-title has-text-centered js-scroll fade-in-top scrolled">
                <span class="theme-title">The Management</span>
                <h2>Team</h2>
            </div>
	<div class="container board-of-member-wrapper board-member">
		<div class="about-us-wrapper mb-6 director-datahide">
			<div class="section-title is-flex is-align-items-center section-title-with-arrow js-scroll fade-in-top">
				<h5 class="white-bg">
					Board of Directors
				</h5>
			</div>

			<div class="splide js-scroll fade-in-bottom" id="board-of-director-slider">
				<div class="splide__track">
					<ul class="splide__list append-directors">
						<li class="splide__slide">
							<div class="board-member-card">
								<a href="/about-us/board-of-directors/rajan-nair">
									<div class="member-img" style="background:linear-gradient(135deg,#1a1a2e,#0f3460);width:100%;height:220px;display:flex;align-items:center;justify-content:center;border-radius:4px;">
										<span style="color:rgba(255,255,255,0.4);font-size:52px;font-weight:300;">RN</span>
									</div>
									<div class="member-info mt-3">
										<h4>Mr. Rajan Nair</h4>
										<span class="text-primary">Chairman &amp; Managing Director</span>
									</div>
								</a>
							</div>
						</li>
						<li class="splide__slide">
							<div class="board-member-card">
								<a href="/about-us/board-of-directors/priya-mehta">
									<div class="member-img" style="background:linear-gradient(135deg,#2c1a3e,#6b3a8a);width:100%;height:220px;display:flex;align-items:center;justify-content:center;border-radius:4px;">
										<span style="color:rgba(255,255,255,0.4);font-size:52px;font-weight:300;">PM</span>
									</div>
									<div class="member-info mt-3">
										<h4>Ms. Priya Mehta</h4>
										<span class="text-primary">Vice Chairperson</span>
									</div>
								</a>
							</div>
						</li>
						<li class="splide__slide">
							<div class="board-member-card">
								<a href="/about-us/board-of-directors/arjun-srinivasan">
									<div class="member-img" style="background:linear-gradient(135deg,#0a2a1a,#0f4d37);width:100%;height:220px;display:flex;align-items:center;justify-content:center;border-radius:4px;">
										<span style="color:rgba(255,255,255,0.4);font-size:52px;font-weight:300;">AS</span>
									</div>
									<div class="member-info mt-3">
										<h4>Mr. Arjun Srinivasan</h4>
										<span class="text-primary">Executive Director &amp; CEO</span>
									</div>
								</a>
							</div>
						</li>
						<li class="splide__slide">
							<div class="board-member-card">
								<a href="/about-us/board-of-directors/ananya-krishnan">
									<div class="member-img" style="background:linear-gradient(135deg,#1a0a0a,#7a2020);width:100%;height:220px;display:flex;align-items:center;justify-content:center;border-radius:4px;">
										<span style="color:rgba(255,255,255,0.4);font-size:52px;font-weight:300;">DK</span>
									</div>
									<div class="member-info mt-3">
										<h4>Dr. Ananya Krishnan</h4>
										<span class="text-primary">Independent Director</span>
									</div>
								</a>
							</div>
						</li>
					</ul>
				</div>

				<div class="splide__arrows arrow-top-slider">
					<button aria-controls="" aria-label="Go to last slide" class="splide__arrow splide__arrow--prev" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M5 12l14 0"></path> <path d="M13 18l6 -6"></path> <path d="M13 6l6 6"></path> </svg></button><button aria-controls="" aria-label="Next slide" class="splide__arrow splide__arrow--next" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M5 12l14 0"></path> <path d="M13 18l6 -6"></path> <path d="M13 6l6 6"></path> </svg></button>
				</div>
			</div>
		</div>

		<div class="about-us-wrapper mb-6 executivedirectors-datahide">
			<div class="section-title is-flex is-align-items-center section-title-with-arrow js-scroll fade-in-top">
				<h5 class="white-bg">
					Executive Directors
				</h5>
			</div>

			<div class="splide js-scroll fade-in-bottom" id="executive-directors-slider">
				<div class="splide__track">
					<ul class="splide__list append-executive-directors">
					</ul>
				</div>

				<div class="splide__arrows arrow-top-slider">
					<button aria-controls="" aria-label="Go to last slide" class="splide__arrow splide__arrow--prev" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M5 12l14 0"></path> <path d="M13 18l6 -6"></path> <path d="M13 6l6 6"></path> </svg></button><button aria-controls="" aria-label="Next slide" class="splide__arrow splide__arrow--next" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M5 12l14 0"></path> <path d="M13 18l6 -6"></path> <path d="M13 6l6 6"></path> </svg></button>
				</div>
			</div>
		</div>

		<div class="about-us-wrapper mb-6 chiefexecutive-datahide">
			<div class="section-title is-flex is-align-items-center section-title-with-arrow js-scroll fade-in-top">
				<h5 class="white-bg">
					Chief Executive Officer
				</h5>
			</div>

			<div class="splide js-scroll fade-in-bottom" id="chief-executive-slider">
				<div class="splide__track">
					<ul class="splide__list append-chif-executive-officer">
					</ul>
				</div>

				<div class="splide__arrows arrow-top-slider">
					<button aria-controls="" aria-label="Go to last slide" class="splide__arrow splide__arrow--prev" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M5 12l14 0"></path> <path d="M13 18l6 -6"></path> <path d="M13 6l6 6"></path> </svg></button><button aria-controls="" aria-label="Next slide" class="splide__arrow splide__arrow--next" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M5 12l14 0"></path> <path d="M13 18l6 -6"></path> <path d="M13 6l6 6"></path> </svg></button>
				</div>
			</div>
		</div>

		<div class="about-us-wrapper chiefinancial-datahide">
			<div class="section-title is-flex is-align-items-center section-title-with-arrow js-scroll fade-in-top">
				<h5 class="white-bg">
					Chief Financial Officer
				</h5>
			</div>

			<div class="splide js-scroll fade-in-bottom" id="chief-financial-officer-slider">
				<div class="splide__track">
					<ul class="splide__list append-chief-financial-officer">
					</ul>
				</div>

				<div class="splide__arrows arrow-top-slider">
					<button aria-controls="" aria-label="Go to last slide" class="splide__arrow splide__arrow--prev" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M5 12l14 0"></path> <path d="M13 18l6 -6"></path> <path d="M13 6l6 6"></path> </svg></button><button aria-controls="" aria-label="Next slide" class="splide__arrow splide__arrow--next" type="button"><svg class="icon icon-tabler icon-tabler-arrow-right" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M5 12l14 0"></path> <path d="M13 18l6 -6"></path> <path d="M13 6l6 6"></path> </svg></button>
				</div>
			</div>
		</div>
	</div>
</section>

    ` }} />
    );
}
