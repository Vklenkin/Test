import Vue from "vue";
import Router from "vue-router";
import store from "./_store";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Settings from "./views/Settings.vue";
import ApiScreen from "./views/ApiScreen.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history", // without '#' in route
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    },
    {
      path: "/apiscreen/:itemId",
      name: "apiScreen",
      component: ApiScreen,
      props: true
    }
  ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const hasToken = localStorage.getItem("user")
    ? !!JSON.parse(localStorage.getItem("user")).token
    : false;

  if (authRequired && !hasToken) {
    return next("/login");
  }

  if (to.path == "/login") {
    store.commit("toolbarDisable");
  } else {
    store.commit("toolbarEnable");
    store.commit("setCurrentUserIndex", null);
  }

  next();
});
