<template>
  <v-app>
    <v-main>
      <v-expand-transition>
        <xnav v-if="!$route.meta.hideNav" :nav_items=navItems :nav_title=navTitle />
      </v-expand-transition>
      <keep-alive>
        <transition name="fade" mode="out-in">
          <router-view ref="view" />
        </transition>
      </keep-alive>
    </v-main>
  </v-app>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: 0.4s;
}
.fade-enter {
  opacity: 0;
  /* transform: translateX(-20vh); */
  transform: scale(0.95)
}
.fade-leave-to {
  opacity: 0;
  /* transform: translateX(20vh); */
  transform: scale(0.95)
}
</style>

<script>
import xnav from "./components/nav-bar/nbr";

export default {
  components: { xnav },
  data() {
    return {
      navTitle: "COVID CIC | 武漢肺炎戰情中心 ", 
      navItems: [
        {title: "overview", link: "/", type: "nav_btn", dropdown: []},
        {title: "map", link: "/map", type: "nav_btn", dropdown: []},  
        {title: "historical", link: "/historical-data", type: "nav_btn", dropdown: []}, 
        // {title: "統計", link: "#", type: "nav_btn_drop", dropdown: [
        //     {title: "你", link: "/you", type:"nav_dropdown_item"}, 
        //     {title: "世界", link: "/world", type:"nav_dropdown_item"}
        //   ]
        // },
        // {title: "control center", link: "/controlcenter", type: "nav_btn", dropdown: []}, 
        // {title: "about", link: "/brief", type: "nav_btn", dropdown: []}, 
        // {title: "xtl.tw", link: "www.xtl.tw", type: "nav_btn", dropdown: []}, 
      // {title: "貳層 dropdown", link: "#", type: "nav_btn_drop", dropdown: [
      //     {title: "點開我", link: "#", type:"nav_sub_drop", dropdown: [
      //         {title: "|ω・`)", link: "#"},
      //         {title: "|・ω・`)", link: "#"},
      //         {title: "| (´・ω・`)", link: "#"},
      //       ]
      //     },
      //     {title: "(*´▽`*)", link: "#", type:"nav_dropdown_item"}, 
      //   ]
      // },
      // {title: "壹層 dropdown", link: "#", type: "nav_btn_drop", dropdown: [
      //     {title: "(*´▽`*)", link: "#", type:"nav_dropdown_item"}, 
      //     {title: "ヽ(●´∀`●)ﾉ", link: "#", type:"nav_dropdown_item"}
      //   ]
      // },
      // {title: "單壹 link", link: "#", type: "nav_btn", dropdown: []},
    ],
    }
  },
  mounted() {
    console.log(this.$route);
  },
}
</script>

<style>
  *{
    font-family: 'PingFang TC', 'Major Mono Display', monospace;
    font-weight: 400 !important;
  }
</style>