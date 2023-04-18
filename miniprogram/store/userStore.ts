/*
 * @Author: chow
 * @Date: 2022-10-19 17:35:07
 * @LastEditTime: 2022-10-25 15:21:43
 * @LastEditors: chow
 * @Description: 用户信息
 */
import { observable, action } from 'mobx-miniprogram'

export const userStore = observable({

  numA: 1000,
  numB: 1000,
  count: 0,
  userInfo: {},

  // 计算属性
  // get double () {
  //   return this.count * 2
  // },

  // action,修改函数事件
  // 由于mobx-miniprogram库问题，我们需要加多一个this类型说明，不影响传入的参数
  increase: action(function (this: any, value: number) {
    this.count += value
  }),

  setUserInfo: action(function (this: any, data: Object) {
    this.userInfo = data
  })
})