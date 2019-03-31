<template>
  <v-app>
    <TheHeader />
    <v-content>
      <slot />
    </v-content>
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from './TheHeader.vue';
import TheFooter from './TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style scoped></style>
