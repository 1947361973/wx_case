// pages/login/login.js
var url = getApp().globalData.url
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  reg(){
    console.log("编程式跳转")
    wx.navigateTo({
      url: '/pages/reg/reg'
    })
  },
  login(e) {
    wx.request({
      url: url + '/api/login', //仅为示例，并非真实的接口地址
      data: {
        username: e.detail.value.userName,
        password: e.detail.value.password
      },
      method: 'POST',
      success(res) {
        if (res.data.err==0){
          wx.switchTab({
            url: '/pages/user/user'
          })
        }else{
          wx.showToast({
            title: '账号或者密码错误',
            icon: 'none',
            duration: 2000,
            mask:true
          })
        }
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