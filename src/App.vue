<template>
  <div id="app">
    <app-header/>
    <app-navigation/>
    <app-content/>
    <app-footer/>
  </div>
</template>

<script>
import AOS from "aos"
import WebFont from "webfontloader"
import "@/assets/scss/normalize.scss"

const AppNavigation = () => import("@/components/AppNavigation")
const AppContent = () => import("@/components/AppContent")
const AppHeader = () => import("@/components/AppHeader")
const AppFooter = () => import("@/components/AppFooter")

export default {
  name: "App",
  components: {
    AppNavigation,
    AppContent,
    AppHeader,
    AppFooter,
  },
  created() {
    AOS.init({
      offset: 120,
      duration: 400,
      easing: "ease-in-out",
      once: true,
    })
    WebFont.load({
      google: {
        families: ["Bitter:latin-ext", "Roboto:latin-ext"],
      },
    })
  },
}
</script>

<style lang="scss">
@import "/assets/scss/mixins.scss";

html {
  background: #292c30;
  color: rgba(255, 255, 255, 0.8);
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Bitter", serif;
}
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: block;

  @include for-desktop-up {
    display: grid;
    grid-template:
      "head content"
      "nav  content"
      "foot content";
    grid-template-columns: 350px 1fr;
    grid-template-rows: auto auto 1fr;
    height: 100vh;
  }
}

// AOS
[data-aos][data-aos][data-aos-duration="400"],
body[data-aos-duration="400"] [data-aos] {
  transition-duration: 400ms;
}
[data-aos][data-aos][data-aos-easing="ease-in-out"],
body[data-aos-easing="ease-in-out"] [data-aos] {
  transition-timing-function: ease-in-out;
}
[data-aos^="fade"][data-aos^="fade"] {
  opacity: 0;
  transition-property: opacity, transform;
  will-change: opacity, transform;
}

[data-aos^="fade"][data-aos^="fade"].aos-animate {
  opacity: 1;
  transform: translate(0);
}

[data-aos="fade-up"] {
  transform: translateY(50px);
}
</style>
