<template>
  <v-app>
    <v-main>
      <v-expand-transition>
        <xnav
          v-if="!$route.meta.hideNav"
          :nav_items="navItems"
          :nav_title="navTitle"
        />
      </v-expand-transition>
      <v-alert icon=mdi-archive-star-outline type="warning" class="mx-4 my-6" outlined>
        This project is now EoL and is in archive mode, since the main datasource has stopped updating.<br>
        The data will not be updated.<br>
        But a rewind feature is coming on the way<br>
      </v-alert>
      <keep-alive>
        <transition name="fade" mode="out-in">
          <router-view ref="view" />
        </transition>
      </keep-alive>
    </v-main>
  </v-app>
</template>

<style>
body{
  background-color: #121212;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.4s;
}
.fade-enter {
  opacity: 0;
  /* transform: translateX(-20vh); */
  transform: scale(0.95);
}
.fade-leave-to {
  opacity: 0;
  /* transform: translateX(20vh); */
  transform: scale(0.95);
}
</style>

<script>
import xnav from "./components/nav-bar/nbr";

export default {
  components: { xnav },
  data() {
    return {
      navTitle: "COVID-19 CIC",
      navItems: [
        { title: "overview", link: "/", type: "nav_btn", dropdown: [] },
        { title: "map", link: "/map", type: "nav_btn", dropdown: [] },
        {
          title: "historical",
          link: "/historical-data",
          type: "nav_btn",
          dropdown: [],
        },
      ],
    };
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
* {
  font-family: "PingFang TC", "Major Mono Display", monospace;
  font-weight: 400 !important;
}
</style>
