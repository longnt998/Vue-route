import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  scrollBeHavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
});

export default router
