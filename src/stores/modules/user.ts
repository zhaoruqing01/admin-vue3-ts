// 创建用户相关的store
import type { UserDetailInfo } from '@/api/user/user';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const useUserStore = defineStore(
  'User',
  () => {
    // 用户信息
    const token = ref<string>('');
    // 用户详细信息
    const userInfo = ref<UserDetailInfo>();
    // 路由
    // 设置token
    const setToken = (data: string) => {
      token.value = data;
    };
    // 存储用户信息
    const setUserInfo = (val: UserDetailInfo) => {
      userInfo.value = val;
    };
    // 清除用户信息（新增方法）
    const clearUser = () => {
      token.value = ''; // 清空token
      userInfo.value = undefined; // 清空用户详情
    };
    return {
      token,
      userInfo,
      setToken,
      setUserInfo,
      clearUser,
    };
  },
  {
    // 开启持久化
    persist: true,
  }
);

export default useUserStore;
