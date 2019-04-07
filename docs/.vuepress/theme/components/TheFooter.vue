<template>
  <v-footer class="pa-3 c-footer">
    <v-layout>
      <div>&copy; {{ new Date().getFullYear() }} Jürgen Ratzenböck</div>
      <v-spacer></v-spacer>
      <div v-for="account in socialAccounts" :key="account.id" class="mx-2">
        <a :href="`${account.url}`" target="_blank" rel="noopener">
          <!--<img :src="`${account.iconUrl}`" :alt="`${account.name}`" width="20" height="100%" />-->
          <v-icon dark v-text="account.iconUrl" />
        </a>
      </div>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      socialAccounts: [
        {
          id: 1,
          name: 'Facebook',
          url: 'https://www.facebook.com/jurgen.ratzenbock',
          iconUrl: this.$vuetify.icons.facebook
        },
        {
          id: 2,
          name: 'Twitter',
          url: 'https://twitter.com/j_ratzenboeck',
          iconUrl: this.$vuetify.icons.twitter
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import '../styles/colors';
.c-footer {
  background: $primaryRegular;
  color: $textLight;
}
</style>
