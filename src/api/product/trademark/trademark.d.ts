// 获取品牌信息请求参数的类型
export interface TrademarkParams{
  pagenum:number
  pagesize:number
  cate_id:string
  state:string
}

// 获取品牌信息后的数据
export interface GetTrademark{
  data:TrademarkItem[]
}
export interface TrademarkItem{
  cate_name:string
  id:number
  pub_date:string
  state:string
  title:string
}
