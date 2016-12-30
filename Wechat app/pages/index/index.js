//index.js 
//获取应用实例 
var app = getApp() 
var imageUtil = require('../../utils/util.js'); 

var items = ['情侣约会', '商务宴请', '家庭聚会', '休闲小憩','朋友聚餐','全部场景','sdf']
var pageObject = {
  data: {
    imagethirdsrc:'../../image/index_bg.png', 
    imagewidth: 0,//缩放后的宽 
    imageheight: 0,//缩放后的高 
    longitude: 23.1353080000,
    latitude: 113.2707930000,
    showPane: '',
    list: [],
    title: '',
    show: true,
    numSrc: '../img/Take_number@3x.png',
    actionSheetHidden: true,
    actionSheetItems: items
  },
  // click: function(){
  //   this.setData({
  //     showPane: ''
  //   })
  // },
  getNum: function(){
    this.setData({
      numSrc: "../img/Has_taken@3x.png"
    })
  },
  actionSheetTap: function(e) {
    var data = e.currentTarget.dataset
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden,
      showPane: data.id 
    })
  },
  actionSheetChange: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  location: function(){
    wx.navigateTo({
      url: '../location/location'
    })
  },
  message: function(){
    wx.navigateTo({
      url: '../message/message'
    })
  },
  individual: function(){
    wx.navigateTo({
      url: '../Individual/Individual'
    })
  },
  map: function(e){
    // var url = 'http://apis.map.qq.com/ws/place/v1/search?keyword=美食&boundary=nearby(23.1501148471,113.3246099433,10)&orderby=_distance&key=5PCBZ-PVC3X-FMM46-ZLCUB-YS5Z7-WZFEP'
    //https://api.map.baidu.com
    //https://apis.map.qq.com/ws/place/v1/search?keyword=美食&boundary=nearby(23.1501148471,113.3246099433,10)&orderby=_distance&key=5PCBZ-PVC3X-FMM46-ZLCUB-YS5Z7-WZFEP
    console.log(this.data.list)
  },
  onLoad: function () { 
    var _this = this;
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        _this.setData({
            latitude : res.latitude,
            longitude : res.longitude
        })

            wx.request({
              url: 'http://apis.map.qq.com/ws/place/v1/search?keyword=美食&boundary=nearby('+_this.data.latitude+','+_this.data.longitude+',1000)&orderby=_distance&key=5PCBZ-PVC3X-FMM46-ZLCUB-YS5Z7-WZFEP',
              data: {},
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              header: {'Content-Type':'application/json'}, // 设置请求的 header
              success: function(res){
                // success
                var DataList= res.data;
                _this.setData({
                      list: DataList.data,
                      show: !_this.data.show
                })
                console.log(_this.data.list)
              }
            })
      }
    })
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




