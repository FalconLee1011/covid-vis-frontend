<template>
  <v-btn :to="link" :block="isMobile">
    {{ title }}
  </v-btn>
</template>

<script>
export default {
  props: {
    title: String,
    link: String,
  },
  data: function () {
    return {
      isMobile: false,
    };
  },
  created() {
    window.addEventListener("resize", this.resized);
    this.resized();
  },
  methods: {
    jump2(link) {
      this.$router.push(link);
    },
    resized() {
      if (window.innerWidth <= 600) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
};
</script>
