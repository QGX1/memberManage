'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_wepy$component) {
  _inherits(Counter, _wepy$component);

  function Counter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Counter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Counter;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.props = {
    num: {
      type: [Number, String],
      coerce: function coerce(v) {
        return +v;
      },
      default: 50
    }
  };
  this.data = {};
  this.events = {
    'index-broadcast': function indexBroadcast() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
  this.watch = {
    num: function num(curVal, oldVal) {
      console.log('\u65E7\u503C\uFF1A' + oldVal + '\uFF0C\u65B0\u503C\uFF1A' + curVal);
    }
  };
  this.methods = {
    plus: function plus() {
      this.num = this.num + 1;
      console.log(this.$name + ' plus tap');

      // counter组件的plus方法向父组件$emit了一个一个名叫index-emit的方法
      this.$emit('index-emit', 1, 2, 3);
    },
    minus: function minus() {
      this.num = this.num - 1;
      console.log(this.$name + ' minus tap');
    }
  };
};

exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsIndlcHkiLCJjb21wb25lbnQiLCJwcm9wcyIsIm51bSIsInR5cGUiLCJOdW1iZXIiLCJTdHJpbmciLCJjb2VyY2UiLCJ2IiwiZGVmYXVsdCIsImRhdGEiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiJG5hbWUiLCJuYW1lIiwic291cmNlIiwid2F0Y2giLCJjdXJWYWwiLCJvbGRWYWwiLCJtZXRob2RzIiwicGx1cyIsIiRlbWl0IiwibWludXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBZ0JDLGVBQUtDLFM7Ozs7O09BQ3hDQyxLLEdBQVE7QUFDTkMsU0FBSztBQUNIQyxZQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxDQURIO0FBRUhDLGNBQVEsZ0JBQVVDLENBQVYsRUFBYTtBQUNuQixlQUFPLENBQUNBLENBQVI7QUFDRCxPQUpFO0FBS0hDLGVBQVM7QUFMTjtBQURDLEc7T0FVUkMsSSxHQUFPLEU7T0FFUEMsTSxHQUFTO0FBQ1AsdUJBQW1CLDBCQUFhO0FBQUE7O0FBQzlCLFVBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBQyxjQUFRQyxHQUFSLENBQWUsT0FBS0MsS0FBcEIsaUJBQXFDSixPQUFPSyxJQUE1QyxjQUF5REwsT0FBT00sTUFBUCxDQUFjRixLQUF2RTtBQUNEO0FBSk0sRztPQU9URyxLLEdBQVE7QUFDTmhCLE9BRE0sZUFDRGlCLE1BREMsRUFDT0MsTUFEUCxFQUNlO0FBQ25CUCxjQUFRQyxHQUFSLHdCQUFrQk0sTUFBbEIsZ0NBQStCRCxNQUEvQjtBQUNEO0FBSEssRztPQU1SRSxPLEdBQVU7QUFDUkMsUUFEUSxrQkFDQTtBQUNOLFdBQUtwQixHQUFMLEdBQVcsS0FBS0EsR0FBTCxHQUFXLENBQXRCO0FBQ0FXLGNBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLEdBQWEsV0FBekI7O0FBRUE7QUFDQSxXQUFLUSxLQUFMLENBQVcsWUFBWCxFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtBQUNELEtBUE87QUFRUkMsU0FSUSxtQkFRQztBQUNQLFdBQUt0QixHQUFMLEdBQVcsS0FBS0EsR0FBTCxHQUFXLENBQXRCO0FBQ0FXLGNBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLEdBQWEsWUFBekI7QUFDRDtBQVhPLEc7OztrQkExQlNqQixPIiwiZmlsZSI6ImNvdW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgbnVtOiB7XG4gICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICAgIGNvZXJjZTogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICByZXR1cm4gK3ZcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdDogNTBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgIH1cbiAgICBldmVudHMgPSB7XG4gICAgICAnaW5kZXgtYnJvYWRjYXN0JzogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXG4gICAgICB9XG4gICAgfVxuXG4gICAgd2F0Y2ggPSB7XG4gICAgICBudW0gKGN1clZhbCwgb2xkVmFsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDml6flgLzvvJoke29sZFZhbH3vvIzmlrDlgLzvvJoke2N1clZhbH1gKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBwbHVzICgpIHtcbiAgICAgICAgdGhpcy5udW0gPSB0aGlzLm51bSArIDFcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgcGx1cyB0YXAnKVxuXG4gICAgICAgIC8vIGNvdW50ZXLnu4Tku7bnmoRwbHVz5pa55rOV5ZCR54i257uE5Lu2JGVtaXTkuobkuIDkuKrkuIDkuKrlkI3lj6tpbmRleC1lbWl055qE5pa55rOVXG4gICAgICAgIHRoaXMuJGVtaXQoJ2luZGV4LWVtaXQnLCAxLCAyLCAzKVxuICAgICAgfSxcbiAgICAgIG1pbnVzICgpIHtcbiAgICAgICAgdGhpcy5udW0gPSB0aGlzLm51bSAtIDFcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgbWludXMgdGFwJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==