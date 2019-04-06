<template>
  <span>
    <slot :currentValue="currentValue">{{ currentValue }}</slot>
  </span>
</template>

<script>
export default {
  props: {
    startValue: {
      type: Number,
      default: 0
    },
    endValue: {
      type: Number,
      required: true
    },
    animationDelay: {
      type: Number,
      default: 0
    },
    animationDuration: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      currentValue: 0
    };
  },
  mounted() {
    setTimeout(() => {
      // Compute interval
      const timeout = this.animationDuration / (this.endValue - this.startValue);
      // setInterval with computed interval and execute following function and assign to variable
      const timer = setInterval(() => {
        if (this.currentValue === this.endValue) {
          clearInterval(timer);
        } else {
          this.currentValue += 1;
        }
      }, timeout * 1000);
      // function
      //    if currentValue === endValue
      //        clearInterval for variable
      //    else
      //        currentValue += interval
    }, this.animationDelay * 1000);
  }
};
</script>

<style scoped></style>
