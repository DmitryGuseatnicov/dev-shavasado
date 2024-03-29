import { createRouter, createWebHistory } from "vue-router";

import { HomeView} from "@/views/HomeView";
import MenuView from "@/views/MenuView/MenuView.vue";
import OrderView from "@/views/OrderView/OrderView.vue";
import ProfileView from "@/views/ProfileView/ProfileView.vue";

import { appRoutes } from "./appRoutes";

export const routes = [
  {
    path: appRoutes.home().path,
    component: HomeView,
    name: 'clients'
  },
  {
    path: appRoutes.menu().path,
    component: MenuView,
    name: 'menu'
  },
  {
    path: appRoutes.order().path,
    component: OrderView,
    name: 'order'
  },
  {
    path: appRoutes.profile().path,
    component: ProfileView,
    name: 'profile'
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: appRoutes.home(),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router