<script lang="ts" setup>
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';

const echartsRef = ref();
onMounted(() => {
  const myEcharts = echarts.init(echartsRef.value);
  // 配置echarts图
  myEcharts.setOption({
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '40px',
      left: '50px',
      orient: 'vertical',
      textStyle: {
        color: 'white',
        fontSize: 18,
      },
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['70%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
        },
        label: {
          show: true,
          position: 'inside',
          color: 'white',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: true,
        },
        data: [
          { value: 1048, name: '财经' },
          { value: 735, name: '人文' },
          { value: 580, name: '国际' },
          { value: 484, name: '农业' },
          { value: 300, name: '军事' },
        ],
      },
    ],
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  });
});
</script>
<template>
  <div class="box">
    <div class="top">
      <span>年龄比例</span>
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
.top {
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
  width: 100%;
  flex: 1;
}
</style>
