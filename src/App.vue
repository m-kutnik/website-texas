<template>
  <div id="app">
    <app-header />
    <app-navigation/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import AOS from 'aos'
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
  created() {
    AOS.init({
      offset: 120,
      duration: 400,
      easing: 'ease-in-out',
      once: true,
    })
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

// AOS
[data-aos][data-aos][data-aos-duration="400"],body[data-aos-duration="400"] [data-aos] {
    transition-duration: 400ms
}
[data-aos][data-aos][data-aos-easing=ease-in-out],body[data-aos-easing=ease-in-out] [data-aos] {
    transition-timing-function: ease-in-out
}
[data-aos^=fade][data-aos^=fade] {
    opacity: 0;
    transition-property: opacity,transform;
    will-change: opacity,transform;
}

[data-aos^=fade][data-aos^=fade].aos-animate {
    opacity: 1;
    transform: translate(0)
}

[data-aos=fade-up] {
    transform: translateY(50px)
}
</style>
