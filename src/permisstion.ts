// 1. nporgress进度条
// 2. 路由鉴权
// 未登录只能访问login
// 登录后不能访问login

import router from '@/router/index';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import pinia from './stores';
import useUserStore from './stores/modules/user';

const userStore = useUserStore(pinia);

// 页面跳转前 - 全局前置守卫
//to:你将要访问那个路由
//from:你从来个路由而来
//next:路由的放行函数
router.beforeEach((to: any, from: any, next: any) => {
  nprogress.start();
  const token = userStore.token;
  // 已登录
  if (token) {
    if (to.path == '/login') {
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    // 未登录
    if (to.path == '/login') {
      next();
    } else {
      next({ path: '/login', query: { redirect: to.path } });
    }
  }
});
// 页面跳转后 - 全局后置守卫
router.afterEach(() => {
  nprogress.done();
});
