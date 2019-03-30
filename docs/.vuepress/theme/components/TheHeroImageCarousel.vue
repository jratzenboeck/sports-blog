<template>
  <v-carousel hide-controls height="300">
    <v-carousel-item v-for="i in 3" :key="i" :src="`/img/hero/${i}.jpg`"></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {};
</script>
