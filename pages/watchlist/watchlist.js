// pages/watchlist/watchlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stocks:[
      {
        symbol: 'AAPL',
        tickerId:'gb_aapl',
        score: '60',
        percentage: 1.8,
        price: 190.24,
        recommend: '持有',
        percentile: '47%',
      },
      {
        symbol: 'BIDU',
        tickerId: 'gb_bidu',
        score: '53',
        percentage: 0.86,
        price: 272.97,
        recommend: '卖出',
        percentile: '24%',
      },
      {
        symbol: 'NVDA',
        tickerId: 'gb_nvda',
        score: '47',
        percentage: -0.62,
        price: 265.26,
        recommend: '卖出',
        percentile: '11%',
      },
      {
        symbol: 'AMD',
        tickerId: 'gb_amd',
        score: '41',
        percentage: 0.55,
        price: 16.34,
        recommend: '卖出',
        percentile: '4%',
      },
      {
        symbol: 'GOOGL',
        tickerId: 'gb_googl',
        score: '43',
        percentage: -0.07,
        price: 1159.27,
        recommend: '卖出',
        percentile: '6%',
      },
      {
        symbol: 'SQ',
        tickerId: 'gb_sq',
        score: '63',
        percentage: 0.92,
        price: 64.48,
        recommend: '持有',
        percentile: '61%',
      },
      {
        symbol: 'TAL',
        tickerId: 'gb_tal',
        score: '67',
        percentage: -4.32,
        price: 38.74,
        recommend: '买入',
        percentile: '72%',
      },
      {
        symbol: 'AMZN',
        tickerId: 'gb_amzn',
        score: '47',
        percentage: -0.46,
        price: 1715.97,
        recommend: '卖出',
        percentile: '12%',
      },
      {
        symbol: 'LC',
        tickerId: 'gb_lc',
        score: '89',
        percentage: 2.36,
        price: 3.91,
        recommend: '买入',
        percentile: '99%',
      },
      {
        symbol: 'NFLX',
        tickerId: 'gb_nflx',
        score: '38',
        percentage: -0.23,
        price: 391.98,
        recommend: '卖出',
        percentile: '2%',
      },
      {
        symbol: '亚夏汽车',
        tickerId: 'sz002607',
        score: '89',
        percentage: -0.62,
        price: 8.15,
        recommend: '买入',
        percentile: '99%',
      }
    ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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