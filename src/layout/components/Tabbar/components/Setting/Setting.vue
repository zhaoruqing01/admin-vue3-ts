<script lang="ts" setup>
import router from '@/router/index';
import { useLayOutStore } from '@/stores/modules/setting';
import useUserStore from '@/stores/modules/user';
import { FullScreen, Refresh, Setting } from '@element-plus/icons-vue';
import { ElMessageBox, ElNotification } from 'element-plus';
// 控制刷新状态
const changeRefsh = () => {
  useLayOutStore().setIsRefsh(!useLayOutStore().isRefsh);
};

// 控制全屏展示
// 控制全屏展示
const changeFullScreen = () => {
  // 兼容性处理：获取当前全屏状态和方法
  const isFull = document.fullscreenElement;

  if (!isFull) {
    // 进入全屏：优先让 document.documentElement 全屏（整个页面）
    const enterFullscreen = document.documentElement.requestFullscreen;

    enterFullscreen.call(document.documentElement);
  } else {
    // 退出全屏
    const exitFullscreen = document.exitFullscreen;
    exitFullscreen.call(document);
  }
};
const goLogOut = () => {
  ElMessageBox.confirm('确认退出吗?', '再次确认', {
    confirmButtonText: '退出',
    cancelButtonText: '再想想',
  }).then(() => {
    router.replace('/login');
    useUserStore().clearUser();
    ElNotification({
      title: '退出成功',
      type: 'success',
    });
  });
};
const goToLogin = () => {
  router.replace('/login');
};
</script>
<template>
  <el-button :icon="Refresh" circle @click="changeRefsh"></el-button>
  <el-button :icon="FullScreen" circle @click="changeFullScreen"></el-button>
  <el-button :icon="Setting" circle></el-button>
  <div class="block">
    <el-avatar
      :size="33"
      :src="useUserStore().userInfo?.checkUser?.avatar || '../../../../public/logo.png'"
    />
  </div>
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ useUserStore().userInfo?.checkUser.username || '去登录' }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="goLogOut" v-if="useUserStore().token">退出登录</el-dropdown-item>
        <el-dropdown-item @click="goToLogin" v-else>登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
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
