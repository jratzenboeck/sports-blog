<template>
  <div>
    <v-toolbar dark :color="$themeConfig.primaryColor" height="75" class="mb-2 white--text">
      <v-toolbar-side-icon
        class="hidden-sm-and-up"
        @click="showNavigationDrawer = !showNavigationDrawer"
      />
      <router-link to="/" class="d-flex">
        <img src="/img/profile.jpg" class="c-profile-picture" />
      </router-link>
      <v-toolbar-title>jratzenboeck | sports</v-toolbar-title>
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
    <v-navigation-drawer v-model="showNavigationDrawer" temporary absolute width="250">
      <v-list>
        <v-list-tile
          v-for="item in $themeConfig.navbarItems"
          :key="item.title"
          :to="item.path"
          avatar
        >
          <v-list-tile-avatar>
            <BaseIcon :icon-name="item.icon" />
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
  height: 65px;
  width: auto;
  color: #fff;
}
</style>
