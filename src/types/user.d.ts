// 用户信息相关的类型
export interface UserData{
  username:string,
  password:string
}

// 登录返回值的类型
export interface UserResponse{
  code:number,
  data:{
    token:string,
    message?:string
  }
}