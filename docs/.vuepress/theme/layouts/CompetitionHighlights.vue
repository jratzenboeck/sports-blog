<template>
  <BaseLayout>
    <h1 class="text-xs-center">Wettkampfhighlights</h1>
    <p class="subheading text-xs-center">
      Ein Überblick über meine bisherigen persönlichen Bestzeiten bei Wettkämpfen.
    </p>
    <PersonalRecords />
  </BaseLayout>
</template>

<script>
import PersonalRecords from '../components/PersonalRecords.vue';

export default {
  components: {
    PersonalRecords
  }
};
</script>

<style scoped></style>
