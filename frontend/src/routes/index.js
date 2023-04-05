import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/login/index.vue";
import HomeView from "../views/home/index.vue";

import RegisterView from "../views/register/index.vue";

import HttpCat from '../views/httpGats/index.vue';

import Dogs from '../views/dogs/index.vue';

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
    meta:{
      transition: 'fade'
    }
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta:{
      transition: ''
    }
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta:{
      transition: 'fade'
    }
  },
  {
    path: "/cats",
    name: "cats",
    component: HttpCat,
    meta:{
      transition: ''
    }
  },
  {
    path: "/dogs",
    name: "dogs",
    component: Dogs,
    meta:{
      transition: ''
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});






export default router;

