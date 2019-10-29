'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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


var Diary = function (_wepy$page) {
  _inherits(Diary, _wepy$page);

  function Diary() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Diary);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Diary.__proto__ || Object.getPrototypeOf(Diary)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '日记',
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

  _createClass(Diary, [{
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

  return Diary;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Diary , 'pages/diary/diary'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYXJ5LmpzIl0sIm5hbWVzIjpbIkRpYXJ5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsImRhdGEiLCJpbmRpY2F0b3JBY3RpdmVDb2xvciIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJhZExpc3QiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmb290ZXIiLCIkYXBwbHkiLCJjb25zb2xlIiwibG9nIiwibG9hZEFkTGlzdCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7O0FBRkE7OztJQUlxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLG9DQUE4QixTQUZ2QjtBQUdQQyw4QkFBd0IsT0FIakI7QUFJUEMsdUJBQWlCLFNBSlY7QUFLUEMsMkJBQXFCO0FBTGQsSyxRQVFUQyxJLEdBQU87QUFDTEMsNEJBQXNCLE1BRGpCO0FBRUxDLHFCQUFlLElBRlY7QUFHTEMsZ0JBQVUsSUFITDtBQUlMQyxnQkFBVSxJQUpMO0FBS0xDLGdCQUFVLElBTEw7QUFNTEMsY0FBUTtBQU5ILEssUUFlUkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGFBQVksR0FBYixFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1I7QUFDQTtBQUNBQyxjQUFRQTtBQUhBLEs7Ozs7Ozs7Ozs7Ozt1QkFUWSxxQjs7O0FBQXBCLHFCQUFLTCxNOztBQUNMLHFCQUFLTSxNQUFMO0FBQ0FDLHdCQUFRQyxHQUFSLENBQVksS0FBS1IsTUFBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFDUTtBQUNSLFdBQUtTLFVBQUw7QUFDRDs7OztFQXZCZ0NDLGVBQUtDLEk7O2tCQUFuQnhCLEsiLCJmaWxlIjoiZGlhcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgLy8g5YmN5ZCO56uv6IGU6LCDIGFwaVxuICBpbXBvcnQge2dldEFkTGlzdH0gZnJvbSAnQC9hcGkvYXBpJ1xuICBpbXBvcnQgZm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9mb290ZXInXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhcnkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfml6XorrAnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyM2NkIxRkYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWVlZWUnLFxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0J1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBpbmRpY2F0b3JBY3RpdmVDb2xvcjogJyNmZmYnLFxuICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgaW50ZXJ2YWw6IDMwMDAsXG4gICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgIGFkTGlzdDogW11cbiAgICB9XG4gICAgYXN5bmMgbG9hZEFkTGlzdCgpIHtcbiAgICAgIHRoaXMuYWRMaXN0ID0gYXdhaXQgZ2V0QWRMaXN0KClcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWRMaXN0KVxuICAgIH1vbkxvYWQoKSB7XG4gICAgICB0aGlzLmxvYWRBZExpc3QoKVxuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiZm9vdGVyXCI6e1wiY3VycmVudElkXCI6XCIwXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIC8vIGhlYWQ6IGhlYWQsXG4gICAgICAvLyBmb3J1bWxpc3Q6IGZvcnVtTGlzdCxcbiAgICAgIGZvb3RlcjogZm9vdGVyXG4gICAgfVxuICB9XG4iXX0=