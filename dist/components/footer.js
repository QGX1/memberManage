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

var Footer = function (_wepy$component) {
  _inherits(Footer, _wepy$component);

  function Footer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Footer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Footer.__proto__ || Object.getPrototypeOf(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      currentId: {
        default: 0
      }
    }, _this.data = {
      barList: [{
        name: '日记',
        url: '/pages/diary/diary'
      }, {
        name: '小组',
        url: '/pages/team'
      }, {
        name: '论坛',
        url: '/pages/forum/forum'
      }, {
        name: '我的',
        url: '/pages/member/member'
      }]
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Footer;
}(_wepy2.default.component);

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJwcm9wcyIsImN1cnJlbnRJZCIsImRlZmF1bHQiLCJkYXRhIiwiYmFyTGlzdCIsIm5hbWUiLCJ1cmwiLCJtZXRob2RzIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSyxHQUFRO0FBQ05DLGlCQUFXO0FBQ1RDLGlCQUFTO0FBREE7QUFETCxLLFFBS1JDLEksR0FBTztBQUNMQyxlQUFTLENBQ1Q7QUFDRUMsY0FBTSxJQURSO0FBRUVDLGFBQUs7QUFGUCxPQURTLEVBS1Q7QUFDRUQsY0FBTSxJQURSO0FBRUVDLGFBQUs7QUFGUCxPQUxTLEVBU1Q7QUFDRUQsY0FBTSxJQURSO0FBRUVDLGFBQUs7QUFGUCxPQVRTLEVBYVQ7QUFDRUQsY0FBTSxJQURSO0FBRUVDLGFBQUs7QUFGUCxPQWJTO0FBREosSyxRQW9CUEMsTyxHQUFVLEU7Ozs7RUExQndCQyxlQUFLQyxTOztrQkFBcEJWLE0iLCJmaWxlIjoiZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICBwcm9wcyA9IHtcbiAgICAgICAgY3VycmVudElkOiB7XG4gICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkYXRhID0ge1xuICAgICAgICBiYXJMaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAn5pel6K6wJyxcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvZGlhcnkvZGlhcnknXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAn5bCP57uEJyxcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvdGVhbSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICforrrlnZsnLFxuICAgICAgICAgIHVybDogJy9wYWdlcy9mb3J1bS9mb3J1bSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICfmiJHnmoQnLFxuICAgICAgICAgIHVybDogJy9wYWdlcy9tZW1iZXIvbWVtYmVyJ1xuICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICAgIG1ldGhvZHMgPSB7XG4gICAgICB9XG4gICAgfVxuIl19