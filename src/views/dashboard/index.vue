<template>
  <div >
    <WeatherComponent />

  </div>
</template>

<script setup lang="ts">
import WeatherComponent from "./weather.vue";
defineOptions({
  name: "Dashboard"
});
</script>

<style lang="scss" scoped></style>
