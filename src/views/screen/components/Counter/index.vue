<script lang="ts" setup>
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';

const echartsRef = ref();
// 定义一个变量 s1_data，用于存储饼图的数据
const s1_data = [
  {
    value: 250,
    name: '小程序',
  },
  {
    value: 330,
    name: '城镇官网',
  },
  {
    value: 1250,
    name: '通用设备',
  },
  {
    value: 390,
    name: '其他',
  },
];

// 定义一个变量 colorStops，用于存储颜色渐变的停止点
const colorStops = [
  [
    {
      offset: 0,
      color: 'rgba(21, 228, 255, 0.20)', // 0% 处的颜色
    },
    {
      offset: 1,
      color: 'rgba(81, 234, 161, 1)', // 100% 处的颜色
    },
  ],
  [
    {
      offset: 0,
      color: 'rgba(21, 228, 255, 0.20)', // 0% 处的颜色
    },
    {
      offset: 1,
      color: 'rgba(9, 132, 253, 1)', // 100% 处的颜色
    },
  ],
  [
    {
      offset: 0,
      color: 'rgba(21, 99, 255, 0.20)', // 0% 处的颜色
    },
    {
      offset: 1,
      color: 'rgba(83, 9, 253, 1)', // 100% 处的颜色
    },
  ],
  [
    {
      offset: 0,
      color: 'rgba(253, 167, 62, 0.20)', // 0% 处的颜色
    },
    {
      offset: 1,
      color: 'rgba(249, 110, 29, 1)', // 100% 处的颜色
    },
  ],
];

// 定义一个变量 l_data，用于存储图例的数据
const l_data: any = [];

// 遍历 s1_data，将每个数据项的 name 属性添加到 l_data 中
s1_data.forEach(data => {
  l_data.push(data.name);
});

onMounted(() => {
  const myEcharts = echarts.init(echartsRef.value);
  myEcharts.setOption({
    tooltip: {
      trigger: 'item',
      formatter: `{b}:{c}`,
    },

    grid: {
      left: '8%',
      top: '10%',
      right: '8%',
      bottom: '22%',
    },
    // 图例
    legend: {
      show: true,
      type: 'scroll',
      icon: 'circle',
      orient: 'vertical', // 图例左侧上下排布
      left: '10%',
      top: 'center',
      textStyle: {
        fontSize: 12,
        color: '#fff',
      },
      itemWidth: 14,
      pageIconColor: '#fff', // 图例翻页样式设置
      pageIconSize: 10,
      pageTextStyle: {
        fontSize: 10,
        color: '#fff',
      },
      data: l_data,
    },
    series: [
      {
        // name: '总资产',
        type: 'pie',
        // radius: '80%',
        center: ['60%', '50%'], // 饼图在画布中的位置
        radius: ['55%', '75%'], // 环形大小
        silent: false, // 是否响应鼠标事件
        data: s1_data,
        avoidLabelOverlap: true, // 防止标签重叠
        showEmptyCircle: true,
        itemStyle: {
          normal: {
            borderType: 'solid',
            borderColor: '#1E3477',
            borderRadius: '80%',
            borderWidth: 2, // 饼图间隔距离
            position: 'inside',
            label: {
              padding: [0, 0],
              show: true,
              //环形数值显示样式格式
              formatter: `{a|{c}} {person|人}\n{hr|}\n{a|{d}%}`,
              rich: {
                a: {
                  fontSize: 14,
                  padding: [3, 0, 5, 0],
                  color: 'rgba(20, 233, 250, 1)',
                },
                person: {
                  // 新增“人”字样式
                  fontSize: 14,
                  color: '#fff', // 纯白色
                  // 无需设置border，默认无边框
                },
                hr: {
                  borderColor: '#fff',
                  width: '100%',
                  borderWidth: 0.8,
                  height: 0,
                },
              },
            },
            //环形指向线条
            labelLine: {
              showAbove: true,
              show: true,
              length2: 0,
              lineStyle: {
                color: '#fff',
              },
            },
            //渲染环形渐变色
            color: function (params: any) {
              return {
                //type: 'linear',
                x: 0,
                y: 1,
                x2: 1,
                y2: 0,
                colorStops: colorStops[params.dataIndex], // 100% 处的颜色
                //globalCoord: false // 缺省为 false
              };
            },
          },
        },
      },
    ],
  });
});
</script>
<template>
  <div class="box">
    <div class="text">
      <span>预约渠道数据统计</span>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="counter" ref="echartsRef"></div>
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
.counter {
  flex: 1;
}
</style>
