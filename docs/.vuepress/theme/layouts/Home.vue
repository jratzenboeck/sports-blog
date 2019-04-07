<template>
  <BaseLayout>
    <h1 class="text-xs-center">Willkommen auf meinem Sport Blog</h1>
    <p class="subheading text-xs-center">
      Hier findest du alle News zu meiner sportlichen Leidenschaft.
    </p>
    <PostsGrid />
  </BaseLayout>
</template>

<script>
import PostsGrid from '../components/PostsGrid.vue';

export default {
  components: {
    PostsGrid
  }
};
</script>

<style scoped></style>
