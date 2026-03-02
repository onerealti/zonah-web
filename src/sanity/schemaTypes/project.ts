import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'segment',
            title: 'Segment',
            type: 'string',
            options: {
                list: [
                    { title: 'Residential', value: 'residential' },
                    { title: 'Commercial', value: 'commercial' },
                    { title: 'Land Development', value: 'land-development' },
                ]
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Full Location',
            type: 'string',
            description: 'e.g. Ameerpet DK Road, Hyderabad',
        }),
        defineField({
            name: 'city',
            title: 'City',
            type: 'string',
            validation: (Rule) => Rule.required(),
            options: {
                list: [
                    { title: 'Bangalore', value: 'bangalore' },
                    { title: 'Hyderabad', value: 'hyderabad' },
                    { title: 'Chennai', value: 'chennai' },
                    { title: 'Mumbai', value: 'mumbai' },
                    { title: 'Kochi', value: 'kochi' },
                    { title: 'Goa', value: 'goa' },
                    { title: 'Mangalore', value: 'mangalore' },
                ]
            }
        }),
        defineField({
            name: 'subLocation',
            title: 'Sub Location',
            type: 'string',
            description: 'e.g. Whitefield, Sarjapur Road, Aziznagar',
        }),
        defineField({
            name: 'status',
            title: 'Project Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Ongoing', value: 'ongoing' },
                    { title: 'Completed', value: 'completed' },
                    { title: 'Upcoming', value: 'upcoming' },
                ]
            }
        }),
        defineField({
            name: 'badgeStatus',
            title: 'Badge Status (for Cards)',
            type: 'string',
            description: 'e.g. Under Construction, New Launch, Sold Out, Completed, Ongoing',
        }),
        defineField({
            name: 'projectTypeDetail',
            title: 'Project Type',
            type: 'string',
            description: 'e.g. Apartment, Villa, Plot, Luxury Apartment, Apartment Complex',
        }),
        defineField({
            name: 'bedrooms',
            title: 'Bedrooms',
            type: 'string',
            description: 'e.g. 2, 3 BHK or N/A',
        }),
        defineField({
            name: 'priceRange',
            title: 'Price Range',
            type: 'string',
            description: 'e.g. ₹ 1.2 Cr Onwards or Price on Request',
        }),
        defineField({
            name: 'budgetCr',
            title: 'Budget in Crores (for filtering)',
            type: 'number',
            description: 'e.g. 1.2 (for sorting/filtering)',
        }),
        defineField({
            name: 'developmentSize',
            title: 'Development Size',
            type: 'string',
            description: 'e.g. 4.2 Acres, 10 Acres, 1000 sq yds, or N/A',
        }),
        defineField({
            name: 'totalUnits',
            title: 'Total Units',
            type: 'string',
            description: 'e.g. 320 Units, 20 Units, or N/A',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'mainImageGradient',
            title: 'Main Image Gradient (Fallback)',
            type: 'string',
            description: 'CSS gradient for listing card, e.g. linear-gradient(135deg,#1a1a2e,#0f3460)',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'text' }],
            description: 'Project descriptions (detailed paragraphs)',
        }),
        defineField({
            name: 'highlights',
            title: 'Highlights',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Key features/highlights of the project',
        }),
        defineField({
            name: 'amenities',
            title: 'Amenities',
            type: 'array',
            of: [{
                type: 'object',
                name: 'amenity',
                title: 'Amenity',
                fields: [
                    {
                        name: 'label',
                        title: 'Label',
                        type: 'string',
                        description: 'e.g. Swimming Pool, 24x7 Security',
                    },
                    {
                        name: 'amenityType',
                        title: 'Icon Type',
                        type: 'string',
                        options: {
                            list: [
                                { title: 'Swimming Pool', value: 'pool' },
                                { title: 'Gymnasium', value: 'gym' },
                                { title: 'Club House', value: 'club' },
                                { title: 'Children\'s Play Area', value: 'play' },
                                { title: 'Security', value: 'security' },
                                { title: 'EV Charging', value: 'ev' },
                                { title: 'Garden', value: 'garden' },
                                { title: 'BBQ Area', value: 'bbq' },
                                { title: 'Default', value: 'default' },
                            ]
                        }
                    }
                ]
            }],
        }),
        defineField({
            name: 'floorPlans',
            title: 'Floor Plans',
            type: 'array',
            of: [{
                type: 'object',
                name: 'floorPlan',
                title: 'Floor Plan',
                fields: [
                    {
                        name: 'label',
                        title: 'Label',
                        type: 'string',
                        description: 'e.g. 1 BHK, 2 BHK, Typical Floor Plan',
                    },
                    {
                        name: 'type',
                        title: 'Type',
                        type: 'string',
                        description: 'e.g. 2 BHK, 3 BHK, All',
                    },
                    {
                        name: 'area',
                        title: 'Area',
                        type: 'string',
                        description: 'e.g. 1250 sq.ft., N/A',
                    },
                    {
                        name: 'gradient',
                        title: 'Gradient (CSS)',
                        type: 'string',
                        description: 'CSS gradient color',
                    }
                ]
            }],
        }),
        defineField({
            name: 'possession',
            title: 'Possession',
            type: 'string',
            description: 'e.g. Ready, Q3 2024, TBA',
        }),
        defineField({
            name: 'rera',
            title: 'RERA Status',
            type: 'string',
            description: 'e.g. RERA number, N/A, Registered, etc.',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            segment: 'segment',
            city: 'city',
            image: 'mainImage'
        },
        prepare({ title, segment, city, image }) {
            return {
                title: `${title} (${segment})`,
                subtitle: city,
                media: image
            }
        }
    }
})
