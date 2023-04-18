/*
 * @Author: chow
 * @LastEditTime: 2022-10-25 15:34:43
 * @LastEditors: chow
 * @Description: 品牌相关的事务
 */
import { httpRequest } from '../../utils/request'
const baseUrl = require('../http/base').allBaseUrl.GDEnvs.host

export default class brandBussiness {
  /**
   * @description: 获取品牌列表
   * @return {*}
   */
  static getBrandList = (data: any) =>
    httpRequest.get<ReturnBrandList>(
      baseUrl + 'brand/page',
      data
    )

  /**
   * @description: 获取品牌详情
   * @return {*}
   */
  static getBrandById = (data: brand) =>
    httpRequest.post<brand>(
      baseUrl + '/mock/villageList',
      data
    )
}
