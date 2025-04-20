import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./components/HomeView.vue";
import SignUp from "./components/SignUp.vue";

const routes = [
  {
    name: "Home",
    component: HomeView,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
