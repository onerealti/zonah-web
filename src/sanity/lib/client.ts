import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, isSanityConfigured } from '../env'

let _client: ReturnType<typeof createClient> | null = null

/**
 * Get or create Sanity client (lazy initialization)
 * Returns null if Sanity is not configured
 */
export function getClient() {
    if (_client) return _client

    if (!isSanityConfigured()) {
        return null
    }

    try {
        _client = createClient({
            projectId,
            dataset,
            apiVersion,
            useCdn: true,
        })
        return _client
    } catch (error) {
        console.error('Failed to initialize Sanity client:', error)
        return null
    }
}

/**
 * Legacy export for backward compatibility
 */
export const client = (() => {
    try {
        return isSanityConfigured()
            ? createClient({
                  projectId,
                  dataset,
                  apiVersion,
                  useCdn: true,
              })
            : null
    } catch {
        return null
    }
})()
