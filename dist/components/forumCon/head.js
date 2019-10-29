"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Head = function (_wepy$component) {
  _inherits(Head, _wepy$component);

  function Head() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Head);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Head.__proto__ || Object.getPrototypeOf(Head)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      // 组件间的数据传递
      num: {
        type: [Number, String],
        coerce: function coerce(v) {
          return +v;
        },
        default: 50
      }
    }, _this.data = {
      navformIndex: 0,
      TabCur: 0,
      scrollLeft: 0,
      elementValue: 4,
      navD: [{ id: 0, message: "综合" }, { id: 1, message: "前端" }, { id: 2, message: "架构" }, { id: 3, message: "数据库" }, { id: 4, message: "移动开发" }, { id: 5, message: "编程语言" }, { id: 6, message: "运维" }, { id: 7, message: "人工智能" }]
    }, _this.methods = {
      //导航栏点击事件
      tabSelect: function tabSelect(e) {
        // console.log(e)
        this.TabCur = e.currentTarget.dataset.id, //获取点击的数组下标
        // console.log("数据"+this.TabCur)
        this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60,
        // console.log('选择分类'),向祖先传递数据
        this.navformIndex = e.currentTarget.dataset.id;
        this.$emit('platformChoose', this.navD[this.navformIndex]);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Head;
}(_wepy2.default.component);

exports.default = Head;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWQuanMiXSwibmFtZXMiOlsiSGVhZCIsInByb3BzIiwibnVtIiwidHlwZSIsIk51bWJlciIsIlN0cmluZyIsImNvZXJjZSIsInYiLCJkZWZhdWx0IiwiZGF0YSIsIm5hdmZvcm1JbmRleCIsIlRhYkN1ciIsInNjcm9sbExlZnQiLCJlbGVtZW50VmFsdWUiLCJuYXZEIiwiaWQiLCJtZXNzYWdlIiwibWV0aG9kcyIsInRhYlNlbGVjdCIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIiRlbWl0Iiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSyxHQUFRO0FBQ047QUFDQUMsV0FBSztBQUNIQyxjQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxDQURIO0FBRUhDLGdCQUFRLGdCQUFVQyxDQUFWLEVBQWE7QUFDbkIsaUJBQU8sQ0FBQ0EsQ0FBUjtBQUNELFNBSkU7QUFLSEMsaUJBQVM7QUFMTjtBQUZDLEssUUFVUkMsSSxHQUFPO0FBQ0xDLG9CQUFjLENBRFQ7QUFFTEMsY0FBUSxDQUZIO0FBR0xDLGtCQUFXLENBSE47QUFJTEMsb0JBQWMsQ0FKVDtBQUtMQyxZQUFLLENBQ0gsRUFBQ0MsSUFBRyxDQUFKLEVBQU1DLFNBQVEsSUFBZCxFQURHLEVBRUgsRUFBQ0QsSUFBRyxDQUFKLEVBQU1DLFNBQVEsSUFBZCxFQUZHLEVBR0gsRUFBQ0QsSUFBRyxDQUFKLEVBQU1DLFNBQVEsSUFBZCxFQUhHLEVBSUgsRUFBQ0QsSUFBRyxDQUFKLEVBQU1DLFNBQVEsS0FBZCxFQUpHLEVBS0gsRUFBQ0QsSUFBRyxDQUFKLEVBQU1DLFNBQVEsTUFBZCxFQUxHLEVBTUgsRUFBQ0QsSUFBRyxDQUFKLEVBQU1DLFNBQVEsTUFBZCxFQU5HLEVBT0gsRUFBQ0QsSUFBRyxDQUFKLEVBQU1DLFNBQVEsSUFBZCxFQVBHLEVBUUgsRUFBQ0QsSUFBRyxDQUFKLEVBQU1DLFNBQVEsTUFBZCxFQVJHO0FBTEEsSyxRQWlCUEMsTyxHQUFVO0FBQ1I7QUFDQUMsZUFGUSxxQkFFRUMsQ0FGRixFQUVLO0FBQ1g7QUFDQSxhQUFLUixNQUFMLEdBQWFRLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCTixFQUFyQyxFQUF3QztBQUN4QztBQUNBLGFBQUtILFVBQUwsR0FBaUIsQ0FBQ08sRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JOLEVBQXhCLEdBQTJCLENBQTVCLElBQStCLEVBRmhEO0FBR0E7QUFDQSxhQUFLTCxZQUFMLEdBQW9CUyxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3Qk4sRUFKNUM7QUFLQSxhQUFLTyxLQUFMLENBQVcsZ0JBQVgsRUFBNEIsS0FBS1IsSUFBTCxDQUFVLEtBQUtKLFlBQWYsQ0FBNUI7QUFDRDtBQVZPLEs7Ozs7RUE1QnNCYSxlQUFLQyxTOztrQkFBbEJ4QixJIiwiZmlsZSI6ImhlYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgIC8vIOe7hOS7tumXtOeahOaVsOaNruS8oOmAklxyXG4gICAgICBudW06IHtcclxuICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG4gICAgICAgIGNvZXJjZTogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgIHJldHVybiArdlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVmYXVsdDogNTBcclxuICAgICAgfSxcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIG5hdmZvcm1JbmRleDogMCxcclxuICAgICAgVGFiQ3VyOiAwLFxyXG4gICAgICBzY3JvbGxMZWZ0OjAsXHJcbiAgICAgIGVsZW1lbnRWYWx1ZTogNCxcclxuICAgICAgbmF2RDpbXHJcbiAgICAgICAge2lkOjAsbWVzc2FnZTpcIue7vOWQiFwifSxcclxuICAgICAgICB7aWQ6MSxtZXNzYWdlOlwi5YmN56uvXCJ9LFxyXG4gICAgICAgIHtpZDoyLG1lc3NhZ2U6XCLmnrbmnoRcIn0sXHJcbiAgICAgICAge2lkOjMsbWVzc2FnZTpcIuaVsOaNruW6k1wifSxcclxuICAgICAgICB7aWQ6NCxtZXNzYWdlOlwi56e75Yqo5byA5Y+RXCJ9LFxyXG4gICAgICAgIHtpZDo1LG1lc3NhZ2U6XCLnvJbnqIvor63oqIBcIn0sXHJcbiAgICAgICAge2lkOjYsbWVzc2FnZTpcIui/kOe7tFwifSxcclxuICAgICAgICB7aWQ6NyxtZXNzYWdlOlwi5Lq65bel5pm66IO9XCJ9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIC8v5a+86Iiq5qCP54K55Ye75LqL5Lu2XHJcbiAgICAgIHRhYlNlbGVjdChlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZSlcclxuICAgICAgICB0aGlzLlRhYkN1cj0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQsLy/ojrflj5bngrnlh7vnmoTmlbDnu4TkuIvmoIdcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaVsOaNrlwiK3RoaXMuVGFiQ3VyKVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsTGVmdD0gKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkLTEpKjYwLFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfpgInmi6nliIbnsbsnKSzlkJHnpZblhYjkvKDpgJLmlbDmja5cclxuICAgICAgICB0aGlzLm5hdmZvcm1JbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXHJcbiAgICAgICAgdGhpcy4kZW1pdCgncGxhdGZvcm1DaG9vc2UnLHRoaXMubmF2RFt0aGlzLm5hdmZvcm1JbmRleF0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=