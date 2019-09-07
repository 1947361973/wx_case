// pages/index/index.js
var url = getApp().globalData.url
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    list:[],
    lists:'list/'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: url+'/api/banner', //仅为示例，并非真实的接口地址
      data: {
        _page: 1,
        _limit: 3
      },
      success(res) {
        var str = [];
        for(let i=0;i<3;i++){
          str.push(res.data.data[i])
          that.setData({imgUrls:str});
        }
      }
    })
    wx.request({
      url: url + '/api/list', //仅为示例，并非真实的接口地址
      data: {
        _page: 1,
        _limit: 14
      },
      success(res) {
        var str = [];
        for (let i = 0; i < 14; i++) {
          str.push(res.data.data[i])
          that.setData({ list: str });
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉了')
    setTimeout(() => {
      // 数据回来了这里只是用延时器来模拟实际要以数据回来后再执行下面的
      wx.stopPullDownRefresh()
      console.log('下拉读取数据回来了')
    }, 1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})