import Vue from "vue";
import App from "./App.vue";
import vueScrollto from "vue-scrollto";
import VueFab from "vue-float-action-button";

Vue.config.productionTip = false;

Vue.use(vueScrollto);
Vue.use(VueFab);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
