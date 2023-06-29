<template>
  <v-btn 
    :to=link
  >
  {{ title }}
  </v-btn>
</template>

<script>
export default {
  props: {
    title: String,
    link: String,
  },
  methods: {
    jump2(link){ this.$router.push(link); }
  },
};
</script>