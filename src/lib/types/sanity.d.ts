type SanityImage = import('@sanity/image-url/lib/types/types').SanityImageSource;
export type SanityRichText = import('@portabletext/svelte/ptTypes').InputValue;

export interface SanityAccessibleImage extends SanityImage {
  alt: string;
}
