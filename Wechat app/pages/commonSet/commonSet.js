//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    type:'open',
  },
  toggle:function(){
    var that = this;
    var type=that.data.type==='open'?'off':'open';
    that.setData({
      type:type
    })
  },
  aboutOur: function(){
    wx.navigateTo({
      url:'../aboutOur/aboutOur'	
    }) 
  },
  clear:function(){
    var that = this
  
    wx.clearStorage({
      success:function(res){
       that.setData({
          res:'已清除'
        })
      }
    })

  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    wx.getStorageInfo({
      success: function(res) {
        that.setData({
          res:res
        })
        console.log(res.keys+"--")
        console.log(res.currentSize+"---")
        console.log(res.limitSize+"----")
      }
    })
  }
})
