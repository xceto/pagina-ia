import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Soluciones from "../views/Soluciones.vue";
import Nosotros from "../views/Nosotros.vue";
import Contacto from "../views/Contacto.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/nosotros",
    name: "Nosotros",
    component: Nosotros,
  },
  {
    path: "/soluciones",
    name: "Soluciones",
    component: Soluciones,
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto
  }
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes,
});

export default router;
