<template>
  <BaseLayout>
    <h1 class="text-xs-center">Das bin ich</h1>
    <p class="text-xs-center subheading">Wer bin ich und um was geht es hier?</p>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <Content />
        </v-flex>
        <v-flex xs12 sm6>
          <v-img src="/img/about.jpg" width="100%" height="auto" class="c-about-image" />
        </v-flex>
      </v-layout>
    </v-container>
  </BaseLayout>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.c-about-image {
  border-radius: 10px;
}
</style>
