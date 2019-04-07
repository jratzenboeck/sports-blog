<template>
  <v-app>
    <TheHeader />
    <v-content class="pa-3">
      <slot />
    </v-content>
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style scoped></style>
