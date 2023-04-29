import { createRouter, createWebHistory } from "vue-router";
import First from "@/views/FirstView.vue";
import Second from "@/views/SecondView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: First,
    },
    {
      path: "/Second",
      component: Second,
    },
  ],
});
