//index.js 
//获取应用实例 
var app = getApp() 
var PI = 3.14159265;
var EARTH_RADIUS = 6378137;
var RAD = Math.PI / 180.0;
var radius = 1000;
var imageUtil = require('../../utils/util.js'); 

var items = ['情侣约会', '商务宴请', '家庭聚会', '休闲小憩','朋友聚餐','全部场景']
var imgs =['../img/bell.png']
var pageObject = {
  data: {
    imagethirdsrc:'../../image/index_bg.png', 
    imagewidth: 0,//缩放后的宽 
    imageheight: 0,//缩放后的高 

    actionSheetHidden: true,
    actionSheetItems: items
  },
  actionSheetTap: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },

  app:function(res){
    console.log(res)
  },
a:function(lat,lon,raidus){
   wx.getLocation({
    type: 'gcj02',
      success: function(res) {
        console.log('1');
        var latitude = res.latitude
        var longitude = res.longitude
        var degree = (24901*1609)/360.0;
        var radiusMile = radius;
        var dpmLat =1/degree;
        var radiusLat = dpmLat * radiusMile;
        var minLat = latitude - radiusLat;
        var maxLat = latitude + radiusLat;
        var mpdLng = degree * Math.cos(latitude * (PI/180));
        var dpmLng = 1/mpdLng;
        var radiusLng = dpmLng * radiusMile;
        var minLng = longitude - radiusLng;
        var maxLng = longitude + radiusLng;
        return (minLat,minLng,maxLat,maxLng);
        console.log(minLat,minLng,maxLat,maxLng)
      }
   })  
},


  onLoad: function () { 
    setTimeout(function(){
       wx.redirectTo({
         url: '../index/index',
         success: function(res){
           // success
         },
         fail: function() {
           // fail
         },
         complete: function() {
           // complete
         }
       })
    },5000)
 }, 
 imageLoad: function (e) { 
  var imageSize = imageUtil.imageUtil(e) 
  this.setData({ 
   imagewidth: imageSize.imageWidth, 
   imageheight: imageSize.imageHeight 
  }) 
 } 
}


for (var i = 0; i < items.length; ++i) {
  (function(itemName) {
    pageObject['bind' + itemName] = function(e) {
      console.log('click' + itemName, e)
    }
  })(items[i])
}

Page(pageObject)





