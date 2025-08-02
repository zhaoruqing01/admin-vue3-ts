import { AllRouters } from '@/router/AllRouters';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

export const useRouterStore = defineStore('Router', () => {
  // 存储路由配置
  const routers = ref<RouteRecordRaw[]>(AllRouters);
  return {
    routers,
  };
});
export default useRouterStore;
