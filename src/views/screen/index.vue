<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Age from './components/Age/index.vue';
import Counter from './components/Counter/index.vue';
import Line from './components/Line/index.vue';
import Map from './components/Map/index.vue';
import Rank from './components/Rank/index.vue';
import Sex from './components/Sex/index.vue';
import Top from './components/Top/index.vue';
import Tourist from './components/Tourist/index.vue';
import Year from './components/Year/index.vue';

// 动态计算缩放比例
const getScale = (w = 1920, h = 1080) => {
  const ww = window.innerWidth / w;
  const wh = window.innerHeight / h;
  return ww < wh ? ww : wh;
};

let screen = ref<HTMLElement | null>(null);

// 处理窗口大小变化
const handleResize = () => {
  if (screen.value) {
    screen.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
  }
};

onMounted(() => {
  // 初始化缩放
  if (screen.value) {
    screen.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
  }
  // 添加事件监听
  window.addEventListener('resize', handleResize);
});

// 组件卸载时清理事件监听
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div class="container">
    <!-- 内容展示区（修复ref绑定） -->
    <div class="screen" ref="screen">
      <div class="top">
        <Top />
      </div>
      <div class="screen_container">
        <div class="left">
          <div class="tourist">
            <Tourist></Tourist>
          </div>
          <div class="sex">
            <Sex></Sex>
          </div>
          <div class="age">
            <Age></Age>
          </div>
        </div>
        <div class="middle">
          <div class="map"><Map></Map></div>
          <div class="line"><Line></Line></div>
        </div>
        <div class="right">
          <div class="rank"><Rank></Rank></div>
          <div class="year"><Year></Year></div>
          <div class="counter"><Counter></Counter></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 100vw;
  height: 100vh;
  background: url(./images/bg.png) no-repeat;
  background-size: cover;
}

// 内容展示区（修复定位和尺寸问题）
.screen {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 1920px; /* 与getScale默认宽度一致 */
  height: 1080px; /* 与getScale默认高度一致 */
  transform-origin: left top;
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-family: Consolas, monospace;
  .screen_container {
    display: flex;
    justify-content: space-around;
    flex: 1; /* 让容器占满剩余空间 */
  }
}
.screen_container {
  padding: 0 20px;
  display: flex;
}
.middle {
  flex: 1.8;
}
.left,
.right {
  flex: 1;
}
.left {
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 50px;
  width: 500px;
  .tourist {
    flex: 1.3;
  }
  .sex {
    flex: 1;
    margin-top: 20px;
  }
  .age {
    flex: 1;
    margin-top: 20px;
  }
}
.middle {
  display: flex;
  flex-direction: column;
  .map {
    flex: 0.7;
  }
  .line {
    flex: 0.3;
    padding: 0 15px;
  }
}
.right {
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 50px;
  width: 500px;
  .rank {
    flex: 1.3;
  }
  .year {
    flex: 1;
    margin-top: 20px;
  }
  .counter {
    flex: 1;
    margin-top: 20px;
  }
}
</style>
