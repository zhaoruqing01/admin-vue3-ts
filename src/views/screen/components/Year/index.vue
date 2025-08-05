<script lang="ts" setup>
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';

const echartsRef = ref();
onMounted(() => {
  const myEcharts = echarts.init(echartsRef.value);
  myEcharts.setOption({
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: '5%',
      right: '2%',
      itemGap: 20,
      icon: 'circle', //  这个字段控制形状  类型包括 circle 圆形，triangle 三角形，diamond 四边形，arrow 变异三角形，none 无
      itemWidth: 10, // 设置图例图形的宽
      itemHeight: 10, // 设置图例图形的高
      textStyle: {
        color: '#C5D6E6',
        // fontWeight: 'bold'
      },
    },
    grid: {
      left: '1%',
      right: '2%',
      bottom: '5%',
      // top: '10%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        axisLabel: {
          textStyle: {
            color: '#C5D6E6',
          },
        },
        axisLine: {
          lineStyle: {
            color: '#D9E7FF',
          },
        },
        // axisTick: {
        //   show: false // 取消 x 轴刻度
        // }
      },
    ],
    yAxis: [
      {
        name: '(人数)',
        nameLocation: 'end',
        type: 'value',
        splitNumber: 4,
        splitLine: {
          lineStyle: {
            color: 'rgba(217, 231, 255, 0.3)',
          },
        },
        axisLabel: {
          textStyle: {
            color: '#C5D6E6',
          },
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#333',
          },
        },
        nameTextStyle: {
          color: '#999',
        },
        splitArea: {
          show: false,
        },
      },
    ],
    // https://www.yuque.com/sxd_panda/antv/x6
    series: [
      {
        name: '2021年',
        type: 'line',
        data: [23, 60, 20, 36, 23, 85, 100, 130, 99, 67, 99, 88],
        lineStyle: {
          normal: {
            width: 2,
            color: 'rgba(15, 222, 255, 1)',
            shadowColor: 'rgba(72,216,191, 0.3)',
            shadowBlur: 10,
            shadowOffsetY: 20,
          },
        },
        areaStyle: {
          normal: {
            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: '#0FDEFF',
                },
                // {
                //   offset: 0.6,
                //   color: 'rgb(14, 82, 63)'
                // },
                {
                  offset: 1,
                  color: 'rgba(15, 222, 255, 0)',
                },
              ],
              false
            ),
          },
        },
        // 图例样式
        itemStyle: {
          color: 'rgba(15, 222, 255, 1)',
        },
        smooth: true,
        symbol: 'none', // 设置拐点不显示
      },
      {
        name: '2022年',
        type: 'line',
        data: [35, 72, 18, 49, 35, 55, 87, 73, 87, 94, 91, 112, 12],
        lineStyle: {
          normal: {
            width: 2,
            color: 'rgba(0, 144, 255, 1)',
            // shadowColor: 'rgba(72,216,191, 0.3)',
            // shadowBlur: 10,
            // shadowOffsetY: 20
          },
        },
        areaStyle: {
          normal: {
            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(0, 144, 255, 1)',
                },
                // {
                //   offset: 0.6,
                //   color: 'rgb(14, 82, 63)'
                // },
                {
                  offset: 1,
                  color: 'rgba(0, 144, 255, 0)',
                },
              ],
              false
            ),
          },
        },
        // 图例样式
        itemStyle: {
          color: 'rgba(0, 144, 255, 1)',
        },
        smooth: true,
        symbol: 'none', // 设置拐点不显示
      },
      {
        name: '2023年',
        type: 'line',
        data: [135, 92, 61, 92, 80, 28, 55, 26, 42, 28, 79, 105],
        lineStyle: {
          normal: {
            width: 2,
            color: 'rgba(255, 208, 59, 1)',
            // shadowColor: 'rgba(72,216,191, 0.3)',
            // shadowBlur: 10,
            // shadowOffsetY: 20
          },
        },
        areaStyle: {
          normal: {
            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(255, 208, 59, 1)',
                },
                // {
                //   offset: 0.6,
                //   color: 'rgb(14, 82, 63)'
                // },
                {
                  offset: 1,
                  color: 'rgba(255, 208, 59, 0)',
                },
              ],
              false
            ),
          },
        },
        // 图例样式
        itemStyle: {
          color: 'rgba(255, 208, 59, 1)',
        },
        smooth: true,
        symbol: 'none', // 设置拐点不显示
      },
    ],
  });
});
</script>
<template>
  <div class="box">
    <div class="text">
      <span>年度游客统计</span>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="echarts" ref="echartsRef"></div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-lc.png) no-repeat;
  background-size: 100% 100%;
}
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
.echarts {
  flex: 1;
}
</style>
