// pages/fenlei/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    hidden: false,
    curNav: 1,
    curIndex: 0,
    cart: [],
    cartTotal: 0,
    navList: [
      {
        id: 1,
        name: '基础护理'
      },
      {
        id: 2,
        name: '防晒用品'
      },
      {
        id: 3,
        name: '洁面护肤'
      },
      {
        id: 4,
        name: '男士用品'
      },
      {
        id: 5,
        name: '面部底妆'
      },
      {
        id: 6,
        name: '眼部彩妆'
      },
      {
        id: 7,
        name: '其他用品'
      }
    ],
    dishesList: [
      [
        {
          name: "自然堂面膜",
          price: 38,
          num: 1,
          id: 1,
          img: "/img/cp01.jpg"
        },
        {
          name: "妮维雅(NIVEA)晶纯皙白泡沫洁面乳150g",
          price: 58,
          num: 1,
          id: 29,
          img: "/img/cp02.jpg"
        },
        {
          name: "娇兰口红",
          price: 88,
          num: 1,
          id: 2,
          img: "/img/cp03.jpg"
        },
        {
          name: "妮维雅(NIVEA)晶纯皙白泡沫洁面乳150g",
          price: 58,
          num: 1,
          id: 29,
          img: "/img/cp04.jpg"
        },
        {
          name: "加量装(洗面奶 护肤化妆品)",
          price: 88,
          num: 1,
          id: 2,
          img: "/img/cp05.jpg"
        },
        {
          name: "娇兰口红",
          price: 88,
          num: 1,
          id: 2,
          img: "/img/cp03.jpg"
        },
        {
          name: "妮维雅(NIVEA)晶纯皙白泡沫洁面乳150g",
          price: 58,
          num: 1,
          id: 29,
          img: "/img/cp04.jpg"
        },
        {
          name: "加量装(洗面奶 护肤化妆品)",
          price: 88,
          num: 1,
          id: 2,
          img: "/img/cp05.jpg"
        }
      ],
      [
        {
          name: "妮维雅(NIVEA)晶纯皙白泡沫洁面乳150g",
          price: 18,
          num: 1,
          id: 3,
          img: "/img/cp06.jpg"
        },
        {
          name: "御泥坊 亮颜补水面膜贴21片",
          price: 58,
          num: 1,
          id: 4,
          img: "/img/cp07.jpg"
        }
      ],
      [
        {
          name: "自然堂套装化妆品女雪域精粹",
          price: 18,
          num: 1,
          id: 5,
          img: "/img/cp08.jpg"
        },
        {
          name: "御泥坊 亮颜补水面膜贴21片",
          price: 8,
          num: 1,
          id: 6,
          img: "/img/cp09.jpg"
        }
      ],
      []
    ],
    dishes: []
  },

  selectNav(event) {
    let id = event.target.dataset.id,
      index = parseInt(event.target.dataset.index);
    self = this;
    this.setData({
      curNav: id,
      curIndex: index
    })
  },

  onLoad() {
    var that = this;
    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
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