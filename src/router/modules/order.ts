export default {
  path: "/order",
  redirect: "/order/current/index",
  meta: {
    icon: "ep:shopping-bag",
    title: "订单管理",
    rank: 2
  },
  children: [
    {
      path: "/order/current/index",
      name: "currentOrder",
      component: () => import("@/views/order/current/index.vue"),
      meta: {
        title: "当前订单"
      }
    },
    {
      path: "/order/history/index",
      name: "historyOrder",
      component: () => import("@/views/order/history/index.vue"),
      meta: {
        title: "历史订单"
      }
    },
  ]
} satisfies RouteConfigsTable;
