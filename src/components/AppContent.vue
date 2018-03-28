<template>
  <section>
    <router-view/>
  </section>
</template>

<script>
export default {
  name: 'AppContent',
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';

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
</style>

