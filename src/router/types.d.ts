// 路由配置文件的类型声明
import type { RouteRecordRaw } from 'vue-router';

// 扩展路由元信息类型（自定义的meta字段）
export interface RouteMeta {
  title: string; // 页面标题，必传
  isHidden: boolean; // 是否在菜单中隐藏，必传
  // 可以根据需要添加更多字段，如：
  icon?: string; // 菜单图标
  // requiresAuth?: boolean; // 是否需要登录权限
}

// 扩展路由记录类型，包含自定义meta和子路由类型
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta' | 'children'> {
  meta: RouteMeta; // 强制使用自定义的meta类型
  children?: AppRouteRecordRaw[]; // 子路由也使用扩展后的类型
}
