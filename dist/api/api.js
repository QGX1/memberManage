'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAdList = getAdList;

var _wxRequest = require('./../utils/wxRequest.js');

var apiMall = 'http://10.75.18.51:8080'; //局域网ip
// 获取团队用户的id
var getTeamByUserID = function getTeamByUserID(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/Ajax/data.json');
};
// 获取论坛数据列表
var getForumData = function getForumData(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/Ajax/data.json');
};
exports.default = {
  getTeamByUserID: getTeamByUserID,
  getForumData: getForumData
};
function getAdList() {
  return new Promise(function (resolve) {
    wx.request({
      url: 'http://127.0.0.1:3000/lunbo',
      header: {
        'content-type': 'application/json'
      },
      success: function success(res) {
        resolve(res.data.message.images);
      }
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJnZXRBZExpc3QiLCJhcGlNYWxsIiwiZ2V0VGVhbUJ5VXNlcklEIiwicGFyYW1zIiwiZ2V0Rm9ydW1EYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwiZGF0YSIsIm1lc3NhZ2UiLCJpbWFnZXMiXSwibWFwcGluZ3MiOiI7Ozs7O1FBY2dCQSxTLEdBQUFBLFM7O0FBZGhCOztBQUlBLElBQU1DLFVBQVUseUJBQWhCLEMsQ0FBeUM7QUFDekM7QUFDQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLE1BQUQ7QUFBQSxTQUFZLDBCQUFVQSxNQUFWLEVBQWtCRixVQUFRLGlCQUExQixDQUFaO0FBQUEsQ0FBeEI7QUFDQTtBQUNBLElBQU1HLGVBQWEsU0FBYkEsWUFBYSxDQUFDRCxNQUFEO0FBQUEsU0FBVSwwQkFBVUEsTUFBVixFQUFrQkYsVUFBUSxpQkFBMUIsQ0FBVjtBQUFBLENBQW5CO2tCQUNlO0FBQ2JDLGtDQURhO0FBRWJFO0FBRmEsQztBQUtSLFNBQVNKLFNBQVQsR0FBcUI7QUFDMUIsU0FBTyxJQUFJSyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzlCQyxPQUFHQyxPQUFILENBQVc7QUFDVEMsV0FBSyw2QkFESTtBQUVUQyxjQUFRO0FBQ04sd0JBQWdCO0FBRFYsT0FGQztBQUtUQyxlQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJOLGdCQUFRTSxJQUFJQyxJQUFKLENBQVNDLE9BQVQsQ0FBaUJDLE1BQXpCO0FBQ0Q7QUFQUSxLQUFYO0FBU0QsR0FWTSxDQUFQO0FBV0QiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICB3eFJlcXVlc3RcclxufSBmcm9tICdAL3V0aWxzL3d4UmVxdWVzdCc7XHJcblxyXG5jb25zdCBhcGlNYWxsID0gJ2h0dHA6Ly8xMC43NS4xOC41MTo4MDgwJy8v5bGA5Z+f572RaXBcclxuLy8g6I635Y+W5Zui6Zif55So5oi355qEaWRcclxuY29uc3QgZ2V0VGVhbUJ5VXNlcklEID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCsnL0FqYXgvZGF0YS5qc29uJyk7XHJcbi8vIOiOt+WPluiuuuWdm+aVsOaNruWIl+ihqFxyXG5jb25zdCBnZXRGb3J1bURhdGE9KHBhcmFtcyk9Pnd4UmVxdWVzdChwYXJhbXMsIGFwaU1hbGwrJy9BamF4L2RhdGEuanNvbicpO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZ2V0VGVhbUJ5VXNlcklELFxyXG4gIGdldEZvcnVtRGF0YVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWRMaXN0KCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC9sdW5ibycsXHJcbiAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgcmVzb2x2ZShyZXMuZGF0YS5tZXNzYWdlLmltYWdlcylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59Il19