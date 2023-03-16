import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "@/views/HelloWorldView.vue";
import Map from "@/views/MapView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HelloWorld,
    },
    {
      path: "/map",
      component: Map,
    },
  ],
});
