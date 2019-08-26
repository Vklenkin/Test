import Vue from "vue";
import Vuetify from "vuetify";

import App from "./App.vue";
import { router } from "./router";
import store from "./_store";

import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: "#00897B",
    secondary: "#546E7A",
    accent: "#3949AB",
    error: "#D50000",
    warning: "#ffeb3b",
    info: "#29B6F6",
    success: "#4caf50"
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
