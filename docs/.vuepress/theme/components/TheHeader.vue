<template>
  <div>
    <TheNavbar />
    <TheHeroImageCarousel />
  </div>
</template>

<script>
import TheNavbar from './TheNavbar.vue';
import TheHeroImageCarousel from './TheHeroImageCarousel.vue';

export default {
  components: {
    TheNavbar,
    TheHeroImageCarousel
  }
};
</script>
