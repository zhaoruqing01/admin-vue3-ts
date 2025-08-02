<script lang="ts" setup>
import { useLayOutStore } from '@/stores/modules/setting';
import { ArrowRight } from '@element-plus/icons-vue';
import { useRoute } from 'vue-router';
// 控制图标的样式
const changeIcon = () => {
  useLayOutStore().setIsFOld(!useLayOutStore().isFold);
};
// 动态展示面包屑
let $route = useRoute();
</script>
<template>
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="useLayOutStore().isFold ? 'Expand' : 'Fold'"></component>
  </el-icon>
  <!-- 面包屑 -->
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="item.path" v-for="item in $route.matched" :key="item.path">
      <el-icon><component :is="item.meta?.icon"></component></el-icon>
      {{ item.meta?.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<style lang="scss" scoped>
.tabbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-bottom: 1px solid black;
  padding: 0 10px;
  .tabbar-left {
    display: flex;
  }
  .tabbar-right {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 250px;
  }
}
</style>
