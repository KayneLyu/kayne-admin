<template>
  <div>
    <p>{{ weatherInfo }}</p>
    <button @click="weatherHandler">获取天气</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getWeatherInfo } from "@/api/dashboard";

const weatherInfo = ref();
const weatherHandler = async () => {
  try {
    const data = await getWeatherInfo();
    weatherInfo.value = data.lives[0];
  } catch (error) {}
};
</script>

<style lang="scss" scoped></style>
