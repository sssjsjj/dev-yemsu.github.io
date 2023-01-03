import { createWebHistory, createRouter } from "vue-router";
import Main from "./views/Main.vue";
import PostDetail from "./views/PostDetail.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/:title",
    name: "PostDetail",
    component: PostDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
});

export default router;