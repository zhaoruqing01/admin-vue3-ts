// 用户相关的请求
import type { UserData, UserDetailInfo, UserResponse } from '@/api/user/user';
import request from '@/utils/request';

// 获取token
export const getUserInfo = (data: UserData): Promise<UserResponse> => {
  return request.post('/user/login', data); // 返回 Promise
};

// 获取用户信息
export const getUserDetailInfo = () => {
  return request.get<UserDetailInfo>('/user/info');
};
