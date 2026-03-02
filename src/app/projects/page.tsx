'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useSearchParams } from 'next/navigation';
import ProjectCard from '@/components/projects/ProjectCard';
import { getListingProjects, projectSegments, type ProjectSegment, type ListingProject } from '@/data/projects';

const normalizeLocationValue = (value: string) =>
	value
		.toLowerCase()
		.replace(/\+/g, ' ')
		.replace(/-/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();

const parseSegmentValue = (value: string | null): ProjectSegment | undefined => {
	const segmentAliasMap: Record<string, ProjectSegment> = {
		residential: 'residential',
		commercial: 'commercial',
		'land-development': 'land-development',
		landdevelopment: 'land-development',
		land: 'land-development',
	};

	if (!value) {
		return undefined;
	}

	return segmentAliasMap[value.trim().toLowerCase()];
};

function ProjectsPageContent() {
	const searchParams = useSearchParams();
	const segmentFromUrl = parseSegmentValue(searchParams.get('segment'));
	const locationFromUrl = searchParams.get('location') || searchParams.get('city') || '';

	const [projects, setProjects] = useState<ListingProject[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getListingProjects().then((data) => {
			setProjects(data);
			setLoading(false);
		});
	}, []);

	const [selectedSegment, setSelectedSegment] = useState<ProjectSegment>(() => segmentFromUrl || 'residential');
	const [selectedLocation, setSelectedLocation] = useState(() => {
		if (!locationFromUrl) {
			return 'All';
		}

		const initialSegment = segmentFromUrl || 'residential';
		const segmentLocations = Array.from(
			new Set(projects.filter((project) => project.segment === initialSegment).map((project) => project.subLocation))
		);

		const normalizedFromUrl = normalizeLocationValue(locationFromUrl);
		const match = segmentLocations.find(
			(location) => normalizeLocationValue(location) === normalizedFromUrl
		);

		return match || 'All';
	});
	const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

	const [customSearch, setCustomSearch] = useState('');
	const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
	const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
	const [selectedBeds, setSelectedBeds] = useState<string[]>([]);
	const [minBudget, setMinBudget] = useState(0);
	const [maxBudget, setMaxBudget] = useState(100);

	const [draftSearch, setDraftSearch] = useState('');
	const [draftTypes, setDraftTypes] = useState<string[]>([]);
	const [draftStatuses, setDraftStatuses] = useState<string[]>([]);
	const [draftBeds, setDraftBeds] = useState<string[]>([]);
	const [draftMinBudget, setDraftMinBudget] = useState(0);
	const [draftMaxBudget, setDraftMaxBudget] = useState(100);

	const cityProjects = useMemo(
		() => projects.filter((project) => project.segment === selectedSegment),
		[projects, selectedSegment]
	);

	const availableTypes = useMemo(
		() => Array.from(new Set(cityProjects.map((project) => project.projectTypeDetail))),
		[cityProjects]
	);

	const availableStatuses = useMemo(
		() => Array.from(new Set(cityProjects.map((project) => project.badgeStatus).filter(Boolean))) as string[],
		[cityProjects]
	);

	const availableBeds = useMemo(() => {
		const bedSet = new Set<string>();

		cityProjects.forEach((project) => {
			project.bedrooms
				.split(',')
				.map((part) => part.trim())
				.filter((part) => part !== '' && part !== 'N/A')
				.forEach((part) => {
					if (part.includes('BHK')) {
						bedSet.add(part);
					}
				});
		});

		return Array.from(bedSet);
	}, [cityProjects]);

	useEffect(() => {
		if (isFilterSidebarOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [isFilterSidebarOpen]);

	const toggleItem = (items: string[], value: string) => {
		return items.includes(value)
			? items.filter((item) => item !== value)
			: [...items, value];
	};

	const openSidebar = () => {
		setDraftSearch(customSearch);
		setDraftTypes(selectedTypes);
		setDraftStatuses(selectedStatuses);
		setDraftBeds(selectedBeds);
		setDraftMinBudget(minBudget);
		setDraftMaxBudget(maxBudget);
		setIsFilterSidebarOpen(true);
	};

	const closeSidebar = () => {
		setIsFilterSidebarOpen(false);
	};

	const applySidebarFilters = () => {
		const normalizedMin = Math.max(0, Math.min(draftMinBudget, draftMaxBudget));
		const normalizedMax = Math.min(100, Math.max(draftMinBudget, draftMaxBudget));

		setCustomSearch(draftSearch.trim());
		setSelectedTypes(draftTypes);
		setSelectedStatuses(draftStatuses);
		setSelectedBeds(draftBeds);
		setMinBudget(normalizedMin);
		setMaxBudget(normalizedMax);
		setIsFilterSidebarOpen(false);
	};

	const updateDraftBudgetRange = (values: number | number[]) => {
		if (!Array.isArray(values) || values.length !== 2) {
			return;
		}

		const [nextMin, nextMax] = values;
		setDraftMinBudget(Math.max(0, Math.min(100, nextMin)));
		setDraftMaxBudget(Math.max(0, Math.min(100, nextMax)));
	};

	const resetSidebarFilters = () => {
		setDraftSearch('');
		setDraftTypes([]);
		setDraftStatuses([]);
		setDraftBeds([]);
		setDraftMinBudget(0);
		setDraftMaxBudget(100);
	};

	const clearAllFilters = () => {
		setSelectedLocation('All');
		setCustomSearch('');
		setSelectedTypes([]);
		setSelectedStatuses([]);
		setSelectedBeds([]);
		setMinBudget(0);
		setMaxBudget(100);
	};

	const filteredProjects = useMemo(() => {
		return projects.filter(p => {
			const segmentMatch = p.segment === selectedSegment;
			const locationMatch = selectedLocation === 'All' || p.subLocation === selectedLocation;
			const searchMatch = customSearch === ''
				|| p.title.toLowerCase().includes(customSearch.toLowerCase())
				|| p.subLocation.toLowerCase().includes(customSearch.toLowerCase())
				|| p.projectTypeDetail.toLowerCase().includes(customSearch.toLowerCase());

			const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(p.projectTypeDetail);
			const statusMatch = selectedStatuses.length === 0 || (!!p.badgeStatus && selectedStatuses.includes(p.badgeStatus));

			const projectBeds = p.bedrooms
				.split(',')
				.map((part) => part.trim())
				.filter((part) => part !== '' && part !== 'N/A');
			const bedsMatch = selectedBeds.length === 0 || selectedBeds.some((bed) => projectBeds.includes(bed));

			const budgetMatch = p.budgetCr >= minBudget && p.budgetCr <= maxBudget;

			return segmentMatch && locationMatch && searchMatch && typeMatch && statusMatch && bedsMatch && budgetMatch;
		});
	}, [selectedSegment, selectedLocation, customSearch, selectedTypes, selectedStatuses, selectedBeds, minBudget, maxBudget, projects]);

	const uniqueLocations = useMemo(() => {
		const locations = projects
			.filter(p => p.segment === selectedSegment)
			.map(p => p.subLocation);
		return ['All', ...Array.from(new Set(locations))];
	}, [selectedSegment, projects]);

	const segmentCounts = useMemo(() => {
		return projectSegments.reduce<Record<string, number>>((acc, segment) => {
			acc[segment.id] = projects.filter((project) => project.segment === segment.id).length;
			return acc;
		}, {});
	}, [projects]);

	const selectedSegmentName = projectSegments.find((segment) => segment.id === selectedSegment)?.name || 'Projects';
	const hasActiveFilter = selectedLocation !== 'All'
		|| customSearch !== ''
		|| selectedTypes.length > 0
		|| selectedStatuses.length > 0
		|| selectedBeds.length > 0
		|| minBudget !== 0
		|| maxBudget !== 100;

	return (
		<main className="home-page-replica projects-page p-0">
			<section className="section section-projects-inner-page section-inner-page theme-padding">
				<div className="projects-properties-wrapper">
					<div className="columns is-multiline projects-properties-cols">

						<div className="column projects-properties-col">
							<div className="projects-properties-city-detail light-gray-bg js-scroll fade-in-bottom scrolled">
								<ul className="projects-properties-city segment_selector_list">
									{projectSegments.map(segment => (
										<li key={segment.id}>
											<a
												href="javascript:void(0);"
												className="btnclickprojectcity"
												onClick={() => {
													setSelectedSegment(segment.id as 'residential' | 'commercial' | 'land-development');
													setSelectedLocation('All');
													setCustomSearch('');
													setSelectedTypes([]);
													setSelectedStatuses([]);
													setSelectedBeds([]);
													setMinBudget(0);
													setMaxBudget(100);

													setDraftSearch('');
													setDraftTypes([]);
													setDraftStatuses([]);
													setDraftBeds([]);
													setDraftMinBudget(0);
													setDraftMaxBudget(100);
												}}
											>
												<div className={`projects-location-items cursor-pointer ${selectedSegment === segment.id ? 'active' : ''}`}>
													<h4>{segment.name}</h4>
													<span>{segmentCounts[segment.id] || 0} Project{(segmentCounts[segment.id] || 0) > 1 ? 's' : ''} Available</span>
												</div>
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="column projects-properties-col">
							<div className="section-title js-scroll fade-in-top scrolled">
								<h1 className="text-primary bindsegmenttitle">
									{selectedSegmentName}
								</h1>
							</div>

							<div className="project-filter-detail is-flex is-justify-content-space-between is-flex-wrap-wrap mb-5 js-scroll fade-in-top scrolled">
								<ul className="project-filter-tab is-flex is-align-items-center is-flex-wrap-wrap is-gap-2 bind_location_basedon_segment">
									{uniqueLocations.map(loc => (
										<li key={loc}>
											<a
												href="javascript:void(0);"
												className={`dataactive direction_click theme-btn gray-btn line-btn rounded-pill ${selectedLocation === loc ? 'active' : ''}`}
												onClick={() => setSelectedLocation(loc)}
											>
												{loc}
											</a>
										</li>
									))}
									<li>
										<a
											className="dataactive theme-btn gray-btn line-btn rounded-pill bind_all_Dropdwons"
											href="javascript:void(0);"
											open-sidebar="projects-filter-sidebar"
											onClick={openSidebar}
										>
											Custom Search
										</a>
									</li>
								</ul>
								<a
									className={`theme-btn gray-btn line-btn rounded-pill remove_filter ${hasActiveFilter ? '' : 'is-hidden'}`}
									href="javascript:void(0);"
									onClick={clearAllFilters}
								>
									Clear Filter
								</a>
							</div>

							<div className="projects-properties-detail js-scroll fade-in-bottom scrolled">
								<div className="columns is-multiline projects-cols appendsegmentproject">
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

								<div className="mt-4 center">
									<button className="theme-btn full-width mw-200 is-hidden loadMoreBtnForSegment" type="button">
										Load More
									</button>
								</div>

								<div className="mt-6">
									<div className="mb-5">
										<h5 className="golden-text mb-2">
											Every project is more than a space; it&apos;s a destination where ideas, lifestyles, and businesses grow.
										</h5>

										<p>
											At Zonah Developers, we bring you a curated portfolio across residential, commercial,
											and land development segments. Each project is designed with modern aesthetics,
											thoughtful planning, and practical utility.
										</p>

										<p>
											From premium homes and business-ready spaces to high-potential land opportunities,
											Zonah is your gateway to long-term value and quality development.
										</p>
									</div>

									<div className="mb-5">
										<h5 className="golden-text mb-2">
											Building Landmark Projects Across Major Cities
										</h5>

										<p>
											Zonah has left an indelible mark on the skyline of India&apos;s key urban centers. With a legacy of
											creating high-quality projects in prime locations, we have become a trusted choice for homeowners,
											businesses, and investors alike.
										</p>
									</div>

									<div className="mb-0">
										<h5 className="golden-text mb-2">
											Spaces That Redefine Living and Growth
										</h5>

										<p>
											Whether you&apos;re looking for a new home, a strategic commercial address, or future-ready land,
											Zonah offers options to suit diverse goals. Our projects are strategically located for convenient
											access to key infrastructure, business corridors, and lifestyle hubs.
										</p>

										<p>
											Your journey towards a fulfilling life begins at Zonah — where every detail is designed with care.
										</p>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</section>

			<div
				className={`theme-sidebar theme-sidebar-lg${isFilterSidebarOpen ? ' active' : ''}`}
				id="projects-filter-sidebar"
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						closeSidebar();
					}
				}}
			>
				<div className="theme-sidebar-card">
					<div className="theme-sidebar-header">
						<div className="theme-sidebar-action">
							<span className="close-sidebar" style={{ cursor: 'pointer' }} onClick={closeSidebar}>
								<svg className="icon icon-tabler icon-tabler-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
									<path d="M18 6l-12 12"></path>
									<path d="M6 6l12 12"></path>
								</svg>
							</span>
						</div>
					</div>

					<div className="theme-sidebar-detail">
						<div className="theme-sidebar-contant theme-scrollbar pr-0 pt-0 pl-0" style={{ height: 'calc(100vh - 145px)' }}>
							<div className="columns is-multiline is-vcentered">
								<div className="column is-12-mobile is-12-tablet is-6-desktop is-6-widescreen">
									<div className="sidebar-filter-items">
										<div className="sidebar-filter-title mb-3">
											<h4>Search</h4>
										</div>
										<div className="sidebar-filter-detail">
											<div className="search-by-project-name">
												<div className="form-group input-with-icon">
													<div className="input-icon">
														<svg fill="none" height="21" viewBox="0 0 20 21" width="20" xmlns="http://www.w3.org/2000/svg">
															<circle cx="8.33333" cy="8.96493" r="5.83333" stroke="black" strokeLinecap="round" strokeLinejoin="round"></circle>
															<path d="M17.5 18.1316L12.5 13.1316" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
														</svg>
													</div>
													<input
														className="form-control"
														id="custom_search"
														name="custom_search"
														placeholder="Search by project name, keywords, etc."
														type="text"
														value={draftSearch}
														onChange={(event) => setDraftSearch(event.target.value)}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
									<div className="sidebar-filter-items">
										<div className="sidebar-filter-title mb-3">
											<h4>Type</h4>
										</div>
										<div className="sidebar-filter-detail theme-scrollbar-horizontal-filter-detail">
											<div className="is-flex is-align-items-center is-gap-2 theme-scrollbar-horizontal bind_filter_types">
												{availableTypes.map((type) => (
													<div className="custom-checkbox-btn" key={type}>
														<input
															type="checkbox"
															id={`type-${type.replace(/\s+/g, '-').toLowerCase()}`}
															checked={draftTypes.includes(type)}
															onChange={() => setDraftTypes((prev) => toggleItem(prev, type))}
														/>
														<label htmlFor={`type-${type.replace(/\s+/g, '-').toLowerCase()}`}>{type}</label>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>

								<div className="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
									<div className="sidebar-filter-items">
										<div className="sidebar-filter-title mb-3">
											<h4>Status</h4>
										</div>
										<div className="sidebar-filter-detail theme-scrollbar-horizontal-filter-detail">
											<div className="is-flex is-align-items-center is-gap-2 theme-scrollbar-horizontal bins_status">
												{availableStatuses.map((status) => (
													<div className="custom-checkbox-btn" key={status}>
														<input
															type="checkbox"
															id={`status-${status.replace(/\s+/g, '-').toLowerCase()}`}
															checked={draftStatuses.includes(status)}
															onChange={() => setDraftStatuses((prev) => toggleItem(prev, status))}
														/>
														<label htmlFor={`status-${status.replace(/\s+/g, '-').toLowerCase()}`}>{status}</label>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>

								<div className="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
									<div className="sidebar-filter-items">
										<div className="sidebar-filter-title mb-3">
											<h4>Beds</h4>
										</div>
										<div className="sidebar-filter-detail theme-scrollbar-horizontal-filter-detail">
											<div className="is-flex is-align-items-center is-gap-2 theme-scrollbar-horizontal bind_search_beds">
												{availableBeds.map((bed) => (
													<div className="custom-checkbox-btn" key={bed}>
														<input
															type="checkbox"
															id={`beds-${bed.replace(/\s+/g, '-').toLowerCase()}`}
															checked={draftBeds.includes(bed)}
															onChange={() => setDraftBeds((prev) => toggleItem(prev, bed))}
														/>
														<label htmlFor={`beds-${bed.replace(/\s+/g, '-').toLowerCase()}`}>{bed}</label>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>

								<div className="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen">
									<div className="sidebar-filter-items">
										<div className="sidebar-filter-title mb-3">
											<h4>Budget</h4>
										</div>
										<div className="sidebar-filter-detail">
											<div className="form-group custom-range-slider dark-range-slider top-range-slider">
												<ul>
													<li>
														<label className="index_from">{draftMinBudget} Cr</label>
													</li>
													<li>
														<label className="index_to">{draftMaxBudget} Cr</label>
													</li>
												</ul>
												<Slider
													range
													min={0}
													max={100}
													step={1}
													value={[draftMinBudget, draftMaxBudget]}
													onChange={updateDraftBudgetRange}
													trackStyle={[{ backgroundColor: '#856d47', height: 4 }]}
													railStyle={{ backgroundColor: '#dcdcdc', height: 4 }}
													handleStyle={[
														{ borderColor: '#ffffff', backgroundColor: '#856d47', boxShadow: 'none', opacity: 1 },
														{ borderColor: '#ffffff', backgroundColor: '#856d47', boxShadow: 'none', opacity: 1 },
													]}
												/>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>

					<div className="theme-sidebar-footer sidebar-filter-btn">
						<div className="submit-btn is-flex is-gap-3 is-justify-content-end">
							<a className="theme-btn reset_btn" href="javascript:void(0);" onClick={resetSidebarFilters}>Reset</a>
							<a className="theme-btn submit_btn" href="javascript:void(0);" onClick={applySidebarFilters}>Submit</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default function ProjectsPage() {
	return (
		<Suspense fallback={<div className="projects-page-loading">Loading projects...</div>}>
			<ProjectsPageContent />
		</Suspense>
	);
}
