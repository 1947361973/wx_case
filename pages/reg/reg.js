// pages/reg/reg.js
var url = getApp().globalData.url
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  login(){
    console.log("编程式跳转")
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },
  reg(e){
    wx.request({
      url: url+'/api/reg', //仅为示例，并非真实的接口地址
      data: {
        username: e.detail.value.userName, 
        password: e.detail.value.password
      },
      header: {
        "Content-Type": "application/form-data"
      },
      method: "POST",
      success(res) {
        console.log(res.data)
        console.log(e.detail.value.userName, e.detail.value.password)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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