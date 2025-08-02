// 用户相关的请求
import type { UserData, UserResponse } from '@/types/user';
import request from '@/utils/request';

// 获取token
export const getUserInfo = (data: UserData): Promise<UserResponse> => {
  return request.post('/user/login', data); // 返回 Promise
};
