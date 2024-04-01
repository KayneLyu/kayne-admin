<script setup lang="tsx">
import { ref, reactive, h } from "vue";
import { addDialog, closeDialog } from "@/components/ReDialog";
import Form from "./form.vue";

const formNode = ref<{
  submitForm: () => void;
  loading: boolean;
} | null>(null);

const confirm = async () => {
  formNode.value.submitForm();
};
const addPurchase = () => {
  addDialog({
    title: "新增供应商",
    closeOnClickModal: false,
    contentRenderer: () => <Form ref={formNode} />,
    // hideFooter: true
    footerRenderer: ({ options, index }) => (
      <div>
        <el-button onClick={() => closeDialog(options, index)}>取消</el-button>
        <el-button loading={formNode.value?.loading} onClick={() => confirm()}>
          提交
        </el-button>
      </div>
    )
    // footerButtons: [
    //   {
    //     label: "取消",
    //     size: "default",
    //     type: "info",
    //     btnClick: ({ dialog: { options, index }, button }) => {
    //       closeDialog(options, index);
    //     }
    //   },
    //   {
    //     label: "确定",
    //     size: "default",
    //     type: "success",
    //     loading: false,
    //     btnClick: ({ dialog: { options, index }, button }) => {
    //       const result = formNode.value.submitForm();
    //       console.log(formNode.value?.loading);
    //     }
    //   }
    // ]
    // 暂停关闭关闭
    // beforeSure(done, { options, index }) {
    //   const result = formNode.value.submitForm();
    //   if (!result) {
    //     return;
    //   }
    //   done();
    // }
  });
};
</script>

<template>
  <div class="mb-5">
    <el-button class="" @click="addPurchase" type="primary"
      >+ 新增供应商</el-button
    >
  </div>
</template>

<style lang="scss" scoped></style>
