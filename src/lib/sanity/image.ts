import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

import createImageBuilder from '@sanity/image-url';

import sanityClient from './client';

export default (source: SanityImageSource) => {
  const imageBuilder = createImageBuilder(sanityClient);
  return imageBuilder.image(source).auto('format').fit('max');
};
