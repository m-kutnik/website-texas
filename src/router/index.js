import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import HelloWorld from './views/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Strona Główna',
      component: Home,
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
})
