/*
 * @Author: chow
 * @Date: 2022-10-18 16:46:07
 * @LastEditTime: 2022-10-27 10:02:33
 * @LastEditors: chow
 * @Description: 
 */
import { ComponentWithStore } from 'mobx-miniprogram-bindings'
import { storeBindings } from "./behavior"
import $api from '../../config/http/index'

// const app = getApp<IAppOption>()

ComponentWithStore({
  data: {
    brandList: [] as brand[]
  },
  ...storeBindings,
  methods: {
    // 事件处理函数
    bindViewTap() {
      wx.navigateTo({
        url: '../logs/logs',
      })
    },
    onLoad() {
      // @ts-ignore
      if (wx.getUserProfile) {
        this.setData({
          canIUseGetUserProfile: true
        })
      }
      this.onAdd()
    },
    /**测试发起请求*/
    onAdd() {
      $api.brandBussiness.getBrandList({page:1,pageSize:10}).then((res) => {
        
        if (res.code === 1) {
          const list = res.data.records
          this.setData({ brandList: list })
        }
      })
    },
    /**测试上传图片*/
    onUpladImage() {
      wx.chooseImage({
        count: 9,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: (result) => {
          let tempFilePaths = result.tempFilePaths[0]
          $api.uploads.uploadImg(tempFilePaths).then(res => {
            console.log(res.data, '测试输出')
          })
        },
        fail: () => { },
        complete: () => { }
      });
    },


    getUserProfile() {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res)
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    },
  }
})
