<template>
  <el-card class="mt-3">
    <div class="flex justify-between">
      <span class="text-md font-medium">最新动态</span>
    </div>
    <el-scrollbar max-height="504" class="mt-3">
      <el-timeline>
        <el-timeline-item
          class="ml-1"
          v-for="(item, index) in latestNewsData"
          :key="index"
          center
          placement="top"
          :icon="
            markRaw(
              useRenderFlicker({
                background: randomGradient({
                  randomizeHue: true
                })
              })
            )
          "
          :timestamp="item.date"
        >
          <p class="text-text_color_regular text-sm">
            {{
              `新增 ${item.requiredNumber} 条问题，${item.resolveNumber} 条已解决`
            }}
          </p>
        </el-timeline-item>
      </el-timeline>
    </el-scrollbar>
  </el-card>
</template>

<script lang="ts" setup>
import { ref, markRaw } from "vue";
import { useRenderFlicker } from "@/components/ReFlicker";
import { cloneDeep, randomGradient } from "@pureadmin/utils";
import dayjs from "dayjs";

const days = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

function getRandomIntBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/** 数据统计 */
const tableData = Array.from({ length: 30 }).map((_, index) => {
  return {
    id: index + 1,
    requiredNumber: getRandomIntBetween(13500, 19999),
    questionNumber: getRandomIntBetween(12600, 16999),
    resolveNumber: getRandomIntBetween(13500, 17999),
    satisfaction: getRandomIntBetween(95, 100),
    date: dayjs().subtract(index, "day").format("YYYY-MM-DD")
  };
});

/** 最新动态 */
const latestNewsData = cloneDeep(tableData)
  .slice(0, 14)
  .map((item, index) => {
    return Object.assign(item, {
      date: `${dayjs().subtract(index, "day").format("YYYY-MM-DD")} ${
        days[dayjs().subtract(index, "day").day()]
      }`
    });
  });
</script>

<style lang="scss" scoped></style>
