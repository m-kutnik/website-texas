import Vue from "vue"
import Router from "vue-router"
const Home = () => import("@/views/Home")
const About = () => import("@/views/About")
const Gallery = () => import("@/views/Gallery")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Strona Główna",
      component: Home,
    },
    {
      path: "/galeria",
      name: "Galeria",
      component: Gallery,
    },
    {
      path: "/o-nas",
      name: "O Nas",
      component: About,
    },
  ],
})
