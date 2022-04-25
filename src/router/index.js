import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ContactPage from "../views/ContactPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactPage.vue"),
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
