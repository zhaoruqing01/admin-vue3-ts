<script lang="ts" setup>
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
// 柱状图表
const echartsRef = ref();

onMounted(() => {
  const myEcharts = echarts.init(echartsRef.value);
  myEcharts.setOption({
    xAxis: {
      show: false,
      min: 0,
      max: 100,
    },
    yAxis: {
      show: false,
      type: 'category',
    },
    series: [
      {
        type: 'bar',
        data: [58],
        barMinWidth: 20,
        z: 100,
        itemStyle: {
          color: '#456fee',
          borderRadius: 20,
        },
      },
      {
        type: 'bar',
        data: [100],
        barMinWidth: 20,
        barGap: '-100%',
        itemStyle: {
          color: '#950972',
          borderRadius: 20,
        },
      },
    ],
    gird: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });
});
</script>
<template>
  <div class="box">
    <div class="top">
      <span>男女比例</span>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="body">
      <div class="man">
        <div class="title">男士</div>
        <div class="avator"></div>
      </div>
      <div class="woman">
        <div class="title">女士</div>
        <div class="avator"></div>
      </div>
    </div>
    <div class="bottom">
      <div class="man">男士58%</div>
      <div class="woman">女士42%</div>
    </div>
    <div class="title" style="width: 100%; font-size: 20px; text-align: center; margin: 0 10px">
      男女比例
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
.body {
  display: flex;
  width: 100%;
  height: 120px;
  margin-top: 20px;
  .man {
    position: relative;
    width: 120px;
    height: 120px;
    margin: 0 80px;
    background: url(../../images/man-bg.png) no-repeat;
    .title {
      font-size: 18px;
      width: 120px;
      height: 20px;
      text-align: center;
    }
    .avator {
      position: absolute;
      left: 25px;
      top: 40px;
      width: 120px;
      height: 100px;
      background: url(../../images/man.png) no-repeat;
    }
  }
  .woman {
    position: relative;
    width: 120px;
    height: 120px;
    background: url(../../images/woman-bg.png) no-repeat;
    .title {
      font-size: 18px;
      width: 120px;
      height: 20px;
      text-align: center;
    }
    .avator {
      position: absolute;
      left: 25px;
      top: 40px;
      width: 120px;
      height: 100px;
      background: url(../../images/woman.png) no-repeat;
    }
  }
}
.bottom {
  display: flex;
  width: 100%;
  font-size: 20px;
  justify-content: space-around;
}
.echarts {
  width: 100%;
  height: 30px;
}
</style>
