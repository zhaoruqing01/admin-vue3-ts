<script lang="ts" setup>
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';

const echartsRef = ref();
onMounted(() => {
  const myEcharts = echarts.init(echartsRef.value); // 修正变量名拼写错误
  myEcharts.setOption({
    xAxis: {
      type: 'category',
      data: [
        '7 月 21 日 ',
        '7 月 22 日 ',
        '7 月 23 日 ',
        '7 月 24 日 ',
        '7 月 25 日 ',
        '7 月 26 日 ',
        '7 月 27 日',
      ],
      axisLabel: {
        color: '#fff',
      },
      axisTick: {
        show: false, // 隐藏x轴刻度线
      },
      axisLine: {
        show: false, // 隐藏x轴轴线
      },
      splitLine: {
        show: false, // 隐藏x轴网格线（竖线，可选）
      },
    },
    yAxis: {
      type: 'value',
      data: [1000, 2000, 3000, 4000, 5000],
      axisLabel: {
        color: '#fff',
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        data: [820, 1932, 2901, 3934, 1290, 2330, 1320],
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#4fc3f7',
        },
        itemStyle: {
          color: '#4fc3f7',
        },
        areaStyle: {
          // 填充色（半透明，避免遮挡其他元素）
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(79, 195, 247, 0.3)' }, // 折线处颜色（较浅）
              { offset: 1, color: 'rgba(79, 195, 247, 0)' }, // 底部颜色（透明）
            ],
          },
          // 阴影配置（向下偏移）
          shadowColor: 'rgba(79, 195, 247, 0.5)', // 阴影颜色
          shadowBlur: 15, // 阴影模糊程度
          shadowOffsetY: 10, // 阴影向下偏移（正值向下，负值向上）
        },
      },
    ],
    grid: {
      top: '10%', // 适当调整网格边距，避免内容贴边
      left: '5%',
      right: '5%',
      bottom: '10%',
      containLabel: true,
    },
  });
});
</script>
<template>
  <div class="line">
    <div class="top">
      <div class="title">未来30天游客量趋势图</div>
      <div class="img"></div>
    </div>
    <div class="echarts" ref="echartsRef"></div>
  </div>
</template>
<style lang="scss" scoped>
.line {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  .top {
    display: flex;
    flex-direction: column;
    flex: 0.2;
    .title {
      color: white;
      font-size: 18px;
    }
    .img {
      margin-top: 20px;
      width: 100px;
      height: 10px;
      background: url(../../images/dataScreen-title.png) no-repeat;
      background-size: 100% 100%;
    }
  }
  .echarts {
    flex: 0.8;
    width: 100%;
    height: 100%;
  }
}
</style>
