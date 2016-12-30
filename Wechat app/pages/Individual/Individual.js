//index.js
//获取应用实例
var app = getApp()
Page({
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/page/user?id=123'
    }
  },
  data: {
    warnSize:'default',
    imgUrl:null,
    address:'China',
    array:['男','女'],
    index:1,
    name: "sdf",
    introduction: "你还没定制个性签名!",
    userInfo: {}
  },
  message: function(){
    console.log('1')
    wx.navigateTo({
      url:'../message/message'	
    }) 
  },
  collection: function(){
    wx.navigateTo({
      url:'../collection/collection'	
    }) 
  },
  commonSet: function(){
     wx.navigateTo({
      url:'../commonSet/commonSet'	
    }) 
  },
  opinion : function(){
     wx.navigateTo({
      url:'../opinion/opinion'	
    }) 
  },
  personal:function(){
     wx.navigateTo({
      url:'../my/personal'	
    }) 
  },
  detail: function(){
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  share: function(){
    wx.navigateTo({
      url:'../share/share'	
    }) 
  },
   map: function(){

},
onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo: userInfo,
        name: userInfo.nickName
      })
    })
  },
onShow:function(){
    var _this = this;
    wx.getStorage({
        key: 'introduction',
        success: function(res) {
            _this.setData({
                introduction: res.data
            })
        }
      })
    wx.getStorage({
        key: 'name',
        success: function(res) {
            _this.setData({
                name: res.data 
            })
        },
        fail: function() {
            _this.setData({
                name: _this.data.userInfo.nickName
            })
        }
      })
  }
})
