// 创建用户相关的store
import { defineStore } from 'pinia';
import { ref } from 'vue';

const useUserStore = defineStore(
  'User',
  () => {
    // 用户信息
    const token = ref<string>('');
    // 设置token
    const setToken = (data: string) => {
      token.value = data;
    };
    return {
      token,
      setToken,
    };
  },
  {
    // 开启持久化
    persist: true,
  }
);

export default useUserStore;
