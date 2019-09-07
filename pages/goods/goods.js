//获取应用实例  
var app = getApp()
var url = getApp().globalData.url

Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**  * 页面配置  */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,

    /* 五星评分数据 */
    stars: [0, 1, 2, 3, 4],
    normalSrc: '/images/normal.png',
    selectedSrc: '/images/selected.png',
    halfSrc: '/images/half.png',
    key: 0,//评分
    item: {}   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /*  获取系统信息 */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
        
      }
    });
    console.log(options)
    console.log(options.id)
    console.log(options.api)
    var that = this;
    wx.request({
      url: url + '/api/list/' + options.id, //仅为示例，并非真实的接口地址
      success(res) {
        that.setData({ item: res.data.data})
      }
    })
  },

  /**  * 滑动切换tab   */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },

  /**  * 点击tab切换  */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },


  //点击右边,半颗星
  selectLeft: function (e) {
    var key = e.currentTarget.dataset.key
    if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
      //只有一颗星的时候,再次点击,变为0颗
      key = 0;
    }
    console.log("得" + key + "分")
    this.setData({
      key: key
    })

  },
  //点击左边,整颗星
  selectRight: function (e) {
    var key = e.currentTarget.dataset.key
    console.log("得" + key + "分")
    this.setData({
      key: key
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