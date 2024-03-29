import { createRouter, createWebHistory } from "vue-router";
import TodoView from "../views/TodoView.vue";
import TodoInputView from "@/views/TodoInputView.vue";
import TestView from "@/views/TestView.vue";

const routes = [
  {
    path: "/test",
    name: "test",
    component: TestView,
  },
  {
    path: "/",
    name: "todo",
    component: TodoView,
  },
  {
    path: "/ins",
    name: "todoInput",
    component: TodoInputView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
