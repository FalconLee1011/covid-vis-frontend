import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/dashboard/home.vue'
import you from '../components/you/you.vue'
// import world from '../components/world.vue'
import map from '../components/map/map.vue'
// import controlcenter from '../components/controlCenter.vue'
import info from '../components/info/info.vue'
// import brief from '../components/info/brief.vue'
import login from '../components/auth/login'
import about from '../components/about/about'

import historical from "../components/historical/historical.vue"

import accessDenied from '../components/errors/accessDenied.vue' 
import _404 from '../components/errors/404.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/access-denied',
    component: accessDenied
  },
  {
    path: '/brief',
    component: about
  },
  {
    path: '/you',
    component: you
  },
  {
    path: '/info',
    component: info,
  },
  {
    path: '/map',
    component: map,
  },
  {
    path: '/login',
    component: login,
    meta:{
      hideNav: true
    }
  },
  {
    path: '/controlcenter',
    component: undefined,
    meta:{
      noaccess: true
    }
  },
  {
    path: '/historical-data', 
    component: historical, 
  }, 
  {
    path: "*", 
    component: _404, 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// eslint-disable-next-line no-unused-vars
router.beforeEach(async (to, from, next) => {
  // eslint-disable-next-line no-unused-vars
  // const authRequired = to.matched.some((route) => route.meta.authRequired) || true
  // const redirectLocationWhenAuthFailed = to.matched.some((route) => route.meta.redirectLocationWhenAuthFailed) || undefined

  // let user = window.localStorage.getItem('username');
  // let token = window.localStorage.getItem('token');
  
  // const res = await store.dispatch("auth");
  
  // // if (authRequired && !res) { return; }
  // if (!res) { 
  //   if(redirectLocationWhenAuthFailed != undefined && redirectLocationWhenAuthFailed != ""){ router.push(redirectLocationWhenAuthFailed) }
  //   return next(); 
  // }
  // if(!store.getters.authPassed)
  //   store.commit('setToken', { id: token, username: user });
  const redirectLocationWhenAuthFailed = to.matched.some((route) => route.meta.noaccess) || false;
  if(redirectLocationWhenAuthFailed) { 
    if(router.app._route.fullPath == "/access-denied") location.reload();
    else router.push("/access-denied"); 
  }
  else { 
    return next() 
  }
})

export default router