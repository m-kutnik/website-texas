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
