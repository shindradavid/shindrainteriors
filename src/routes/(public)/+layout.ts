import type { LayoutLoad } from './$types';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

import { createClient } from '@sanity/client';

export const load = (() => {
  const sanity = createClient({
    dataset: PUBLIC_SANITY_DATASET,
    projectId: PUBLIC_SANITY_PROJECT_ID,
    useCdn: true,
    apiVersion: '2023-04-14'
  })
  
  return { sanity }
}) satisfies LayoutLoad;