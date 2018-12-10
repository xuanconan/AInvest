// pages/main/main.js

const app = getApp()
//获取global基础domain地址
var sinaDomain = app.globalData.sinaDomain
var appDomain = app.globalData.appDomain
var testingDomain = 'http://47.94.195.63/'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,

    usTop: [{
      tickerId:'gb_pump',
      stockname: 'ProPetro Holding Corp',
      score: 85,
      percentage: 99
    }, {
        tickerId: 'gb_amd',
      stockname: 'Advanced Micro Devices',
      score: 85,
      percentage: 99
    }, {
        tickerId: 'gb_agio',
      stockname: 'Agios Pharmarceutical',
      score: 85,
      percentage: 99
    }],

    chinaTop: [{
      tickerId: 'sz002607',
      stockname: '亚夏汽车',
      score: 85,
      percentage: 99
    }, {
        tickerId: 'sz002813',
      stockname: '路畅科技',
      score: 85,
      percentage: 99
    }, {
      tickerId: 'sz300686',
      stockname: '智动力',
      score: 85,
      percentage: 99
    }],

    dailySummary: {
      hottoday: 'AAPL',
      totalcount: 1000000,
      marketsummaryM: '美股呈上涨趋势，S&P500上涨0.33%',
      marketsummaryA: 'A股呈盘整趋势，上证下跌0.13%'
    },

    dailySummary1: {
    },

    dailySummary2: {
    },

    topUS: {
    },

    topCN: {
    },

    indexTesting: {
    },

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.showLoading({ title: '拼命加载中...' })
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

    //获取热搜累计搜索和A股美股明星
    wx.request({
      url: appDomain + 'top5?market=us',

      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          dailyUS: res.data
        })
      }
    });

    //获取新浪股票信息 A股
    wx.request({
      url: appDomain + 'top5',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          topCN: res.data
        })
      }
    });

    //获取后端数据
    wx.request({
      url: testingDomain,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          indexTesting: res.data
        })
      }
    });

    //美股
    wx.request({
      url: appDomain + 'top5?market=us',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          topUS: res.data
        })
      }
    });


    // //获取明星 A股 暂时不加载因为后端还没连
    // wx.request({
    //   url: appDomain + 'china',
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //     that.setData({
    //       chinaTop: res.data
    //     })
    //   }
    // });
    // //美股
    // wx.request({
    //   url: appDomain + 'us',
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //     that.setData({
    //       usTop: res.data
    //     })
    //   }
    // });


    setTimeout(function () {
      //要延时执行的代码
      wx.hideLoading()
    }, 1200)

  },




  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
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

  upper: function () {
    wx.showNavigationBarLoading()
    this.refresh();
    console.log("upper");
    setTimeout(function () { wx.hideNavigationBarLoading(); wx.stopPullDownRefresh(); }, 2000);
  },

  refresh: function () {
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 2000
    });
    var feed = util.getData2();
    console.log("loaddata");
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    });
    setTimeout(function () {
      wx.showToast({
        title: '刷新成功',
        icon: 'success',
        duration: 2000
      })
    }, 3000)

  },

  tapMessage: function (event) {
    console.log(event);
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

  },

  /**
   * 跳转到搜索
   */
  onStockSearchEvent: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },

})