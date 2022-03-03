import { createWebHistory, createRouter } from "vue-router";
import PostList from "./views/PostList.vue";
import PostDetail from "./views/PostDetail.vue";

const routes = [
  {
    path: "/",
    name: "Post List",
    component: PostList,
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