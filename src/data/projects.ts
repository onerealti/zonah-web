import { getProjects } from '@/sanity/lib/queries'

/**
 * SVG icons for amenities - used by Sanity and fallback
 */
export const SVG_AMENITY_PATHS: Record<string, string> = {
	pool: `<circle cx="12" cy="8" r="4"/><path d="M2 20c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0"/><path d="M2 15c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0"/>`,
	gym: `<path d="M6 5v14"/><path d="M18 5v14"/><path d="M6 12h12"/><path d="M2 10v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z"/><path d="M20 10v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1z"/>`,
	club: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>`,
	play: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M10 8l6 4-6 4V8z"/>`,
	security: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
	ev: `<path d="M7 14h-4l9-12v10h4l-9 12z"/>`,
	garden: `<path d="M12 22V12"/><path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v5a7 7 0 0 1-14 0z"/>`,
	bbq: `<path d="M4 12h16"/><path d="M12 2v4"/><path d="M8 2a8 8 0 0 0 8 8"/><path d="M8 22l4-10 4 10"/>`,
	default: `<circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/>`,
}

export type ProjectSegment = 'residential' | 'commercial' | 'land-development';

export interface ProjectSegmentMeta {
	id: ProjectSegment;
	name: string;
}

export interface ListingProject {
	slug: string;
	segment: ProjectSegment;
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
	budgetCr: number;
}

export const projectSegments: ProjectSegmentMeta[] = [
	{ id: 'residential', name: 'Residential' },
	{ id: 'commercial', name: 'Commercial' },
	{ id: 'land-development', name: 'Land Development' },
];

/**
 * BACKWARD COMPATIBILITY: Export as const for components that expect static data
 * Initialize with empty array - will be populated at runtime
 */
export let listingProjects: ListingProject[] = [];

export interface DetailedProject {
	name: string;
	location: string;
	city: string;
	price: string;
	bhk: string;
	status: string;
	statusClass: string;
	area: string;
	totalUnits: string;
	developmentSize: string;
	type: string;
	possession: string;
	rera: string;
	description: string[];
	amenities: { label: string; svgPath: string }[];
	highlights: string[];
	floorPlans: FloorPlan[];
	gradient: string;
}

/**
 * Normalize city name (capitalize first letter, handle lowercase)
 */
function normalizeCity(city: string): string {
	if (!city) return '';
	// Capitalize first letter of each word
	return city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
}

/**
 * Transform Sanity project document to ListingProject format
 */
function transformToListingProject(doc: any): ListingProject {
	return {
		slug: doc.slug?.current || doc.slug || '',
		segment: (doc.segment || 'residential') as ProjectSegment,
		badgeStatus: doc.badgeStatus,
		city: normalizeCity(doc.city || ''),
		subLocation: doc.subLocation || '',
		title: doc.title || '',
		projectTypeDetail: doc.projectTypeDetail || 'Project',
		priceRange: doc.priceRange || 'Price on Request',
		bedrooms: doc.bedrooms || 'N/A',
		developmentSize: doc.developmentSize || 'N/A',
		totalUnits: doc.totalUnits || 'N/A',
		mainImageGradient: doc.mainImageGradient || 'linear-gradient(135deg, #333, #666)',
		budgetCr: doc.budgetCr || 0,
	}
}

/**
 * Map status to CSS class
 */
function getStatusClass(status: string): string {
	const statusMap: Record<string, string> = {
		ongoing: 'under-construction',
		completed: 'ready-to-move',
		upcoming: 'upcoming-project',
	};
	return statusMap[status?.toLowerCase()] || 'ready-to-move';
}

/**
 * Transform Sanity project document to DetailedProject format
 */
function transformToDetailedProject(doc: any): DetailedProject {
	const amenities = (doc.amenities || []).map((a: any) => ({
		label: a.label || '',
		svgPath: SVG_AMENITY_PATHS[a.amenityType || 'default'] || SVG_AMENITY_PATHS.default,
	}))

	// Handle description - can be array of text blocks or simple array
	let descriptionArray: string[] = [];
	if (Array.isArray(doc.description)) {
		descriptionArray = doc.description.map((d: any) => 
			typeof d === 'string' ? d : (d?.text || d?.value || '')
		).filter(Boolean);
	} else if (doc.description) {
		descriptionArray = [String(doc.description)];
	}

	const status = doc.status || 'completed';

	return {
		name: doc.title || '',
		location: doc.location || `${doc.subLocation || ''}, ${normalizeCity(doc.city || '')}`.trim().replace(/^,\s*/, ''),
		city: normalizeCity(doc.city || ''),
		price: doc.priceRange || 'Price on Request',
		bhk: doc.bedrooms || 'N/A',
		status: status.charAt(0).toUpperCase() + status.slice(1),
		statusClass: getStatusClass(status),
		area: doc.area || 'N/A',
		totalUnits: doc.totalUnits || 'N/A',
		developmentSize: doc.developmentSize || 'N/A',
		type: doc.projectTypeDetail || 'Project',
		possession: doc.possession || 'Ready',
		rera: doc.rera || 'N/A',
		description: descriptionArray,
		amenities,
		highlights: doc.highlights || [],
		floorPlans: (doc.floorPlans || []).map((fp: any) => ({
			label: fp.label || '',
			type: fp.type || 'All',
			area: fp.area || 'N/A',
			gradient: fp.gradient || 'linear-gradient(135deg, #333, #666)',
		})),
		gradient: doc.mainImageGradient || 'linear-gradient(135deg, #333, #666)',
	}
}

/**
 * BACKWARD COMPATIBILITY: Export as let for components that expect static data
 */
export let detailedProjects: Record<string, DetailedProject> = {};

// ============================================================================
// FALLBACK DATA: Static project data for when Sanity is unavailable
// ============================================================================

export interface FloorPlan {
	label: string;
	type: 'All' | string;
	area: string;
	gradient: string;
}

const FALLBACK_DETAILED_PROJECTS: Record<string, DetailedProject> = {
	'noble-apartments': {
		name: 'Noble Apartments',
		location: 'Ameerpet DK Road, Hyderabad',
		city: 'Hyderabad',
		price: 'Price on Request',
		bhk: '2, 3 BHK',
		status: 'completed',
		statusClass: 'ready-to-move',
		area: 'N/A',
		totalUnits: '20 Units',
		developmentSize: 'N/A',
		type: 'Luxury Apartments',
		possession: 'Ready',
		rera: 'N/A',
		gradient: 'linear-gradient(135deg,#1a1a2e 0%,#16213e 60%,#0f3460 100%)',
		description: [
			'Noble Apartments is located in on DK Road, Ameerpet which is one of the city hubs of software training institutes.',
			'With 4 flats on each floor consisting of three 3bhks and one 2 bhks, culminating to a total of 20 flats which are all sold out, it is built with the latest interiors and of the best materials.',
			'The presence of 6 lifts with automatic doors ensures that the movement across the building is convenient.',
		],
		highlights: [
			'RCC- framed earthquake resistant structure',
			'Standby generator to ensure 24X7 supply',
			'6 passenger lifts with automatic doors',
			'Premium quality plastic emulsion paint',
			'Teak wood flush doors',
			'UPVC/aluminium window frames',
			'Granite kitchen platform',
		],
		amenities: [
			{ label: '24x7 Security', svgPath: SVG_AMENITY_PATHS.security },
			{ label: 'Power Backup', svgPath: SVG_AMENITY_PATHS.default },
			{ label: 'Elevators', svgPath: SVG_AMENITY_PATHS.default },
			{ label: 'Premium Finishes', svgPath: SVG_AMENITY_PATHS.default },
		],
		floorPlans: [
			{ label: 'Typical Floor Plan', type: 'All', area: 'N/A', gradient: 'linear-gradient(135deg,#1a1a2e,#0f3460)' },
		],
	},
	'fort-view': {
		name: 'Fort View',
		location: 'Road No.12 Banjara Hills, MLA colony',
		city: 'Hyderabad',
		price: 'Price on Request',
		bhk: '3, 4 BHK',
		status: 'completed',
		statusClass: 'ready-to-move',
		area: 'N/A',
		totalUnits: '8 Units',
		developmentSize: '1000 sq yds',
		type: 'Super Luxury Apartments',
		possession: 'Ready',
		rera: 'N/A',
		gradient: 'linear-gradient(135deg,#2e1a1a 0%,#400f0f 100%)',
		description: [
			'Fort View is a super luxury apartments located in the classy MLA colony. Built on a beautiful expanse of 1000 sq yds, Fort View boasts of a spectacular elevation with all the lavish facilities of high class quality.',
			'It relishes the best view in the town from all the sold out 8 apartments, captivating the vista of Golkonda fort, Shamshabad flyover, Military land and so on and so forth.',
		],
		highlights: [
			'Spectacular location',
			'Well trained 24x7 security',
			'Gymnasium',
			'Air conditioned',
			'Automatic door lifts',
			'Reserved Parking',
			'Swimming pool',
			'Recreational centre',
		],
		amenities: [
			{ label: 'Swimming Pool', svgPath: SVG_AMENITY_PATHS.pool },
			{ label: 'Gymnasium', svgPath: SVG_AMENITY_PATHS.gym },
			{ label: '24x7 Security', svgPath: SVG_AMENITY_PATHS.security },
			{ label: 'Reserved Parking', svgPath: SVG_AMENITY_PATHS.default },
			{ label: 'Air Conditioned', svgPath: SVG_AMENITY_PATHS.default },
		],
		floorPlans: [
			{ label: 'Luxury Layout', type: 'All', area: 'N/A', gradient: 'linear-gradient(135deg,#2e1a1a,#400f0f)' },
		],
	},
	'pristine-homes': {
		name: 'Pristine Homes',
		location: 'Aziz Nagar, Hyderabad',
		city: 'Hyderabad',
		price: 'Price on Request',
		bhk: '3 BHK Triplex',
		status: 'completed',
		statusClass: 'ready-to-move',
		area: '3700 sq.ft.',
		totalUnits: '6 Units',
		developmentSize: 'N/A',
		type: 'Triplex Villas',
		possession: 'Ready',
		rera: 'N/A',
		gradient: 'linear-gradient(135deg,#1a2e2e 0%,#0f6060 100%)',
		description: [
			'Pristine Homes is an exclusive enclave of only six triplex villas each with 3700 Sft of quality living spaces. They symbolize a lifestyle amidst fresh breeze, greenery, refined interiors and freedom.',
			'Located in between VIF & VJIT Engineering colleges and 5 minutes from Gandipet lake, Pristine Homes enjoys strategic connectivity and the benefits of a prime evolving hub.',
			'The adjoining Mrigavani National Forest connects you with nature and inspires freedom.',
		],
		highlights: [
			'Premium quality construction',
			'Excellent Landscaping',
			'Solar fencing',
			'Kids play area',
			'Avenue Plantation',
			'24-hr Security',
		],
		amenities: [
			{ label: 'Children\'s Play Area', svgPath: SVG_AMENITY_PATHS.play },
			{ label: 'Landscaped Garden', svgPath: SVG_AMENITY_PATHS.garden },
			{ label: '24x7 Security', svgPath: SVG_AMENITY_PATHS.security },
			{ label: 'Triplex Design', svgPath: SVG_AMENITY_PATHS.default },
		],
		floorPlans: [
			{ label: 'Triplex Villa Plan', type: '3 BHK', area: '3700 sq.ft.', gradient: 'linear-gradient(135deg,#1a2e2e,#0f6060)' },
		],
	},
	'zonah-pine-villas': {
		name: 'Zonah Pine Villas',
		location: 'Aziznagar, Hyderabad',
		city: 'Hyderabad',
		price: 'Price on Request',
		bhk: '3 BHK Villas',
		status: 'ongoing',
		statusClass: 'under-construction',
		area: 'N/A',
		totalUnits: 'N/A',
		developmentSize: 'N/A',
		type: 'Residential Project',
		possession: 'TBA',
		rera: 'TBA',
		gradient: 'linear-gradient(135deg,#2e2e1a 0%,#60600f 100%)',
		description: [
			'Zonah Pine Villas is a premium residential development in Aziznagar, Hyderabad.',
			'Designed to offer a blend of luxury and nature, this project provides a serene living environment with modern amenities.',
		],
		highlights: ['Prime location in Aziznagar', 'Modern villa design', 'Lush green surroundings', 'Excellent connectivity'],
		amenities: [
			{ label: 'Landscaped Garden', svgPath: SVG_AMENITY_PATHS.garden },
			{ label: '24x7 Security', svgPath: SVG_AMENITY_PATHS.security },
		],
		floorPlans: [
			{ label: 'Villa Plan', type: '3 BHK', area: 'N/A', gradient: 'linear-gradient(135deg,#2e2e1a,#60600f)' },
		],
	},
	'tree-tops': {
		name: 'Tree Tops',
		location: 'Road No. 4, Banjara Hills, Hyderabad',
		city: 'Hyderabad',
		price: 'Price on Request',
		bhk: '3 BHK',
		status: 'completed',
		statusClass: 'ready-to-move',
		area: 'N/A',
		totalUnits: 'N/A',
		developmentSize: 'N/A',
		type: 'Luxury Apartments',
		possession: 'Ready',
		rera: 'N/A',
		gradient: 'linear-gradient(135deg,#0d1b2e 0%,#14344a 100%)',
		description: [
			'Tree Tops is one of the most luxury apartment complexes in Hyderabad, situated at one of the best locations: Banjara Hills Road No. 4.',
			'Separate and spacious drawing, dining and family rooms are cleverly conjoined to handle large parties and family gatherings.',
			'A well appointed gym, a swimming pool with the latest filtration system and trellised party area on the terrace offer both fun and fitness.',
		],
		highlights: [
			'Prime Banjara Hills location',
			'Swimming pool & Gym',
			'Party area on terrace',
			'Johnson steel body lift',
			'Generator backup',
			'Intercom connection',
		],
		amenities: [
			{ label: 'Swimming Pool', svgPath: SVG_AMENITY_PATHS.pool },
			{ label: 'Gymnasium', svgPath: SVG_AMENITY_PATHS.gym },
			{ label: 'Rooftop Lounge', svgPath: SVG_AMENITY_PATHS.bbq },
			{ label: '24x7 Security', svgPath: SVG_AMENITY_PATHS.security },
			{ label: 'Elevators', svgPath: SVG_AMENITY_PATHS.default },
		],
		floorPlans: [
			{ label: 'Luxury Layout', type: '3 BHK', area: 'N/A', gradient: 'linear-gradient(135deg,#0d1b2e,#14344a)' },
		],
	},
};

const FALLBACK_LISTING_PROJECTS: ListingProject[] = [
	{
		slug: 'noble-apartments',
		segment: 'residential',
		badgeStatus: undefined,
		city: 'Hyderabad',
		subLocation: 'Ameerpet',
		title: 'Noble Apartments',
		projectTypeDetail: 'Luxury Apartments',
		priceRange: 'Price on Request',
		bedrooms: '2, 3 BHK',
		developmentSize: 'N/A',
		totalUnits: '20 Units',
		mainImageGradient: 'linear-gradient(135deg,#1a1a2e,#0f3460)',
		budgetCr: 0,
	},
	{
		slug: 'fort-view',
		segment: 'residential',
		badgeStatus: undefined,
		city: 'Hyderabad',
		subLocation: 'Banjara Hills',
		title: 'Fort View',
		projectTypeDetail: 'Super Luxury Apartments',
		priceRange: 'Price on Request',
		bedrooms: '3, 4 BHK',
		developmentSize: '1000 sq yds',
		totalUnits: '8 Units',
		mainImageGradient: 'linear-gradient(135deg,#2e1a1a,#400f0f)',
		budgetCr: 0,
	},
	{
		slug: 'pristine-homes',
		segment: 'residential',
		badgeStatus: undefined,
		city: 'Hyderabad',
		subLocation: 'Aziz Nagar',
		title: 'Pristine Homes',
		projectTypeDetail: 'Triplex Villas',
		priceRange: 'Price on Request',
		bedrooms: '3 BHK Triplex',
		developmentSize: 'N/A',
		totalUnits: '6 Units',
		mainImageGradient: 'linear-gradient(135deg,#1a2e2e,#0f6060)',
		budgetCr: 0,
	},
	{
		slug: 'zonah-pine-villas',
		segment: 'residential',
		badgeStatus: 'Under Construction',
		city: 'Hyderabad',
		subLocation: 'Aziznagar',
		title: 'Zonah Pine Villas',
		projectTypeDetail: 'Residential Project',
		priceRange: 'Price on Request',
		bedrooms: '3 BHK',
		developmentSize: 'N/A',
		totalUnits: 'N/A',
		mainImageGradient: 'linear-gradient(135deg,#2e2e1a,#60600f)',
		budgetCr: 0,
	},
	{
		slug: 'tree-tops',
		segment: 'residential',
		badgeStatus: undefined,
		city: 'Hyderabad',
		subLocation: 'Banjara Hills',
		title: 'Tree Tops',
		projectTypeDetail: 'Luxury Apartments',
		priceRange: 'Price on Request',
		bedrooms: '3 BHK',
		developmentSize: 'N/A',
		totalUnits: 'N/A',
		mainImageGradient: 'linear-gradient(135deg,#0d1b2e,#14344a)',
		budgetCr: 0,
	},
];

// ============================================================================
// ASYNC INITIALIZATION & GETTERS
// ============================================================================

let _initialized = false;

/**
 * Initialize projects data from Sanity CMS with fallback to static data
 * This runs automatically on first import
 */
async function initializeProjects(): Promise<void> {
	if (_initialized) return;

	try {
		const sanityProjects = await getProjects();
		if (sanityProjects && sanityProjects.length > 0) {
			// Populate from Sanity
			listingProjects = sanityProjects.map(transformToListingProject);
			sanityProjects.forEach((doc: any) => {
				const slug = doc.slug?.current || doc.slug;
				if (slug) {
					detailedProjects[slug] = transformToDetailedProject(doc);
				}
			});
			console.log(`✅ Loaded ${sanityProjects.length} projects from Sanity CMS`);
		} else {
			// Fallback to static data
			console.warn('⚠️ No projects from Sanity, using fallback data');
			listingProjects = FALLBACK_LISTING_PROJECTS;
			detailedProjects = FALLBACK_DETAILED_PROJECTS;
		}
	} catch (error) {
		// Fallback to static data on error
		console.error('❌ Failed to fetch from Sanity, using fallback data:', error);
		listingProjects = FALLBACK_LISTING_PROJECTS;
		detailedProjects = FALLBACK_DETAILED_PROJECTS;
	}

	_initialized = true;
}

/**
 * Get all listing projects (async)
 * Initialize if needed, then return cached data
 */
export async function getListingProjects(): Promise<ListingProject[]> {
	await initializeProjects();
	return listingProjects;
}

/**
 * Get all detailed projects (async)
 * Initialize if needed, then return cached data
 */
export async function getDetailedProjects(): Promise<Record<string, DetailedProject>> {
	await initializeProjects();
	return detailedProjects;
}

/**
 * Get a single detailed project by slug (async)
 * Initialize if needed, then return cached data
 */
export async function getDetailedProject(slug: string): Promise<DetailedProject | undefined> {
	await initializeProjects();
	return detailedProjects[slug];
}

// Initialize on module load (fire and forget)
initializeProjects().catch((error) => {
	console.error('Failed to initialize projects:', error);
});
