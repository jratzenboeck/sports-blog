<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex v-for="post in posts" :key="post.key" sm12 md6>
        <PostsGridItem :post="post" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PostsGridItem from './PostsGridItem.vue';

export default {
  components: {
    PostsGridItem
  },
  computed: {
    posts() {
      return this.$site.pages
        .filter(
          page => this.$themeConfig.navbarItems.map(item => item.path).indexOf(page.path) === -1
        )
        .sort((x, y) => {
          return new Date(y.frontmatter.date).getTime() - new Date(x.frontmatter.date).getTime();
        });
    }
  }
};
</script>
