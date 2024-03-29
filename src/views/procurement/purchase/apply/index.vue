<script setup lang="ts">
import { ref, h } from "vue";
import Forms from "./form.vue";
import {
  addDialog,
  closeDialog,
  updateDialog,
  closeAllDialog
} from "@/components/ReDialog";

type IApplyItem = {
  id: number;
  name: string;
  number: number;
  type: string;
  useful: string;
  person: string;
};

const dataList = ref<Array<IApplyItem>>([]);
// 新增采购项
function onAdd() {
  dataList.value.push({
    id: dataList.value.length + 1,
    name: "",
    number: 1,
    type: "",
    useful: "",
    person: ""
  });
}

// 删除采购项
function onDel(row) {
  const index = dataList.value.indexOf(row);
  if (index !== -1) dataList.value.splice(index, 1);
}

// 重置申请单
function resetApply() {
  dataList.value = [];
}

const addPurchase = () => {
  addDialog({
    title: "新增采购申请单",
    closeOnClickModal: false,
    contentRenderer: () => Forms,
    props: {
      dataList,
      onDel,
      onAdd
    },
    // closeCallBack: ({ options, args }) => {
    //   console.log(args);

    //   if (args?.command === "cancel") {
    //     // 您点击了取消按钮
    //     resetApply();
    //   } else if (args?.command === "sure") {
    //     console.log(`您点击了确定按钮，当前表单数据为 `, dataList.value);
    //     resetApply();
    //   } else {
    //     console.log(
    //       `您点击了右上角关闭按钮或空白页或按下了esc键，当前表单数据为 ${dataList.value}`
    //     );
    //   }
    // },
    // 暂停关闭关闭
    // beforeSure(done, { options, index }) {
    //   done()
    // },

    footerButtons: [
      {
        label: "取消",
        size: "default",
        type: "info",
        btnClick: ({ dialog: { options, index }, button }) => {
          closeDialog(options, index);
        }
      },
      {
        label: "确定",
        size: "default",
        type: "success",
        loading: true,
        btnClick: ({ dialog: { options, index }, button }) => {
          console.log(options, index, button);
          // closeDialog(options, index);
        }
      }
    ]
  });
};
</script>

<template>
  <div class="mb-5">
    <el-button @click="addPurchase" type="primary">+ 采购申请</el-button>
  </div>
</template>
