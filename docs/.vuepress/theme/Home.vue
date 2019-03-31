<template>
  <BaseLayout>
    <h1 class="text-xs-center pa-2">Willkommen auf meinem Sport Blog</h1>
    <p class="text-xs-center pa-2">Hier findest du alle News zu meiner sportlichen Leidenschaft.</p>
    <PostsGrid />
  </BaseLayout>
</template>

<script>
import BaseLayout from './components/BaseLayout.vue';
import PostsGrid from './components/PostsGrid.vue';

export default {
  components: {
    BaseLayout,
    PostsGrid
  }
};
</script>

<style scoped></style>
