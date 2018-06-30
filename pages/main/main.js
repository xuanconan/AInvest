// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    array2: [{
      stockname: 'ProPetro Holding Corp',
      score: 85,
      percentage: 99
    }, {
      stockname: '盈透证券',
      score: 85,
      percentage: 99
    },{
        stockname: 'Agios Pharmarceutical',
        score: 85,
        percentage: 99
      }],

    array1: [{
      stockname: '亚夏汽车',
      score: 85,
      percentage: 99
    }, {
      stockname: '路畅科技',
      score: 85,
      percentage: 99
    }, {
      stockname: '智动力',
      score: 85,
      percentage: 99
    }],
    hottoday: 'AAPL',
    totalcount: 1000000,
    marketsummaryM: '美股呈上涨趋势，S&P500上涨0.33%',
    marketsummaryA: 'A股呈盘整趋势，上证下跌0.13%'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
      duration: 3000
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