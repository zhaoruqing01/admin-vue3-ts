<script lang="ts" setup>
import * as echarts from 'echarts';
import 'echarts-liquidfill';
import { onMounted, ref } from 'vue';

const touristNum = ref(['2', '1', '6', '9', '0', '8', '人']);
// 水球图
const echartsRef = ref();
onMounted(() => {
  // 获取echarts类的实例
  const myCharts = echarts.init(echartsRef.value);
  // 设置实例的配置项
  myCharts.setOption({
    title: {
      text: '实时图',
    },
    //x轴和y轴的组件
    // xAxis: {},
    // yAxis: {},
    // 系列:决定需要的什么样的图形图标
    series: [
      {
        type: 'liquidFill', // 图表类型
        data: [0.6, 0.5, 0.2], // 数据
        waveAnimation: true, // 视口动画
        radius: '100%', // 半径即大小
        animationDuration: 0,
        animationDurationUpdate: 0,
      },
    ],
    // 布局组件,即位置
    grid: {
      top: 0,
      left: 0,
    },
  });
});
</script>
<template>
  <div class="tourist">
    <div class="top">
      <div class="text">
        <span>实时游客统计</span>
        <img src="../../images/dataScreen-title.png" alt="" />
      </div>
      <div class="yuyue">可预约人数<span style="color: orange">9999999</span></div>
    </div>
    <div class="number">
      <span v-for="item in touristNum" class="span">{{ item }}</span>
    </div>
    <div class="echarts" ref="echartsRef"></div>
  </div>
</template>
<style lang="scss" scoped>
.tourist {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-lt.png) no-repeat;
  background-size: 100% 100%;
}
.top {
  display: flex;
  position: relative;
  .text {
    display: flex;
    margin-left: 15px;
    flex-direction: column;
    font-size: 25px;
    width: 200px;
    img {
      width: 100px;
      margin-top: 10px;
    }
  }
  .yuyue {
    position: absolute;
    font-size: 20px;
    right: 30px;
    bottom: 10px;
  }
}
.number {
  display: flex;
  padding: 10px;
  margin-top: 15px;
  height: 100px;
  .span {
    display: block;
    text-align: center;
    // height: 80px;
    // width: 100%;
    flex: 1;
    line-height: 80px;
    color: rgb(85, 206, 206);
    background: url(../../images/total.png) no-repeat;
    background-size: cover;
  }
}
.echarts {
  flex: 1;
}
</style>
