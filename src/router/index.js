import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import ChordsIndex from "../views/ChordsIndex.vue";
import ChordsShow from "../views/ChordsShow.vue";
import UserChordsIndex from "../views/UserChordsIndex.vue";
// import UserChordsNew from "../views/UserChordsNew.vue";
import UserChordsShow from "../views/UserChordsShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/chords", name: "chords-index", component: ChordsIndex },
  { path: "/chords/:id", name: "chords-show", component: ChordsShow },
  { path: "/user_chords", name: "userchords-index", component: UserChordsIndex },
  // { path: "/user_chords/new", name: "userchords-new", component: UserChordsNew },
  { path: "/user_chords/:id", name: "userchords-show", component: UserChordsShow },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
