<template>
  <v-footer class="pa-3 c-footer">
    <v-layout>
      <div>&copy; {{ new Date().getFullYear() }} Jürgen Ratzenböck</div>
      <v-spacer></v-spacer>
      <div v-for="account in socialAccounts" :key="account.id" class="mx-2">
        <a :href="`${account.url}`" target="_blank" rel="noopener">
          <BaseIcon dark :icon-name="account.icon" />
        </a>
      </div>
      <cookie-law
        theme="dark-lime"
        message="Diese Webseite verwendet Cookies für Analyse- und Messungszwecke. Durch die Nutzung dieser Webseite stimmen Sie der Nutzung von Cookies zu."
        button-text="Ok, verstanden"
      />
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
          icon: 'facebook'
        },
        {
          id: 2,
          name: 'Twitter',
          url: 'https://twitter.com/j_ratzenboeck',
          icon: 'twitter'
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
