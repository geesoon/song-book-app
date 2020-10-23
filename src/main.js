import Vue from "vue";
import App from "./App.vue";
// import VueFab from "vue-float-action-button";
import router from './router/route';
import Vue2TouchEvents from "vue2-touch-events";

Vue.config.productionTip = false;

Vue.use(Vue2TouchEvents);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");