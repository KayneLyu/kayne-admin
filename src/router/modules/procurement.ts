export default {
  path: "/procurement",
  redirect: "/procurement/purchase/index",
  meta: {
    icon: "ep:shopping-cart",
    // showLink: false,
    title: "采购管理",
    rank: 2
  },
  children: [
    {
      path: "/procurement/purchase/index",
      name: "purchase",
      component: () => import("@/views/procurement/purchase/index.vue"),
      meta: {
        title: "采购列表"
      },
    },
    {
      path: "/procurement/supplier/index",
      name: "supplier",
      component: () => import("@/views/procurement/supplier/index.vue"),
      meta: {
        title: "供应商"
      }
    },
    {
      path: "/procurement/history/index",
      name: "history",
      component: () => import("@/views/procurement/history/index.vue"),
      meta: {
        title: "历史采购"
      }
    },
    {
      path: "/procurement/details/index",
      name: "procurementDetails",
      component: () => import("@/views/procurement/details/index.vue"),
      meta: {
        title: "订单详情",
        showLink: false
      }
    }
  ]
} satisfies RouteConfigsTable;
