<template>
  <v-list-item
    class="v-list-item v-list-item--link theme--dark"
  >
    <v-menu
      bottom
      offset-x
    >
      <template v-slot:activator="{on, attrs}">
          <v-list-item-title
            dark
            v-bind="attrs"
            v-on="on"
            style="padding: 0 0;"
          >
            {{ title }}<v-icon
              color="grey lighten-1"
              dense
            >mdi-chevron-right</v-icon>
            <!-- &#9657; -->
          </v-list-item-title>
      </template>
      <v-list>
        <v-list-item
          v-for="drop in dropdown"
          :key="drop.title"
          @click="jump2(drop.link)"
        >
          <v-list-item-title>
            {{ drop.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-list-item>
</template>

<script>
export default {
  props: {
    title: String,
    dropdown: Array,
  },
  methods: {
    jump2(link){ this.$router.push(link); }
  },
};
</script>

<style>
.v-list-item--link:before {
    background-color: currentColor;
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: .3s cubic-bezier(.25,.8,.5,1);
}
</style>