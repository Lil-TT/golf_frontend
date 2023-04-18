Component({
  data: {
    value: '/pages/display_stands/index',
    tabBar: [{
      value: '/pages/display_stands/index',
      icon: 'home',
      label: '小店',
    }, {
      value: '/pages/nearby_shop/index',
      icon: 'location',
      label: '附近',
    }, {
      value: '/pages/moments/index',
      icon: 'chat',
      label: '瞬间'
    }, {
      value: '/pages/my/index',
      icon: 'user',
      label: '个人'
    }]
  },

  //  组件的方法列表
  methods: {
    onChange(e: any) {
      wx.switchTab({
        url: e.detail.value
      });
    }
  }
})