import Vue from "vue";
// @ts-ignore
import BlogDetails from "../pages/BlogDetails.vue"
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../pages/Home.vue";
// @ts-ignore
import Profile from "../pages/Profile.vue";
import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: "/blogs/:id",
    name: "blogdetails",
    component: BlogDetails
  }
];

const router = new VueRouter({
  routes,
});

export default router;
