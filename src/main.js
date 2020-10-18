import Vue from "vue";
import App from "./App.vue";
import VueFab from "vue-float-action-button";
import router from './router/route';
Vue.config.productionTip = false;

Vue.use(VueFab);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");