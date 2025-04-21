import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./components/HomeView.vue";
import SignUp from "./components/SignUp.vue";
import LogIn from "./components/LogIn.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";

const routes = [
  {
    name: "Home",
    component: HomeView,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/signup",
  },
  {
    name: "LogIn",
    component: LogIn,
    path: "/login",
  },
  {
    name: "Add",
    component: Add,
    path: "/add",
  },
  {
    name: "Update",
    component: Update,
    path: "/update",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
