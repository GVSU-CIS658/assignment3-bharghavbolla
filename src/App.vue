<template>
  <div>
    <Beverage :isIced="currentTemp === 'Cold'" />

    <ul>
      <!-- Temperature -->
      <li>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>

      <!-- Base -->
      <li>
        <template v-for="b in bases" :key="b.id">
          <label>
            <input
              type="radio"
              name="base"
              :value="b"
              v-model="currentBase"
            />
            {{ b.name }}
          </label>
        </template>
      </li>

      <!-- Creamer -->
      <li>
        <template v-for="c in creamers" :key="c.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :value="c"
              v-model="currentCreamer"
            />
            {{ c.name }}
          </label>
        </template>
      </li>

      <!-- Syrup -->
      <li>
        <template v-for="s in syrups" :key="s.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :value="s"
              v-model="currentSyrup"
            />
            {{ s.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import {
  temps,
  bases,
  creamers,
  syrups,
  currentTemp,
  currentBase,
  currentCreamer,
  currentSyrup
} from "./stores/beverage";
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}

ul {
  list-style: none;
  margin-top: 1.5rem;
}

li {
  margin: 0.6rem 0;
}

label {
  margin-right: 1rem;
  color: white;
}
</style>