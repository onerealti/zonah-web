
import React from 'react';

export default function ContactUs() {
    return (
        <main className="home-page-replica contactus-page" dangerouslySetInnerHTML={{
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
</script>    <section class="section section-contact-us-inner-page section-inner-page pt-6">
	<div class="container contact-us-inner-page-wrapper">
		<div class="columns is-mobile is-multiline contact-us-inner-page-cols">
			<div class="column is-12-mobile is-12-tablet is-8-desktop is-8-widescreen contact-us-inner-page-col order-2-res">
				<div class="contact-us-inner-page-detail">
					<div class="section-title js-scroll fade-in-top scrolled">
						<h1>
							Our Office
						</h1>
					</div>

					<ul class="tabs-detail js-scroll fade-in-top scrolled">
						<li class="tab2 is-active" onclick="openTab2(event,'branch-corporate')">
							<a>Corporate</a>
						</li>
						<li class="tab2" onclick="openTab2(event,'branch-domestic')">
							<a>Branch office</a>
						</li>
						<li class="tab2" onclick="openTab2(event,'branch-international')">
							<a>International</a>
						</li>
					</ul>

					<div class="contact-us-tabs-detail js-scroll fade-in-bottom scrolled">
					<div class="content-tab2" id="branch-corporate" style="display: block;">
						<div class="columns is-multiline is-vcentered">
							<div class="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
								<div class="branch-address-card mb-4 p-4" style="border:1px solid #e5e5e5;border-radius:6px;">
									<h5 class="golden-text mb-2">Zonah Developers — Registered &amp; Corporate Office</h5>
									<p class="mb-1"><strong>Address:</strong> Zonah Towers, 14th Floor, 100 Ft Road, Indiranagar, Bangalore – 560 038, Karnataka, India</p>
									<p class="mb-1"><strong>Tel:</strong> <a href="tel:+918022345678">+91 80 2234 5678</a></p>
									<p class="mb-1"><strong>Email:</strong> <a href="mailto:info@zonahdevelopers.com">info@zonahdevelopers.com</a></p>
									<p class="mb-0"><strong>Hours:</strong> Mon – Sat, 9:30 AM – 6:00 PM</p>
									<a href="https://maps.google.com" target="_blank" class="theme-btn mt-3" style="display:inline-block;">Get Directions</a>
								</div>
							</div>
						</div>
					</div>

					<div class="content-tab2" id="branch-domestic" style="display: none;">
						<div class="columns is-multiline is-vcentered">

							<div class="column is-12-mobile is-12-tablet is-6-desktop is-6-widescreen">
								<div class="branch-address-card mb-4 p-4" style="border:1px solid #e5e5e5;border-radius:6px;">
									<h5 class="golden-text mb-2">Hyderabad</h5>
									<p class="mb-1">Plot No. 5, HITEC City, Gachibowli, Hyderabad – 500 081, Telangana</p>
									<p class="mb-1"><a href="tel:+914044567890">+91 40 4456 7890</a></p>
									<p class="mb-0"><a href="mailto:hyderabad@zonahdevelopers.com">hyderabad@zonahdevelopers.com</a></p>
								</div>
							</div>

							<div class="column is-12-mobile is-12-tablet is-6-desktop is-6-widescreen">
								<div class="branch-address-card mb-4 p-4" style="border:1px solid #e5e5e5;border-radius:6px;">
									<h5 class="golden-text mb-2">Chennai</h5>
									<p class="mb-1">103, Mount Road, Guindy, Chennai – 600 032, Tamil Nadu</p>
									<p class="mb-1"><a href="tel:+914422987654">+91 44 2298 7654</a></p>
									<p class="mb-0"><a href="mailto:chennai@zonahdevelopers.com">chennai@zonahdevelopers.com</a></p>
								</div>
							</div>

							<div class="column is-12-mobile is-12-tablet is-6-desktop is-6-widescreen">
								<div class="branch-address-card mb-4 p-4" style="border:1px solid #e5e5e5;border-radius:6px;">
									<h5 class="golden-text mb-2">Kochi</h5>
									<p class="mb-1">7th Floor, Valiyakulangara Road, Marine Drive, Kochi – 682 031, Kerala</p>
									<p class="mb-1"><a href="tel:+914842398765">+91 484 239 8765</a></p>
									<p class="mb-0"><a href="mailto:kochi@zonahdevelopers.com">kochi@zonahdevelopers.com</a></p>
								</div>
							</div>

							<div class="column is-12-mobile is-12-tablet is-6-desktop is-6-widescreen">
								<div class="branch-address-card mb-4 p-4" style="border:1px solid #e5e5e5;border-radius:6px;">
									<h5 class="golden-text mb-2">Mumbai</h5>
									<p class="mb-1">501, Mahalaxmi Chambers, Dr. E. Moses Road, Mahalaxmi, Mumbai – 400 011, Maharashtra</p>
									<p class="mb-1"><a href="tel:+912224567890">+91 22 2456 7890</a></p>
									<p class="mb-0"><a href="mailto:mumbai@zonahdevelopers.com">mumbai@zonahdevelopers.com</a></p>
								</div>
							</div>

						</div>
					</div>

					<div class="content-tab2" id="branch-international" style="display: none;">
						<div class="columns is-multiline is-vcentered">

							<div class="column is-12-mobile is-12-tablet is-6-desktop is-6-widescreen">
								<div class="branch-address-card mb-4 p-4" style="border:1px solid #e5e5e5;border-radius:6px;">
									<h5 class="golden-text mb-2">Dubai, UAE</h5>
									<p class="mb-1">Office 2204, The Onyx Tower 2, The Greens, Sheikh Zayed Road, Dubai, UAE</p>
									<p class="mb-1"><a href="tel:+97143678901">+971 4 367 8901</a></p>
									<p class="mb-0"><a href="mailto:dubai@zonahdevelopers.com">dubai@zonahdevelopers.com</a></p>
								</div>
							</div>

							<div class="column is-12-mobile is-12-tablet is-6-desktop is-6-widescreen">
								<div class="branch-address-card mb-4 p-4" style="border:1px solid #e5e5e5;border-radius:6px;">
									<h5 class="golden-text mb-2">Singapore</h5>
									<p class="mb-1">100 Amoy Street, #07-02, Singapore – 069920</p>
									<p class="mb-1"><a href="tel:+6565321890">+65 6532 1890</a></p>
									<p class="mb-0"><a href="mailto:singapore@zonahdevelopers.com">singapore@zonahdevelopers.com</a></p>
								</div>
							</div>

							<div class="column is-12-mobile is-12-tablet is-6-desktop is-6-widescreen">
								<div class="branch-address-card mb-4 p-4" style="border:1px solid #e5e5e5;border-radius:6px;">
									<h5 class="golden-text mb-2">London, UK</h5>
									<p class="mb-1">12 Berkeley Square, Mayfair, London W1J 6EL, United Kingdom</p>
									<p class="mb-1"><a href="tel:+442034567890">+44 20 3456 7890</a></p>
									<p class="mb-0"><a href="mailto:london@zonahdevelopers.com">london@zonahdevelopers.com</a></p>
								</div>
							</div>

						</div>
					</div>
				</div>
				</div>
			</div>

			<div class="column is-12-mobile is-12-tablet is-4-desktop is-4-widescreen contact-us-inner-page-col order-1-res z-index-1">
				<div class="branch-contact-block gray-border p-4 position-sticky-block- js-scroll fade-in-top scrolled">
					<h5 class="golden-text mb-4 is-capitalized">
						Request a callback
					</h5>

					<form class="form sm-form" id="request_call_back_frm">
						<div class="columns is-multiline is-gapless is-vcentered">
							<div class="hide_infromation column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
								<div class="col-form">
									<div class="form-group">
										<label class="form-label">Your Name*</label> <input class="form-control" id="name_dd" name="name_dd" placeholder="Enter Your Name" type="text">
									</div>
								</div>
							</div>

							<div class="hide_infromation column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
								<div class="col-form">
									<div class="form-group with-country-code dark-select">
										<label class="form-label">Mobile*</label>

										<div class="sm-select is-flex">
											<select class="form-control select countrycodeno" id="country_dd" name="country_dd"> </select> <input class="form-control numbervalidate" id="number_dd" name="number_dd" placeholder="Your Mobile" type="text">
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
										<label class="form-label">Your Email*</label> <input class="form-control emailvalidator" id="email_dd" name="email_dd" placeholder="Enter Your Email" type="email">
									</div>
								</div>
							</div>

							<div class="hide_infromation column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
								<div class="col-form">
									<div class="form-group custom-select">
										<label class="form-label">City*</label> <select class="form-control select" id="city_dd" name="city_dd"> </select>
									</div>
								</div>
							</div>

							<div class="hide_infromation column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
								<div class="col-form">
									<div class="form-group custom-select">
										<label class="form-label">Department</label> <select class="form-control select" id="department" name=""> <!-- <option value="">Select Department</option>
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                                <option value="Option 3">Option 3</option> --> </select>
									</div>
								</div>
							</div>
							<div class="hide_infromation column Request_Category is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-hidden">
								<div class="col-form">
									<div class="form-group custom-select">
										<label class="form-label">Request Category</label> <select class="form-control select" id="description" name=""> <!-- <option value="">Select Department</option>
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                                <option value="Option 3">Option 3</option> --> </select>
									</div>
								</div>
							</div>
							<div class="hide_infromation column project_inquiry is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-hidden">
								<div class="col-form">
									<div class="form-group custom-select">
										<label class="form-label">Project Name</label> <select class="form-control select" id="project_inquiry" name=""> <!-- <option value="">Select Department</option>
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                                <option value="Option 3">Option 3</option> --> </select>
									</div>
								</div>
							</div>

							<div class="hide_infromation column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
								<div class="col-form">
									<div class="form-group">
										<label class="form-label">Message*</label> <input class="form-control" id="message_dd" name="message_dd" placeholder="write your message here..." type="text">
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
										<?php /*/ ?><!-- <span class="checkbox-desc">By subscribing, you agree to our <a href="https://www.Zonah Developersconstructions.com/privacy-policy" target="_blank" class="golden-text">Privacy Policy</a> and <a href="https://www.Zonah Developersconstructions.com/terms-and-conditions" target="_blank" class="golden-text">Terms of Use</a>. You can unsubscribe at any time. We respect your privacy and will never share your information with third parties.</span> --><?php /*/ ?>
										<span class="checkbox-desc">By submitting this form you agree to the <a href="https://www.Zonah Developersconstructions.com/terms-and-conditions" target="_blank" class="golden-text">Terms and Conditions</a> and <a href="https://www.Zonah Developersconstructions.com/privacy-policy" target="_blank" class="golden-text">Privacy Policy</a></span>
									</div>
								</div>
							</div>
						</div>
						<div class="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
							<div class="col-form mb-0">
								<button class="theme-btn line-btn full-width contact_submit" type="submit">Send OTP</button>
							</div>
						</div>
						</div>
					</form>

					<form class="form sm-form" id="otp_verify_frm">
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
										<label class="form-label">OTP*</label> <input class="form-control numbervalidate" id="otp_dd" maxlength="6" name="otp_dd" placeholder="OTP" type="text">
									</div>
								</div>
                <div id="timer_display" class="resend-btn-timer timer_display">Resend OTP in 0s</div>
                  <div id="resend_otp_container" class="has-text-right resend_otp_container">
                      <button id="resend_otp_btn_request_call_back" type="button" class="border-0 fs-6 fw-bold p-0 text-primary white-bg resend_otp_btn_request_call_back">Resend OTP</button>
                  </div>
								<div class="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
									<div class="col-form mb-0">
										<button class="theme-btn line-btn full-width otp_submit_btn" type="submit">Submit</button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>

<p>
	<input id="otp_verify" type="hidden">
</p>

    ` }} />
    );
}
