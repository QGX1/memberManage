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

var DetailTop = function (_wepy$component) {
  _inherits(DetailTop, _wepy$component);

  function DetailTop() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DetailTop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DetailTop.__proto__ || Object.getPrototypeOf(DetailTop)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      like: '../../img/iconfont/like.png',
      isLiked: false,
      collect: '../../img/iconfont/collection.png',
      isCollected: false
    }, _this.methods = {
      clikeLike: function clikeLike() {
        if (!this.isLiked) {
          this.isLiked = true;
          this.like = '../../img/iconfont/liked.png';
        } else {
          this.like = '../../img/iconfont/like.png';
          this.isLiked = false;
        }
        this.$apply();
      },
      clikeCollect: function clikeCollect() {
        if (!this.isCollected) {
          this.isCollected = true;
          this.collect = '../../img/iconfont/collected.png';
        } else {
          this.collect = '../../img/iconfont/collection.png';
          this.isCollected = false;
        }
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DetailTop, [{
    key: 'onLoad',
    value: function onLoad(pramas) {
      console.log(pramas);
    }
  }]);

  return DetailTop;
}(_wepy2.default.component);

exports.default = DetailTop;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbFRvcC5qcyJdLCJuYW1lcyI6WyJEZXRhaWxUb3AiLCJkYXRhIiwibGlrZSIsImlzTGlrZWQiLCJjb2xsZWN0IiwiaXNDb2xsZWN0ZWQiLCJtZXRob2RzIiwiY2xpa2VMaWtlIiwiJGFwcGx5IiwiY2xpa2VDb2xsZWN0IiwicHJhbWFzIiwiY29uc29sZSIsImxvZyIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSSxHQUFLO0FBQ0RDLFlBQUssNkJBREo7QUFFREMsZUFBUSxLQUZQO0FBR0RDLGVBQVEsbUNBSFA7QUFJREMsbUJBQVk7QUFKWCxLLFFBU0xDLE8sR0FBUztBQUNMQyxlQURLLHVCQUNNO0FBQ1AsWUFBRyxDQUFDLEtBQUtKLE9BQVQsRUFBaUI7QUFDZixlQUFLQSxPQUFMLEdBQWEsSUFBYjtBQUNBLGVBQUtELElBQUwsR0FBVSw4QkFBVjtBQUNELFNBSEQsTUFHSztBQUNILGVBQUtBLElBQUwsR0FBVSw2QkFBVjtBQUNBLGVBQUtDLE9BQUwsR0FBYSxLQUFiO0FBQ0Q7QUFDRCxhQUFLSyxNQUFMO0FBQ0gsT0FWSTtBQVdMQyxrQkFYSywwQkFXUztBQUNWLFlBQUcsQ0FBQyxLQUFLSixXQUFULEVBQXFCO0FBQ25CLGVBQUtBLFdBQUwsR0FBaUIsSUFBakI7QUFDQSxlQUFLRCxPQUFMLEdBQWEsa0NBQWI7QUFDRCxTQUhELE1BR0s7QUFDSCxlQUFLQSxPQUFMLEdBQWEsbUNBQWI7QUFDQSxlQUFLQyxXQUFMLEdBQWlCLEtBQWpCO0FBQ0Q7QUFDRCxhQUFLRyxNQUFMO0FBQ0g7QUFwQkksSzs7Ozs7MkJBSEFFLE0sRUFBTztBQUNWQyxjQUFRQyxHQUFSLENBQVlGLE1BQVo7QUFDSDs7OztFQVRrQ0csZUFBS0MsUzs7a0JBQXZCZCxTIiwiZmlsZSI6ImRldGFpbFRvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlsVG9wIGV4dGVuZHMgd2VweS5jb21wb25lbnR7XHJcbiAgZGF0YT17XHJcbiAgICAgIGxpa2U6Jy4uLy4uL2ltZy9pY29uZm9udC9saWtlLnBuZycsXHJcbiAgICAgIGlzTGlrZWQ6ZmFsc2UsXHJcbiAgICAgIGNvbGxlY3Q6Jy4uLy4uL2ltZy9pY29uZm9udC9jb2xsZWN0aW9uLnBuZycsXHJcbiAgICAgIGlzQ29sbGVjdGVkOmZhbHNlXHJcbiAgfSBcclxuICAgIG9uTG9hZChwcmFtYXMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByYW1hcyk7XHJcbiAgICB9XHJcbiAgbWV0aG9kcz0ge1xyXG4gICAgICBjbGlrZUxpa2UoKXtcclxuICAgICAgICAgIGlmKCF0aGlzLmlzTGlrZWQpe1xyXG4gICAgICAgICAgICB0aGlzLmlzTGlrZWQ9dHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmxpa2U9Jy4uLy4uL2ltZy9pY29uZm9udC9saWtlZC5wbmcnXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5saWtlPScuLi8uLi9pbWcvaWNvbmZvbnQvbGlrZS5wbmcnXHJcbiAgICAgICAgICAgIHRoaXMuaXNMaWtlZD1mYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9LFxyXG4gICAgICBjbGlrZUNvbGxlY3QoKXtcclxuICAgICAgICAgIGlmKCF0aGlzLmlzQ29sbGVjdGVkKXtcclxuICAgICAgICAgICAgdGhpcy5pc0NvbGxlY3RlZD10cnVlXHJcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdD0nLi4vLi4vaW1nL2ljb25mb250L2NvbGxlY3RlZC5wbmcnXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0PScuLi8uLi9pbWcvaWNvbmZvbnQvY29sbGVjdGlvbi5wbmcnXHJcbiAgICAgICAgICAgIHRoaXMuaXNDb2xsZWN0ZWQ9ZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG4iXX0=