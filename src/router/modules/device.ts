export default {
  path: "/device",
  redirect: "/device/index",
  meta: {
    icon: "ep:memo",
    title: "产品配置",
    rank: 5,
  },
  children: [
    {
      path: "/device/index",
      name: "product",
      component: () => import("@/views/configuration/index.vue"),
      meta: {
        title: "产品配置",
        showLink: true,
      }
    },
    {
      path: "/device/details/:device",
      name: "product_details",
      component: () => import("@/views/configuration/details/index.vue"),
      meta: {
        title: "配置详情",
        showLink: false,
      }
    },
  ]
} satisfies RouteConfigsTable;
