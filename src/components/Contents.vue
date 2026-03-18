<template>
  <div class="carafe">
    <slot name="bottom"></slot>
    <slot name="mid"></slot>
    <slot name="top"></slot>
  </div>
</template>

<style scoped>
.carafe {
  position: relative;
  overflow: hidden;
  border-radius: 0.05em 0.05em 2.2em 2.2em;
  background: #fff;
  width: 100%;
  height: 100%;
}
</style>