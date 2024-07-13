export default {
  path: "/device",
  // redirect: "/process/index",
  meta: {
    icon: "ep:memo",
    title: "产品配置",
    rank: 5,
  },
  component: () => import("@/views/configuration/index.vue"),
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
