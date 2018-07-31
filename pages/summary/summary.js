// pages/summary/summary.js
var wxCharts = require('../../utils/wxCharts.js');
var app = getApp();
var radarChart = null;
var lineChart = null;
var columnChart = null;
var pieChart = null;


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

    basic: {
      symbol: 'AAPL',
      score: '73',
      percentage: '1.8',
      price: '190.24',
      industry: '消费品',
      recommend: '持有',
      percentile: '66.14%',
      summary1: '毛利润同比增长13.7%，盈利增加',
      summary2: '营业收入同比增长15.6，产品销售增加',
      summary3: '存货是行业均值的56%，存货较少，产品销售较好',
    },
    finance: {
      symbol: 'AAPL',
      score: '70',
      percentage: '1.8',
      price: '190.24',
      industry: '消费品',
      recommend: '持有',
      percentile: '66.14%',
      summary1: '短期资金流入加强147%，买方力量增强',
      summary2: '长期资金流入同比下降75%，买方力量减弱',
      summary3: '存货是行业均值的56%，存货较少，产品销售较好',
    },

    tech: {
      symbol: 'AAPL',
      score: '67',
      percentage: '1.8',
      price: '190.24',
      industry: '消费品',
      recommend: '持有',
      percentile: '66.14%',
      summary1: '股价同比增长29.5%，股价近期走势稳健',
      summary2: '长期趋势同比下降超过50%，长期趋势正在减弱',
      // summary3: '存货是行业均值的56%，存货较少，产品销售较好',
    },

    buysell:[
      {
        sellorbuy:'买',
        date:'2018/04/25',
        score:'80',
        price: '163'
      },
      {
        sellorbuy: '卖',
        date: '2018/05/10',
        score:'33',
        price: '190'
      },
      {
        sellorbuy: '买',
        date: '2018/06/25',
        score: '70',
        price: '182'
      },
      {
        sellorbuy: '卖',
        date: '2018/07/12',
        score: '49',
        price: '191'
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
    // console.log(radarChart.getCurrentDataIndex(e));
    console.log(lineChart.getCurrentDataIndex(e));
    lineChart.showToolTip(e, {
      // background: '#7cb5ec',
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },

  createSimulationData: function () {
    var categories = [];
    var data = [];
    for (var i = 0; i < 60; i++) {
      categories.push('2018-' + (i + 1));
      data.push(Math.random() * (20 - 10) + 10);
    }
    // data[4] = null;
    return {
      categories: categories,
      data: data
    }
  },
  updateData: function () {
    var simulationData = this.createSimulationData();
    var series = [{
      name: '股价',
      data: simulationData.data,
      format: function (val, name) {
        return val.toFixed(2) + '元';
      }
    }];
    lineChart.updateData({
      categories: simulationData.categories,
      series: series
    });
  },

  onLoad: function (e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    var simulationData = this.createSimulationData();
    lineChart = new wxCharts({
      canvasId: 'prices',
      type: 'line',
      categories: ['2018/04/16', '2018/04/17', '2018/04/18', '2018/04/19', '2018/04/20', '2018/04/23', '2018/04/25', '2018/04/26', '2018/04/27', '2018/04/30', '2018/05/01', '2018/05/02', '2018/05/03', '2018/05/07', '2018/05/08', '2018/05/09', '2018/05/10', '2018/05/11', '2018/05/14', '2018/05/15', '2018/05/16', '2018/05/17', '2018/05/18', '2018/05/21', '2018/05/22', '2018/05/23', '2018/05/24', '2018/05/25', '2018/05/29', '2018/05/30', '2018/05/31', '2018/06/01', '2018/06/04', '2018/06/05', '2018/06/06', '2018/06/07', '2018/06/08', '2018/06/11', '2018/06/12', '2018/06/13', '2018/06/14', '2018/06/15', '2018/06/18', '2018/06/19', '2018/06/20', '2018/06/21', '2018/06/22', '2018/06/25', '2018/07/03', '2018/07/05', '2018/07/06', '2018/07/09', '2018/07/10', '2018/07/11', '2018/07/12', '2018/07/13', '2018/07/16', '2018/07/17', '2018/07/18', '2018/07/19'],
      animation: true,
      // background: '#f5f5f5',
      series: [{
        name: '股价',
        data: [175.82, 178.24, 177.84, 172.80, 165.72, 165.24, 163.65, 164.22, 162.32, 165.26, 169.10, 176.57, 176.89, 185.16, 186.05, 187.36, 190.04, 188.59, 188.15, 186.44, 188.18, 186.99, 186.31, 187.63, 187.16, 188.36, 188.15, 188.58, 187.90, 187.50, 186.87, 190.24, 191.83, 193.31, 193.98, 193.46, 191.70, 191.23, 192.28, 190.70, 190.80, 188.84, 188.74, 185.69, 186.50, 185.46, 184.92, 182.17, 183.92, 185.40, 187.97, 190.58, 190.35, 187.88, 191.03, 191.33, 190.91, 191.45, 190.40, 191.88],
        format: function (val, name) {
          return val.toFixed(2) + '元';
        }
      }, {
        name: 'AI评分',
        data: [47, 46, 45, 53, 61, 70, 80, 72, 72, 65, 57, 50, 50, 38, 39, 41, 33, 40, 41, 48, 49, 57, 56, 56, 51, 51, 50, 51, 55, 55, 55, 64, 69, 64, 61, 62, 70, 70, 70, 70, 60, 70, 63, 70, 68, 70, 74, 70, 70, 71, 56, 48, 70, 70, 49, 70, 71, 54, 54, 54],
        format: function (val, name) {
          return val.toFixed(2);
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '价格 (元)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
  },

  onReady: function (e) {
    var windowWidth = wx.getSystemInfoSync().windowWidth;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    // radarChart = new wxCharts({
    //   canvasId: 'radarCanvas',
    //   type: 'radar',
    //   categories: ['事件驱动', '价值', '规模', '市场热度', '盈利', '运营稳健','趋势', '财务透明'],
    //   series: [{
    //     name: '个股表现',
    //     data: [110, 105, 115, 85, 115, 115, 115, 115]
    //   }],
    //   width: windowWidth,
    //   height: 200,
    //   extra: {
    //     radar: {
    //       max: 150
    //     }
    //   }
    // });

    columnChart = new wxCharts({
      canvasId: 'profit',
      type: 'column',
      animation: true,
      categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
      series: [{
        name: 'AAPL',
        data: [14010, 25920, 41730, 37040, 39510, 53394, 45687, 48351]
      }, {
        name: '行业平均',
        data: [8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000]
      }],
      yAxis: {
        format: function (val) {
          return val + '百万';
        }
      },
      width: wx.getSystemInfoSync().windowWidth,
      height: 200
    });

    columnChart = new wxCharts({
      canvasId: 'roe',
      type: 'column',
      animation: true,
      categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
      series: [{
        name: 'AAPL',
        data: [29.23, 33.83, 35.30, 29.98, 35.42, 44.74, 35.62, 36.07]
      }, {
        name: '行业平均',
        data: [8, 10, 8, 9, 12, 10, 11, 12]
      }],
      yAxis: {
        format: function (val) {
          return val + '%';
        }
      },
      width: wx.getSystemInfoSync().windowWidth,
      height: 200
    });


    columnChart = new wxCharts({
      canvasId: 'dadan',
      type: 'column',
      animation: true,
      categories: ['2018-03','2018-04', '2018-05', '2018-06', '2018-07'],
      series: [{
        name: '累计大单净量(万手)',
        data: [18, 15, 20, 45, 37],
        format: function (val, name) {
          return val.toFixed(2);
        }
      }],
      yAxis: {
        format: function (val) {
          return val;
        },
        title: 'hello',
        min: 0
      },
      xAxis: {
        disableGrid: false,
        type: 'calibration'
      },
      extra: {
        column: {
          width: 15
        }
      },
      width: windowWidth,
      height: 200,
    });

    pieChart = new wxCharts({
      animation: true,
      canvasId: 'longshort',
      type: 'pie',
      series: [{
        name: '主力买入',
        data: 88,
      }, {
        name: '主力卖出',
        data: 60,
      }, {
        name: '散户买入',
        data: 38,
      }, {
        name: '散户卖出',
        data: 20,
      }],
      width: windowWidth,
      height: 300,
      dataLabel: true,
    });


    lineChart = new wxCharts({
      canvasId: 'costs',
      type: 'line',
      categories: ['2018/04/16', '2018/04/17', '2018/04/18', '2018/04/19', '2018/04/20', '2018/04/23', '2018/04/25', '2018/04/26', '2018/04/27', '2018/04/30', '2018/05/01', '2018/05/02', '2018/05/03', '2018/05/07', '2018/05/08', '2018/05/09', '2018/05/10', '2018/05/11', '2018/05/14', '2018/05/15', '2018/05/16', '2018/05/17', '2018/05/18', '2018/05/21', '2018/05/22', '2018/05/23', '2018/05/24', '2018/05/25', '2018/05/29', '2018/05/30', '2018/05/31', '2018/06/01', '2018/06/04', '2018/06/05', '2018/06/06', '2018/06/07', '2018/06/08', '2018/06/11', '2018/06/12', '2018/06/13', '2018/06/14', '2018/06/15', '2018/06/18', '2018/06/19', '2018/06/20', '2018/06/21', '2018/06/22', '2018/06/25', '2018/07/03', '2018/07/05', '2018/07/06', '2018/07/09', '2018/07/10', '2018/07/11', '2018/07/12', '2018/07/13', '2018/07/16', '2018/07/17', '2018/07/18', '2018/07/19'],
      animation: true,
      // background: '#f5f5f5',
      series: [{
        name: '收盘价',
        data: [175.82, 178.24, 177.84, 172.80, 165.72, 165.24, 163.65, 164.22, 162.32, 165.26, 169.10, 176.57, 176.89, 185.16, 186.05, 187.36, 190.04, 188.59, 188.15, 186.44, 188.18, 186.99, 186.31, 187.63, 187.16, 188.36, 188.15, 188.58, 187.90, 187.50, 186.87, 190.24, 191.83, 193.31, 193.98, 193.46, 191.70, 191.23, 192.28, 190.70, 190.80, 188.84, 188.74, 185.69, 186.50, 185.46, 184.92, 182.17, 183.92, 185.40, 187.97, 190.58, 190.35, 187.88, 191.03, 191.33, 190.91, 191.45, 190.40, 191.88],
        format: function (val, name) {
          return val.toFixed(2) + '元';
        }
      }, {
        name: '筹码成本',
          data: [176.12, 170.20, 170.29, 177.05, 169.46, 157.68, 163.50, 160.45, 157.04, 164.54, 170.88, 171.37, 180.04, 180.51, 182.92, 186.02, 183.17, 191.34, 186.93, 191.43, 192.68, 189.76, 180.06, 180.53, 177.68, 185.95, 188.96, 178.71, 188.51, 182.85, 186.80, 184.43, 190.40, 183.61, 195.87, 191.28, 184.21, 188.43, 187.09, 193.51, 190.42, 188.67, 189.34, 188.25, 186.55, 178.84, 186.52, 173.69, 187.54, 178.62, 178.52, 191.35, 193.19, 184.55, 195.74, 189.70, 193.28, 190.03, 189.74, 185.73],
        format: function (val, name) {
          return val.toFixed(2);
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '价格 (元)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
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
  
  },
  
  onStockSearchEvent: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },
})