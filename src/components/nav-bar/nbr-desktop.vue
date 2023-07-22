<template>
  <div>
    <v-app-bar dark>
      <v-toolbar-title
        >{{ nav_title }}
        <!-- <v-chip class="ml-2" small color="orange" label outlined> L2 </v-chip> -->
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <div
          v-for="(btn, idx) in nav_items"
          :key="idx"
          :is="btn.type"
          :dropdown="btn.dropdown"
          :title="btn.title"
          :link="btn.link"
        ></div>
        <v-btn @click="toxtl"> xtl.tw </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
import nav_btn_drop from "./nbr-btn-drop.vue";
import nav_btn from "./nbr-btn.vue";

export default {
  components: { nav_btn_drop, nav_btn },
  props: {
    nav_items: Array,
    nav_title: String,
  },
  mounted() {
    console.log("Nav bar mounted!");
  },
  methods: {
    toxtl() {
      window.open("https://www.xtl.tw", "_blank");
    },
  },
};
</script>
