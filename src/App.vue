<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="h-screen">
    <div class="color-background absolute top-0 left-0 w-full h-full z-1"></div>
    <div class="image-background absolute top-0 left-0 w-full h-full bg-[url('src/assets/images/bg-mobile.png')] lg:bg-[url('src/assets/images/bg-desktop.png')] bg-cover lg:bg-contain bg-no-repeat z-2"></div>
  </div> 
</template>

<style scoped>
.color-background {
  background: linear-gradient(to bottom, hsl(229, 57%, 11%) 100%, transparent 50%);
}

@media (min-width: 1024px) {
  .image-background {
    background-position: center calc(100% + 80px);
  }
}
</style>
