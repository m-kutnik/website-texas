<template>
  <section>
    <transition name="fade">
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
  background: #313539;
}

@include for-desktop-up {
  section {
    grid-area: content;
    position: relative;
    overflow: auto;
  }
}

@include desktop-down {
  section {
    margin-top: 60px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  will-change: opacity;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
