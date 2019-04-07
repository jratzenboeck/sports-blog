<template>
  <v-icon :dark="dark" v-text="icon" />
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    icon() {
      return `$vuetify.icons.${this.iconName}`;
    }
  }
};
</script>
