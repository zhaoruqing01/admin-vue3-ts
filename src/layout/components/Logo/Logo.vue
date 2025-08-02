<script lang="ts" setup></script>
<template>
  <div class="login_container">
    <img src="../../../../public/logo.png" mode="scaleToFill" />
    <div class="text">硅谷甄选运营平台</div>
  </div>
</template>
<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: $base-menu-logo-height;
  color: #fff;
  display: flex;
  justify-content: center;
  img {
    display: block;
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
  .text {
    flex: 1;
    height: 50px;
    line-height: 50px;
    font-size: $base-logo-title-fontSize;
  }
}
</style>
