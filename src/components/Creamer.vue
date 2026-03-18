<script setup lang="ts">
import {
  baseHeight,
  syrupHeight,
  creamHeight,
  currentCreamer
} from "../stores/beverage";
</script>

<template>
  <div
    v-if="creamHeight > 0"
    class="froth"
    :style="{
      backgroundColor: currentCreamer.color,
      height: creamHeight + '%',
      bottom: (baseHeight + syrupHeight) + '%'
    }"
  >
    <div v-for="n in 5" :key="n" class="foam"></div>
  </div>
</template>

<style scoped>
.froth {
  position: absolute;
  width: 100%;
}
</style>