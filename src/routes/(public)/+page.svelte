<script lang="ts">
  import Seo from '$components/Seo.svelte';
  import tooltip from '$lib/actions/tooltip';
</script>

<Seo />

<h1>Sleek, Stylish and Stunning Interiors.</h1>
<p>Sleek, Stunning, Stylish interior designs.</p>
<a href="/contact-us" class="btn primary-btn cta-btn">Contact us</a>
<a href="/customer-stories" use:tooltip={{text: 'tooltip', position: 'left'}}>Customer stories</a>

<a href="/home-interiors" aria-label="Home Interior designs">
  <article>
    <h2>Home interiors</h2>
    <p>Design your dream home with us.</p>
  </article>
</a>

<a href="/office-interiors" aria-label="Office interior designs">
  <article>
    <h2>Office interiors</h2>
    <a href="/">Let's create a workspace that inspires productivity and success.</a>
  </article>
</a>

<section>
  <h2>Why we are different</h2>

  <article>
    <span>
      <i class="ri-vip-diamond-line" />
    </span>
    <h3>Quality you can feel</h3>
    <p>
      We work with top-quality materials and products to ensure that your space not only looks
      beautiful but also functions perfectly.
    </p>
  </article>

  <article>
    <span>
      <i class="ri-user-3-line" />
    </span>
    <h3>Personalized approach</h3>
    <p>
      We work closely with your to create a design that reflects your individual or brand style.
    </p>
  </article>

  <article>
    <span>
      <i class="ri-wallet-3-line" />
    </span>
    <h3>Transparent pricing.</h3>
    <p>
      Get great designs without breaking the bank. Pay for what you need, and nothing you don't.
    </p>
  </article>

  <article>
    <span>
      <i class="ri-hand-heart-line" />
    </span>
    <h3>White glove experience</h3>
    <p>Never lift a finger. We'll handle it all, from delivery and building to clean-up.</p>
  </article>
</section>

<section>
  <h2>But don't take our word for it.</h2>
  <p>Here is what clients are saying about us.</p>
</section>

<style lang="scss">
</style>