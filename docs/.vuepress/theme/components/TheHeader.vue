<template>
  <v-app>
    <v-content>
      <TheNavbar />
      <TheHeroImageCarousel />
    </v-content>
  </v-app>
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
