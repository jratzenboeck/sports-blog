<template>
  <v-card>
    <v-img :src="`/img/posts${post.path}hero.jpg`" aspect-ratio="2.75" />
    <v-card-title>
      <div>
        <h3 class="headline mb-0">{{ post.title }}</h3>
        <v-layout align-center>
          <v-flex shrink class="pr-0">
            <v-icon>calendar_today</v-icon>
          </v-flex>
          <v-flex grow>
            <span>{{ publishDate }}</span>
          </v-flex>
        </v-layout>
        <div v-html="post.excerpt"></div>
      </div>
    </v-card-title>
    <v-card-actions class="px-3 pb-3 pt-0">
      <BaseButton>Mehr lesen</BaseButton>
    </v-card-actions>
  </v-card>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  components: {
    BaseButton
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    publishDate() {
      const date = new Date(this.post.frontmatter.date);
      return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    }
  }
};
</script>
