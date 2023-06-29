import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from './plugins/axios'
import sweetalert2 from './plugins/vue-sweetalert2.js'
import toastification from './plugins/vue-toastification.js'
import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  axios,
  sweetalert2,
  toastification,
  store,
  render: h => h(App)
}).$mount('#app')
