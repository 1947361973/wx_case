// pages/case/case.js
import { getRandomColor } from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }
    ],
    src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    photos: ['https://www.baidu.com/img/bd_logo1.png?where=super']
  },
  esc(){
    wx.navigateBack()
  },
  toast() {
    //轻提示
    // wx.showToast({
    //   title: '精品推荐',
    //   icon: 'success',
    //   duration: 2000,
    //   mask:true
    // })
    // 模态框
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success(res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })

    // loading2秒消失
    // wx.showLoading({
    //   title: '加载中',
    // })
    // setTimeout(function () {
    //   wx.hideLoading()
    // }, 2000)

    // 操作菜单返回索引
    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success(res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail(res) {
    //     console.log(res.errMsg)
    //   }
    // })

    // 导航栏的loading
    // wx.showNavigationBarLoading();
    // setTimeout(()=>{
    //   wx:wx.hideNavigationBarLoading()
    // },1000)

    // 点击目标动画方式修改顶部的背景颜色
    // wx.setNavigationBarColor({
    //   frontColor: '#ffffff',
    //   backgroundColor: '#ff0000',
    //   animation: {
    //     duration: 400,
    //     timingFunc: 'easeIn'
    //   }
    // })

    // 手动点击按钮实现下拉请求数据
    // wx.startPullDownRefresh({
    //   success:function(){
    //     console.log('下拉成功，去获取数据')
    //     setTimeout(()=>{
    //       // 数据回来了这里只是用延时器来模拟实际要以数据回来后再执行下面的
    //       wx.stopPullDownRefresh()
    //     },1000)
    //   }
    // })

    // 数据请求,这里需要设置一个安全域名，还要注意打包时候的问题
    // wx.request({
    //   url: 'https://api.list', //仅为示例，并非真实的接口地址
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     console.log(res.data)
    //   }
    // })

    // 本地存储
    // 存储成功后再读取成功的storage数据
    // wx.setStorage({
    //   key: "bulala",
    //   data: JSON.stringify({a:1,b:2}),
    //   success:function(){
    //     wx.getStorage({
    //       key:'bulala',
    //       success: function (res){
    //         console.log('bulala的值',res.data)
    //       }
    //     })
    //   }
    // })
    // 这里是异步删除，增加，读取，本地存储操作，这里的删除操作不要轻易使用会删除所有
    // wx.removeStorageSync('bulala')
    // wx.setStorageSync('bulala', JSON.stringify({ a: 3, b: 4 }))
    // console.log(wx.getStorageSync('bulala'))

  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value //获取输入框的内容，存到实例属性上
  },
  bindButtonTap: function () {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  startRecord(){
    wx.startRecord({
      success(res) {
        const tempFilePath = res.tempFilePath
      }
    })
  },
  stopRecord(){
    wx.stopRecord() // 结束录音
  },
  play(){
    wx.startRecord({
      success(res) {
        const tempFilePath = res.tempFilePath
        wx.playVoice({
          filePath: tempFilePath,
          complete() { }
        })
      }
    })
  },
  clickImage(){
    console.log(this.data.photos);

    wx.previewImage({
      current: this.data.photos[0], // 当前显示图片的http链接
      urls: this.data.photos
    })
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:3000/api/list', //仅为示例，并非真实的接口地址
      data: { 
        _page: 1,
        _limit: 14
       },
      success(res) {
        console.log(res.data.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (res,e) {
    this.videoContext = wx.createVideoContext('myVideo')
    this.mapCtx = wx.createMapContext('myMap')

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