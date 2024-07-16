<script setup>
import { ref, onMounted } from 'vue';

const slider = ref(null);

function updateSliderStyle(event) {
  const target = event.target;
  const value = target.value;
  const min = target.min || 0;
  const max = target.max || 100;
  const percentage = ((value - min) / (max - min)) * 100;
  
  target.style.background = `linear-gradient(to right, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) ${percentage}%, hsl(229, 57%, 11%) ${percentage}%)`;
}

onMounted(() => {
  const event = new Event('input');
  slider.value.dispatchEvent(event);
});
</script>

<template>
  <div class="relative flex justify-center mt-52">
    <div class="absolute flex flex-col items-center w-10/12 lg:h-36 lg:mt-[22px] max-w-[340px] lg:max-w-[600px] lg:mr-[40px] xl:mr-[180px] 2xl:mr-[340px] bg-dark-blue text-pale-blue p-7 rounded-lg lg:items-start">
      <p class="text-sm font-light">
        You've used
        <span class="font-bold">
          8<span class="number-down">1</span><span class="number-down-more">5</span> GB
        </span>
        of your storage
      </p>
      <input
        ref="slider"
        class="range-slider custom-slider" 
        type="range"
        @input="updateSliderStyle"
        min="0"
        max="1000"
        value="815"
      >
      <div class="mt-2 mb-8 w-full flex justify-between font-bold">
        <span class="text-xs number-down">0
          <span class="text-sm"> GB</span>
        </span>
        <span class="text-xs number-down">1000
          <span class="text-sm"> GB</span>
        </span>
      </div>
      <div class="absolute triangle top-32 w-3/5 p-5 bg-white font-bold rounded-lg lg:w-52 lg:p-4 lg:-top-12 lg:right-8">
        <div class="flex items-center justify-center">
          <span class="text-black text-4xl">1</span>
          <span class="text-black text-4xl number-up">8</span>
          <span class="text-black text-4xl">5</span>
          <span class="text-grayish-blue text-sm ml-2">GB LEFT</span>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
.number-down {
  position: relative;
  bottom: -1px;
}

.number-down-more {
  position: relative;
  bottom: -2px;
}

.number-up {
  position: relative;
  bottom: 2px;
}

.range-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 14px;
  margin-top: 16px;
  background: hsl(229, 57%, 11%);
  border: 3px solid hsl(229, 57%, 11%);
  border-radius: 20px;
}

.range-slider:hover {
  opacity: 1;
  cursor: pointer;
}

.range-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 100%;
  opacity: 1;
}

.range-slider::-moz-range-thumb {
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 100%;
}

.range-slider::-ms-thumb {
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 100%;
}

.custom-slider::-webkit-slider-runnable-track {
  border-radius: 20px;
}

.triangle::after {
  content: '';
  position: absolute;
  bottom: -20px;
  right: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid white;
  border-top: 20px solid white;
  border-bottom: 20px solid transparent;
  display: none;
}

@media (min-width: 1024px) {
  .triangle::after {
    display: block;
  }
}
</style>