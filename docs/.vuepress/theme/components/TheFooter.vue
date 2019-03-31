<template>
  <v-footer class="pa-3">
    <v-layout>
      <div>&copy; {{ new Date().getFullYear() }} Jürgen Ratzenböck</div>
      <v-spacer></v-spacer>
      <div v-for="account in socialAccounts" :key="account.id" class="mx-2">
        <a :href="`${account.url}`" target="_blank" rel="noopener">
          <img
            :src="`img/icons/${account.iconUrl}`"
            :alt="`${account.name}`"
            width="20"
            height="20"
          />
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
          iconUrl: 'facebook.svg'
        },
        {
          id: 2,
          name: 'Twitter',
          url: 'https://twitter.com/j_ratzenboeck',
          iconUrl: 'twitter.svg'
        }
      ]
    };
  }
};
</script>

<style scoped></style>
