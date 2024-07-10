<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="custom-background h-screen">
    <div class="color-background"></div>
    <div class="image-background"></div>
  </div>
</template>

<style scoped>
.background-container {
  position: relative;
}

.color-background, .image-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.color-background {
  background: linear-gradient(to bottom, hsl(229, 57%, 11%) 100%, transparent 50%);
  z-index: 1;
}

.image-background {
  background-image: url('src/assets/images/bg-mobile.png');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 2;
}

@media (min-width: 1024px) {
  .image-background {
    background-image: url('src/assets/images/bg-desktop.png');
    background-position: center calc(100% + 80px);
    background-size: contain;
  }
}
</style>
