<template>
  <header>
    <img src="@/assets/logo.png">
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';

header {
  text-align: center;

  padding: 50px;
}

@include for-desktop-up {
  header {
    grid-area: head;
  }
}
@include desktop-down {
  header {
    display: none;
    opacity: 0;
  }
}
</style>

