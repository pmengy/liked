import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "帝可得", icon: "home" },
      },
    ],
  },

  {
    path: "/task",
    component: Layout,
    redirect: "/task/business",
    name: "task",
    meta: { title: "工单管理", icon: "task" },
    children: [
      {
        path: "/task/business",
        name: "business",
        component: () => import("@/views/table/index"),
        meta: { title: "运营工单" },
      },
      {
        path: "/task/operation",
        name: "operation",
        component: () => import("@/views/tree/index"),
        meta: { title: "运维工单"},
      },
    ],
  },

  {
    path: "/node",
    component: Layout,
    redirect: "/node/region",
    meta: { title: "点位管理", icon: "node" },
    children: [
      {
        path: "region",
        name: "region",
        component: () => import("@/views/form/index"),
        meta: { title: "区域管理"},
      },
      {
        path: "node",
        name: "node",
        component: () => import("@/views/form/index"),
        meta: { title: "点位管理"},
      },
      {
        path: "partner",
        name: "partner",
        component: () => import("@/views/form/index"),
        meta: { title: "合作商管理"},
      },
    ],
  },

  {
    path: "/vm",
    component: Layout,
    redirect: "/vm/index",
    name: "Nested",
    meta: {
      title: "设备管理",
      icon: "vm",
    },
    children: [
      {
        path: "index",
        component: () => import("@/views/nested/menu1/index"), // Parent router-view
        name: "index",
        meta: { title: "设备管理" },
      },
      {
        path: "status",
        component: () => import("@/views/nested/menu2/index"),
        name: "status",
        meta: { title: "设备状态" },
      },
      {
        path: "type",
        component: () => import("@/views/nested/menu2/index"),
        name: "type",
        meta: { title: "设备类型管理" },
      },
    ],
  },
  {
    path: "/user",
    component: Layout,
    redirect: "/user/index",
    name: "Nested",
    meta: {
      title: "人员管理",
      icon: "userM",
    },
    children: [
      {
        path: "index",
        component: () => import("@/views/nested/menu1/index"), // Parent router-view
        name: "index",
        meta: { title: "人员列表" },
      },
      {
        path: "user-task-stats",
        component: () => import("@/views/nested/menu2/index"),
        name: "user-task-stats",
        meta: { title: "人效统计" },
      },
      {
        path: "user-work",
        component: () => import("@/views/nested/menu2/index"),
        name: "user-work",
        meta: { title: "工作量列表" },
      },
    ],
  },
  {
    path: "/sku",
    component: Layout,
    redirect: "/sku/sku-class",
    name: "sku",
    meta: {
      title: "商品管理",
      icon: "sku",
    },
    children: [
      {
        path: "sku-class",
        component: () => import("@/views/nested/menu1/index"), // Parent router-view
        name: "sku-class",
        meta: { title: "商品类型" },
      },
      {
        path: "sku",
        component: () => import("@/views/nested/menu2/index"),
        name: "sku",
        meta: { title: "商品管理" },
      },
    ],
  },
  {
    path: "/policy/index",
    component: Layout,
    name: "policy",
    meta: {
      title: "策略管理",
      icon: "policy",
    },
  },
  {
    path: "/order/index",
    component: Layout,
    name: "order",
    meta: {
      title: "订单管理",
      icon: "order",
    },
  },
  {
    path: "/report/index",
    component: Layout,
    name: "report",
    meta: {
      title: "对账记录",
      icon: "report",
    },
  },
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
