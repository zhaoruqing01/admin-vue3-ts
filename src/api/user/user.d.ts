// 用户信息相关的类型
export interface UserData{
  username:string,
  password:string
}

// 登录返回值的类型
export interface UserResponse{
  code:number,
  message:string
  token:string
}

// 用户信息的返回值
export interface UserDetailInfo{
    id:number
    username:string
    nickname:string
    email:string
    user_pic:number
}