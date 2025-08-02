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

// 用户信息的返回值
export interface UserDetailInfo{
      checkUser:{
        avatar:string,
        buttons:string[],
        desc:string
        password:string
        roles:string[]
        routes:string[]
        token:string
        userId:number
        username:string
      }
}