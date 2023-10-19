import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/manage",
      name: "manage-songs",
      component: () => import("@/views/ManageView.vue"),
    },
    {
      path: "/song/:songId",
      name: "song",
      component: () => import("@/views/SongView.vue"),
    },
  ],
});

export default router;
