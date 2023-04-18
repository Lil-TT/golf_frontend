// pages/display_stands/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      const page: any = getCurrentPages().pop();
      this.getTabBar().setData({
        value: '/' + page.route
      })
    }
  },

  navToBrand() {
    wx.navigateTo({
      url: '../brand_introduce/index'
    })
  }

  

})