// 用户相关的请求
import type { UserData, UserDetailInfo, UserResponse } from '@/api/user/user';
import request from '@/utils/request';

// 获取token
// export const getUserInfo = (data: UserData): Promise<UserResponse | any> => {
//   return request.post('/user/login', data); // 返回 Promise
// };

// 登录请求
export const getUserInfo = (data: UserData): Promise<UserResponse | any> => {
  return request.post('/api/login', data);
};

// 获取用户的个人信息
export const getUserDetailInfo = () => request.get<UserDetailInfo | any>('/my/userinfo');

// // 获取用户信息
// export const getUserDetailInfo = () => {
//   return request.get<UserDetailInfo>('/user/info');
// };
