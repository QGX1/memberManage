'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _teamHead = require('./../components/team/team-head.js');

var _teamHead2 = _interopRequireDefault(_teamHead);

var _teamList = require('./../components/team/team-list.js');

var _teamList2 = _interopRequireDefault(_teamList);

var _footer = require('./../components/footer.js');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var team = function (_wepy$page) {
  _inherits(team, _wepy$page);

  function team() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, team);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = team.__proto__ || Object.getPrototypeOf(team)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '团队'
    }, _this.$repeat = {}, _this.$props = { "TeamList": { "xmlns:v-bind": "", "v-bind:team.sync": "formatTeam", "v-bind:haveCaptain.once": "haveCaptain" }, "footer": { "currentId": "1" } }, _this.$events = {}, _this.components = {
      TeamHead: _teamHead2.default,
      TeamList: _teamList2.default,
      footer: _footer2.default
    }, _this.mixins = [], _this.data = {
      team: [],
      haveCaptain: true
    }, _this.computed = {
      formatTeam: function formatTeam() {
        var haveCaptain = this.team.find(function (item) {
          return item.role === 0;
        }) !== null;
        if (haveCaptain) {
          return this.team.sort(function (a, b) {
            return a.role - b.role;
          });
        } else {
          return this.team;
        }
      }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(team, [{
    key: 'getTeamByUserID',

    // 数据请求
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.getTeamByUserID({
                  query: {}
                });

              case 2:
                json = _context.sent;

                this.team = json.data.data;
                this.$apply();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getTeamByUserID() {
        return _ref2.apply(this, arguments);
      }

      return getTeamByUserID;
    }()
  }, {
    key: 'onLoad',

    // 加载时进行数据请求
    value: function onLoad() {
      this.getTeamByUserID();
    }
  }]);

  return team;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(team , 'pages/team'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0uanMiXSwibmFtZXMiOlsidGVhbSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJUZWFtSGVhZCIsIlRlYW1MaXN0IiwiZm9vdGVyIiwibWl4aW5zIiwiZGF0YSIsImhhdmVDYXB0YWluIiwiY29tcHV0ZWQiLCJmb3JtYXRUZWFtIiwiZmluZCIsIml0ZW0iLCJyb2xlIiwic29ydCIsImEiLCJiIiwibWV0aG9kcyIsImV2ZW50cyIsImFwaSIsImdldFRlYW1CeVVzZXJJRCIsInF1ZXJ5IiwianNvbiIsIiRhcHBseSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixZQUF0QyxFQUFtRCwyQkFBMEIsYUFBN0UsRUFBWixFQUF3RyxVQUFTLEVBQUMsYUFBWSxHQUFiLEVBQWpILEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGdCQUFTQSxrQkFERDtBQUVSQyxnQkFBU0Esa0JBRkQ7QUFHUkM7QUFIUSxLLFFBTVZDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMWCxZQUFNLEVBREQ7QUFFTFksbUJBQVk7QUFGUCxLLFFBS1BDLFEsR0FBVztBQUNUQyxnQkFEUyx3QkFDSztBQUNaLFlBQUlGLGNBQWMsS0FBS1osSUFBTCxDQUFVZSxJQUFWLENBQWU7QUFBQSxpQkFBUUMsS0FBS0MsSUFBTCxLQUFjLENBQXRCO0FBQUEsU0FBZixNQUE0QyxJQUE5RDtBQUNBLFlBQUdMLFdBQUgsRUFBZTtBQUNiLGlCQUFPLEtBQUtaLElBQUwsQ0FBVWtCLElBQVYsQ0FBZSxVQUFDQyxDQUFELEVBQUdDLENBQUg7QUFBQSxtQkFBU0QsRUFBRUYsSUFBRixHQUFTRyxFQUFFSCxJQUFwQjtBQUFBLFdBQWYsQ0FBUDtBQUNELFNBRkQsTUFFSztBQUNILGlCQUFPLEtBQUtqQixJQUFaO0FBQ0Q7QUFDRjtBQVJRLEssUUFtQlhxQixPLEdBQVUsRSxRQUlWQyxNLEdBQVMsRTs7Ozs7O0FBYmI7Ozs7Ozs7Ozt1QkFFeUJDLGNBQUlDLGVBQUosQ0FBb0I7QUFDckNDLHlCQUFPO0FBRDhCLGlCQUFwQixDOzs7QUFBYkMsb0I7O0FBR04scUJBQUsxQixJQUFMLEdBQVkwQixLQUFLZixJQUFMLENBQVVBLElBQXRCO0FBQ0EscUJBQUtnQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVU47NkJBQ2E7QUFDUCxXQUFLSCxlQUFMO0FBQ0Q7Ozs7RUFqRCtCSSxlQUFLQyxJOztrQkFBbEI3QixJIiwiZmlsZSI6InRlYW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnQC9hcGkvYXBpJ1xyXG4gIGltcG9ydCBUZWFtSGVhZCBmcm9tICdAL2NvbXBvbmVudHMvdGVhbS90ZWFtLWhlYWQnXHJcbiAgaW1wb3J0IFRlYW1MaXN0IGZyb20gJ0AvY29tcG9uZW50cy90ZWFtL3RlYW0tbGlzdCdcclxuICBpbXBvcnQgZm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9mb290ZXInXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGVhbSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflm6LpmJ8nXHJcbiAgICB9XHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiVGVhbUxpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRlYW0uc3luY1wiOlwiZm9ybWF0VGVhbVwiLFwidi1iaW5kOmhhdmVDYXB0YWluLm9uY2VcIjpcImhhdmVDYXB0YWluXCJ9LFwiZm9vdGVyXCI6e1wiY3VycmVudElkXCI6XCIxXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgVGVhbUhlYWQ6VGVhbUhlYWQsXHJcbiAgICAgIFRlYW1MaXN0OlRlYW1MaXN0LFxyXG4gICAgICBmb290ZXJcclxuICAgIH1cclxuXHJcbiAgICBtaXhpbnMgPSBbXVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHRlYW06IFtdLFxyXG4gICAgICBoYXZlQ2FwdGFpbjp0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIGZvcm1hdFRlYW0gKCkge1xyXG4gICAgICAgIGxldCBoYXZlQ2FwdGFpbiA9IHRoaXMudGVhbS5maW5kKGl0ZW0gPT4gaXRlbS5yb2xlID09PSAwKSAhPT0gbnVsbDtcclxuICAgICAgICBpZihoYXZlQ2FwdGFpbil7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy50ZWFtLnNvcnQoKGEsYikgPT4gYS5yb2xlIC0gYi5yb2xlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMudGVhbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuLy8g5pWw5o2u6K+35rGCXHJcbiAgICBhc3luYyBnZXRUZWFtQnlVc2VySUQoKSB7XHJcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuZ2V0VGVhbUJ5VXNlcklEKHtcclxuICAgICAgICBxdWVyeToge31cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudGVhbSA9IGpzb24uZGF0YS5kYXRhO1xyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgXHJcbiAgICB9XHJcbi8vIOWKoOi9veaXtui/m+ihjOaVsOaNruivt+axglxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICB0aGlzLmdldFRlYW1CeVVzZXJJRCgpO1xyXG4gICAgfVxyXG4gIH1cclxuIl19