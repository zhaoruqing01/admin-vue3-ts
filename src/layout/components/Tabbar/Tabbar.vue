<script lang="ts" setup>
import Breadcrumb from './components/Breadcrumb/Breadcrumb.vue';
import Setting from './components/Setting/Setting.vue';
</script>
<template>
  <div class="tabbar-container">
    <div class="tabbar-left">
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="tabbar-right">
      <Setting></Setting>
    </div>
  </div>
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
