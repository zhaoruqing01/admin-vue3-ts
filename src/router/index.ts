// 导入路由核心函数
import { createRouter, createWebHashHistory } from 'vue-router';

// 创建路由器实例
const router = createRouter({
  // 路由模式：Hash 模式（带 # 符号）
  history: createWebHashHistory(),
  // 路由规则列表（关键修正：routers → routes）
  routes: [
    {
      // 登录
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      // 首页
      path: '/',
      name: 'Home',
      component: () => import('@/views/home/index.vue'),
    },
    {
      // 404 页面
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/404/index.vue'),
    },
  ],
  // 滚动行为
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
    };
  },
});

export default router;
