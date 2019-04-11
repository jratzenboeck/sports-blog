<template>
  <v-app>
    <TheHeader />
    <v-content>
      <v-container class="c-content-container">
        <slot />
      </v-container>
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

<style scoped lang="scss">
.c-content-container {
  max-width: 1050px;
}
</style>
