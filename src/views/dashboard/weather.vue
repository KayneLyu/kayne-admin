<template>
  <el-card style="min-width: 200px">
    <div>
      <p class="font-bold mb-2">
        {{ weatherInfo?.city }}
        <span class="ml-5 text-violet-500">{{ getDays() }}</span>
      </p>
      <div class="flex flex-nowrap">
        <div class="mr-3">
          <component :is="weatherIcon"></component>
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

<script setup lang="tsx">
import { ref, onMounted, markRaw, shallowRef, defineAsyncComponent } from "vue";
import { getWeatherInfo, IWeatherInfo } from "@/api/dashboard";
import dayjs from "dayjs";

const weatherInfo = ref<IWeatherInfo>();
const weatherIcon = shallowRef(null);

const getDays = () => {
  const date = dayjs().format("YYYY.MM.DD");
  const day = dayjs().day();
  const weeks = ["日", "一", "二", "三", "四", "五", "六"];
  return `${date} 星期${weeks[day]}`;
};

const weatherHandler = async () => {
  try {
    const result = await getWeatherInfo();
    weatherInfo.value = result.data;
    getWeatherIcon(result.data.weather);
  } catch (error) {
    console.log(error);
  }
};

const weatherIconMap = {
  wind: [
    "有风",
    "平静",
    "微风",
    "和风",
    "清风",
    "强风/劲风",
    "疾风",
    "大风",
    "烈风",
    "风暴",
    "狂爆风",
    "飓风",
    "热带风暴",
    "龙卷风"
  ],
  partly_cloudy: ["少云", "晴间多云", "多云"],
  snow: [
    "雪",
    "阵雪",
    "小雪",
    "中雪",
    "大雪",
    "暴雪",
    "小雪-中雪",
    "中雪-大雪",
    "大雪-暴雪",
    "冷"
  ],
  fog: [
    "浮尘",
    "扬沙",
    "沙尘暴",
    "强沙尘暴",
    "雾",
    "浓雾",
    "强浓雾",
    "轻雾",
    "大雾",
    "特强浓雾"
  ],
  sunny: ["晴", "热"],
  sleet: ["雨雪天气", "雨夹雪", "阵雨夹雪"],
  rain: [
    "阵雨",
    "雷阵雨",
    "雷阵雨并伴有冰雹",
    "小雨",
    "中雨",
    "大雨",
    "暴雨",
    "大暴雨",
    "特大暴雨",
    "强阵雨",
    "强雷阵雨",
    "极端降雨",
    "毛毛雨/细雨",
    "雨",
    "小雨-中雨",
    "中雨-大雨",
    "大雨-暴雨",
    "暴雨-大暴雨",
    "大暴雨-特大暴雨",
    "冻雨"
  ],
  cloudy: ["阴", "霾", "中度霾", "重度霾", "严重霾", "未知"]
};

const getWeatherIcon = async (weather: string) => {
  for (const weatherKey in weatherIconMap) {
    if (Object.hasOwnProperty.call(weatherIconMap, weatherKey)) {
      const weatherNames = weatherIconMap[weatherKey];
      const findWeatherItem = weatherNames.find(name => weather === name);
      // 如果找了某一类的图标了，那重新赋值icon
      if (findWeatherItem) {
        weatherIcon.value = defineAsyncComponent(
          () => import(`../../assets/svg/weather/${weatherKey}.svg?component`)
        );
      }
    }
  }
};

onMounted(() => {
  weatherHandler();
});
</script>

<style lang="scss" scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
