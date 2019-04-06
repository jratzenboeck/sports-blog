<template>
  <v-btn
    :color="$themeConfig.primaryColor"
    class="white--text"
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
    }
  }
};
</script>
