<template>
  <div>
    <nbrDesktop :nav_items='nav_items' :nav_title="nav_title" v-if="window_width > 600"></nbrDesktop>
    <nbrMobile :nav_items='nav_items' :nav_title="nav_title" v-else></nbrMobile>
  </div>
</template>

<script>
import nbrDesktop from "./nbr-desktop.vue";
import nbrMobile from "./nbr-mobile.vue";

export default {
  components: { nbrDesktop, nbrMobile },
  props:{
    nav_items: Array,
    nav_title: String
  },
  data: function(){
    return {
      window_width: 0,
    }
  },
  created() {
    window.addEventListener('resize', this.resized);
    this.resized();
  },
  methods: {
    resized(){ 
      this.window_width = window.innerWidth; 
      console.log(this.window_width);
    }
  },
  mounted() {
    console.log("Nav bar mounted!");
  },
};
</script>
