<script lang="ts" setup>
// import router from '@/router/index';
import { useLayOutStore } from '@/stores/modules/setting';
import useUserStore from '@/stores/modules/user';
import { FullScreen, Refresh, Setting } from '@element-plus/icons-vue';
import { ElMessageBox, ElNotification } from 'element-plus';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

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
// 退出登录
const $route = useRoute();
const $router = useRouter();
const goLogOut = () => {
  ElMessageBox.confirm('确认退出吗?', '再次确认', {
    confirmButtonText: '退出',
    cancelButtonText: '再想想',
  }).then(() => {
    // 退出登录时携带路由参数,方便登录成功后回显页面
    $router.push({ path: '/login', query: { redirect: $route.path } });
    useUserStore().clearUser();
    ElNotification({
      title: '退出成功',
      type: 'success',
    });
  });
};
const goToLogin = () => {
  $router.push({ path: '/login', query: { redirect: $route.path } });
};

// 自定义主题颜色
const color = ref('rgba(255, 69, 0, 0.68)');
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
]);
// 暗黑模式的切换
const isMoon = ref(false);
const html = document.documentElement;
const changeMoon = () => {
  isMoon.value ? (html.className = 'dark') : (html.className = '');
};
</script>
<template>
  <el-button :icon="Refresh" circle @click="changeRefsh"></el-button>
  <el-button :icon="FullScreen" circle @click="changeFullScreen"></el-button>
  <el-popover class="box-item" title="主题选择" placement="bottom">
    <el-form>
      <el-form-item label="选择主题">
        <el-color-picker v-model="color" show-alpha :predefine="predefineColors" />
      </el-form-item>
      <el-form-item label="暗黑模式">
        <el-switch
          v-model="isMoon"
          class="mt-2"
          inline-prompt
          active-icon="Moon"
          inactive-icon="Sunny"
          @change="changeMoon"
        />
      </el-form-item>
    </el-form>
    <template #reference> <el-button :icon="Setting" circle></el-button></template>
  </el-popover>
  <div class="block">
    <el-avatar :size="33" src="../../../../../public/vite.svg" />
  </div>
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ useUserStore().userInfo?.username || '去登录' }}
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
