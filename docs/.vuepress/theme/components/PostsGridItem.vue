<template>
  <v-card>
    <v-img :src="`/img/posts${post.path}hero.jpg`" aspect-ratio="2.75" />
    <v-card-title>
      <div>
        <h3 class="headline mb-0">{{ post.title }}</h3>
        <v-layout align-center>
          <v-flex shrink class="pr-0">
            <BaseIcon icon-name="calendar" />
          </v-flex>
          <v-flex grow>
            <span>{{ publishDate }}</span>
          </v-flex>
        </v-layout>
        <div v-html="post.excerpt"></div>
      </div>
    </v-card-title>
    <v-card-actions class="px-3 pb-3 pt-0">
      <BaseButton @click="readMoreClicked()">Mehr lesen</BaseButton>
    </v-card-actions>
  </v-card>
</template>

<script>
import padWithZero from '../../utils/numbers';

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    publishDate() {
      const date = new Date(this.post.frontmatter.date);
      return `${padWithZero(date.getDate())}.${padWithZero(
        date.getMonth() + 1
      )}.${date.getFullYear()}`;
    }
  },
  methods: {
    readMoreClicked() {
      this.$router.push(this.post.path);
      this.$trackClick(this.$page.title, 'read-more');
    }
  }
};
</script>
