<template>
  <div>
    <v-toolbar dark :color="$themeConfig.primaryColor" height="75" class="mb-2 white--text">
      <v-toolbar-side-icon
        class="hidden-sm-and-up"
        @click="showNavigationDrawer = !showNavigationDrawer"
      />
      <v-img src="/img/profile.jpg" max-height="60" max-width="60" class="c-profile-picture" />
      <v-toolbar-title>jratzenboeck sports blog</v-toolbar-title>
      <v-toolbar-items class="hidden-xs-only ml-2">
        <v-btn
          v-for="item in $themeConfig.navbarItems"
          :key="item.title"
          dark
          flat
          :to="item.path"
          >{{ item.title }}</v-btn
        >
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="showNavigationDrawer" temporary absolute width="200">
      <v-list>
        <v-list-tile
          v-for="item in $themeConfig.navbarItems"
          :key="item.title"
          :to="item.path"
          avatar
        >
          <v-list-tile-avatar class="mr-2">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNavigationDrawer: false
    };
  }
};
</script>

<style scoped lang="scss">
.c-profile-picture {
  border-radius: 50%;
}
</style>
