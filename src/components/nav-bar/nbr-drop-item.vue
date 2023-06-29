<template>
  <v-list-item
    :to=link
  >
    <v-list-item-title>
      {{title}}
    </v-list-item-title>
  </v-list-item>
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