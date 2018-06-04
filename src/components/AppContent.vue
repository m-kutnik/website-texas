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
