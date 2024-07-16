export default {
  path: "/stock",
  meta: {
    icon: "ep:house",
    title: "库存管理",
    rank: 6
  },
  component: () => import("@/views/stock/index.vue"),
} satisfies RouteConfigsTable;
