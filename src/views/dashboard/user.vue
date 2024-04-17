<template>
  <el-card style="width: 40vw">
    <p class="text-xl font-bold mt-2">
      {{ welcome?.greeting + username + " ，" + welcome?.encouragement }}
    </p>
    <p v-if="poetry" class="mt-8 text-base italic">
      诗词鉴赏：
      <span class="font-bold">{{ poetry?.sentence }}</span>
      {{ " — " + poetry?.author }}
    </p>
  </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getSentence } from "@/api/dashboard";
import { useNav } from "@/layout/hooks/useNav";

const { username } = useNav();

function getGreetingAndEncouragement() {
  const date = new Date();
  const currentHour = date.getHours();
  let greeting = "";
  let encouragement = "";
  if (currentHour >= 5 && currentHour < 9) {
    greeting = "早上好~ ";
    encouragement = "打起精神，迎接新的一天！";
  } else if (currentHour >= 9 && currentHour < 12) {
    greeting = "上午好~ ";
    encouragement = "请合理安排工作哦！";
  } else if (currentHour >= 12 && currentHour < 14) {
    greeting = "中午好~ ";
    encouragement = "吃好午饭，睡个午觉。";
  } else if (currentHour >= 14 && currentHour < 18) {
    greeting = "下午好~ ";
    encouragement = "你一定有点累了，喝杯咖啡提提神。";
  } else {
    greeting = "晚上好~ ";
    encouragement = "放松一下，明天继续加油！";
  }
  return { greeting, encouragement };
}

const poetry = ref(null);
const welcome = ref({
  greeting: "",
  encouragement: ""
});

const weatherHandler = async () => {
  try {
    const sentence = await getSentence();
    poetry.value = sentence.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  // weatherHandler();
  const { greeting, encouragement } = getGreetingAndEncouragement();
  welcome.value = {
    greeting,
    encouragement
  };
});
</script>

<style lang="scss" scoped></style>
