<template>
  <div>
    <NumberAnimation :end-value="hours" :animation-duration="1">
      <template v-slot="{ currentValue }">
        <h3 class="d-inline-block">{{ formatTimeValue(currentValue) }}</h3>
      </template>
    </NumberAnimation>
    <span>:</span>
    <NumberAnimation :end-value="minutes" :animation-delay="1" :animation-duration="5">
      <template v-slot="{ currentValue }">
        <h3 class="d-inline-block">{{ formatTimeValue(currentValue) }}</h3>
      </template>
    </NumberAnimation>
    <span>:</span>
    <NumberAnimation :end-value="seconds" :animation-delay="6" :animation-duration="5">
      <template v-slot="{ currentValue }">
        <h3 class="d-inline-block">{{ formatTimeValue(currentValue) }}</h3>
      </template>
    </NumberAnimation>
  </div>
</template>

<script>
import NumberAnimation from './NumberAnimation.vue';

export default {
  components: {
    NumberAnimation
  },
  props: {
    hours: {
      type: Number,
      default: 0
    },
    minutes: {
      type: Number,
      default: 0
    },
    seconds: {
      type: Number,
      default: 0
    }
  },
  methods: {
    formatTimeValue(timeValue) {
      return timeValue < 10 ? `0${timeValue}` : timeValue;
    }
  }
};
</script>

<style scoped></style>
