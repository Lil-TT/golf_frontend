/*
 * @Author: chow
 * @LastEditTime: 2023-03-21 17:27:26
 * @LastEditors: chow
 * @Description: 上传文件接口
 */
import { httpUploadFile } from '../../utils/uploadFile'
const baseUrl = require('../http/base').allBaseUrl.GDEnvs.host

export default class uploads {
  /**
   * @description: 获取用户信息
   * @return {*}
   */
  static uploadImg = (filePath:string) => 
  httpUploadFile.post<ReturnUserInfo>(
      baseUrl + '/mock/getUserInfo',
      filePath
    )
}