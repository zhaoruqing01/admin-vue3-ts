<script lang="ts" setup>
import { getUserInfo } from '@/api/user/index';
import router from '@/router';
import useUserStore from '@/stores/modules/user';
import { getTime } from '@/utils/time';
import { Lock, User } from '@element-plus/icons-vue';
import { ElNotification } from 'element-plus';
import { ref } from 'vue';

const userStore = useUserStore();
// 登录表单信息,表单校验
// 自定义校验规则
const validatePassword = (rule: any, value: string, callback: any) => {
  const reg = /^\d+$/;
  if (!reg.test(value)) {
    callback(new Error('密码必须为数字'));
  } else {
    callback(); // 验证通过
  }
};
const loginForm = ref({ username: 'admin', password: '111111' });
const rules = ref({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'change' },
    { min: 3, max: 8, message: '用户名需在3到8位之间', trigger: 'change' },
  ],
  password: [
    { required: true, message: '密码名不能为空', trigger: 'change' },
    { min: 6, max: 8, message: '密码需在6到8位之间', trigger: 'change' },
    { trigger: 'change', validator: validatePassword },
  ],
});
const loginFormRef = ref();
// 发送请求跳转页面
const isLoading = ref(false);
const getUserInfoData = async () => {
  try {
    isLoading.value = true;
    // validate校验表单
    const isValid = await loginFormRef.value.validate();
    if (!isValid) return;
    const res = await getUserInfo(loginForm.value);
    if (res.code === 200) {
      userStore.setToken(res.data.token);
      router.push('/');
      ElNotification({
        title: `Hi,${getTime()}好!`,
        message: '欢迎回来!',
        type: 'success',
      });
      isLoading.value = false;
    } else {
      ElNotification({
        title: '登录失败',
        message: res.data.message,
        type: 'error',
      });
      isLoading.value = false;
      return Promise.reject(new Error());
    }
  } catch (error) {
    console.error('登录失败:', error);
  }
};
// 封装函数,判断当前时间
</script>
<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" ref="loginFormRef" :model="loginForm" :rules="rules">
          <h1>Hello</h1>
          <div>欢迎来到硅谷甄选!</div>
          <el-form-item prop="username">
            <el-input
              placeholder="请输入用户名"
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              placeholder="请输入密码"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="isLoading"
              class="el-button"
              @click="getUserInfoData"
              type="primary"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    width: 80%;
    padding: 30px;
    margin-top: 25vh;
    h1 {
      color: white;
      font-size: 40px;
      margin-bottom: 10px;
    }
    div {
      color: white;
      margin-bottom: 10px;
    }
    .el-form-item {
      margin-bottom: 25px;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
