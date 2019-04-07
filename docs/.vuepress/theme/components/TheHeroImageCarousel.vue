<template>
  <v-carousel hide-controls height="300" active-class="c-carousel-item">
    <v-carousel-item
      v-for="item in carouselItems"
      :key="item.id"
      :src="`/img/hero/${item.id}.jpg`"
      active-class="black--text"
    >
      <p class="c-carousel-item__slogan white--text font-weight-bold">{{ item.slogan }}</p>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      carouselItems: [
        {
          id: 1,
          slogan: 'Ziele setzen'
        },
        {
          id: 2,
          slogan: 'Leidenschaft leben'
        },
        {
          id: 3,
          slogan: 'Erfolge erringen'
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.c-carousel-item {
  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));

  &__slogan {
    font-size: 1.8em;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
