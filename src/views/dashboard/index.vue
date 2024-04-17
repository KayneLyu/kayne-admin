<template>
  <div>
    <div class="flex flex-wrap gap-3">
      <WeatherComponent />
      <WelcomeComponent />
      <QuickStart />
    </div> 
    <Updates />
  </div>
</template>

<script setup lang="ts">
import WelcomeComponent from "./user.vue";
import WeatherComponent from "./weather.vue";
import QuickStart from "./quick-start.vue";
import Updates from "./updates.vue";

// defineOptions({
//   name: "Welcome"
// });
</script>

<style lang="scss" scoped></style>
