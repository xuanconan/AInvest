/**
 * WeChat API 模块
 * @type {Object}
 * 用于将微信官方`API`封装为`Promise`方式
 * > 小程序支持以`CommonJS`规范组织代码结构
 */
const wechat = require('./utils/wechat.js')


/**
 * Baidu API 模块
 * @type {Object}
 */
const baidu = require('./utils/baidu.js')

//app.js
App({

  data: {
    name: 'AInvest',
    version: '0.1.0',
  },

  globalData: {
    userInfo: null,
    currentCity: '北京',
    sinaDomain: 'http://hq.sinajs.cn/list=',
    appDomain:'http://47.94.195.63/'
  },

  /**
  * WeChat API
  */
  wechat: wechat,

  /**
  * Baidu API
  */
  baidu: baidu,

  /**
   * 生命周期函数--监听小程序初始化
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */

  onLaunch: function () {

    var that = this;

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log("app run function: on launch")

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })


    // 获取用户城市信息
    wechat
      .getLocation()
      .then(res => {
        const { latitude, longitude } = res
        return baidu.getCityName(latitude, longitude)
      })
      .then(name => {
        this.globalData.currentCity = name.replace('市', '')
        console.log(`currentCityMypage : ${this.globalData.currentCity}`)
      })
      .catch(err => {
        this.globalData.currentCity = '北京'
        console.error(err)
      })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })


    console.log(`currentCityBegin : ${that.globalData.currentCity}`)

  },

  


})