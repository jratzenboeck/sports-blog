<template>
  <div class="text-xs-center">
    <h3>{{ record.competitionType }}</h3>
    <div class="body-2">{{ record.competitionDistance }}</div>
    <div>{{ record.competitionDescription }}</div>
    <TimeAnimation
      :hours="record.time.hours"
      :minutes="record.time.minutes"
      :seconds="record.time.seconds"
    />
  </div>
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

<style scoped></style>
