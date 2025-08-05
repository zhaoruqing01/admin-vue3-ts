<script lang="ts" setup>
import { useRouterStore } from '@/stores/modules/router';
import { useLayOutStore } from '@/stores/modules/setting';
import { useRoute } from 'vue-router';
import Logo from './components/Logo/Logo.vue';
import Main from './components/Main/Main.vue';
import Menu from './components/Menu/Menu.vue';
import Tabbar from './components/Tabbar/Tabbar.vue';

// 获取路由对象 - 用来刷新保留侧边栏打开:default-active
let $route = useRoute();
</script>
<template>
  <div class="layout_container">
    <div class="left_layout">
      <Logo></Logo>
      <!-- 菜单部分 -->
      <el-scrollbar class="scrollbar">
        <el-menu
          class="el-menu"
          router
          unique-opened
          :default-active="$route.path"
          :collapse="useLayOutStore().isFold"
        >
          <Menu :menuList="useRouterStore().routers"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="right_layout">
      <div class="right_header" :class="{ fold: useLayOutStore().isFold }">
        <Tabbar></Tabbar>
      </div>
      <div class="right_container" :class="{ fold: useLayOutStore().isFold }"><Main></Main></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
* {
  box-sizing: border-box; /* 所有元素默认使用IE盒模型 */
}
.layout_container {
  width: 100%;
  height: 100vh;
  .left_layout {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    padding: 10px;
  }
  .right_layout {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: 100vh;
    overflow: auto;
    .right_header {
      position: fixed;
      top: 0;
      left: $base-menu-width;
      width: calc(100% - $base-menu-width);
      height: $base-tabbar-height;
      transition: all 0.5s;
      &.fold {
        width: calc(100% - $base-menu-min-width);
        left: $base-menu-min-width;
      }
    }
    .right_container {
      position: fixed;
      top: $base-tabbar-height;
      left: $base-menu-width;
      padding: 15px;
      width: calc(100% - $base-menu-width);
      height: 100%;
      transition: all 0.5s;
      box-sizing: border-box;
      &.fold {
        width: calc(100% - $base-menu-min-width);
        left: $base-menu-min-width;
      }
    }
  }
}
// 侧边栏部分
.scrollbar {
  color: white;
  width: 100%;
  // logo高度和padding高度
  height: calc(100vh - 70px);
  .el-menu {
    background-color: $base-menu-background;
    border-right: none;
    width: 100%;
  }
}

// 菜单样式修改 - 使用::v-deep穿透scoped
::v-deep {
  // 菜单文字默认颜色
  .el-menu-item,
  .el-sub-menu__title {
    color: #e0e0e0 !important;
    font-size: 14px;
    height: 50px;
    line-height: 50px;
  }

  // 菜单文字hover颜色
  .el-menu-item:hover,
  .el-sub-menu__title:hover {
    color: #409eff !important;
    background-color: rgba(255, 255, 255, 0.1) !important;
  }

  // 激活状态样式
  .el-menu-item.is-active {
    color: #409eff !important;
    background-color: rgba(64, 158, 255, 0.2) !important;
    border-left: 3px solid #409eff !important;
  }

  // 展开的子菜单标题样式
  .el-sub-menu.is-opened > .el-sub-menu__title {
    color: #409eff !important;
    background-color: rgba(64, 158, 255, 0.1) !important;
  }

  // 子菜单容器样式
  .el-sub-menu .el-menu {
    background-color: rgba(0, 0, 0, 0.1) !important;
  }

  // 子菜单项样式
  .el-sub-menu .el-menu-item {
    padding-left: 40px !important;
  }

  // 图标颜色与文字保持一致
  .el-menu-item .el-icon,
  .el-sub-menu__title .el-icon {
    color: inherit !important;
    margin-right: 8px;
  }
}
</style>
