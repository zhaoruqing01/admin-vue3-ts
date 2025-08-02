// 动态控制页面的折叠
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLayOutStore = defineStore('IsFold', () => {
  const isFold = ref(false);
  const isRefsh = ref(false);
  // 控制折叠状态
  const setIsFOld = (val: boolean) => {
    isFold.value = val;
  };
  // 控制刷新状态
  const setIsRefsh = (val: boolean) => {
    isRefsh.value = val;
  };
  return {
    isFold,
    isRefsh,
    setIsFOld,
    setIsRefsh,
  };
});
export default useLayOutStore;
