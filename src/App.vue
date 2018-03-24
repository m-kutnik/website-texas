<template>
  <div id="app">
    <app-header/>
    <app-navigation/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import '@/assets/scss/normalize.scss'

const AppNavigation = () => import('@/components/AppNavigation')
const AppHeader = () => import('@/components/AppHeader')
const AppFooter = () => import('@/components/AppFooter')

export default {
  name: 'App',
  components: {
    AppNavigation,
    AppHeader,
    AppFooter,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
