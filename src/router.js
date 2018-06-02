import Vue from "vue"
import Router from "vue-router"
const Home = () => import("@/views/Home")
const About = () => import("@/views/About")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Strona Główna",
      component: Home,
    },
    {
      path: "/o-nas",
      name: "O Nas",
      component: About,
    },
  ],
})
