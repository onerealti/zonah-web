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
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 }
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
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
            name: 'propertyType',
            title: 'Property Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Residential', value: 'residential' },
                    { title: 'Commercial', value: 'commercial' },
                ]
            }
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
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'city',
            title: 'City',
            type: 'string',
            initialValue: 'bangalore',
            options: {
                list: [
                    { title: 'Bangalore', value: 'bangalore' },
                    { title: 'Hyderabad', value: 'hyderabad' },
                    { title: 'Chennai', value: 'chennai' },
                    { title: 'Mumbai', value: 'mumbai' },
                    { title: 'Kochi', value: 'kochi' },
                    { title: 'Goa', value: 'goa' },
                ]
            }
        }),
        defineField({
            name: 'subLocation',
            title: 'Sub Location',
            type: 'string',
            description: 'e.g. Whitefield, Sarjapur Road'
        }),
        defineField({
            name: 'projectTypeDetail',
            title: 'Project Type Detail',
            type: 'string',
            description: 'e.g. Apartment, Villa, Plot'
        }),
        defineField({
            name: 'bedrooms',
            title: 'Bedrooms',
            type: 'string',
            description: 'e.g. 2, 3 BHK'
        }),
        defineField({
            name: 'developmentSize',
            title: 'Development Size',
            type: 'string',
            description: 'e.g. 4.2 Acres'
        }),
        defineField({
            name: 'totalUnits',
            title: 'Total Units',
            type: 'string',
            description: 'e.g. 320 Units'
        }),
        defineField({
            name: 'priceRange',
            title: 'Price Range',
            type: 'string',
            description: 'e.g. ₹ 1.2 Cr Onwards'
        }),
        defineField({
            name: 'badgeStatus',
            title: 'Badge Status',
            type: 'string',
            description: 'e.g. Under Construction, New Launch, Sold Out'
        }),
    ],
})
