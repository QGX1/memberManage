'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../api/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForumList = function (_wepy$component) {
  _inherits(ForumList, _wepy$component);

  function ForumList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ForumList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ForumList.__proto__ || Object.getPrototypeOf(ForumList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {
      get_data: [], //获取数据
      loadingFlag: true, //加载
      navtype: 0, //选择分类
      loadingMoreHidden: true, //加载更多标签
      isHideLoadMore: false,
      perPageSize: 20, //每一页的数据条数
      pageCount: 59
      // 页面加载时监听
    }, _this.events = {
      chooseShowPage: function chooseShowPage(newValue) {
        console.log("父组件传值" + newValue);
        this.navtype = newValue;
        this.$apply();
      }
    }, _this.methods = {
      loading: function loading(that) {
        if (that.loadingFlag) {
          wx.showLoading({
            title: 'loading'
          });
        } else {
          wx.hideLoading(); //隐藏加载
        }
      },
      toDetail: function toDetail(item) {
        console.log("进入详情页面");
        console.log(item);
        var postid = item.postid;
        _wepy2.default.navigateTo({ url: './detail?postid=' + postid });
      },

      // 数据请求
      get_in_forum: function get_in_forum(that) {
        var _this2 = this;

        // console.log("获取用户信息")
        // console.log(that.$parent.$parent.globalData.userInfo.session_id);
        var userId = that.$parent.$parent.globalData.userInfo.session_id;
        // var that=this;
        this.loading(that); //数据请求时输出加载弹框,在同一个生命周期里通过this来调用函数
        //  发起数据请求
        wx.request({
          // url:'https://cnodejs.org/api/v1/topics',
          //  url: 'http://192.168.10.65:8080/post/selectPostAll' ,
          url: 'http://10.75.18.51:8080/post/selectPostAll',
          data: {
            openid: 123,
            page: 1,
            size: 20,
            categoryid: that.navtype
          },
          method: 'POST',
          // method:"GET",
          dataType: 'json',
          header: {
            // 设置请求头
            "token": userId,
            "content-type": "application/x-www-form-urlencoded"
          },
          success: function success(res) {
            console.log(res);
            // wx.hideLoading()
            // wepy.hideNavigationBarLoading();//隐藏加载动态动画
            // that.loadingFlag = false
            // that.perPageSize=res.data.data.data.size//当前页面的长度
            // that.curPage=res.data.data.data.pageNum//修改当前页面进度
            // that.pageCount=res.data.data.data.total//总共有多少条数据
            // var forumTemp=that.get_data
            that.loadingFlag = false;
            _this2.loading(that);
            that.get_data = res.data.data.data.list;
            console.log(that.get_data);
            that.$apply();
            //定义一个新的论坛数组对象，用于装载拼接所有的数据
            // if(that.curPage==0){
            //   forumTemp=[]
            //   // 如果当前处于第一页，那么清空数组对象，只装载第一页的数据
            // }

            // var forumDataList=res.data.data.data.list
            // if(forumDataList.length<that.perPageSize){
            //   console.log("没有更多数据");
            //   that.get_data=forumTemp.concat(forumDataList)
            //   // contcat意思是向forumTemp数组中添加数据
            //   that.loadingMoreHidden=false;
            //   console.log(that.get_data)
            // }else{
            // 如果，当前不是最后一页，向forumDataList添加数组
            // console.log("加载更多")
            // that.loadingMoreHidden=true,
            // that.get_data=forumDataList.concat(forumDataList);
            // that.get_data=
            //     that.curPage=that.curPage+1;
            //      console.log(that.get_data)
            //   }
            //   console.log("数据")
            //  console.log(that.get_data)
          }
        });
      }
    }, _this.watch = {
      navtype: function navtype(newValue, oldValue) {
        console.log("事件监听");
        console.log('num value: ' + oldValue + ' -> ' + newValue);
        this.navtype = newValue;
        this.$apply();
        this.methods.get_in_forum(this);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ForumList, [{
    key: 'onLoad',
    value: function onLoad() {
      // console.log(this);
      // 在页面加载时调用方法加载数据
      var curPage = 0;
      this.methods.get_in_forum(this); //在不同的生命周期里通过this.其他生命周期.方法
      console.log("页面监听数据");
      console.log(this.get_data);
    }
    //下拉请求数据刷新

  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.curPage = 0;
      this.methods.get_in_forum(this);
    }
    // 上拉加载更多

  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      console.log("加载更多");
      if (!this.loadingMoreHidden) {} else {
        this.methods.get_in_forum(this); //调用函数
      }
      this.loadingMoreHidden = true; //修改加载更多状态
      this.$apply();
    }
    // 监听数据变化

  }]);

  return ForumList;
}(_wepy2.default.component);

exports.default = ForumList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtTGlzdC5qcyJdLCJuYW1lcyI6WyJGb3J1bUxpc3QiLCJjb25maWciLCJkYXRhIiwiZ2V0X2RhdGEiLCJsb2FkaW5nRmxhZyIsIm5hdnR5cGUiLCJsb2FkaW5nTW9yZUhpZGRlbiIsImlzSGlkZUxvYWRNb3JlIiwicGVyUGFnZVNpemUiLCJwYWdlQ291bnQiLCJldmVudHMiLCJjaG9vc2VTaG93UGFnZSIsIm5ld1ZhbHVlIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsIm1ldGhvZHMiLCJsb2FkaW5nIiwidGhhdCIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImhpZGVMb2FkaW5nIiwidG9EZXRhaWwiLCJpdGVtIiwicG9zdGlkIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnZXRfaW5fZm9ydW0iLCJ1c2VySWQiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwic2Vzc2lvbl9pZCIsInJlcXVlc3QiLCJvcGVuaWQiLCJwYWdlIiwic2l6ZSIsImNhdGVnb3J5aWQiLCJtZXRob2QiLCJkYXRhVHlwZSIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJsaXN0Iiwid2F0Y2giLCJvbGRWYWx1ZSIsImN1clBhZ2UiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQU8sRSxRQUdQQyxJLEdBQU87QUFDSEMsZ0JBQVUsRUFEUCxFQUNVO0FBQ2JDLG1CQUFZLElBRlQsRUFFYztBQUNqQkMsZUFBUSxDQUhMLEVBR087QUFDVkMseUJBQWtCLElBSmYsRUFJb0I7QUFDdkJDLHNCQUFnQixLQUxiO0FBTUhDLG1CQUFhLEVBTlYsRUFNYTtBQUNoQkMsaUJBQVc7QUFFZjtBQVRPLEssUUFrQ1BDLE0sR0FBUztBQUNQQyxvQkFETywwQkFDU0MsUUFEVCxFQUNtQjtBQUNwQkMsZ0JBQVFDLEdBQVIsQ0FBWSxVQUFRRixRQUFw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QUFLUixpQkFBVCxFQUEyQixDQUUxQixDQUZELE1BRUs7QUFDSCxhQUFLVSxPQUFMLENBQWFhLFlBQWIsQ0FBMEIsSUFBMUIsRUFERyxDQUM2QjtBQUNqQztBQUNELFdBQUt2QixpQkFBTCxHQUF1QixJQUF2QixDQVBhLENBT2U7QUFDNUIsV0FBS1MsTUFBTDtBQUNEO0FBOEZMOzs7OztFQW5JeUNXLGVBQUt1QixTOztrQkFBdkJqRCxTIiwiZmlsZSI6ImZvcnVtTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIGltcG9ydCBhcGkgZnJvbSAnQC9hcGkvYXBpJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ydW1MaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnR7XHJcbiAgICAgIGNvbmZpZz17XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgIGdldF9kYXRhOiBbXSwvL+iOt+WPluaVsOaNrlxyXG4gICAgICAgICAgbG9hZGluZ0ZsYWc6dHJ1ZSwvL+WKoOi9vVxyXG4gICAgICAgICAgbmF2dHlwZTowLC8v6YCJ5oup5YiG57G7XHJcbiAgICAgICAgICBsb2FkaW5nTW9yZUhpZGRlbjp0cnVlLC8v5Yqg6L295pu05aSa5qCH562+XHJcbiAgICAgICAgICBpc0hpZGVMb2FkTW9yZTogZmFsc2UsXHJcbiAgICAgICAgICBwZXJQYWdlU2l6ZTogMjAsLy/mr4/kuIDpobXnmoTmlbDmja7mnaHmlbBcclxuICAgICAgICAgIHBhZ2VDb3VudDogNTksXHJcbiAgICAgIH1cclxuICAgICAgLy8g6aG16Z2i5Yqg6L295pe255uR5ZCsXHJcbiAgICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICAvLyDlnKjpobXpnaLliqDovb3ml7bosIPnlKjmlrnms5XliqDovb3mlbDmja5cclxuICAgICAgICB2YXIgY3VyUGFnZT0wXHJcbiAgICAgICAgdGhpcy5tZXRob2RzLmdldF9pbl9mb3J1bSh0aGlzKS8v5Zyo5LiN5ZCM55qE55Sf5ZG95ZGo5pyf6YeM6YCa6L+HdGhpcy7lhbbku5bnlJ/lkb3lkajmnJ8u5pa55rOVXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLpobXpnaLnm5HlkKzmlbDmja5cIilcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdldF9kYXRhKVxyXG4gICAgICB9XHJcbiAgICAgIC8v5LiL5ouJ6K+35rGC5pWw5o2u5Yi35pawXHJcbiAgICAgIG9uUHVsbERvd25SZWZyZXNoKCl7XHJcbiAgICAgICAgdGhpcy5jdXJQYWdlPTA7XHJcbiAgICAgICAgdGhpcy5tZXRob2RzLmdldF9pbl9mb3J1bSh0aGlzKVxyXG4gICAgICB9XHJcbiAgICAgIC8vIOS4iuaLieWKoOi9veabtOWkmlxyXG4gICAgICBvblJlYWNoQm90dG9tKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLliqDovb3mm7TlpJpcIilcclxuICAgICAgICBpZighdGhpcy5sb2FkaW5nTW9yZUhpZGRlbil7XHJcblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5tZXRob2RzLmdldF9pbl9mb3J1bSh0aGlzKTsvL+iwg+eUqOWHveaVsFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvYWRpbmdNb3JlSGlkZGVuPXRydWU7Ly/kv67mlLnliqDovb3mm7TlpJrnirbmgIFcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH1cclxuICAgICAgZXZlbnRzID0ge1xyXG4gICAgICAgIGNob29zZVNob3dQYWdlIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi54i257uE5Lu25Lyg5YC8XCIrbmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgIHRoaXMubmF2dHlwZT1uZXdWYWx1ZTtcclxuICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBsb2FkaW5nKHRoYXQpIHtcclxuICAgICAgICAgIGlmKHRoYXQubG9hZGluZ0ZsYWcpe1xyXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6J2xvYWRpbmcnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCkvL+makOiXj+WKoOi9vVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9EZXRhaWwoaXRlbSl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIui/m+WFpeivpuaDhemhtemdolwiKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coaXRlbSlcclxuICAgICAgICAgIGxldCBwb3N0aWQ9aXRlbS5wb3N0aWQ7XHJcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6ICcuL2RldGFpbD9wb3N0aWQ9Jytwb3N0aWQgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmlbDmja7or7fmsYJcclxuICAgICAgICBnZXRfaW5fZm9ydW0odGhhdCkge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCLojrflj5bnlKjmiLfkv6Hmga9cIilcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoYXQuJHBhcmVudC4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8uc2Vzc2lvbl9pZCk7XHJcbiAgICAgICAgICBsZXQgdXNlcklkPXRoYXQuJHBhcmVudC4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8uc2Vzc2lvbl9pZFxyXG4gICAgICAgICAgLy8gdmFyIHRoYXQ9dGhpcztcclxuICAgICAgICAgIHRoaXMubG9hZGluZyh0aGF0KS8v5pWw5o2u6K+35rGC5pe26L6T5Ye65Yqg6L295by55qGGLOWcqOWQjOS4gOS4queUn+WRveWRqOacn+mHjOmAmui/h3RoaXPmnaXosIPnlKjlh73mlbBcclxuICAgICAgICAgIC8vICDlj5HotbfmlbDmja7or7fmsYJcclxuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAvLyB1cmw6J2h0dHBzOi8vY25vZGVqcy5vcmcvYXBpL3YxL3RvcGljcycsXHJcbiAgICAgICAgICAgIC8vICB1cmw6ICdodHRwOi8vMTkyLjE2OC4xMC42NTo4MDgwL3Bvc3Qvc2VsZWN0UG9zdEFsbCcgLFxyXG4gICAgICAgICAgICB1cmw6J2h0dHA6Ly8xMC43NS4xOC41MTo4MDgwL3Bvc3Qvc2VsZWN0UG9zdEFsbCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG9wZW5pZDoxMjMsXHJcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogMjAsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeWlkOnRoYXQubmF2dHlwZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgLy8gbWV0aG9kOlwiR0VUXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGhlYWRlcjp7XHJcbiAgICAgICAgICAgICAgLy8g6K6+572u6K+35rGC5aS0XHJcbiAgICAgICAgICAgICAgXCJ0b2tlblwiOnVzZXJJZCxcclxuICAgICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogIChyZXMpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIC8vIHd4LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgICAgIC8vIHdlcHkuaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7Ly/pmpDol4/liqDovb3liqjmgIHliqjnlLtcclxuICAgICAgICAgICAgICAgIC8vIHRoYXQubG9hZGluZ0ZsYWcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgLy8gdGhhdC5wZXJQYWdlU2l6ZT1yZXMuZGF0YS5kYXRhLmRhdGEuc2l6ZS8v5b2T5YmN6aG16Z2i55qE6ZW/5bqmXHJcbiAgICAgICAgICAgICAgICAvLyB0aGF0LmN1clBhZ2U9cmVzLmRhdGEuZGF0YS5kYXRhLnBhZ2VOdW0vL+S/ruaUueW9k+WJjemhtemdoui/m+W6plxyXG4gICAgICAgICAgICAgICAgLy8gdGhhdC5wYWdlQ291bnQ9cmVzLmRhdGEuZGF0YS5kYXRhLnRvdGFsLy/mgLvlhbHmnInlpJrlsJHmnaHmlbDmja5cclxuICAgICAgICAgICAgICAgIC8vIHZhciBmb3J1bVRlbXA9dGhhdC5nZXRfZGF0YVxyXG4gICAgICAgICAgICAgICAgIHRoYXQubG9hZGluZ0ZsYWcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nKHRoYXQpXHJcbiAgICAgICAgICAgICAgICB0aGF0LmdldF9kYXRhPXJlcy5kYXRhLmRhdGEuZGF0YS5saXN0XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LmdldF9kYXRhKVxyXG4gICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKVxyXG4gICAgICAgICAgICAgICAgLy/lrprkuYnkuIDkuKrmlrDnmoTorrrlnZvmlbDnu4Tlr7nosaHvvIznlKjkuo7oo4Xovb3mi7zmjqXmiYDmnInnmoTmlbDmja5cclxuICAgICAgICAgICAgICAgIC8vIGlmKHRoYXQuY3VyUGFnZT09MCl7XHJcbiAgICAgICAgICAgICAgICAvLyAgIGZvcnVtVGVtcD1bXVxyXG4gICAgICAgICAgICAgICAgLy8gICAvLyDlpoLmnpzlvZPliY3lpITkuo7nrKzkuIDpobXvvIzpgqPkuYjmuIXnqbrmlbDnu4Tlr7nosaHvvIzlj6roo4Xovb3nrKzkuIDpobXnmoTmlbDmja5cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyB2YXIgZm9ydW1EYXRhTGlzdD1yZXMuZGF0YS5kYXRhLmRhdGEubGlzdFxyXG4gICAgICAgICAgICAgICAgLy8gaWYoZm9ydW1EYXRhTGlzdC5sZW5ndGg8dGhhdC5wZXJQYWdlU2l6ZSl7XHJcbiAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwi5rKh5pyJ5pu05aSa5pWw5o2uXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gICB0aGF0LmdldF9kYXRhPWZvcnVtVGVtcC5jb25jYXQoZm9ydW1EYXRhTGlzdClcclxuICAgICAgICAgICAgICAgIC8vICAgLy8gY29udGNhdOaEj+aAneaYr+WQkWZvcnVtVGVtcOaVsOe7hOS4rea3u+WKoOaVsOaNrlxyXG4gICAgICAgICAgICAgICAgLy8gICB0aGF0LmxvYWRpbmdNb3JlSGlkZGVuPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyh0aGF0LmdldF9kYXRhKVxyXG4gICAgICAgICAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIC8vIOWmguaenO+8jOW9k+WJjeS4jeaYr+acgOWQjuS4gOmhte+8jOWQkWZvcnVtRGF0YUxpc3Tmt7vliqDmlbDnu4RcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLliqDovb3mm7TlpJpcIilcclxuICAgICAgICAgICAgICAgICAgLy8gdGhhdC5sb2FkaW5nTW9yZUhpZGRlbj10cnVlLFxyXG4gICAgICAgICAgICAgICAgICAvLyB0aGF0LmdldF9kYXRhPWZvcnVtRGF0YUxpc3QuY29uY2F0KGZvcnVtRGF0YUxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAvLyB0aGF0LmdldF9kYXRhPVxyXG4gICAgICAgICAgICAgIC8vICAgICB0aGF0LmN1clBhZ2U9dGhhdC5jdXJQYWdlKzE7XHJcbiAgICAgICAgICAgICAgLy8gICAgICBjb25zb2xlLmxvZyh0aGF0LmdldF9kYXRhKVxyXG4gICAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCLmlbDmja5cIilcclxuICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2codGhhdC5nZXRfZGF0YSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgLy8g55uR5ZCs5pWw5o2u5Y+Y5YyWXHJcbiAgd2F0Y2g9e1xyXG4gICAgIG5hdnR5cGUgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuS6i+S7tuebkeWQrFwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhgbnVtIHZhbHVlOiAke29sZFZhbHVlfSAtPiAke25ld1ZhbHVlfWApXHJcbiAgICAgIHRoaXMubmF2dHlwZSA9IG5ld1ZhbHVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgIHRoaXMubWV0aG9kcy5nZXRfaW5fZm9ydW0odGhpcylcclxuICAgIH1cclxuICB9XHJcbiAgfVxyXG4iXX0=