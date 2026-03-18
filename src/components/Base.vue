<script setup lang="ts">
import { baseHeight, currentBase } from "../stores/beverage";
</script>

<template>
  <div
    class="base"
    :style="{
      backgroundColor: currentBase.color,
      height: baseHeight + '%'
    }"
  ></div>
</template>

<style scoped>
.base {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>