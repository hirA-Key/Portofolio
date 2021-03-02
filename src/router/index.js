import Vue from "vue";
import VueRouter from "vue-router";
import dashboard from "../views/DashBoard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: dashboard,
    children: [
      {
        path: "/",
        component: () => import("../views/TopPage.vue")
      },
      {
        path: "skill",
        component: () => import("../views/Skill.vue")
      },
      {
        path: "works",
        component: () => import("../views/Works.vue")
      },
      {
        path: "contact",
        component: () => import("../views/Contact.vue")
      },
    ],
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
