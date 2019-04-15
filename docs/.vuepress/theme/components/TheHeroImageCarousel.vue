<template>
  <v-carousel hide-controls hide-delimiters height="300" active-class="c-carousel">
    <v-carousel-item
      v-for="item in carouselItems"
      :key="item.id"
      :src="`/img/hero/${item.id}.jpg`"
      class="c-carousel-item"
      transition="c-carousel-item--transition"
      reverse-transition="c-carousel-item--transition"
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
.c-carousel {
  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
}

.c-carousel-item {
  width: 100%;

  &__slogan {
    font-size: 1.8em;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &--transition {
    &-enter-active,
    &-leave-active,
    &-leave-to {
      transition: 1s ease-out;
      position: absolute;
      top: 0;
      left: 0;
    }

    &-enter,
    &-leave,
    &-leave-to {
      opacity: 0;
    }
  }
}
</style>
