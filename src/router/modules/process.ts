export default {
  path: "/process",
  // redirect: "/process/index",
  meta: {
    icon: "ep:finished",
    title: "生产进度",
    rank: 1,
  },
  component: () => import("@/views/process/index.vue"),
  // children: [
  //   {
  //     path: "/error/403",
  //     name: "403",
  //     component: () => import("@/views/error/403.vue"),
  //     meta: {
  //       title: "当前订单"
  //     }
  //   },
  //   {
  //     path: "/error/404",
  //     name: "404",
  //     component: () => import("@/views/error/404.vue"),
  //     meta: {
  //       title: "历史订单"
  //     }
  //   },
  // ]
} satisfies RouteConfigsTable;
