<script lang="ts" setup>
import { useRouter } from 'vue-router';
//@ts-ignore
import dayjs from 'dayjs';
import { onBeforeUnmount, onMounted, ref } from 'vue';
const $router = useRouter();
const goHome = () => {
  $router.push('/');
};
// 获取当前时间
const time = ref<any>(dayjs().format('YYYY年MM月DD日 HH:mm:ss'));
onMounted(() => {
  time.value = setInterval(() => {
    time.value = ref(dayjs().format('YYYY年MM月DD日 HH:mm:ss'));
  }, 1000);
});
onBeforeUnmount(() => {
  clearInterval(time.value);
});
</script>
<template>
  <div class="top">
    <div class="left">
      <div class="lbtn" @click="goHome">首页</div>
    </div>
    <div class="midden">智慧旅游可视化大数据平台</div>
    <div class="right">
      <div class="rbtn">数据</div>
      <div class="time">当前时间:{{ time }}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.top {
  width: 100%;
  height: 80px;
  display: flex;
  .left {
    position: relative;
    width: 640px;
    height: 50px;
    background: url(../../images/dataScreen-header-left-bg.png) no-repeat;
    .lbtn {
      position: absolute;
      padding-top: 5px;
      right: 0;
      width: 100px;
      height: 100%;
      background: url(../../images/dataScreen-header-btn-bg-l.png) no-repeat;
      text-align: center;
      font-size: 25px;
      color: rgb(85, 206, 206);
      cursor: pointer;
    }
  }
  .midden {
    width: 900px;
    height: 100%;
    padding-top: 10px;
    background: url(../../images/dataScreen-header-center-bg.png) no-repeat;
    text-align: center;
    font-size: 40px;
    color: rgb(85, 206, 206);
    line-height: 50px;
  }
  .right {
    position: relative;
    width: 640px;
    height: 50px;
    background: url(../../images/dataScreen-header-right-bg.png) no-repeat;
    .rbtn {
      position: absolute;
      left: 0;
      width: 100px;
      height: 100%;
      padding-top: 5px;
      background: url(../../images/dataScreen-header-btn-bg-r.png) no-repeat;
      text-align: center;
      font-size: 25px;
      color: rgb(85, 206, 206);
      cursor: pointer;
    }
    .time {
      margin-left: 120px;
      color: rgb(85, 206, 206);
      font-size: 25px;
      line-height: 40px;
    }
  }
}
</style>
