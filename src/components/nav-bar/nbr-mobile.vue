<template>
  <div>
    <v-app-bar 
      collapse
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-bottom-sheet 
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list>
        <v-list-item-content>
          <div v-for="(btn, idx) in nav_items"
            :key="idx"
            :is="btn.type"
            :dropdown="btn.dropdown"
            :title="btn.title"
            :link="btn.link"
          >
          </div>
        </v-list-item-content>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script>
import nav_btn_drop from "./nbr-btn-drop.vue";
import nav_btn from "./nbr-btn.vue";

export default {
  components: { nav_btn_drop, nav_btn },
  props:{
    nav_items: Array,
    nav_title: String
  },
  data: function(){
    return {
      drawer: false,
    }
  },
};
</script>

<style>
  .v-toolbar.v-toolbar--collapsed {
    max-width: 20%;
  }
</style>

