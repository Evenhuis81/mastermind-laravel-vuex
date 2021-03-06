// dit bestand wordt niet gebruikt, verwijder hem daarom, anders is het verwarrend: waar is bijv. het Home component?

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    }
    // ongebruikte commentaren verwijderen
    //   {
    // path: '/projects',
    // name: 'projects',
    // component: Projects
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    //   },
    //   {
    // path: '/team',
    // name: 'team',
    // component: Team
    //   }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
