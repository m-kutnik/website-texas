<template>
  <footer>
    <span>Footer</span>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';

@include for-desktop-up {
  footer {
    grid-area: foot;
  }
}
</style>
