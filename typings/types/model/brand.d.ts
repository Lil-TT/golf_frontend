/*
 * @Author: chow
 * @LastEditTime: 2022-10-25 15:56:51
 * @LastEditors: chow
 * @Description: 定义品牌相关的model类
 */
/**
 * @description 获取品牌列表
 */
declare interface brand {
  id: number
  brief: string
  detail: string
  imgc: string
  name: string
  brandpic?: string
}
declare interface ReturnBrandList {
  records: brand[]
}
