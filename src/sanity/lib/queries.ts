import { getClient } from './client'
import { groq } from 'next-sanity'

export const PROJECTS_QUERY = groq`
  *[_type == "project"] | order(title asc) {
    _id,
    title,
    slug,
    segment,
    location,
    city,
    subLocation,
    status,
    badgeStatus,
    projectTypeDetail,
    bedrooms,
    priceRange,
    budgetCr,
    developmentSize,
    totalUnits,
    area,
    mainImage {
      asset->{
        url
      }
    },
    mainImageGradient,
    description,
    highlights,
    amenities[] {
      label,
      amenityType
    },
    floorPlans[] {
      label,
      type,
      area,
      gradient
    },
    possession,
    rera
  }
`

export const PROJECT_BY_SLUG_QUERY = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    segment,
    location,
    city,
    subLocation,
    status,
    badgeStatus,
    projectTypeDetail,
    bedrooms,
    priceRange,
    budgetCr,
    developmentSize,
    totalUnits,
    area,
    mainImage {
      asset->{
        url
      }
    },
    mainImageGradient,
    description,
    highlights,
    amenities[] {
      label,
      amenityType
    },
    floorPlans[] {
      label,
      type,
      area,
      gradient
    },
    possession,
    rera
  }
`

export const PROJECTS_BY_SEGMENT_QUERY = groq`
  *[_type == "project" && segment == $segment] | order(title asc) {
    _id,
    title,
    slug,
    segment,
    location,
    city,
    subLocation,
    status,
    badgeStatus,
    projectTypeDetail,
    bedrooms,
    priceRange,
    budgetCr,
    developmentSize,
    totalUnits,
    area,
    mainImage {
      asset->{
        url
      }
    },
    mainImageGradient,
    description,
    highlights,
    amenities[] {
      label,
      amenityType
    },
    floorPlans[] {
      label,
      type,
      area,
      gradient
    },
    possession,
    rera
  }
`


/**
 * Fetch all projects from Sanity
 */
export async function getProjects() {
  const client = getClient()
  if (!client) {
    console.warn('Sanity client not configured. Using fallback data.')
    return []
  }
  try {
    return await client.fetch(PROJECTS_QUERY)
  } catch (error) {
    console.error('Error fetching projects from Sanity:', error)
    return []
  }
}

/**
 * Fetch a single project by slug
 */
export async function getProjectBySlug(slug: string) {
  const client = getClient()
  if (!client) {
    console.warn('Sanity client not configured. Using fallback data.')
    return null
  }
  try {
    return await client.fetch(PROJECT_BY_SLUG_QUERY, { slug })
  } catch (error) {
    console.error(`Error fetching project with slug "${slug}":`, error)
    return null
  }
}

/**
 * Fetch projects by segment
 */
export async function getProjectsBySegment(segment: string) {
  const client = getClient()
  if (!client) {
    console.warn('Sanity client not configured. Using fallback data.')
    return []
  }
  try {
    return await client.fetch(PROJECTS_BY_SEGMENT_QUERY, { segment })
  } catch (error) {
    console.error(`Error fetching projects for segment "${segment}":`, error)
    return []
  }
}
