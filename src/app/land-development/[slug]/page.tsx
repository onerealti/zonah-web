'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const PROJECTS_DATA: Record<string, any> = {
    'pearl-valley': {
        name: 'Pearl Valley',
        location: 'Maheswaram, Hyderabad',
        type: 'Mega Housing Township',
        description: [
            'Striking a perfect balance between providing privacy in calm, pollution free area and an easy accessibility to the main city, Pearl Valley covers 40 acres of pristine land in a lush, green and very safe setting.',
            'The main highlight of this area is the awe-striking Ramoji Film City, which is the world\'s largest film studio complex. With numerous national and international movies and serials being produced here every year, along with the several 5 star and 7 star hotels surrounding it, you are bound to encounter celebrities on quite a few occasions!',
            'Pearl Valley is fairly close to large food and transportation providing facilities like the famous Fruit Market and Auto Nagar. It is also in vicinity of the sacred Sanghi temple, which is a popular view for the beauty of its slope.',
        ],
        features: [
            '60 & 40 ft. black top roads',
            'Underground sewerage system',
            'Plentiful overhead storage of water',
            'Aesthetically landscaped gardens',
            'Lighting masts at road junctions',
            'Maintenance by Zonah Developers for the first three years'
        ],
        advantages: [
            'Within easy reach of the Outer Ring Road (ORR)',
            'On the link road to Ibrahimpatnam, Sagar Highway',
            '3 Km from NH9 Hyderabad - Vijayawada highway',
            'Close proximity to proposed Textile Park and Hardware Park',
            'Short distance of Ramoji Film City, Mount Opera and Ramadev Public School',
            'Near Telugu University Campus'
        ],
        gradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    },
    'ruby-enclave': {
        name: 'Ruby Enclave',
        location: 'Maheswaram Mandal, Hyderabad',
        type: 'Mega Housing Township',
        description: [
            'Ruby Enclave is one more jewel in the string of successful ventures by Zonah Developers. Situated off the Srisailam Highway, Ruby Enclave is right in the middle of the most happening real estate in Hyderabad.',
            'Set in sylvan surroundings, it offers a peaceful and pollution-free environment. Zonah\'s knack for selecting the right location combined with their integrity and dedication to customer satisfaction is the key to the success of their projects.',
            'Economic activity of such a magnitude has brought with it an enormous demand for housing, entertainment, shopping and other related amenities. Ruby Enclave is an investor\'s dream.'
        ],
        features: [
            '60 & 40 ft. black top roads',
            'Underground sewerage system',
            'Plentiful overhead storage of water',
            'Aesthetically landscaped gardens',
            'Lighting masts at road junctions',
            'Maintenance by Zonah Developers for the first three years'
        ],
        advantages: [
            '3 K.M from Maheswaram Mandal Headquarters',
            '7 KM from FAB City',
            '6 KM from Shamshabad International Airport',
            '4 KM from the Outer Ring Road (ORR)',
            'Situated off the Srisailam Highway',
            'Close to the new growth areas of Hyderabad'
        ],
        gradient: 'linear-gradient(135deg, #7b4397 0%, #dc2430 100%)',
    },
    'sapphire-slope': {
        name: 'Sapphire Slope',
        location: 'Maheswaram Mandal, Hyderabad',
        type: 'Mega Housing Township',
        description: [
            'Sapphire Slopes is an ultra-modern development site which reflects the innovative essence of our urban community. It is a land development keeping in mind the needs of our future settlements.',
            'Strategically placed between the upcoming Hardware Park at Maheswaram Mandal and Rajiv Gandhi International airport at Shamshabad, Sapphire Slopes offer you a highly serene and safe environment with an accommodating capacity of around 200 families.',
            'The location is such that there is an immense scope of numerous developments to transpire, courtesy the international airport, which is the flagship milestone of Hyderabad.'
        ],
        features: [
            '30ft and 40ft wide black top internal roads',
            'Electric poles at road junctions',
            'Underground drainage system',
            'Water lines',
            'Row plantation and parks',
            'Absolutely pollution free environment'
        ],
        advantages: [
            'Located on the link road connecting NH-7 and Srisailam Road',
            'International Airport is within 10 KM from the site',
            'Hyderabad - Bangalore National Highway at 11 KM',
            'Close to Mandal Head Quarters, Maheswaram Mandal',
            'Accessible to Hardware Park (Millennium Appliance, Aga Khan School)',
            'Near Rajiv Gandhi Nano Tech Park'
        ],
        gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    },
    'emerald-park': {
        name: 'Emerald Park',
        location: 'Shamshabad, Hyderabad',
        type: 'Mega Housing Township',
        description: [
            'Emerald Park is a mega future housing township site, strategically located just 7 kms away from the boundary of the Rajiv Gandhi International Airport, Shamshabad - which is one of the best airports in Asia.',
            'Offering complete tranquility and privacy to its members in a green and fertile land spread over 30 acres, with good water level; Emerald Park is every investor\'s living dream.',
            'The entire project is accomplished in a complete compliance with the Directorate of Town and Country Planning (DTCP). There is a very good possibility of a satellite town emerging out of this project.'
        ],
        features: [
            '30ft and 40ft wide black top internal roads',
            'Overhead water tanker',
            'Lighting masts at road junctions',
            'Row plantations',
            'Underground drainage system',
            'Parks'
        ],
        advantages: [
            'International Airport - 7 KM',
            'Hyderabad - Bangalore national Highway - 11 KM',
            'Accessible to Hardware Park',
            'Absolute pollution free environment',
            'One of the nearest future housing site from the city centre',
            'Conceived as per the Govt. norms and directives'
        ],
        gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    },
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function LandProjectDetail({ params }: { params: { slug: string } }) {
    const project = PROJECTS_DATA[params.slug];

    if (!project) {
        return (
            <div className="section section-inner-page py-6">
                <div className="container has-text-centered">
                    <h2 className="title is-2">Project Not Found</h2>
                    <Link href="/land-development" className="theme-btn mt-4">Back to Land Development</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="home-page-replica project-detail-page">
            {/* Hero Section */}
            <section className="section section-inner-page pt-6 pb-6" style={{ background: '#fcfcfc' }}>
                <div className="container">
                    <div className="mb-4">
                        <Link href="/land-development" className="text-primary font-semibold" style={{ color: '#856d47' }}>
                            ← BACK TO LAND DEVELOPMENT
                        </Link>
                    </div>
                    <div className="columns is-vcentered">
                        <div className="column is-12-mobile is-7-tablet">
                            <ScrollReveal direction="up" distance={30}>
                                <span className="theme-title" style={{ color: '#856d47', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', fontWeight: 600 }}>{project.type}</span>
                                <h1 className="title is-1 mt-2 mb-4" style={{ fontSize: '3.5rem', fontFamily: 'var(--font-primary-serif)' }}>{project.name}</h1>
                                <p className="subtitle is-4 flex items-center" style={{ color: '#666' }}>
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '20px', height: '20px', display: 'inline', marginRight: '8px' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {project.location}
                                </p>
                                <div className="mt-6 flex gap-4">
                                    <div className="px-5 py-3 border border-gray-200 rounded-lg">
                                        <span className="block text-xs uppercase text-gray-400 font-bold mb-1">Status</span>
                                        <span className="font-semibold text-green-600">Completed</span>
                                    </div>
                                    <div className="px-5 py-3 border border-gray-200 rounded-lg">
                                        <span className="block text-xs uppercase text-gray-400 font-bold mb-1">Category</span>
                                        <span className="font-semibold">Plots / Land</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="column is-12-mobile is-5-tablet">
                            <ScrollReveal direction="up" distance={30} delay={0.2}>
                                <div className="project-detail-hero-img" style={{
                                    background: project.gradient,
                                    height: '400px',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
                                }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '120px', fontWeight: 200, letterSpacing: '15px', fontFamily: 'Georgia, serif' }}>ZD</div>
                                        <p style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontSize: '1rem', letterSpacing: '5px', marginTop: '10px' }}>Our Land Ventures</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section py-6">
                <div className="container">
                    <div className="columns is-multiline">
                        {/* Left: Project Details */}
                        <div className="column is-12-mobile is-8-tablet">
                            <ScrollReveal direction="up" distance={30}>
                                <h2 className="title is-3 mb-5" style={{ color: '#856d47' }}>Project Overview</h2>
                                {project.description.map((para: string, i: number) => (
                                    <p key={i} className="mb-5" style={{ fontSize: '1.1rem', lineHeight: '1.9', color: '#444' }}>{para}</p>
                                ))}

                                <div className="mt-6 p-6" style={{ background: '#f9f9f9', borderRadius: '15px', borderLeft: '4px solid #856d47' }}>
                                    <h3 className="title is-4 mb-4">Investment Potential</h3>
                                    <p style={{ color: '#555', lineHeight: '1.7' }}>
                                        Investment in land provides stable, predictable and long-term returns.
                                        This is perhaps the only investment avenue that offers the potential for such high yield or capital gain
                                        without requiring day-to-day tracking. Our projects are strategically chosen for the highest capital appreciation.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right: Features & Advantages */}
                        <div className="column is-12-mobile is-4-tablet">
                            <ScrollReveal direction="up" distance={30} delay={0.2}>
                                <div className="sticky top-20">
                                    <div className="card-features mb-6 p-6" style={{ background: '#fff', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
                                        <h3 className="title is-5 mb-4" style={{ color: '#856d47' }}>Infrastructure</h3>
                                        <ul className="theme-list">
                                            {project.features.map((feature: string, i: number) => (
                                                <li key={i} className="mb-3 flex items-start" style={{ fontSize: '0.95rem', color: '#555', borderBottom: '1px solid #f5f5f5', paddingBottom: '10px' }}>
                                                    <span className="mr-2" style={{ color: '#856d47' }}>•</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="card-advantages p-6" style={{ background: '#303030', color: '#fff', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                                        <h3 className="title is-5 mb-4 text-white">Project Advantages</h3>
                                        <ul className="theme-list">
                                            {project.advantages.map((adv: string, i: number) => (
                                                <li key={i} className="mb-4 flex items-start" style={{ fontSize: '0.9rem', color: '#bbb' }}>
                                                    <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0" fill="none" stroke="#856d47" viewBox="0 0 24 24" style={{ width: '16px', height: '16px', marginTop: '4px', marginRight: '10px' }}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {adv}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Placeholder */}
            <section className="section py-6" style={{ background: '#fcfcfc' }}>
                <div className="container">
                    <div className="section-title has-text-centered mb-6">
                        <span className="theme-title" style={{ color: '#856d47' }}>Visual Experience</span>
                        <h2>Project Layout & Media</h2>
                    </div>
                    <div className="columns is-multiline is-centered">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="column is-4">
                                <div className="gallery-placeholder" style={{
                                    background: '#eee',
                                    height: '250px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#999',
                                    border: '2px dashed #ccc'
                                }}>
                                    Project Visualization {i}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
