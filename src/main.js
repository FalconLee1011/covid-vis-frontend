import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import sweetalert2 from "./plugins/vue-sweetalert2.js";
import toastification from "./plugins/vue-toastification.js";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  sweetalert2,
  toastification,
  render: (h) => h(App),
}).$mount("#app");
