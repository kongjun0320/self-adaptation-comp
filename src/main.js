import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import MyPlugin from "@/lib/index";
Vue.use(MyPlugin);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
