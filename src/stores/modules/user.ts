// 创建用户相关的store
import type { UserDetailInfo } from '@/api/user/user';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const useUserStore = defineStore(
  'User',
  () => {
    // 用户信息
    const token = ref<string>(localStorage.getItem('token') || '');
    // 用户详细信息
    // 2. 初始化 userInfo（从 localStorage 读取并解析）
    const storedUserInfo = localStorage.getItem('userInfo');
    // 类型断言：明确告诉 TS 解析后的数据是 UserDetailInfo 类型
    const initialUserInfo = storedUserInfo
      ? (JSON.parse(storedUserInfo) as UserDetailInfo)
      : undefined;
    const userInfo = ref<UserDetailInfo | undefined>(initialUserInfo);
    // 路由
    // 设置token
    const setToken = (data: string) => {
      token.value = data;
      localStorage.setItem('token', data);
    };
    // 存储用户信息
    const setUserInfo = (val: UserDetailInfo) => {
      userInfo.value = val;
      localStorage.setItem('userInfo', JSON.stringify(val));
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
    persist: {
      paths: ['token', 'userInfo'],
      storage: localStorage,
    } as any,
  }
);

export default useUserStore;
