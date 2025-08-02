<script lang="ts" setup>
import { getUserDetailInfo } from '@/api/user/index';
import useUserStore from '@/stores/modules/user';
import { onMounted } from 'vue';

onMounted(async () => {
  // 当组件挂载后获取用户信息存入store
  const res = await getUserDetailInfo();
  console.log(res);
  useUserStore().setUserInfo(res.data);
});
</script>
<template>我是home</template>
<style lang="scss" scoped></style>
