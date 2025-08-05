<script lang="ts" setup>
import useUserStore from '@/stores/modules/user';
import { getTime } from '@/utils/time';

const userStore = useUserStore();
</script>
<template>
  <div class="home_container">
    <el-card class="el-card">
      <div class="card_container">
        <img src="../../../public/vite.svg" />
        <div class="name">
          {{ getTime() + '好' }}{{ userStore.userInfo?.username }}
          <div class="desc">硅谷甄选平台</div>
        </div>
      </div>
    </el-card>
    <div class="home_bgi">
      <img class="img_bgi" src="../../assets/icons//welcome.svg" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home_container {
  display: flex;
  flex-direction: column;
  .home_bgi {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    .img_bgi {
      margin-top: 88px;
      width: 500px;
    }
  }
}
.card_container {
  display: flex;
  align-items: center;
  img {
    width: 66px;
  }
  .name {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 20px;
    .desc {
      margin-top: 10px;
      font-size: 15px;
      color: rgb(80, 173, 255);
    }
  }
}
</style>
