<template>
  <div class="container">
    
  </div>
</template>

<!-- Settings -->
<script>
</script>

<!-- Media Queries -->
<style lang="scss" scoped>
@import '~/assets/sass/controls.scss';

// Small
@include respond-to(S) {}

// Medium
@include respond-to(M) {}

// Large
@include respond-to(L) {}

// xLarge
@include respond-to(xL) {

  .container {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 50% 50%;
  }

}

// Hover Option
@include respond-to(H) {}

</style>