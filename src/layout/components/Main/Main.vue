<script lang="ts" setup>
import { useLayOutStore } from '@/stores/modules/setting';
import { nextTick, ref, watch } from 'vue';

// v-if结合点击nextTick控制组件的挂载和隐藏
// 监听刷新事件值的变化,控制元素的挂载和销毁
let flag = ref(true);
watch(
  () => useLayOutStore().isRefsh,
  () => {
    flag.value = false;
    // nextTick可以在上一步执行完成后执行
    nextTick(() => {
      flag.value = true;
    });
  }
);
</script>
<template>
  <div>
    <!-- 二级路由出口 -->
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <!-- 渲染一级路由的子路由 -->
        <component :is="Component" v-if="flag" />
      </transition>
    </router-view>
  </div>
</template>
<style lang="scss">
// Vue 过渡动画的进入 / 离开类名规则是：
// 进入阶段：[name]-enter-from（起始状态）、[name]-enter-active（过渡中）、[name]-enter-to（结束状态）
// 离开阶段：[name]-leave-from（起始状态）、[name]-leave-active（过渡中）、[name]-leave-to（结束状态）
.fade-enter-from {
  opacity: 0;
  transform: rotate(0deg);
}
.fade-enter-active {
  transition: all 12s;
}
.fade-enter-to {
  opacity: 1;
  transform: rotate(360deg);
}
</style>
