'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../api/api.js');

var _footer = require('./../../components/footer.js');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      navigationBarTitleText: '首页',
      navigationBarBackgroundColor: '#66B1FF',
      navigationBarTextStyle: 'black',
      backgroundColor: '#eeeeee',
      backgroundTextStyle: 'light'
    }, _this.data = {
      indicatorActiveColor: '#fff',
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      adList: []
    }, _this.$repeat = {}, _this.$props = { "footer": { "currentId": "0" } }, _this.$events = {}, _this.components = {
      // head: head,
      // forumlist: forumList,
      footer: _footer2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Forum, [{
    key: 'loadAdList',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getAdList)();

              case 2:
                this.adList = _context.sent;

                this.$apply();
                console.log(this.adList);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadAdList() {
        return _ref2.apply(this, arguments);
      }

      return loadAdList;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.loadAdList();
    }
  }]);

  return Forum;
}(_wepy2.default.page);

exports.default = Forum;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiRm9ydW0iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwiZGF0YSIsImluZGljYXRvckFjdGl2ZUNvbG9yIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImFkTGlzdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImZvb3RlciIsIiRhcHBseSIsImNvbnNvbGUiLCJsb2ciLCJsb2FkQWRMaXN0Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFGQTs7O0lBSXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsSUFEakI7QUFFUEMsb0NBQThCLFNBRnZCO0FBR1BDLDhCQUF3QixPQUhqQjtBQUlQQyx1QkFBaUIsU0FKVjtBQUtQQywyQkFBcUI7QUFMZCxLLFFBUVRDLEksR0FBTztBQUNMQyw0QkFBc0IsTUFEakI7QUFFTEMscUJBQWUsSUFGVjtBQUdMQyxnQkFBVSxJQUhMO0FBSUxDLGdCQUFVLElBSkw7QUFLTEMsZ0JBQVUsSUFMTDtBQU1MQyxjQUFRO0FBTkgsSyxRQWdCUkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGFBQVksR0FBYixFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1I7QUFDQTtBQUNBQyxjQUFRQTtBQUhBLEs7Ozs7Ozs7Ozs7Ozt1QkFWWSxxQjs7O0FBQXBCLHFCQUFLTCxNOztBQUNMLHFCQUFLTSxNQUFMO0FBQ0FDLHdCQUFRQyxHQUFSLENBQVksS0FBS1IsTUFBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFFTztBQUNQLFdBQUtTLFVBQUw7QUFDRDs7OztFQXhCZ0NDLGVBQUtDLEk7O2tCQUFuQnhCLEsiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAvLyDliY3lkI7nq6/ogZTosIMgYXBpXG4gIGltcG9ydCB7Z2V0QWRMaXN0fSBmcm9tICdAL2FwaS9hcGknXG4gIGltcG9ydCBmb290ZXIgZnJvbSAnQC9jb21wb25lbnRzL2Zvb3RlcidcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3J1bSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mmlumhtScsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzY2QjFGRicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZWVlZScsXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGluZGljYXRvckFjdGl2ZUNvbG9yOiAnI2ZmZicsXG4gICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICBpbnRlcnZhbDogMzAwMCxcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgYWRMaXN0OiBbXVxuICAgIH1cbiAgICBhc3luYyBsb2FkQWRMaXN0KCkge1xuICAgICAgdGhpcy5hZExpc3QgPSBhd2FpdCBnZXRBZExpc3QoKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgY29uc29sZS5sb2codGhpcy5hZExpc3QpXG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMubG9hZEFkTGlzdCgpXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJmb290ZXJcIjp7XCJjdXJyZW50SWRcIjpcIjBcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgLy8gaGVhZDogaGVhZCxcbiAgICAgIC8vIGZvcnVtbGlzdDogZm9ydW1MaXN0LFxuICAgICAgZm9vdGVyOiBmb290ZXJcbiAgICB9XG4gIH1cbiJdfQ==