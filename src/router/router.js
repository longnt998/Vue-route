import Home from "../pages/home/Index.vue";
import About from "../pages/AboutHome.vue";
import Post from "../pages/PostHome.vue";
import TestCount from "../pages/TestCount.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/posts/:slug",
    name: "post",
    component: Post,
    props: true
  },
  {
    path: "/count",
    name: 'count',
    component: TestCount
  },
  {
    path: "*",
    component: NotFound
  }
];

export default routes;
