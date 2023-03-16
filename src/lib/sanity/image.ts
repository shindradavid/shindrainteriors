import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

import createImageBuilder from '@sanity/image-url';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

const imageBuilder = createImageBuilder({
  dataset: PUBLIC_SANITY_DATASET,
  projectId: PUBLIC_SANITY_PROJECT_ID
});

export const urlFor = (source: SanityImageSource) => {
  return imageBuilder.image(source).auto('format').fit('max');
};