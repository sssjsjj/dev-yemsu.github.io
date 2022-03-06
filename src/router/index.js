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
    name: "Post Detail",
    component: PostDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;