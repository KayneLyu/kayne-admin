<template>
  <el-card>
    <p>{{ username + "，" + welcome.greeting }}</p>
    <button @click="weatherHandler">获取天气</button>
  </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getWeatherInfo } from "@/api/dashboard";
import { useNav } from "@/layout/hooks/useNav";

const { username } = useNav();

function getGreetingAndEncouragement(currentTime: string) {
  const date = new Date(currentTime);
  const currentHour = date.getHours();

  let greeting = "";
  let encouragement = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "早上好";
    encouragement = "努力工作，迎接新的一天！";
  } else if (currentHour >= 12 && currentHour < 14) {
    greeting = "中午好";
    encouragement = "吃好午饭，继续保持！";
  } else if (currentHour >= 14 && currentHour < 18) {
    greeting = "下午好";
    encouragement = "保持专注，工作效率更高！";
  } else {
    greeting = "晚上好";
    encouragement = "放松一下，明天继续加油！";
  }

  return { greeting, encouragement };
}

const welcome = ref({
  greeting: "",
  encouragement: ""
});
const weatherInfo = ref();
const weatherHandler = async () => {
  try {
    // const result = await getWeatherInfo();
    // weatherInfo.value = result.data;
    // const { reporttime } = result.data;

    const reporttime = '2024-04-15 16:30:23'
    const { greeting, encouragement } = getGreetingAndEncouragement(reporttime);
    welcome.value = {
      greeting,
      encouragement
    };
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  weatherHandler();
});
</script>

<style lang="scss" scoped></style>
