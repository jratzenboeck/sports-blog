<template>
  <v-toolbar height="75">
    <v-toolbar-side-icon class="hidden-sm-and-up" />
    <v-img src="/img/profile.jpg" max-height="60" max-width="60" class="c-profile-picture" />
    <v-toolbar-title>jratzenboeck sports blog</v-toolbar-title>
    <v-toolbar-items class="hidden-xs-only ml-2">
      <v-btn flat>
        <router-link to="/">Startseite</router-link>
      </v-btn>

      <v-btn flat>
        <router-link to="/about">Über mich</router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.c-profile-picture {
  border-radius: 50%;
}
</style>
