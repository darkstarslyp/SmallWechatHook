require('../../utils/page.js')
const app = getApp()

Page({
  onLoad: function (options) {
    console.log('页面1 onLoad')

    wx.navigateTo({
      url: '../detail/detail?origin=index',
    })
  },
  onClickToDetail:function(){
    wx.navigateTo({
      url: '../detail/detail?origin=index',
    })
  }
})

