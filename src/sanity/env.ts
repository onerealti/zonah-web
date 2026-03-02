export const apiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-27'

export const dataset = 
    process.env.NEXT_PUBLIC_SANITY_DATASET || ''

export const projectId = 
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''

export function getSanityConfig() {
    return {
        projectId,
        dataset,
        apiVersion,
    }
}

export function isSanityConfigured(): boolean {
    return Boolean(projectId && dataset)
}
