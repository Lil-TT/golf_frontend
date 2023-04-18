/*
 * @Author: chow
 * @LastEditTime: 2022-10-20 16:58:01
 * @LastEditors: chow
 * @Description: api集中管理
 */

import brandBussiness from '../api/brandBussiness'
import uploads from "../api/uploads"

class apis {
  /**
   * @description: 品牌相关Api
   */
  static brandBussiness = brandBussiness
  /**
   * @description: 上传图片接口
   */
   static uploads = uploads
}

export default apis
