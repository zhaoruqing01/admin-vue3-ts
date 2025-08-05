<script lang="ts" setup>
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';

const echartsRef = ref();

onMounted(() => {
  const myEcharts = echarts.init(echartsRef.value);
  myEcharts.setOption({
    grid: {
      left: 10,
      right: 50,
      bottom: 10,
      top: 10,
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis', //axis , item
    },
    xAxis: {
      type: 'value',
      splitLine: {
        show: false,
        lineStyle: {
          color: 'white',
          type: 'line',
        },
      },
      axisTick: {
        show: true,
      },
      axisLabel: {
        //  改变x轴字体颜色和大小
        show: true,
        textStyle: {
          color: 'white',
          fontSize: 16,
        },
      },
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        axisLabel: {
          show: true,
          textStyle: {
            color: 'white',
            fontSize: '16',
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        data: ['泉山区', '鼓楼区', '贾汪区', '丰县', '沛县', '新沂市'],
      },
    ],
    series: [
      {
        name: '热门景区排行',
        type: 'bar',
        zlevel: 1,
        label: {
          show: true,
          position: 'right', // 位置
          color: '#00c0fa',
          fontSize: 14,
          distance: 10, // 距离
          // formatter: '{c}%' // 这里是数据展示的时候显示的数据
        }, // 柱子上方的数值
        itemStyle: {
          normal: {
            barBorderRadius: 0,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: '#2a77ea',
              },
              {
                offset: 1,
                color: '#00c0fa',
              },
            ]),
          },
        },
        barWidth: 20,
        data: [270, 189, 157, 112, 89, 78],
      },
    ],
  });
});
</script>
<template>
  <div class="tourist">
    <div class="top">
      <div class="text">
        <span>热门景区排行</span>
        <img src="../../images/dataScreen-title.png" alt="" />
      </div>
    </div>
    <div class="rank" ref="echartsRef"></div>
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
}
.rank {
  flex: 1;
}
</style>
