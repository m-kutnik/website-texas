<template>
  <section>
    <transition name="fade2">
      <router-view/>
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppContent",
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";

section {
  background: #fff;
  color: #000;
}

@include for-desktop-up {
  section {
    grid-area: content;
    position: relative;
    overflow: auto;
    box-shadow: inset 22px 0px 18px -22px rgba(0, 0, 0, 0.75);
  }
}

@include desktop-down {
  section {
    margin-top: 60px;
  }
}

.fade2-enter-active,
.fade2-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
  will-change: opacity;
}

.fade2-enter-active {
  transition-delay: 0.25s;
  will-change: opacity;
}

.fade2-enter,
.fade2-leave-active {
  opacity: 0;
}
</style>
