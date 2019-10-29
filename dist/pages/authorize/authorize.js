'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 前后端联调 api

var Forum = function (_wepy$page) {
  _inherits(Forum, _wepy$page);

  function Forum() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Forum);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Forum.__proto__ || Object.getPrototypeOf(Forum)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '授权登录'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Forum, [{
    key: 'onload',
    value: function onload() {}
  }, {
    key: 'bindGetUserInfo',
    value: function bindGetUserInfo(res) {
      var that = this;
      var info = res;
      console.log(info);
      if (info.detail.userInfo) {
        console.log('点击了同意授权');
        //开启loading框
        wx.showLoading({
          title: '正在登录...',
          mask: true
        });
        wx.login({
          success: function success(res) {
            if (res.code) {
              var userinfo = {};
              // userinfo['nickName'] = info.detail.userInfo.nickName
              // userinfo['avatarUrl'] = info.detail.userInfo.avatarUrl
              wx.setStorageSync('userinfo', userinfo);
              wx.request({
                url: 'http://10.75.18.51:8080/user/login',
                data: {
                  code: res.code,
                  avatarUrl: info.detail.userInfo.avatarUrl
                },
                method: 'POST',
                header: {
                  'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                success: function success(res) {
                  console.log(res);
                  var userinfo = {};
                  userinfo['id'] = res.data.id;
                  userinfo['nickName'] = info.detail.userInfo.nickName;
                  userinfo['avatarUrl'] = info.detail.userInfo.avatarUrl;
                  userinfo['session_id'] = res.data.data.session_id;
                  userinfo['openid'] = res.data.data.openid;
                  //1.存用户信息到本地存储
                  wx.setStorageSync('userinfo', userinfo);
                  //2.存用户信息到全局变量
                  // console.log(that.$parent);
                  that.$parent.globalData.userInfo = userinfo;
                  //隐藏loading框
                  wx.hideLoading();
                  _wepy2.default.navigateTo({
                    url: '/pages/forum/forum'
                  });
                }
              });
            } else {
              console.log('授权失败');
              wx.showToast({
                title: '登录失败',
                icon: 'none'
              });
            }
          }
        });
      } else {
        console.log('点击了拒绝授权');
        wx.showToast({
          title: '登录失败',
          icon: 'none'
        });
      }
    }
  }]);

  return Forum;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Forum , 'pages/authorize/authorize'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml6ZS5qcyJdLCJuYW1lcyI6WyJGb3J1bSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJyZXMiLCJ0aGF0IiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ1c2VySW5mbyIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJsb2dpbiIsInN1Y2Nlc3MiLCJjb2RlIiwidXNlcmluZm8iLCJzZXRTdG9yYWdlU3luYyIsInJlcXVlc3QiLCJ1cmwiLCJkYXRhIiwiYXZhdGFyVXJsIiwibWV0aG9kIiwiaGVhZGVyIiwiaWQiLCJuaWNrTmFtZSIsInNlc3Npb25faWQiLCJvcGVuaWQiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImhpZGVMb2FkaW5nIiwid2VweSIsIm5hdmlnYXRlVG8iLCJzaG93VG9hc3QiLCJpY29uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztBQUNBOztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEs7Ozs7OzZCQUdBLENBRVI7OztvQ0FDZUMsRyxFQUFLO0FBQ25CLFVBQUlDLE9BQUssSUFBVDtBQUNBLFVBQUlDLE9BQU9GLEdBQVg7QUFDQUcsY0FBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0EsVUFBSUEsS0FBS0csTUFBTCxDQUFZQyxRQUFoQixFQUEwQjtBQUN4QkgsZ0JBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0E7QUFDQUcsV0FBR0MsV0FBSCxDQUFlO0FBQ2JDLGlCQUFPLFNBRE07QUFFYkMsZ0JBQU07QUFGTyxTQUFmO0FBSUFILFdBQUdJLEtBQUgsQ0FBUztBQUNQQyxtQkFBUyxpQkFBVVosR0FBVixFQUFlO0FBQ3RCLGdCQUFJQSxJQUFJYSxJQUFSLEVBQWM7QUFDWixrQkFBSUMsV0FBVyxFQUFmO0FBQ0E7QUFDQTtBQUNBUCxpQkFBR1EsY0FBSCxDQUFrQixVQUFsQixFQUE4QkQsUUFBOUI7QUFDQVAsaUJBQUdTLE9BQUgsQ0FBVztBQUNUQyxxQkFBSyxvQ0FESTtBQUVUQyxzQkFBTTtBQUNKTCx3QkFBTWIsSUFBSWEsSUFETjtBQUVKTSw2QkFBV2pCLEtBQUtHLE1BQUwsQ0FBWUMsUUFBWixDQUFxQmE7QUFGNUIsaUJBRkc7QUFNVEMsd0JBQU8sTUFORTtBQU9UQyx3QkFBUTtBQUNOLGtDQUFnQixtQ0FEVixDQUM4QztBQUQ5QyxpQkFQQztBQVVUVCx5QkFBUyxpQkFBVVosR0FBVixFQUFlO0FBQ3RCRywwQkFBUUMsR0FBUixDQUFZSixHQUFaO0FBQ0Esc0JBQUljLFdBQVcsRUFBZjtBQUNBQSwyQkFBUyxJQUFULElBQWlCZCxJQUFJa0IsSUFBSixDQUFTSSxFQUExQjtBQUNBUiwyQkFBUyxVQUFULElBQXVCWixLQUFLRyxNQUFMLENBQVlDLFFBQVosQ0FBcUJpQixRQUE1QztBQUNBVCwyQkFBUyxXQUFULElBQXdCWixLQUFLRyxNQUFMLENBQVlDLFFBQVosQ0FBcUJhLFNBQTdDO0FBQ0FMLDJCQUFTLFlBQVQsSUFBeUJkLElBQUlrQixJQUFKLENBQVNBLElBQVQsQ0FBY00sVUFBdkM7QUFDQVYsMkJBQVMsUUFBVCxJQUFxQmQsSUFBSWtCLElBQUosQ0FBU0EsSUFBVCxDQUFjTyxNQUFuQztBQUNDO0FBQ0RsQixxQkFBR1EsY0FBSCxDQUFrQixVQUFsQixFQUE4QkQsUUFBOUI7QUFDQTtBQUNBO0FBQ0FiLHVCQUFLeUIsT0FBTCxDQUFhQyxVQUFiLENBQXdCckIsUUFBeEIsR0FBa0NRLFFBQWxDO0FBQ0E7QUFDQVAscUJBQUdxQixXQUFIO0FBQ0FDLGlDQUFLQyxVQUFMLENBQWdCO0FBQ2RiLHlCQUFLO0FBRFMsbUJBQWhCO0FBR0Q7QUE1QlEsZUFBWDtBQThCRCxhQW5DRCxNQW1DTztBQUNMZCxzQkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDQUcsaUJBQUd3QixTQUFILENBQWE7QUFDUHRCLHVCQUFPLE1BREE7QUFFUHVCLHNCQUFNO0FBRkMsZUFBYjtBQUlEO0FBQ0Y7QUE1Q00sU0FBVDtBQThDRCxPQXJERCxNQXFETztBQUNMN0IsZ0JBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FHLFdBQUd3QixTQUFILENBQWE7QUFDRHRCLGlCQUFPLE1BRE47QUFFRHVCLGdCQUFNO0FBRkwsU0FBYjtBQUlEO0FBQ0Y7Ozs7RUF2RWdDSCxlQUFLSSxJOztrQkFBbkJwQyxLIiwiZmlsZSI6ImF1dGhvcml6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAvLyDliY3lkI7nq6/ogZTosIMgYXBpXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ydW0gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmjojmnYPnmbvlvZUnXG4gICAgfVxuICAgIG9ubG9hZCgpIHtcblxuICAgIH1cbiAgICBiaW5kR2V0VXNlckluZm8ocmVzKSB7XG4gICAgICBsZXQgdGhhdD10aGlzO1xuICAgICAgbGV0IGluZm8gPSByZXNcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXG4gICAgICBpZiAoaW5mby5kZXRhaWwudXNlckluZm8pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+eCueWHu+S6huWQjOaEj+aOiOadgycpXG4gICAgICAgIC8v5byA5ZCvbG9hZGluZ+ahhlxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgdGl0bGU6ICfmraPlnKjnmbvlvZUuLi4nLFxuICAgICAgICAgIG1hc2s6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHd4LmxvZ2luKHtcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgICAgICAgICAgdmFyIHVzZXJpbmZvID0ge31cbiAgICAgICAgICAgICAgLy8gdXNlcmluZm9bJ25pY2tOYW1lJ10gPSBpbmZvLmRldGFpbC51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICAgICAgICAvLyB1c2VyaW5mb1snYXZhdGFyVXJsJ10gPSBpbmZvLmRldGFpbC51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3VzZXJpbmZvJywgdXNlcmluZm8pXG4gICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMC43NS4xOC41MTo4MDgwL3VzZXIvbG9naW4nLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgIGNvZGU6IHJlcy5jb2RlLFxuICAgICAgICAgICAgICAgICAgYXZhdGFyVXJsOiBpbmZvLmRldGFpbC51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1ldGhvZDonUE9TVCcgLFxuICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIC8vIOm7mOiupOWAvFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgIHZhciB1c2VyaW5mbyA9IHt9XG4gICAgICAgICAgICAgICAgICB1c2VyaW5mb1snaWQnXSA9IHJlcy5kYXRhLmlkXG4gICAgICAgICAgICAgICAgICB1c2VyaW5mb1snbmlja05hbWUnXSA9IGluZm8uZGV0YWlsLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgICAgICAgICAgICB1c2VyaW5mb1snYXZhdGFyVXJsJ10gPSBpbmZvLmRldGFpbC51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgICAgICAgICAgIHVzZXJpbmZvWydzZXNzaW9uX2lkJ10gPSByZXMuZGF0YS5kYXRhLnNlc3Npb25faWRcbiAgICAgICAgICAgICAgICAgIHVzZXJpbmZvWydvcGVuaWQnXSA9IHJlcy5kYXRhLmRhdGEub3BlbmlkXG4gICAgICAgICAgICAgICAgICAgLy8xLuWtmOeUqOaIt+S/oeaBr+WIsOacrOWcsOWtmOWCqFxuICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3VzZXJpbmZvJywgdXNlcmluZm8pXG4gICAgICAgICAgICAgICAgICAvLzIu5a2Y55So5oi35L+h5oGv5Yiw5YWo5bGA5Y+Y6YePXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGF0LiRwYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgdGhhdC4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8gPXVzZXJpbmZvO1xuICAgICAgICAgICAgICAgICAgLy/pmpDol49sb2FkaW5n5qGGXG4gICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2ZvcnVtL2ZvcnVtJ1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5o6I5p2D5aSx6LSlJylcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnmbvlvZXlpLHotKUnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+eCueWHu+S6huaLkue7neaOiOadgycpXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn55m75b2V5aSx6LSlJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==