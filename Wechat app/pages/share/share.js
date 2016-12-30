// pages/share/share.js
Page({
  data:{
    tips: "0",
    address: "所在位置",
    show: "不显示"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  map: function(){
    var _this = this;
    if(this.data.tips == 0){
       wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success: function() {
          wx.chooseLocation({
            success: function(res){
              _this.setData({
                tips: "1",
                address: res.name,
                show: "显示"
              })
            }
          })
        }
      })
    }else{
      _this.setData({
                tips: "0",
                address: "所在位置",
                show: "不显示"
              })
    }
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})