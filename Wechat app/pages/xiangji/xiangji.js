//index.js  
//获取应用实例  
var app = getApp()  
Page({  
   data: {
    warnSize:'default',
    imgUrl:null,
    address:'China',
    array:['男','女'],
    index:1
  }, 
  onLoad: function () {  
  },  
  setPhotoInfo:function(){
    var that= this;
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
              var tempFilePaths = res.tempFilePaths
        that.setData({imgUrl:tempFilePaths})
        console.log("1")
         wx.uploadFile({
          url: 'http://example.com/upload',
          filePath: tempFilePaths[0],
          name:"file",
           // success
  
          formData:{
            "user":"test"
          }
        })
       
      }
    })
  }
})  