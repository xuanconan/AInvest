// pages/search/search.

var SearchBar = require('../common/SearchBar/SearchBar.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    stockArray: [],
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
    var that = this
    SearchBar.init("代码/名称/简拼", that)

    that.setData({
      // stockArray: viewmodel.getDefaultData()
    })
  },

  onSearchBarClearEvent: function (e) {
    var that = this
    SearchBar.onSearchBarClearEvent(e, that)

    that.data.stockArray = []
    that.setData(that.data)
    that.setData({
      // stockArray: viewmodel.getDefaultData()
    })
  },

  onSearchBarChangedEvent: function (e) {
    var that = this
    SearchBar.onSearchBarChangedEvent(e, that)

    if (e.detail.value.length > 0) {
      Api.stock.search({
        key: e.detail.value
      }).then(function (result) {
        that.data.stockArray = []
        that.setData(that.data)
        that.data.stockArray = result
        that.setData(that.data)
      }, function (res) {
        console.log("------fail----", res)
      });

    } else {
      that.data.stockArray = []
      that.setData(that.data)
      that.setData({
        // stockArray: viewmodel.getDefaultData()
      })
    }
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