/*
 * @Author: chow
 * @Date: 2022-10-19 19:34:48
 * @LastEditTime: 2022-10-20 14:51:05
 * @LastEditors: chow
 * @Description: 全局参数
 */
import { observable, action } from "mobx-miniprogram";

export const globalStore = observable({
  numA: 1,
  numB: 2,

  // 计算属性
  get sum() {
    return this.numA + this.numB;
  },

  // action函数修改
  update: action(function (this:any) {
    const sum = this.sum;
    this.numA = this.numB;
    this.numB = sum;
  }),
});
