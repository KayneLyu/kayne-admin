import { reactive } from "vue";
import type { FormRules } from "element-plus";

/** 密码正则（密码格式应为8-18位数字、字母、符号的任意两种组合） */
export const REGEXP_PWD =
  /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){8,18}$/;

/** 密码校验 */
const password = [
  {
    validator: (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!REGEXP_PWD.test(value)) {
        callback(
          new Error("密码格式应为8-18位数字、字母、符号的任意两种组合")
        );
      } else {
        callback();
      }
    },
    trigger: "blur"
  }
]

const mobilePhoneRegex: RegExp = /^1[3-9]\d{9}$/;
const phone = [
  {
    validator: (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (!mobilePhoneRegex.test(value)) {
        callback(
          new Error("请输入正确的手机号!")
        );
      } else {
        callback();
      }
    },
    trigger: "blur"
  }
]

const stringInput = [
  {
    validator: (rule, value, callback) => {
      if (value === "") {
        callback(new Error("此项不能为空！"));
      } else {
        callback();
      }
    },
    trigger: "blur"
  }
]

const numberRegex: RegExp = /^-?\d*\.?\d+$/;
const numberInput = [
  {
    validator: (rule, value, callback) => {
      if (value === "") {
        callback(new Error("此项不能为空！"));
      } else if (!numberRegex.test(value)) {
        callback(
          new Error("请输入有效数字")
        );
      } else {
        callback();
      }
    },
    trigger: "blur"
  }
]
export {
  password,
  phone,
  stringInput,
  numberInput
};
