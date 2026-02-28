import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        defineField({
            name: 'heroSlides',
            title: 'Hero Slides',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'image', type: 'image', title: 'Background Image', options: { hotspot: true } },
                        { name: 'heading', type: 'string', title: 'Heading' },
                        { name: 'subheading', type: 'string', title: 'Subheading' },
                        { name: 'link', type: 'url', title: 'Link' },
                    ]
                }
            ]
        }),
    ],
})
