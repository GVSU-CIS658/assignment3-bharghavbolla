<script setup lang="ts">
import {
  baseHeight,
  syrupHeight,
  currentSyrup
} from "../stores/beverage";
</script>

<template>
  <div
    v-if="syrupHeight > 0"
    class="syrup"
    :style="{
      backgroundColor: currentSyrup.color,
      height: syrupHeight + '%',
      bottom: baseHeight + '%'
    }"
  ></div>
</template>

<style scoped>
.syrup {
  position: absolute;
  width: 100%;

   background-image: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.35) 0px,
    rgba(255, 255, 255, 0.35) 12px,
    transparent 12px,
    transparent 24px
  );
}
</style>