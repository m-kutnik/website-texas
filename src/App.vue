<template>
  <div id="app">
    <app-header/>
    <app-navigation/>
    <router-view/>
  </div>
</template>

<script>
import '@/assets/scss/normalize.scss'

const AppHeader = () => import('@/components/AppHeader')
const AppNavigation = () => import('@/components/AppNavigation')

export default {
  name: 'App',
  components: {
    AppHeader,
    AppNavigation,
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
