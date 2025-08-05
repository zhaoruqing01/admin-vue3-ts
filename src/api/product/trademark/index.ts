// 品牌管理的信息
import request from '@/utils/request';
import type { GetTrademark, TrademarkParams } from './trademark';

// 获取列表信息
export const getProductInfo = (params: TrademarkParams) => {
  return request.get<GetTrademark>('http://big-event-vue-api-t.itheima.net/my/article/list', {
    params,
  });
};

// 新增品牌信息

// // 获取编辑信息
// export const putEditService = (data)=>request.put('/my/article/info',data)

// // 文章：编辑文章接口
// export const artEditService = (data) => request.put('/my/article/info', data)

// // 文章：删除文章接口
// export const artDelService = (id) =>
//   request.delete('/my/article/info', { params: { id } })
