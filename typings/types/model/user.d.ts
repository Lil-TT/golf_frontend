/*
 * @Author: chow
 * @LastEditTime: 2022-10-25 15:56:51
 * @LastEditors: chow
 * @Description: 定义用户相关的model类
 */
/**
 * @description: 提交登录的数据
 */
declare interface UserInfo {
  username: string
  password: string
  type?: string
  key?: string
  code?: string
  source?: string
  state?: string
  phone?: string
}
 declare interface ReturnUserInfo {
  userInfo: UserInfo
}

declare interface Village {
  icon: string,
  industryName: string,
  id: string,
  img: string,
  industryContent: string
}
declare interface VillageList {
  list: Village[]
}