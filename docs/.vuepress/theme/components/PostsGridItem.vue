<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ post.title }}</h3>
        <div>{{ post.frontmatter.date }}</div>
        <div v-html="post.excerpt"></div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn color="teal">Mehr lesen</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>
