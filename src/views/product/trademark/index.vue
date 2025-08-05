<script lang="ts" setup>
import { getProductInfo } from '@/api/product/trademark/index';
import type {
  GetTrademark,
  TrademarkItem,
  TrademarkParams,
} from '@/api/product/trademark/trademark';
import { onMounted, ref } from 'vue';
import EditTrademark from './components/EditTrademark.vue';

const editTrademarkRef = ref();
// 表单数据
const params = ref<TrademarkParams>({
  pagenum: 1,
  pagesize: 5,
  cate_id: '',
  state: '',
});
// 获取表单数据
const isLoading = ref(true);
const tableList = ref<GetTrademark>();
const getTableList = async () => {
  const res = await getProductInfo(params.value);
  tableList.value = res.data;
  console.log(res);
};
// 新增品牌
const addTableList = () => {
  editTrademarkRef.value.open();
};
// 编辑品牌
const onEdit = (row: TrademarkItem) => {
  editTrademarkRef.value.open(row);
};

onMounted(() => {
  isLoading.value = true;
  getTableList();
  isLoading.value = false;
});
</script>
<template>
  <el-card>
    <el-button type="primary" @click="addTableList">
      <el-icon><Plus /></el-icon>添加品牌
    </el-button>
    <!-- 表格内容 -->
    <el-table :data="tableList" stripe style="width: 100%" v-loading="isLoading">
      <el-table-column prop="id" label="序号" width="180" />
      <el-table-column prop="cate_name" label="品牌名称" width="180" />
      <el-table-column prop="title" label="品牌logo" width="180" />
      <el-table-column prop="address" label="品牌操作">
        <template #default="{ row }">
          <el-button size="small" @click="onEdit(row)"> Edit </el-button>
          <el-button size="small" type="danger"> Delete </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  <!-- 抽屉区域 -->
  <EditTrademark ref="editTrademarkRef"></EditTrademark>
</template>
<style lang="scss" scoped></style>
