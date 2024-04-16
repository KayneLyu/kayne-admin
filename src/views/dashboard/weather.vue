<template>
  <el-card style="min-width: 200px">
    <div>
      <p class="font-bold mb-2">{{ weatherInfo?.city }}</p>
      <div class="flex flex-nowrap">
        <div class="mr-3">
          <ThunderStormIcon />
        </div>
        <div>
          <p>
            <strong>{{ weatherInfo?.weather }}</strong>
          </p>
          <p>
            <strong>{{ weatherInfo?.temperature_float }}</strong> ℃
          </p>
        </div>
      </div>
      <p>
        空气湿度：<strong>{{ weatherInfo?.humidity_float }}</strong>
      </p>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getWeatherInfo, getSentence, IWeatherInfo } from "@/api/dashboard";
import PartlyCloudyIcon from "@/assets/svg/partly_cloudy.svg?component";
import SunnyIcon from "@/assets/svg/sunny.svg?component";
import CloudyIcon from "@/assets/svg/cloudy.svg?component";
import RainIcon from "@/assets/svg/rain.svg?component";
import ThunderStormIcon from "@/assets/svg/thunder_storm.svg?component";
const weatherInfo = ref<IWeatherInfo>();
const weatherHandler = async () => {
  try {
    const result = await getWeatherInfo();
    const sentence = await getSentence();
    weatherInfo.value = result.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  weatherHandler();
});
</script>

<style lang="scss" scoped></style>
