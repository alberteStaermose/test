import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/pBufferlo",
      name: "pBufferlo",
      component: () => import("../views/ProjectBufferlo.vue"),
    },
    {
      path: "/pSonja",
      name: "pSonja",
      component: () => import("../views/ProjectCafeSonja.vue"),
    },
    {
      path: "/pPolitiken",
      name: "pPolitiken",
      component: () => import("../views/ProjectPolitikenplus.vue"),
    },
    {
      path: "/pMoebel",
      name: "pMoebel",
      component: () => import("../views/ProjectMoebel.vue"),
    },
    {
      path: "/pWhileInBattle",
      name: "pWhileInBattle",
      component: () => import("../views/ProjectWhileInBattle.vue"),
    },
    {
      path: "/pSamyang",
      name: "pSamyang",
      component: () => import("../views/ProjectSamyang.vue"),
    },
    {
      path: "/pRF",
      name: "pRF",
      component: () => import("../views/ProjectRF.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
});

// 🔥 Force scroll to top on route change
router.beforeEach((to, from, next) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  next();
});

export default router;
