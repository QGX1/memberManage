'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ForumList.__proto__ || Object.getPrototypeOf(ForumList)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            get_data: [],
            loadingFlag: true
        }, _this.methods = {
            loading: function loading(that) {
                if (that.loadingFlag) {
                    wx.showLoading({
                        title: 'loading'
                    });
                } else {
                    wx.hideLoading();
                }
            },
            get_in_theaters: function get_in_theaters(that) {
                var _this2 = this;

                this.loading(that);
                wx.request({
                    url: 'https://cnodejs.org/api/v1/topics',
                    data: {
                        page: 1,
                        limit: 10
                    },
                    method: 'GET',
                    dataType: 'json',
                    success: function success(res) {
                        console.log('pulling');
                        that.loadingFlag = false;
                        _this2.loading(that);
                        that.get_data = res.data.data;
                        that.$apply();
                    }
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ForumList, [{
        key: 'onLoad',
        value: function onLoad() {
            // console.log(this);
            this.methods.get_in_theaters(this);
        }
    }, {
        key: 'onPullDownRefresh',
        value: function onPullDownRefresh() {
            console.log('234');
            this.methods.get_in_theaters(this);
        }
    }]);

    return ForumList;
}(_wepy2.default.component);

exports.default = ForumList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiRm9ydW1MaXN0IiwiZGF0YSIsImdldF9kYXRhIiwibG9hZGluZ0ZsYWciLCJtZXRob2RzIiwibG9hZGluZyIsInRoYXQiLCJ3eCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJoaWRlTG9hZGluZyIsImdldF9pbl90aGVhdGVycyIsInJlcXVlc3QiLCJ1cmwiLCJwYWdlIiwibGltaXQiLCJtZXRob2QiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiJGFwcGx5Iiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7Z01BQ2pCQyxJLEdBQU87QUFDSEMsc0JBQVUsRUFEUDtBQUVIQyx5QkFBWTtBQUZULFMsUUFhUEMsTyxHQUFVO0FBQ1ZDLG1CQURVLG1CQUNGQyxJQURFLEVBQ0k7QUFDVixvQkFBR0EsS0FBS0gsV0FBUixFQUFvQjtBQUNwQkksdUJBQUdDLFdBQUgsQ0FBZTtBQUNYQywrQkFBTTtBQURLLHFCQUFmO0FBR0MsaUJBSkQsTUFJSztBQUNMRix1QkFBR0csV0FBSDtBQUNDO0FBQ0osYUFUUztBQVVWQywyQkFWVSwyQkFVTUwsSUFWTixFQVVZO0FBQUE7O0FBQ2xCLHFCQUFLRCxPQUFMLENBQWFDLElBQWI7QUFDQUMsbUJBQUdLLE9BQUgsQ0FBVztBQUNYQyx5QkFBSyxtQ0FETTtBQUVYWiwwQkFBTTtBQUNGYSw4QkFBTSxDQURKO0FBRUZDLCtCQUFPO0FBRkwscUJBRks7QUFNWEMsNEJBQVEsS0FORztBQU9YQyw4QkFBVSxNQVBDO0FBUVhDLDZCQUFVLGlCQUFDQyxHQUFELEVBQVE7QUFDZEMsZ0NBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FmLDZCQUFLSCxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsK0JBQUtFLE9BQUwsQ0FBYUMsSUFBYjtBQUNBQSw2QkFBS0osUUFBTCxHQUFnQmlCLElBQUlsQixJQUFKLENBQVNBLElBQXpCO0FBQ0FLLDZCQUFLZ0IsTUFBTDtBQUNIO0FBZFUsaUJBQVg7QUFnQkg7QUE1QlMsUzs7Ozs7aUNBUkQ7QUFDVDtBQUNBLGlCQUFLbEIsT0FBTCxDQUFhTyxlQUFiLENBQTZCLElBQTdCO0FBQ0M7Ozs0Q0FDa0I7QUFDZlMsb0JBQVFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsaUJBQUtqQixPQUFMLENBQWFPLGVBQWIsQ0FBNkIsSUFBN0I7QUFDSDs7OztFQWJrQ1ksZUFBS0MsUzs7a0JBQXZCeEIsUyIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ydW1MaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnR7XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgZ2V0X2RhdGE6IFtdLFxyXG4gICAgICAgICAgICBsb2FkaW5nRmxhZzp0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgdGhpcy5tZXRob2RzLmdldF9pbl90aGVhdGVycyh0aGlzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBvblB1bGxEb3duUmVmcmVzaCgpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnMjM0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRfaW5fdGhlYXRlcnModGhpcylcclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBsb2FkaW5nKHRoYXQpIHtcclxuICAgICAgICAgICAgaWYodGhhdC5sb2FkaW5nRmxhZyl7XHJcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOidsb2FkaW5nJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRfaW5fdGhlYXRlcnModGhhdCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcodGhhdClcclxuICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vY25vZGVqcy5vcmcvYXBpL3YxL3RvcGljcycsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICAgICAgICBsaW1pdDogMTBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogIChyZXMpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3B1bGxpbmcnKTtcclxuICAgICAgICAgICAgICAgIHRoYXQubG9hZGluZ0ZsYWcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nKHRoYXQpXHJcbiAgICAgICAgICAgICAgICB0aGF0LmdldF9kYXRhID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4iXX0=