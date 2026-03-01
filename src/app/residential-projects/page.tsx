
'use client';

import React, { useState, useMemo } from 'react';
import ProjectCard from '@/components/projects/ProjectCard';

interface Project {
  slug: string;
  badgeStatus?: string;
  city: string;
  subLocation: string;
  title: string;
  projectTypeDetail: string;
  priceRange: string;
  bedrooms: string;
  developmentSize: string;
  totalUnits: string;
  mainImageGradient: string;
}

const cities = [
  { id: 'hyderabad', name: 'Hyderabad', count: 11 },
  { id: 'bangalore', name: 'Bangalore', count: 0 },
  { id: 'chennai', name: 'Chennai', count: 0 },
  { id: 'mumbai', name: 'Mumbai', count: 0 },
  { id: 'kochi', name: 'Kochi', count: 0 },
  { id: 'goa', name: 'Goa', count: 0 },
];

const mockProjects: Project[] = [
  {
    slug: 'zonah-pine-villas',
    badgeStatus: 'Ongoing',
    city: 'hyderabad',
    subLocation: 'Aziznagar',
    title: 'Zonah Pine Villas',
    projectTypeDetail: 'Villa',
    priceRange: 'Price on Request',
    bedrooms: '3 BHK',
    developmentSize: 'N/A',
    totalUnits: 'N/A',
    mainImageGradient: 'linear-gradient(135deg,#1a1a2e 0%,#0f3460 100%)',
  },
  {
    slug: 'zonah-hidden-lotus',
    badgeStatus: 'Ongoing',
    city: 'hyderabad',
    subLocation: 'Aziznagar',
    title: 'Zonah Hidden Lotus',
    projectTypeDetail: 'Apartment',
    priceRange: 'Price on Request',
    bedrooms: '2, 3 BHK',
    developmentSize: 'N/A',
    totalUnits: 'N/A',
    mainImageGradient: 'linear-gradient(135deg,#1a2e1a 0%,#0f4020 100%)',
  },
  {
    slug: 'noble-apartments',
    badgeStatus: 'Completed',
    city: 'hyderabad',
    subLocation: 'Ameerpet',
    title: 'Noble Apartments',
    projectTypeDetail: 'Apartment',
    priceRange: 'Price on Request',
    bedrooms: '2, 3 BHK',
    developmentSize: 'N/A',
    totalUnits: 'N/A',
    mainImageGradient: 'linear-gradient(135deg,#1a1a2e 0%,#162560 100%)',
  },
  {
    slug: 'fort-view',
    badgeStatus: 'Completed',
    city: 'hyderabad',
    subLocation: 'Banjara Hills',
    title: 'Fort View',
    projectTypeDetail: 'Luxury Apartment',
    priceRange: 'Price on Request',
    bedrooms: '3, 4 BHK',
    developmentSize: 'N/A',
    totalUnits: 'N/A',
    mainImageGradient: 'linear-gradient(135deg,#2e1a1a 0%,#400f0f 100%)',
  },
  {
    slug: 'pristine-homes',
    badgeStatus: 'Completed',
    city: 'hyderabad',
    subLocation: 'Aziz Nagar',
    title: 'Pristine Homes',
    projectTypeDetail: 'Triplex Villa',
    priceRange: 'Price on Request',
    bedrooms: '3 BHK',
    developmentSize: 'N/A',
    totalUnits: '6 Units',
    mainImageGradient: 'linear-gradient(135deg,#1a2e2e 0%,#0f6060 100%)',
  },
  {
    slug: 'tree-tops',
    badgeStatus: 'Completed',
    city: 'hyderabad',
    subLocation: 'Banjara Hills',
    title: 'Tree Tops',
    projectTypeDetail: 'Luxury Apartment',
    priceRange: 'Price on Request',
    bedrooms: '3 BHK',
    developmentSize: 'N/A',
    totalUnits: 'N/A',
    mainImageGradient: 'linear-gradient(135deg,#2e2e1a 0%,#60600f 100%)',
  },
  {
    slug: 'zonah-star',
    badgeStatus: 'Completed',
    city: 'hyderabad',
    subLocation: 'Malakpet',
    title: 'Zonah Star',
    projectTypeDetail: 'Apartment Complex',
    priceRange: 'Price on Request',
    bedrooms: 'N/A',
    developmentSize: 'N/A',
    totalUnits: '40 Units',
    mainImageGradient: 'linear-gradient(135deg,#0d1b2e 0%,#14344a 100%)',
  },
  {
    slug: 'zonah-mars',
    badgeStatus: 'Completed',
    city: 'hyderabad',
    subLocation: 'Madhapur',
    title: 'Zonah Mars',
    projectTypeDetail: 'Apartment Complex',
    priceRange: 'Price on Request',
    bedrooms: 'N/A',
    developmentSize: 'N/A',
    totalUnits: '8 Units',
    mainImageGradient: 'linear-gradient(135deg,#1a0a2e 0%,#3d1f6b 100%)',
  }
];

export default function ResidentialProjects() {
  const [selectedCity, setSelectedCity] = useState('hyderabad');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const filteredProjects = useMemo(() => {
    return mockProjects.filter(p => {
      const cityMatch = p.city === selectedCity;
      const locationMatch = selectedLocation === 'All' || p.subLocation === selectedLocation;
      return cityMatch && locationMatch;
    });
  }, [selectedCity, selectedLocation]);

  const uniqueLocations = useMemo(() => {
    const locations = mockProjects
      .filter(p => p.city === selectedCity)
      .map(p => p.subLocation);
    return ['All', ...Array.from(new Set(locations))];
  }, [selectedCity]);

  return (
    <main className="home-page-replica residentialprojects-page p-0">
      <section className="section section-residential-projects-inner-page section-inner-page theme-padding">
        <div className="projects-properties-wrapper">
          <div className="columns is-multiline projects-properties-cols">

            {/* City Sidebar */}
            <div className="column is-3-desktop is-12-tablet projects-properties-col">
              <div className="projects-properties-city-detail light-gray-bg scrolled">
                <ul className="projects-properties-city">
                  {cities.map(city => (
                    <li key={city.id}>
                      <a
                        href="javascript:void(0);"
                        className="btnclickprojectcity"
                        onClick={() => {
                          setSelectedCity(city.id);
                          setSelectedLocation('All');
                        }}
                      >
                        <div className={`projects-location-items cursor-pointer ${selectedCity === city.id ? 'active' : ''}`}>
                          <h4>{city.name}</h4>
                          <span>{city.count} Project{city.count > 1 ? 's' : ''} Available</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="column is-9-desktop is-12-tablet projects-properties-col">
              <div className="section-title">
                <h1 className="text-primary title is-2 mb-4" style={{ fontFamily: 'var(--font-primary-serif)', color: '#856d47' }}>
                  {cities.find(c => c.id === selectedCity)?.name || 'Projects'}
                </h1>
              </div>

              {/* Location Filter Bar */}
              <div className="project-filter-detail is-flex is-justify-content-space-between is-flex-wrap-wrap mb-5">
                <ul className="project-filter-tab is-flex is-align-items-center is-flex-wrap-wrap" style={{ gap: '10px' }}>
                  {uniqueLocations.map(loc => (
                    <li key={loc}>
                      <a
                        href="javascript:void(0);"
                        className={`theme-btn gray-btn line-btn rounded-pill ${selectedLocation === loc ? 'active' : ''}`}
                        onClick={() => setSelectedLocation(loc)}
                        style={{
                          padding: '6px 20px',
                          fontSize: '14px',
                          backgroundColor: selectedLocation === loc ? '#856d47' : 'transparent',
                          color: selectedLocation === loc ? '#fff' : '#303030',
                          border: '1px solid #856d47'
                        }}
                      >
                        {loc}
                      </a>
                    </li>
                  ))}
                </ul>
                {selectedLocation !== 'All' && (
                  <a
                    className="theme-btn gray-btn line-btn rounded-pill"
                    href="javascript:void(0);"
                    onClick={() => setSelectedLocation('All')}
                    style={{ padding: '6px 20px', fontSize: '14px' }}
                  >
                    Clear Filter
                  </a>
                )}
              </div>

              {/* Projects Grid */}
              <div className="projects-properties-detail">
                <div className="columns is-multiline projects-cols">
                  {filteredProjects.length > 0 ? (
                    filteredProjects.map(project => (
                      <ProjectCard key={project.slug} {...project} />
                    ))
                  ) : (
                    <div className="column is-12 has-text-centered py-6">
                      <p className="subtitle is-5">No projects found for the selected filters.</p>
                    </div>
                  )}
                </div>

                {/* Bottom descriptive text */}
                <div className="columns is-multiline mt-6 js-scroll fade-in-bottom scrolled">
                  <div className="column is-12">
                    <div className="mb-5">
                      <h5 className="golden-text mb-2 fw-bold" style={{ color: '#856d47', fontSize: '1.25rem' }}>Building Landmark Housing in Major Cities</h5>
                      <p style={{ color: '#666', lineHeight: '1.6' }}>
                        Zonah Developers has left an indelible mark on the skyline of India's key urban centers.
                        With a legacy of creating iconic residential projects in prime locations, we have become
                        synonymous with excellence in the real estate market.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
