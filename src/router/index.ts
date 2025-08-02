// 导入路由核心函数
import { createRouter, createWebHashHistory } from 'vue-router';
import { AllRouters } from './AllRouters';

// 创建路由器实例
const router = createRouter({
  // 路由模式：Hash 模式（带 # 符号）
  history: createWebHashHistory(),
  // 路由规则列表（关键修正：routers → routes）
  routes: AllRouters,
  // 滚动行为
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
    };
  },
});

export default router;
