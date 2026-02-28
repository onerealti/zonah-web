
import React from 'react';

export default function TermsAndConditions() {
    return (
        <main className="home-page-replica termsandconditions-page" dangerouslySetInnerHTML={{
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
                    <!-- <p>We use cookies to deliver the best possible experience on our website. To learn more, visit our <a href="https://www.zonahdevelopers.com/privacy-policy" class="golden-text fw-bold">Privacy Policy</a>. By continuing to use this site, or closing this box, you consent to our use of cookies. <a href="" class="golden-text fw-bold">Cookie Notice</a>.</p></div> -->
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
			<div class="column is-12-mobile is-12-tablet is-8-desktop is-8-widescreen cms-col">
				<div class="cms-detail js-scroll fade-in-top scrolled">
					<div class="section-title">
						<h2 class="text-primary">
							Terms &amp; Conditions
						</h2>
					</div>

					<p>
						Welcome to the official website of the Zonah Developers. This website is owned and operated by Zonah Developers Estates Projects Limited. By visiting our website and accessing the information, resources, services, products, and tools we provide, you understand and agree to accept and adhere to the following terms and conditions as stated in this policy (hereafter referred to as &#39;User Agreement&#39;), along with the terms and conditions as stated in our Privacy (please refer to the Privacy section on our website for more information).
					</p>

					<div class="cms-item">
						<b>This agreement is in effect as of Jan 1, 2014.</b>

						<p>
							We reserve the right to change this User Agreement from time to time without notice. You acknowledge and agree that it is your responsibility to review this User Agreement periodically to familiarize yourself with any modifications. Your continued use of this site after such modifications will constitute acknowledgment and agreement of the modified terms and conditions.
						</p>
					</div>

					<div class="cms-item">
						<b>Viewing the website</b>

						<p>
							This site is optimised for IE 9.0 and above | Mozilla Firefox 9.0 and above | Google Chrome 9 and above | Opera 9 and above and Netscape 6
						</p>

						<p>
							Best viewed in 1024 x 768 screen resolution or higher.
						</p>
					</div>

					<div class="cms-item">
						<b>Responsible Use and Conduct</b>

						<p>
							By visiting our website and accessing the information, resources, services, products, and tools we provide for you, either directly or indirectly (hereafter referred to as &#39;Resources&#39;), you agree to use these Resources only for the purposes intended as permitted by:
						</p>

						<ol class="dark-3 fs-6 mb-4">
							<li>
								The terms of this User Agreement
							</li>
							<li>
								Applicable laws, regulations and generally accepted online practices or guidelines.
							</li>
						</ol>
					</div>

					<div class="cms-item">
						<b>Wherein, you understand that:</b>

						<ol class="dark-3 fs-6 mb-4">
							<li>
								In order to access our Resources, you may be required to provide certain information about yourself (such as identification, contact details, etc.) as part of the registration process, or as part of your ability to use the Resources. You agree that any information you provide will always be accurate, correct, and up-to-date.
							</li>
							<li>
								You are responsible for maintaining the confidentiality of any login information associated with any account you use to access our Resources. Accordingly, you are responsible for all activities that occur under your account/s.
							</li>
							<li>
								Accessing (or attempting to access) any of our Resources by any means other than through the means we provide, is strictly prohibited. You specifically agree not to access (or attempt to access) any of our Resources through any automated, unethical or unconventional means.
							</li>
							<li>
								Engaging in any activity that disrupts or interferes with our Resources, including the servers and/or networks to which our Resources are located or connected, is strictly prohibited.
							</li>
							<li>
								Attempting to copy, duplicate, reproduce, sell, trade, or resell our Resources is strictly prohibited.
							</li>
							<li>
								You are solely responsible for any consequences, losses, or damages that we may directly or indirectly incur or suffer due to any unauthorized activities conducted by you, as explained above, and may incur criminal or civil liability.
							</li>
							<li>
								We may provide various open communication tools on our website, such as blog comments, blog posts, public chat, forums, message boards, newsgroups, product ratings and reviews, various social media services, etc. You understand that generally we do not pre-screen or monitor the content posted by users of these various communication tools, which means that if you choose to use these tools to submit any type of content to our website, then it is your personal responsibility to use these tools in a responsible and ethical manner. By posting information or otherwise using any open communication tools as mentioned, you agree that you will not upload, post, share, or otherwise distribute any content that: Is illegal, threatening, defamatory, abusive, harassing, degrading, intimidating, fraudulent, deceptive, invasive, racist, or contains any type of suggestive, inappropriate, or explicit language; Infringes on any trademark, patent, trade secret, copyright, or other proprietary right of any party; Contains any type of unauthorized or unsolicited advertising; Impersonates any person or entity, including any Zonah Developers Estates Projects Limited employees or representatives. viii. We have the right at our sole discretion to remove any content that, we feel in our judgment does not comply with this User Agreement, along with any content that we feel is otherwise offensive, harmful, objectionable, inaccurate, or violates any 3rd party copyrights or trademarks. We are not responsible for any delay or failure in removing such content. If you post content that we choose to remove, you hereby consent to such removal, and consent to waive any claim against us.
							</li>
							<li>
								We do not assume any liability for any content posted by you or any other 3rd party users of our website. However, any content posted by you using any open communication tools on our website, provided that it doesn&#39;t violate or infringe on any 3rd party copyrights or trademarks, becomes the property of Zonah Developers Estates Projects Ltd., and as such, gives us a perpetual, irrevocable, worldwide, royalty-free, exclusive license to reproduce, modify, adapt, translate, publish, publicly display and/or distribute as we see fit. This only refers and applies to content posted via open communication tools as described, and does not refer to information that is provided as part of the registration process, necessary in order to use our Resources. All information provided as part of our registration process is covered by our Privacy Policy.
							</li>
							<li>
								You agree to indemnify and hold harmless Zonah Developers Estates Projects Ltd. and its parent company and affiliates, and their directors, officers, managers, employees, donors, agents, and licensors, from and against all losses, expenses, damages and costs, including reasonable attorneys&#39; fees, resulting from any violation of this User Agreement or the failure to fulfill any obligations relating to your account incurred by you or any other person using your account. We reserve the right to take over the exclusive defense of any claim for which we are entitled to indemnification under this User Agreement. In such event, you shall provide us with such cooperation as is reasonably requested by us.
							</li>
						</ol>
					</div>

					<div class="cms-item">
						<h4>
							Privacy
						</h4>

						<p>
							Your privacy is very important to us, which is why we&#39;ve created a separate Privacy Policy in order to explain in detail how we collect, manage, process, secure, and store your private information. Our Privacy Policy is included under the scope of this User Agreement. To read our Privacy Policy in its entirety, click here.
						</p>
					</div>

					<div class="cms-item">
						<h4>
							Limitation of Warranties
						</h4>

						<p>
							By using our website, you understand and agree that all Resources we provide are &#39;as is&#39; and &#39;as available&#39;. This means that we do not represent or warrant to you that:
						</p>

						<ol class="ol-roman dark-3 fs-6 mb-4">
							<li>
								The use of our Resources will meet your needs or requirements.
							</li>
							<li>
								The use of our Resources will be uninterrupted, timely, secure or free from errors.
							</li>
							<li>
								The information obtained by using our Resources will be accurate or reliable, and
							</li>
							<li>
								Any defects in the operation or functionality of any Resources we provide will be repaired or corrected.
							</li>
							<li>
								Furthermore, you understand and agree that:
							</li>
							<li>
								Any content downloaded or otherwise obtained through the use of our Resources is done at your own discretion and risk, and that you are solely responsible for any damage to your computer or other devices for any loss of data that may result from the download of such content.
							</li>
							<li>
								No information or advice, whether expressed, implied, oral or written, obtained by you from Zonah Developers Estates Projects Limited or through any Resources we provide shall create any warranty, guarantee, or conditions of any kind, except for those expressly outlined in this User Agreement.
							</li>
						</ol>
					</div>

					<div class="cms-item">
						<h4>
							Limitation of Liability
						</h4>

						<p>
							In conjunction with the Limitation of Warranties as explained above, you expressly understand and agree that any claim against us shall be limited to the amount you paid, if any, for use of products and/or services. Zonah Developers Estates Projects Limited will not be liable for any direct, indirect, incidental, consequential or exemplary loss or damages which may be incurred by you as a result of using our Resources, or as a result of any changes, data loss or corruption, cancellation, loss of access, or downtime to the full extent that applicable limitation of liability laws apply.
						</p>
					</div>

					<div class="cms-item">
						<h4>
							Copyrights/Trademarks
						</h4>

						<p>
							All content and materials available on <a href="https://www.zonahdevelopers.com" target="_blank">https://www.zonahdevelopers.com</a>, including but not limited to text, graphics, website name, code, images and logos are the intellectual property of Zonah Developers Estates Projects Limited, and are protected by applicable copyright and trademark laws. Any inappropriate use, including but not limited to the reproduction, distribution, display or transmission of any content on this site is strictly prohibited, unless specifically authorized by Zonah Developers Estates Projects Limited in writing.
						</p>
					</div>

					<div class="cms-item">
						<h4>
							Termination of Use
						</h4>

						<p>
							You agree that we may, at our sole discretion, suspend or terminate your access to all or part of our website and resources with or without notice and for any reason, including, without limitation, breach of this User Agreement. Any suspected illegal, fraudulent or abusive activity may be grounds for terminating your relationship and may be referred to appropriate law enforcement authorities. Upon suspension or termination, your right to use the Resources we provide will immediately cease, and we reserve the right to remove or delete any information that you may have on file with us, including any account or login information.
						</p>
					</div>

					<div class="cms-item">
						<h4>
							Governing Law
						</h4>

						<p>
							This website is controlled by Zonah Developers Estates Projects Limited from our offices located in the state of Karnataka, India. It can be accessed by most countries around the world. As each country has laws that may differ from those of Karnataka, by accessing our website, you agree that the statutes and laws of Karnataka, without regard to the conflict of laws and the United Nations Convention on the International Sales of Goods, will apply to all matters relating to the use of this website and the purchase of any products or services through this site.
						</p>

						<p>
							Furthermore, any action to enforce this User Agreement shall be brought in the Federal or State courts located in India, Karnataka. You hereby agree to personal jurisdiction by such courts, and waive any jurisdictional, venue, or inconvenient forum objections to such courts.
						</p>
					</div>

					<div class="cms-item">
						<h4>
							Guarantee
						</h4>

						<p class="is-uppercase">
							Unless otherwise expressed, Zonah Developers estates projects limited expressly disclaims all warranties and conditions of any kind, whether express or implied, including, but not limited to the implied warranties and conditions of merchantability, fitness for a particular purpose and non-infringement.
						</p>
					</div>
                    <div class="cms-item">
						<h4>
							Contact Information
						</h4>

						<p>
							If you have any questions or comments regarding our Terms of Use as outline above, you may contact us using the information below:
						</p>
                         <p>
							+ 91 80 2234 5678 
						</p>
                        <p>properties@zonahdevelopers.com</p>
					</div>
				</div>
			</div>

			<div class="column is-12-mobile is-12-tablet is-4-desktop is-4-widescreen cms-col">
				<div class="position-sticky-block js-scroll fade-in-bottom scrolled">
					<div class="light-gray-border p-5">
						<h4 class="text-primary mb-2">
							Contact Us
						</h4>

						<p>
							If you have any questions or comments regarding our Terms of Use as outline above, you may contact us using the information below
						</p>

						<div class="columns is-multiline">
							<div class="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
								<div class="is-flex is-align-items-center is-gap-4">
									<div class="w-50">
										<svg class="icon icon-tabler icon-tabler-mail is-block" fill="none" height="45" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" viewbox="0 0 24 24" width="45" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path> <path d="M3 7l9 6l9 -6"></path> </svg>
									</div>
									<a class="email-text" href="mailto:properties@zonahdevelopers.com">properties@zonahdevelopers.com</a>
								</div>
							</div>

							<div class="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
								<div class="is-flex is-align-items-center is-gap-4 mb-2">
									<div class="w-50">
										<svg class="icon icon-tabler icon-tabler-phone is-block" fill="none" height="45" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" viewbox="0 0 24 24" width="45" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path> </svg>
									</div>
									<a href="tel:+918022345678">+91 80 2234 5678</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


    ` }} />
    );
}
