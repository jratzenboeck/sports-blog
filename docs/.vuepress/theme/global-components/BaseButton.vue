<template>
  <v-btn
    :color="$themeConfig.primaryColor"
    class="white--text"
    :flat="flat"
    :type="type"
    @click="$emit('click', $event.target)"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
      validate: value => ['button', 'submit'].indexOf(value)
    },
    flat: {
      type: Boolean,
      default: false
    }
  }
};
</script>
