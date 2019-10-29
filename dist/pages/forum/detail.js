"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _test = require('./../../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

var _detailTop = require('./../../components/forumCon/detailTop.js');

var _detailTop2 = _interopRequireDefault(_detailTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_wepy$page) {
    _inherits(Detail, _wepy$page);

    function Detail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Detail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
            detailtop: _detailTop2.default
        }, _this.config = {
            navigationBarTitleText: "查看详情",
            navigationBarBackgroundColor: "#66B1FF",
            navigationBarTextStyle: "black",
            backgroundColor: "#eeeeee",
            backgroundTextStyle: "light"
        }, _this.data = {
            idx: Number //论坛列表传过来的数据
        }, _this.methods = {
            getDetail: function getDetail(that, id) {
                wx.request({
                    url: 'https://cnodejs.org/api/v1/topics?id=' + id, //开发者服务器接口地址",
                    data: {

                        limit: 1
                    }, //请求的参数",
                    method: 'GET',
                    dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
                    success: function success(res) {
                        console.log("请求详细数据");
                        console.log(res);
                    },
                    fail: function fail() {},
                    complete: function complete() {}
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Detail, [{
        key: "onLoad",
        value: function onLoad(param) {
            var id = param.idx;
            console.log(id);
            // this.$apply();
            this.methods.getDetail(this, id);
        }
    }]);

    return Detail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Detail , 'pages/forum/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJEZXRhaWwiLCJjb21wb25lbnRzIiwiZGV0YWlsdG9wIiwiZGV0YWlsVG9wIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImRhdGEiLCJpZHgiLCJOdW1iZXIiLCJtZXRob2RzIiwiZ2V0RGV0YWlsIiwidGhhdCIsImlkIiwid3giLCJyZXF1ZXN0IiwidXJsIiwibGltaXQiLCJtZXRob2QiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwicmVzIiwiZmFpbCIsImNvbXBsZXRlIiwicGFyYW0iLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7OzBMQUNqQkMsVSxHQUFXO0FBQ1BDLHVCQUFVQztBQURILFMsUUFHWEMsTSxHQUFPO0FBQ0hDLG9DQUF3QixNQURyQjtBQUVIQywwQ0FBOEIsU0FGM0I7QUFHSEMsb0NBQXdCLE9BSHJCO0FBSUhDLDZCQUFpQixTQUpkO0FBS0hDLGlDQUFxQjtBQUxsQixTLFFBT1BDLEksR0FBSztBQUNEQyxpQkFBSUMsTUFESCxDQUNVO0FBRFYsUyxRQVVMQyxPLEdBQVM7QUFDTEMscUJBREsscUJBQ0tDLElBREwsRUFDVUMsRUFEVixFQUNhO0FBQ2RDLG1CQUFHQyxPQUFILENBQVc7QUFDVEMseUJBQUssMENBQXdDSCxFQURwQyxFQUN3QztBQUNqRE4sMEJBQU07O0FBRUZVLCtCQUFPO0FBRkwscUJBRkcsRUFLTjtBQUNIQyw0QkFBUSxLQU5DO0FBT1RDLDhCQUFVLE1BUEQsRUFPUztBQUNsQkMsNkJBQVMsc0JBQU87QUFDWkMsZ0NBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FELGdDQUFRQyxHQUFSLENBQVlDLEdBQVo7QUFDSCxxQkFYUTtBQVlUQywwQkFBTSxnQkFBTSxDQUVYLENBZFE7QUFlVEMsOEJBQVUsb0JBQU0sQ0FBRTtBQWZULGlCQUFYO0FBa0JIO0FBcEJJLFM7Ozs7OytCQVBGQyxLLEVBQU07QUFDVCxnQkFBTWIsS0FBR2EsTUFBTWxCLEdBQWY7QUFDQWEsb0JBQVFDLEdBQVIsQ0FBWVQsRUFBWjtBQUNBO0FBQ0EsaUJBQUtILE9BQUwsQ0FBYUMsU0FBYixDQUF1QixJQUF2QixFQUE0QkUsRUFBNUI7QUFDSDs7OztFQW5CK0JjLGVBQUtDLEk7O2tCQUFwQi9CLE0iLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB0ZXN0TWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy90ZXN0XCI7XHJcbmltcG9ydCBkZXRhaWxUb3AgZnJvbSBcIkAvY29tcG9uZW50cy9mb3J1bUNvbi9kZXRhaWxUb3BcIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29tcG9uZW50cz17XHJcbiAgICAgICAgZGV0YWlsdG9wOmRldGFpbFRvcFxyXG4gICAgfVxyXG4gICAgY29uZmlnPXtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIuafpeeci+ivpuaDhVwiLFxyXG4gICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6IFwiIzY2QjFGRlwiLFxyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6IFwiYmxhY2tcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2VlZWVlZVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6IFwibGlnaHRcIixcclxuICAgIH1cclxuICAgIGRhdGE9e1xyXG4gICAgICAgIGlkeDpOdW1iZXIsLy/orrrlnZvliJfooajkvKDov4fmnaXnmoTmlbDmja5cclxuICAgIH1cclxuICAgIG9uTG9hZChwYXJhbSl7XHJcbiAgICAgICAgY29uc3QgaWQ9cGFyYW0uaWR4O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIC8vIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgdGhpcy5tZXRob2RzLmdldERldGFpbCh0aGlzLGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzPSB7XHJcbiAgICAgICAgZ2V0RGV0YWlsKHRoYXQsaWQpe1xyXG4gICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2Nub2RlanMub3JnL2FwaS92MS90b3BpY3M/aWQ9JytpZCwgLy/lvIDlj5HogIXmnI3liqHlmajmjqXlj6PlnLDlnYBcIixcclxuICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgbGltaXQ6IDFcclxuICAgICAgICAgICAgICB9LCAvL+ivt+axgueahOWPguaVsFwiLFxyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy/lpoLmnpzorr7kuLpqc29u77yM5Lya5bCd6K+V5a+56L+U5Zue55qE5pWw5o2u5YGa5LiA5qyhIEpTT04ucGFyc2VcclxuICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuivt+axguivpue7huaVsOaNrlwiKVxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBmYWlsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHt9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcbn1cclxuIl19