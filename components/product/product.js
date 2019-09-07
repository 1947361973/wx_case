var url = getApp().globalData.url
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    api: {
      type: String,
      value: 'list/'
    },
    item: {
      type: Object,
    },
  },
  attached: function () {
    // 在组件实例进入页面节点树时执行
    var that = this;
    wx.request({
      url: url + '/api/banner', //仅为示例，并非真实的接口地址
      data: {
        _page: 1,
        _limit: 3
      },
      success(res) {
        var str = [];
        for (let i = 0; i < 3; i++) {
          str.push(res.data.data[i])
          that.setData({ imgUrls: str });
        }
      }
    })
  },
  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: []
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    clickHandler() {
      wx.navigateTo({
        url: '/pages/goods/goods?id=' + this.properties.item.id + '&api=' + this.properties.api
      })
    }
  }
})
