<script lang="ts" setup>
import type { TrademarkItem } from '@/api/product/trademark/trademark';
import { ref } from 'vue';
const isOpen = ref(false);
const title = ref();
// 向外暴露一个方法,接收参数判断是新增还是编辑
const open = (row?: TrademarkItem) => {
  isOpen.value = true;
  if (row?.id) {
    title.value = '编辑品牌';
  } else {
    title.value = '添加品牌';
  }
};
defineExpose({
  open,
});
</script>
<template>
  <div>
    <el-drawer v-model="isOpen" :title="title" direction="rtl" class="demo-drawer">
      <el-form>
        <el-form-item label="品牌名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="品牌分类">
          <el-select placeholder="请选择分类">
            <el-option label="前端开发"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="品牌logo">
          <el-upload
            trigger="click"
            class="avatar-uploader"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :show-file-list="false"
          >
            <img class="avatar" />
            <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>
<style lang="scss" scoped>
.avatar-uploader {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #968c8c;
  cursor: pointer;
  border-radius: 6px;
  &:hover {
    border: 2px dashed #6464f1;
  }
  .avatar-uploader-icon {
    font-size: 18px;
  }
}
</style>
