<template>
  <v-menu
      bottom
      offset-y
  >
    <template v-slot:activator="{on, attrs}">
      <v-btn
        dark
        v-bind="attrs"
        v-on="on"
      >
      {{ title }}<v-icon
          color="grey lighten-1"
          dense
        >mdi-chevron-right</v-icon>
      </v-btn>
    </template>
    <v-list>
      <div
        v-for="drop in dropdown"
        :key="drop.title"
        :is="drop.type"
        :title="drop.title"
        :dropdown="drop.dropdown"
        :link="drop.link"
      >
      {{drop.title}}
      </div>
    </v-list>
  </v-menu>
</template>

<script>
import nav_dropdown_item from "./nbr-drop-item.vue";
import nav_sub_drop from "./nbr-sub-drop.vue";

export default {
  components: { nav_dropdown_item, nav_sub_drop },
  props: {
    title: String,
    dropdown: Array,
  },
  methods: {
    jump2(link){ location.href = link; }
  },
};
</script>