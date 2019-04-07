<template>
  <v-card>
    <v-card-title>
      <div class="ma-auto text-xs-center">
        <h3>{{ record.competitionType }}</h3>
        <div class="body-2">{{ record.competitionDistance }}</div>
        <div>{{ record.competitionDescription }}</div>
        <TimeAnimation
          :hours="record.time.hours"
          :minutes="record.time.minutes"
          :seconds="record.time.seconds"
        />
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
import TimeAnimation from './TimeAnimation.vue';

export default {
  components: {
    TimeAnimation
  },
  props: {
    record: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.c-record-card {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/img/records/trophies.jpg') center center / cover no-repeat;
}
</style>
