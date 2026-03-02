import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, isSanityConfigured } from '../env'

export const client = isSanityConfigured()
    ? createClient({
          projectId,
          dataset,
          apiVersion,
          useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
      })
    : null
