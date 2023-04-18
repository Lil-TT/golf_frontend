/*
 * @Author: chow
 * @LastEditTime: 2022-10-25 14:59:26
 * @LastEditors: chow
 * @Description: 小程序环境+域名判断
 */

/**
 * 获取小程序版本信息
 * 值有：develop(开发版)、trial(体验版)、release(正式版)
*/
const accountInfo = wx.getAccountInfoSync()
const envVersion = accountInfo.miniProgram.envVersion || 'release'

/**
   * 国地服务器
  */
const GDEnvs = {
  develop: {
    host: 'http://localhost:8080/',
    imgHost: ''
  },
  trial: {
    host: 'http://localhost:8080/',
    imgHost: 'http://192.168.0.2:20086'
  },
  release: {
    host: 'http://localhost:8080/',
    imgHost: 'http://image.XXXXX.com'
  },
}

export class allBaseUrl {
  /**
   * 国地服务器
  */
  static GDEnvs = GDEnvs[envVersion]
}

