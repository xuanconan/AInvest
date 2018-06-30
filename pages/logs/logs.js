//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    });
    console.log("log page execute: onLoad")
  },
  onReady: function() {
    console.log("log page execute: onReady")
  },
  onShow: function () {
    console.log("log page execute: onShow")
  },
  onHide: function () {
    console.log("log page execute: onHide")
  },
  onUnload: function () {
    console.log("log page execute: onUnload")
  },
  onPullDownRefresh: function () {
    console.log("log page execute: onPullDownRefresh")
  },
  onReachBottom: function () {
    console.log("log page execute: onReachBottom")
  }
})
