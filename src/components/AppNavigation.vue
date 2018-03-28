<template>
  <nav
    :class="{ active: sidebar }"
    role="navigation">
    <ul>
      <router-link
        v-for="route in routes"
        :key="route.name"
        :to="route.path"
        tag="li"
        @click.native="toggleMenu()">
        <a>{{ route.name }}</a>
      </router-link>
    </ul>
    <div
      v-hammer:pan="onSwipe"
      class="drag">
      <div
        :class="{ 'hamburger--active': sidebar }"
        class="hamburger"
        title="Show / Hide menu"
        @click="toggleMenu()">
        <div class="hamburger__inner" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      sidebar: false,
      Y: 60,
    }
  },
  computed: {
    routes() {
      return this.$router.options.routes
    },
  },
  methods: {
    onSwipe(event) {
      if (event.deltaY > 50) this.sidebar = true
      if (event.deltaY < -50) this.sidebar = false
    },
    toggleMenu() {
      this.sidebar = !this.sidebar
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
@include desktop-down {
  nav {
    padding: 25px 0 70px;
    width:100%;
    position: fixed;
    background: #292c30;
    top: 0;
    transform: translateY(calc(-100% + 60px));
    transition-duration: 0.3s;
    z-index: 50;

    &.active {
      transform: translateY(0);
    }

    .router-link-exact-active a {
      border-right: none;
      border-bottom: 2px solid #ab8b65;
    }

    .drag {
      position: absolute;
      bottom: 0;
      height: 60px;
      width: 100%;
    }

    $hamburger__height: 30px;
    $hamburger__width: 40px;
    $hamburger__layer__height: 6px;
    $hamburger__colour: #FFF;

    .hamburger {
      display: block;
      position: absolute;
      width: $hamburger__width + 10;
      height: $hamburger__height + 20;
      z-index: 2;
      top: 13px;
      right: 5px;
      cursor: pointer;
    }

    .hamburger__inner {

      display: block;
      border-radius: 10px;
      width: $hamburger__width;
      height: $hamburger__layer__height;
      margin-top: $hamburger__layer__height * 2;
      background: $hamburger__colour;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;

      &::before, &::after {
        display: block;
        position: absolute;
        border-radius: 10px;
        content: "";
        z-index: -1;
        width: $hamburger__width;
        height: $hamburger__layer__height;
        background: $hamburger__colour;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }
      &::before {
        top: 0;
      }
      &::after {
        top: $hamburger__layer__height * 4;
      }
    }

    .hamburger--active {
      .hamburger__inner {
        background: none;

        &::before, &::after {
          top: $hamburger__layer__height * 2;
        }
        &::before {
          -webkit-transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
        &::after {
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }
    }
  }
}
</style>

