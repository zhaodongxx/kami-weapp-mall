//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true, //衔接滑动
    interval: 3000,
    duration: 1000,
    goods: [{
      id: 1,
      name: "商品名称商品名称商品名称商品名称",
      minPrice: "23.00元",
      originalPrice: "23.00元",
      pic: "/images/books/001.jpg"
    }, {
      id: 2,
      name: "商品名称商品名称商品名称商品名称",
      minPrice: "23.00元",
      originalPrice: "23.00元",
      pic: "/images/books/001.jpg"
    }, {
      id: 3,
      name: "商品名称商品名称商品名称商品名称",
      minPrice: "23.00元",
      originalPrice: "23.00元",
      pic: "/images/books/001.jpg"
    }, {
      id: 4,
      name: "商品名称商品名称商品名称商品名称",
      minPrice: "23.00元",
      originalPrice: "23.00元",
      pic: "/images/books/001.jpg"
    }, {
      id: 5,
      name: "商品名称商品名称商品名称商品名称",
      minPrice: "23.00元",
      originalPrice: "23.00元",
      pic: "/images/books/001.jpg"
    }, {
      id: 6,
      name: "商品名称商品名称商品名称商品名称",
      minPrice: "23.00元",
      originalPrice: "23.00元",
      pic: "/images/books/001.jpg"
    }]
  },
  //事件处理函数

  //跳转至商品详情页  
  toDetailsTap: function(e) {
    wx.navigateTo({
      url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.id
    })
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {},
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})