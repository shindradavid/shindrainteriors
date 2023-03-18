<script lang="ts">
  // types
  import type { SanityAccessibleImage } from '$lib/types/sanity';
  // svelte
  // sveltekit
  // 3rd party
  import Carousel from 'svelte-carousel';
  // project
  import urlFor from '$lib/sanity/image';
  // components
  // icons
  // props
  // state
  const images: SanityAccessibleImage[] = [];

  let carousel: any;

  const goToPrevPage = () => {
    carousel.goToPrev({ animate: false });
  };

  const goToNextPage = () => {
    carousel.goToNext({ animate: false });
  };
  // reactive statements
  // event handlers
  // lifecycle
</script>

<section class="hero">
  <div class="hero__copy">
    <h1>Sleek, Stylish and Stunning Interiors.</h1>
  </div>

  <div class="hero__gallery">
    <Carousel
      arrows={false}
      particlesToShow={2}
      particlesToScroll={1}
      autoplay={true}
      autoplayDuration={4000}
      dots={false}
      swiping={true}
      bind:this={carousel}
    >
      {#each images as image}
        <picture>
          <img src={urlFor(image).url()} alt={image.alt} />
        </picture>
      {/each}
    </Carousel>

    <button class="left" on:click={goToPrevPage}>
      <i class="ri-arrow-left-s-line" />
    </button>

    <button class="right" on:click={goToNextPage}>
      <i class="ri-arrow-right-s-line" />
    </button>
  </div>
</section>
