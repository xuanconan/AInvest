// pages/summary/summary.js
var wxCharts = require('../../utils/wxCharts.js');
var app = getApp();
var radarChart = null;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    stock:{
      symbol: 'AAPL',
      score:'63',
      percentage: '1.8',
      price:'190.24',
      industry: '消费品',
      recommend: '持有',
      percentile:'66.14%',
      summary:'技术面看涨，基本面看涨，资金面看跌',
      tech: '中性，股价短期趋势增强，长期趋势减弱',
      fundamental: '看涨，公司盈利能力高，财务透明',
      finance: '中性，短期资金流入增加，长期资金流入减少'
    },

    array:[
      {
        symbol:'SJM',
        score: '89'
      },
      {
        symbol: 'NLS',
        score: '81'
      },
      {
        symbol: 'PAY',
        score: '80'
      }
    ]
  },

  imageLoad: function (e) {
    var $width = e.detail.width,    //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;    //图片的真实宽高比例
    var viewWidth = 718,           //设置图片显示宽度，左右留有16rpx边距
      viewHeight = 718 / ratio;    //计算的高度值
    var image = this.data.images;
    //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
    image[e.target.dataset.index] = {
      width: viewWidth,
      height: viewHeight
    }
    this.setData({
      images: image
    })
  },

  touchHandler: function (e) {
    console.log(radarChart.getCurrentDataIndex(e));
  },
  onReady: function (e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    radarChart = new wxCharts({
      canvasId: 'radarCanvas',
      type: 'radar',
      categories: ['事件驱动', '价值', '规模', '市场热度', '盈利', '运营稳健','趋势', '财务透明'],
      series: [{
        name: '个股表现',
        data: [110, 105, 115, 85, 115, 115, 115, 115]
      }],
      width: windowWidth,
      height: 200,
      extra: {
        radar: {
          max: 150
        }
      }
    });
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