<script lang="ts">
  import { renderStudio, defineConfig } from 'sanity';
  import { onMount } from 'svelte';

  import config from '$lib/sanity/config';

  let studioEl: HTMLDivElement;

  onMount(() => {
    if (studioEl) {
      const sanityConfig = defineConfig(config);

      renderStudio(studioEl, sanityConfig);
    }
  });
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="robots" content="noindex" />
  <meta name="referrer" content="same-origin" />
</svelte:head>

<main>
  <div bind:this={studioEl} />
</main>

<style lang="scss">
  :global(body) {
    margin: 0;
    background-color: hsl(0, 0%, 0%);
  }

  main {
    height: 100vh;
    max-height: 100vh;
    overscroll-behavior: none;
    -webkit-font-smoothing: antialiased;
    overflow: auto;

    div {
      height: 100%;
    }
  }
</style>
