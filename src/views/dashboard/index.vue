<template>
  <div class="flex gap-4 flex-wrap">
    <WeatherComponent />
    <WelcomeComponent />
    <QuickStart />
  </div>
  <UpdatesComponent />
</template>

<script setup lang="ts">
import WelcomeComponent from "./welcome.vue";
import WeatherComponent from "./weather.vue";
import QuickStart from "./quick-start.vue";
import UpdatesComponent from "./updates.vue";
defineOptions({
  name: "Dashboard"
});
</script>

<style lang="scss" scoped></style>
