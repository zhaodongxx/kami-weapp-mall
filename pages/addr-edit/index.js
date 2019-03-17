//index.js
//获取应用实例
const app = getApp();
import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';

Page({
  data: {
    show: false,
    aera: [],
    areaList: {
      province_list: {
        110000: '北京市',
        120000: '天津市'
      },
      city_list: {
        110100: '北京市',
        120100: '天津市',
      },
      county_list: {
        110101: '东城区',
        110102: '西城区',
        110105: '朝阳区',
        110106: '丰台区',
        120101: '和平区',
        120102: '河东区',
        120103: '河西区',
        120104: '南开区',
        120105: '河北区',
      }
    }
  },
  onLoad: function() {},
  //保存
  handleSubmit() {
    wx.wx.navigateBack({
      delta: 1
    })
  },
  showAreaList() {
    wx.hideKeyboard()
    this.setData({
      show: true,
    })
  },
  //Popup弹出层关闭是
  onClose() {
    this.setData({
      show: false,
    })
  },
  cancelArea() {
    this.setData({
      show: false,
    })
  },
  addArea(options) {
    console.log(options)
    console.log(options.detail)
    this.setData({
      show: false,
      area: options.detail.values
    })
  }
})