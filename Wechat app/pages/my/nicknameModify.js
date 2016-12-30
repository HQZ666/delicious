// pages/my/nicknameModify.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    btn: "",
    disabled: true,
    name: "",
    userInfo: {}
  },
  //事件处理函数
  bindinputBlur: function(e){
      if(e.detail.value != ""){
            this.setData({
                btn: "save",
                name: e.detail.value,
                disabled: false
             })
      }else{
            this.setData({
                btn: "",
                disabled: true
             })
      }
  },
  save: function() {
    var _this = this;
    wx.showToast({
      title: '保存成功',
      icon: 'success',
      duration: 10000,
      success: function(){
        setTimeout(function(){
            wx.navigateBack({
                delta: 1, // 回退前 delta(默认为1) 页面
                success: function(){
                   wx.setStorageSync('name', _this.data.name);
                }
              })
          },1500)
      }
    })
  },
  onShow:function(){
    // 页面显示
    var _this = this;
    wx.getStorage({
        key: 'name',
        success: function(res) {
          console.log(res.data)
            _this.setData({
                name: res.data
            })
        },
        fail: function(res) {
            _this.setData({
                name: _this.data.userInfo.nickName  
            })
        }
      })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})