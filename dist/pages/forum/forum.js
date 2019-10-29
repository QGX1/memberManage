"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _test = require('./../../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

var _head = require('./../../components/forumCon/head.js');

var _head2 = _interopRequireDefault(_head);

var _forumList = require('./../../components/forumCon/forumList.js');

var _forumList2 = _interopRequireDefault(_forumList);

var _footer = require('./../../components/footer.js');

var _footer2 = _interopRequireDefault(_footer);

var _api = require('./../../api/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      navigationBarTitleText: "论坛",
      // 打开 下拉刷新
      enablePullDownRefresh: true,
      // 打开上拉加载更多
      onReachBottomDistance: 1
    }, _this.$repeat = {}, _this.$props = { "footer": { "currentId": "2" } }, _this.$events = {}, _this.components = {
      head: _head2.default,
      forumlist: _forumList2.default,
      footer: _footer2.default
    }, _this.data = {
      chooseShowPage: "", //默认开始选择展示页面为0
      navform: ""
    }, _this.methods = {
      toEdit: function toEdit() {
        _wepy2.default.navigateTo({ url: './edit' });
      }
    }, _this.events = {
      platformChoose: function platformChoose(navform, event) {
        console.log("此时子组件选择的平台是", navform);
        this.navform = navform.id;
        this.$apply();
      }
    }, _this.watch = {
      navform: function navform(newValue, oldValue) {
        console.log("事件监听");
        console.log("num value: " + oldValue + " -> " + newValue);
        this.chooseShowPage = newValue;
        this.$apply();
        this.updateShowPage();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // mixins = [testMixin]

  _createClass(Forum, [{
    key: "updateShowPage",

    // 异步
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return new Promise(function (resolve) {
                  setTimeout(function () {
                    resolve('async await test...');
                  }, 1000);
                });

              case 3:
                console.log("传值");
                this.$broadcast('chooseShowPage', this.chooseShowPage); //必须是异步执行广播事件，原理和小程序页面刷新和canvas重绘的先后机制有关，否则图表不显示
                this.$apply();
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function updateShowPage() {
        return _ref2.apply(this, arguments);
      }

      return updateShowPage;
    }()
    // events对象中所声明的函数为用于监听组件之间的通信与交互事件的事件处理函数

  }, {
    key: "onLoad",
    value: function onLoad() {
      var self = this;
    }

    // 监听数据变化

  }]);

  return Forum;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Forum , 'pages/forum/forum'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtLmpzIl0sIm5hbWVzIjpbIkZvcnVtIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsIm9uUmVhY2hCb3R0b21EaXN0YW5jZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImhlYWQiLCJmb3J1bWxpc3QiLCJmb3J1bUxpc3QiLCJmb290ZXIiLCJkYXRhIiwiY2hvb3NlU2hvd1BhZ2UiLCJuYXZmb3JtIiwibWV0aG9kcyIsInRvRWRpdCIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZXZlbnRzIiwicGxhdGZvcm1DaG9vc2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIiRhcHBseSIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsInVwZGF0ZVNob3dQYWdlIiwiUHJvbWlzZSIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwiJGJyb2FkY2FzdCIsInNlbGYiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsSUFEakI7QUFFUDtBQUNBQyw2QkFBc0IsSUFIZjtBQUlQO0FBQ0FDLDZCQUFzQjtBQUxmLEssUUFPVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGFBQVksR0FBYixFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLFlBQU1BLGNBREk7QUFFVkMsaUJBQVdDLG1CQUZEO0FBR1ZDO0FBSFUsSyxRQVFaQyxJLEdBQU87QUFDTEMsc0JBQWUsRUFEVixFQUNhO0FBQ2xCQyxlQUFRO0FBRkgsSyxRQUlQQyxPLEdBQVU7QUFDUkMsY0FBTyxrQkFBVTtBQUNmQyx1QkFBS0MsVUFBTCxDQUFnQixFQUFFQyxLQUFLLFFBQVAsRUFBaEI7QUFDRDtBQUhPLEssUUFxQlZDLE0sR0FBUztBQUNQQyxvQkFETywwQkFDUVAsT0FEUixFQUNpQlEsS0FEakIsRUFDd0I7QUFDN0JDLGdCQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQlYsT0FBM0I7QUFDQSxhQUFLQSxPQUFMLEdBQWVBLFFBQVFXLEVBQXZCO0FBQ0EsYUFBS0MsTUFBTDtBQUNEO0FBTE0sSyxRQWFUQyxLLEdBQU07QUFDSGIsYUFERyxtQkFDTWMsUUFETixFQUNnQkMsUUFEaEIsRUFDMEI7QUFDNUJOLGdCQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBRCxnQkFBUUMsR0FBUixpQkFBMEJLLFFBQTFCLFlBQXlDRCxRQUF6QztBQUNBLGFBQUtmLGNBQUwsR0FBc0JlLFFBQXRCO0FBQ0EsYUFBS0YsTUFBTDtBQUNBLGFBQUtJLGNBQUw7QUFDRDtBQVBHLEs7OztBQXhDTjs7Ozs7QUFXQTs7Ozs7Ozs7O3VCQUdVLElBQUlDLE9BQUosQ0FBWSxtQkFBVztBQUMzQkMsNkJBQVcsWUFBTTtBQUNmQyw0QkFBUSxxQkFBUjtBQUNELG1CQUZELEVBRUcsSUFGSDtBQUdELGlCQUpLLEM7OztBQUtOVix3QkFBUUMsR0FBUixDQUFZLElBQVo7QUFDQSxxQkFBS1UsVUFBTCxDQUFnQixnQkFBaEIsRUFBa0MsS0FBS3JCLGNBQXZDLEUsQ0FBeUQ7QUFDekQscUJBQUthLE1BQUw7Ozs7Ozs7O0FBRUFILHdCQUFRQyxHQUFSOzs7Ozs7Ozs7Ozs7Ozs7O0FBR0o7Ozs7NkJBU1M7QUFDUCxVQUFJVyxPQUFPLElBQVg7QUFDRDs7QUFFQzs7Ozs7RUF4RCtCbEIsZUFBS21CLEk7O2tCQUFuQnJDLEsiLCJmaWxlIjoiZm9ydW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcclxuaW1wb3J0IHRlc3RNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL3Rlc3RcIjtcclxuaW1wb3J0IGhlYWQgZnJvbSBcIkAvY29tcG9uZW50cy9mb3J1bUNvbi9oZWFkXCI7XHJcbmltcG9ydCBmb3J1bUxpc3QgZnJvbSBcIkAvY29tcG9uZW50cy9mb3J1bUNvbi9mb3J1bUxpc3RcIjtcclxuaW1wb3J0IGZvb3RlciBmcm9tICdAL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5pbXBvcnQgYXBpIGZyb20gJ0AvYXBpL2FwaSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ydW0gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi6K665Z2bXCIsXHJcbiAgICAvLyDmiZPlvIAg5LiL5ouJ5Yi35pawXHJcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6dHJ1ZSxcclxuICAgIC8vIOaJk+W8gOS4iuaLieWKoOi9veabtOWkmlxyXG4gICAgb25SZWFjaEJvdHRvbURpc3RhbmNlOjFcclxuICB9O1xyXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJmb290ZXJcIjp7XCJjdXJyZW50SWRcIjpcIjJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgaGVhZDogaGVhZCxcclxuICAgIGZvcnVtbGlzdDogZm9ydW1MaXN0LFxyXG4gICAgZm9vdGVyXHJcbiAgfTtcclxuXHJcbiAgLy8gbWl4aW5zID0gW3Rlc3RNaXhpbl1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIGNob29zZVNob3dQYWdlOlwiXCIsLy/pu5jorqTlvIDlp4vpgInmi6nlsZXnpLrpobXpnaLkuLowXHJcbiAgICBuYXZmb3JtOlwiXCJcclxuICB9O1xyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICB0b0VkaXQ6ZnVuY3Rpb24oKXtcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHsgdXJsOiAnLi9lZGl0JyB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIOW8guatpVxyXG4gIGFzeW5jIHVwZGF0ZVNob3dQYWdlICgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSgnYXN5bmMgYXdhaXQgdGVzdC4uLicpICAgIFxyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKFwi5Lyg5YC8XCIpXHJcbiAgICAgIHRoaXMuJGJyb2FkY2FzdCgnY2hvb3NlU2hvd1BhZ2UnLCB0aGlzLmNob29zZVNob3dQYWdlKSAgIC8v5b+F6aG75piv5byC5q2l5omn6KGM5bm/5pKt5LqL5Lu277yM5Y6f55CG5ZKM5bCP56iL5bqP6aG16Z2i5Yi35paw5ZKMY2FudmFz6YeN57uY55qE5YWI5ZCO5py65Yi25pyJ5YWz77yM5ZCm5YiZ5Zu+6KGo5LiN5pi+56S6XHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSlcclxuICAgIH1cclxuICB9XHJcbiAgLy8gZXZlbnRz5a+56LGh5Lit5omA5aOw5piO55qE5Ye95pWw5Li655So5LqO55uR5ZCs57uE5Lu25LmL6Ze055qE6YCa5L+h5LiO5Lqk5LqS5LqL5Lu255qE5LqL5Lu25aSE55CG5Ye95pWwXHJcbiAgZXZlbnRzID0ge1xyXG4gICAgcGxhdGZvcm1DaG9vc2UobmF2Zm9ybSwgZXZlbnQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCLmraTml7blrZDnu4Tku7bpgInmi6nnmoTlubPlj7DmmK9cIiwgbmF2Zm9ybSk7XHJcbiAgICAgIHRoaXMubmF2Zm9ybSA9IG5hdmZvcm0uaWQ7XHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gIH1cclxuXHJcbiAgICAvLyDnm5HlkKzmlbDmja7lj5jljJZcclxuICB3YXRjaD17XHJcbiAgICAgbmF2Zm9ybSAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi5LqL5Lu255uR5ZCsXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGBudW0gdmFsdWU6ICR7b2xkVmFsdWV9IC0+ICR7bmV3VmFsdWV9YClcclxuICAgICAgdGhpcy5jaG9vc2VTaG93UGFnZSA9IG5ld1ZhbHVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgIHRoaXMudXBkYXRlU2hvd1BhZ2UoKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=