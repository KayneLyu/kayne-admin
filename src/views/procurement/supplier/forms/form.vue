<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { phone, stringInput, numberInput } from "@/utils/formRules";

const ruleFormRef = ref<FormInstance>();
const loading = ref(false);
const ruleForm = reactive({
  name: "",
  product: "",
  price: "",
  concat: "",
  address: "",
  duration: ""
});

const rules = reactive<FormRules<typeof ruleForm>>({
  name: stringInput,
  product: stringInput,
  price: numberInput,
  concat: phone,
  address: stringInput,
  duration: numberInput
});

const submitForm = () => {
  if (!ruleFormRef.value) return;
  ruleFormRef.value.validate(valid => {
    if (valid) {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 2000);
    } else {
      return false;
    }
  });
};

// const resetForm = () => {
//   if (!formEl) return;
//   formEl.resetFields();
// };

defineExpose({
  submitForm,
  loading
});
</script>

<template>
  <el-form
    ref="ruleFormRef"
    style="max-width: 90%"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
  >
    <el-form-item label="供应商:" prop="name">
      <el-input v-model="ruleForm.name" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item label="产品类型:" prop="product">
      <el-input v-model="ruleForm.product" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item label="产品单价:" prop="price">
      <el-input v-model.number="ruleForm.price" />
    </el-form-item>
    <el-form-item label="交货周期:" prop="duration">
      <el-input v-model.number="ruleForm.duration" />
    </el-form-item>
    <el-form-item label="联系方式:" prop="concat">
      <el-input v-model.number="ruleForm.concat" />
    </el-form-item>
    <el-form-item label="联系地址:" prop="address">
      <el-input v-model.number="ruleForm.address" />
    </el-form-item>
  </el-form>

  <!-- <el-form-item class="mt-10">
    <el-button class="ml-auto" @click="resetForm(ruleFormRef)">重置</el-button>
    <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
  </el-form-item> -->
</template>
