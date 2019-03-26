//index.js
//获取应用实例
const app = getApp()
import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';

Page({
  data: {
    imageURL: "/images/books/001.jpg",
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {

  },
  onClickSubmitOrder() {
    Toast.loading({
      duration:1500,
      mask: true,
      message: '提交订单中...',
      forbidClick: true, // 禁用背景点击
    });
    setTimeout(function() {
      //要延时执行的代码
      wx.switchTab({
        url: '/pages/my/my'
      })
    }, 1600)
  }
})