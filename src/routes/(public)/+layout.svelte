<script lang="ts">
  import '../../styles/index.scss';
  import 'remixicon/fonts/remixicon.css';
  import Header from '$components/header/Header.svelte';
  import Footer from '$components/Footer.svelte';
</script>

<Header />
<slot />
<Footer />
