import React from 'react';

export default function SearchResults() {
    return (
        <main
            className="home-page-replica search-results-page"
            dangerouslySetInnerHTML={{
                __html: `
<section class="section section-inner-page overflow-visible pt-6 pb-6">
  <div class="container">
    <div class="section-title mb-5 js-scroll fade-in-top scrolled">
      <span class="theme-title">Find Your Dream Home</span>
      <h1>Search Results</h1>
    </div>

    <div class="columns is-multiline">

      <!-- Sidebar filters -->
      <div class="column is-12-mobile is-12-tablet is-3-desktop is-3-widescreen">
        <div style="border:1px solid #e5e5e5;border-radius:8px;padding:20px;position:sticky;top:80px;">
          <h5 class="golden-text mb-4">Refine Your Search</h5>

          <div class="form-group mb-4">
            <label class="form-label">City</label>
            <select class="form-control select" id="sr_city">
              <option value="">All Cities</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Chennai</option>
              <option>Mumbai</option>
              <option>Kochi</option>
              <option>Goa</option>
            </select>
          </div>

          <div class="form-group mb-4">
            <label class="form-label">Project Type</label>
            <select class="form-control select" id="sr_type">
              <option value="">All Types</option>
              <option>Apartments</option>
              <option>Villas</option>
              <option>Commercial</option>
              <option>Plots</option>
            </select>
          </div>

          <div class="form-group mb-4">
            <label class="form-label">Budget</label>
            <select class="form-control select" id="sr_budget">
              <option value="">Any Budget</option>
              <option>Under ₹50 L</option>
              <option>₹50 L – ₹1 Cr</option>
              <option>₹1 Cr – ₹2 Cr</option>
              <option>₹2 Cr – ₹5 Cr</option>
              <option>₹5 Cr+</option>
            </select>
          </div>

          <div class="form-group mb-4">
            <label class="form-label">Status</label>
            <select class="form-control select" id="sr_status">
              <option value="">All Status</option>
              <option>Ready to Move</option>
              <option>Under Construction</option>
              <option>Upcoming</option>
            </select>
          </div>

          <button class="theme-btn full-width" type="button">Apply Filters</button>
        </div>
      </div>

      <!-- Results -->
      <div class="column is-12-mobile is-12-tablet is-9-desktop is-9-widescreen">
        <div class="columns is-multiline projects-cols">

          <div class="column is-12-mobile is-6-tablet is-4-desktop projects-col">
            <div class="project-vertical-block">
              <a href="/residential-projects/serene-heights" class="projects-img-link">
                <div class="img-fixed-ratio projects-img" style="background:linear-gradient(135deg,#1a1a2e,#0f3460);display:flex;align-items:center;justify-content:center;min-height:200px;">
                  <span style="color:rgba(255,255,255,0.25);font-size:36px;font-weight:300;">ZD</span>
                  <span style="position:absolute;top:10px;left:10px;background:#c8a96e;color:#fff;padding:3px 8px;font-size:10px;font-weight:600;border-radius:2px;text-transform:uppercase;">Under Construction</span>
                </div>
              </a>
              <div class="project-title-and-price mt-3">
                <div class="project-title"><a href="/residential-projects/serene-heights"><h3>Zonah Serene Heights</h3></a></div>
                <div class="project-desc-price">
                  <span class="project-location">Whitefield, Bangalore</span>
                  <span class="project-price">₹1.2 Cr+</span>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-12-mobile is-6-tablet is-4-desktop projects-col">
            <div class="project-vertical-block">
              <a href="/residential-projects/haven-gardens" class="projects-img-link">
                <div class="img-fixed-ratio projects-img" style="background:linear-gradient(135deg,#1b2838,#1a3a0a);display:flex;align-items:center;justify-content:center;min-height:200px;">
                  <span style="color:rgba(255,255,255,0.25);font-size:36px;font-weight:300;">ZD</span>
                  <span style="position:absolute;top:10px;left:10px;background:#2ecc71;color:#fff;padding:3px 8px;font-size:10px;font-weight:600;border-radius:2px;text-transform:uppercase;">Ready to Move</span>
                </div>
              </a>
              <div class="project-title-and-price mt-3">
                <div class="project-title"><a href="/residential-projects/haven-gardens"><h3>Zonah Haven Gardens</h3></a></div>
                <div class="project-desc-price">
                  <span class="project-location">Gachibowli, Hyderabad</span>
                  <span class="project-price">₹98 L+</span>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-12-mobile is-6-tablet is-4-desktop projects-col">
            <div class="project-vertical-block">
              <a href="/residential-projects/marina-crest" class="projects-img-link">
                <div class="img-fixed-ratio projects-img" style="background:linear-gradient(135deg,#0d2137,#0a4373);display:flex;align-items:center;justify-content:center;min-height:200px;">
                  <span style="color:rgba(255,255,255,0.25);font-size:36px;font-weight:300;">ZD</span>
                  <span style="position:absolute;top:10px;left:10px;background:#c8a96e;color:#fff;padding:3px 8px;font-size:10px;font-weight:600;border-radius:2px;text-transform:uppercase;">Under Construction</span>
                </div>
              </a>
              <div class="project-title-and-price mt-3">
                <div class="project-title"><a href="/residential-projects/marina-crest"><h3>Zonah Marina Crest</h3></a></div>
                <div class="project-desc-price">
                  <span class="project-location">OMR, Chennai</span>
                  <span class="project-price">₹1.05 Cr+</span>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-12-mobile is-6-tablet is-4-desktop projects-col">
            <div class="project-vertical-block">
              <a href="/residential-projects/skyline-residences" class="projects-img-link">
                <div class="img-fixed-ratio projects-img" style="background:linear-gradient(135deg,#131822,#1e3a5f);display:flex;align-items:center;justify-content:center;min-height:200px;">
                  <span style="color:rgba(255,255,255,0.25);font-size:36px;font-weight:300;">ZD</span>
                  <span style="position:absolute;top:10px;left:10px;background:#c8a96e;color:#fff;padding:3px 8px;font-size:10px;font-weight:600;border-radius:2px;text-transform:uppercase;">Under Construction</span>
                </div>
              </a>
              <div class="project-title-and-price mt-3">
                <div class="project-title"><a href="/residential-projects/skyline-residences"><h3>Zonah Skyline Residences</h3></a></div>
                <div class="project-desc-price">
                  <span class="project-location">Thane, Mumbai</span>
                  <span class="project-price">₹1.85 Cr+</span>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-12-mobile is-6-tablet is-4-desktop projects-col">
            <div class="project-vertical-block">
              <a href="/residential-projects/emerald-bay" class="projects-img-link">
                <div class="img-fixed-ratio projects-img" style="background:linear-gradient(135deg,#0a1f10,#1a5c37);display:flex;align-items:center;justify-content:center;min-height:200px;">
                  <span style="color:rgba(255,255,255,0.25);font-size:36px;font-weight:300;">ZD</span>
                  <span style="position:absolute;top:10px;left:10px;background:#2ecc71;color:#fff;padding:3px 8px;font-size:10px;font-weight:600;border-radius:2px;text-transform:uppercase;">Ready to Move</span>
                </div>
              </a>
              <div class="project-title-and-price mt-3">
                <div class="project-title"><a href="/residential-projects/emerald-bay"><h3>Zonah Emerald Bay</h3></a></div>
                <div class="project-desc-price">
                  <span class="project-location">Marine Drive, Kochi</span>
                  <span class="project-price">₹78 L+</span>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-12-mobile is-6-tablet is-4-desktop projects-col">
            <div class="project-vertical-block">
              <a href="/residential-projects/seabreeze-villas" class="projects-img-link">
                <div class="img-fixed-ratio projects-img" style="background:linear-gradient(135deg,#0a1a0a,#2a5c0a);display:flex;align-items:center;justify-content:center;min-height:200px;">
                  <span style="color:rgba(255,255,255,0.25);font-size:36px;font-weight:300;">ZD</span>
                  <span style="position:absolute;top:10px;left:10px;background:#c8a96e;color:#fff;padding:3px 8px;font-size:10px;font-weight:600;border-radius:2px;text-transform:uppercase;">Under Construction</span>
                </div>
              </a>
              <div class="project-title-and-price mt-3">
                <div class="project-title"><a href="/residential-projects/seabreeze-villas"><h3>Zonah Seabreeze Villas</h3></a></div>
                <div class="project-desc-price">
                  <span class="project-location">Candolim, Goa</span>
                  <span class="project-price">₹2.4 Cr+</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
        `,
            }}
        />
    );
}
