<template>
  <nav>
    <ul>
      <router-link
        v-for="route in routes"
        :key="route.name"
        :to="route.path"
        tag="li">
        <a>{{ route.name }}</a>
      </router-link>
    </ul>
    <div class="overlay" />
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation',
  computed: {
    routes() {
      return this.$router.options.routes
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';

nav a {
  color: rgba(255,255,255,0.8);
}
ul, li, li a {
    list-style: none;
    display: block;
    margin: 0;
    padding: 0;
    text-decoration: none;
}
li a {
  text-align: center;
  padding: 0 55px;
  min-height: 54px;
  line-height: 51px;
  display: block;
  font-size: 21px;
  box-sizing: border-box;
  border-bottom: 1px solid #393e42;
  font-family: 'Bitter', serif;
  letter-spacing: 2px;
  transition: color 0.5s;
}
.router-link-exact-active a {
  border-right: 5px solid #ab8b65;
  color: #ab8b65;
}
li a:hover {
  color: #ab8b65;
}
@include for-desktop-up {
  nav {
    grid-area: nav;
  }
}
</style>

