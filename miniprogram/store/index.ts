/*
 * @Author: chow
 * @Date: 2022-10-21 15:19:27
 * @LastEditTime: 2022-10-22 17:26:13
 * @LastEditors: chow
 * @Description: 全局状态统管理
 */
import { configure } from 'mobx-miniprogram'
export { globalStore } from './globalStore'
export { userStore } from './userStore'

// 不允许在动作外部修改状态,需要结合定义方法中action方法使用才有效
configure({ enforceActions: "observed" });
