// pages/my/introduction.js
Page({
  data:{
    btn: "",
    disabled: true,
    introduction: ""
  },
  onLoad: function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  bindTextAreaBlur: function(e){
      if(e.detail.value != ""){
            this.setData({
                btn: "save",
                introduction: e.detail.value,
                disabled: false
             })
      }else{
            this.setData({
                btn: "",
                disabled: true
             })
      }
  },
  save: function(){
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
                   wx.setStorageSync('introduction', _this.data.introduction);
                }
              })
          },1500)
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    var _this = this;
    wx.getStorage({
        key: 'introduction',
        success: function(res) {
          console.log(res.data)
            _this.setData({
                introduction: res.data
            })
        }
      })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})