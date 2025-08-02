<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router';

// 接收传递的路由参数
const props = defineProps<{
  menuList: RouteRecordRaw[];
  parentIndex?: string;
}>();

// 定义组件名称，便于递归调用
defineOptions({
  name: 'Menu',
});

// 生成唯一索引
const getIndex = (index: number) => {
  return props.parentIndex ? `${props.parentIndex}-${index}` : index.toString();
};
</script>

<template>
  <!-- 遍历菜单列表 -->
  <template v-for="(item, index) in menuList" :key="item.path || index">
    <!-- 只渲染未隐藏的菜单 -->
    <template v-if="!item.meta?.isHidden">
      <!-- 没有子集的菜单项 -->
      <el-menu-item
        v-if="!item.children || item.children.length <= 1"
        :index="item.path || getIndex(index)"
        :route="item.path"
      >
        <el-icon><component :is="item.meta?.icon"></component></el-icon>
        <template #title>
          <span>{{ item.meta?.title }}</span>
        </template>
      </el-menu-item>

      <!-- 有子菜单的情况 -->
      <el-sub-menu v-else :index="item.path || getIndex(index)">
        <template #title>
          <el-icon><component :is="item.meta?.icon"></component></el-icon>
          <span>{{ item.meta?.title }}</span>
        </template>
        <!-- 递归调用自身渲染子菜单 -->
        <Menu :menu-list="item.children" :parent-index="item.path || getIndex(index)" />
      </el-sub-menu>
    </template>
  </template>
</template>

<style lang="scss" scoped></style>
