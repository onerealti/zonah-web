import React from 'react';

interface ProjectCardProps {
    slug: string;
    badgeStatus?: string;
    mainImageUrl?: string;
    city: string;
    subLocation: string;
    title: string;
    projectTypeDetail: string;
    priceRange: string;
    bedrooms: string;
    developmentSize: string;
    totalUnits: string;
    mainImageGradient: string; // Temporary gradient placeholder
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    slug,
    badgeStatus,
    mainImageUrl,
    city,
    subLocation,
    title,
    projectTypeDetail,
    priceRange,
    bedrooms,
    developmentSize,
    totalUnits,
    mainImageGradient,
}) => {
    return (
        <div className="column is-12-mobile is-6-tablet is-6-desktop is-4-widescreen projects-col" data-city={city.toLowerCase()}>
            <div className="project-vertical-block">
                <a href={`/projects/${slug}`} className="block-link" data-cursor="Know<br>More"></a>
                {badgeStatus && (
                    <div className={`project-status ${badgeStatus.toLowerCase().replace(/\s+/g, '-')}`}>
                        <span>{badgeStatus}</span>
                    </div>
                )}
                <div className="projects-img">
                    <div className="img-fixed-ratio" style={{
                        background: mainImageUrl ? undefined : mainImageGradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '220px',
                        aspectRatio: '16/9',
                        overflow: 'hidden'
                    }}>
                        {mainImageUrl ? (
                            <img
                                src={mainImageUrl}
                                alt={title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        ) : (
                            <span style={{
                                color: 'rgba(255,255,255,0.08)',
                                fontSize: '80px',
                                fontWeight: 200,
                                letterSpacing: '4px',
                                fontFamily: "'Georgia', serif"
                            }}>ZD</span>
                        )}
                    </div>
                    <div className="project-logo">
                        <div style={{
                            width: '60px',
                            height: '60px',
                            background: '#856d47',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '10px',
                            fontWeight: 700,
                            color: '#fff',
                            letterSpacing: '1px',
                            fontFamily: 'sans-serif'
                        }}>ZONAH</div>
                    </div>
                </div>
                <div className="project-title-and-price mt-4">
                    <div className="project-title">
                        <h2>{title}</h2>
                        <span>{subLocation ? `${subLocation}, ` : ''}{city.charAt(0).toUpperCase() + city.slice(1)}</span>
                    </div>
                    <div className="project-desc-price">
                        <span>{projectTypeDetail}</span>
                        <span className="project-price">{priceRange}</span>
                    </div>
                </div>
                <div className="project-configurations">
                    <ul>
                        <li>
                            <div className="project-configurations-items">
                                <div className="project-configurations-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                </div>
                                <div className="project-configurations-desc">
                                    <h4>Project Type</h4>
                                    <span>{projectTypeDetail}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="project-configurations-items">
                                <div className="project-configurations-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" /></svg>
                                </div>
                                <div className="project-configurations-desc">
                                    <h4>Bedrooms</h4>
                                    <span>{bedrooms}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="project-configurations-items">
                                <div className="project-configurations-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
                                </div>
                                <div className="project-configurations-desc">
                                    <h4>Development Size</h4>
                                    <span>{developmentSize}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="project-configurations-items">
                                <div className="project-configurations-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                </div>
                                <div className="project-configurations-desc">
                                    <h4>Total Units</h4>
                                    <span>{totalUnits}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="project-contact-detail">
                    <ul>
                        <li className="project-contact-item">
                            <a className="theme-btn line-btn open_enquiry_sidebar" href="javascript:void(0);" data-projectname={title}>
                                <span className="project-contact-icon"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 5.54 5.54l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
                                Enquire Now
                            </a>
                        </li>
                        <li className="project-contact-item">
                            <a className="theme-btn line-btn" href={`/projects/${slug}`}>
                                Know More
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
