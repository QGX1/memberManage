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

var Index = function (_wepy$component) {
  _inherits(Index, _wepy$component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      team: Array,
      haveCaptain: Boolean
    }, _this.data = {
      avatar: "background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);",
      modalName: 'item',
      memberDetail: null,
      itemTouchStart: '',
      itemTouchDirection: ''
    }, _this.computed = {}, _this.methods = {
      showMemberDetail: function showMemberDetail(index) {
        this.memberDetail = this.team[index];
      },
      hideMemberDetail: function hideMemberDetail() {
        this.memberDetail = null;
      },
      showModal: function showModal(e) {
        this.modalName = e.currentTarget.dataset.target;
      },
      hideModal: function hideModal(e) {
        this.modalName = null;
      },

      // itemTouch触摸开始
      itemTouchStart: function itemTouchStart(e) {
        this.itemTouchStartPoint = {
          x: e.touches[0].pageX,
          y: e.touches[0].pageY
        };
        // this.modalName='item'
      },

      // itemTouch计算方向
      itemTouchMove: function itemTouchMove(e) {
        var sp = this.itemTouchStartPoint;
        var x1 = sp.x;
        var y1 = sp.y;

        var dp = { x: e.touches[0].pageX, y: e.touches[0].pageY };
        var x2 = dp.x;
        var y2 = dp.y;
        //斜边
        var bevel = Math.abs(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)));
        //对角边
        var diagonal = Math.abs(y1 - y2);
        var sin = diagonal / bevel;
        //如果夹角小于30°且滑动距离超过10px，则设置允许滑动

        if (sin < Math.sin(Math.PI / 6) && x1 > x2) {
          this.itemTouchDirection = e.touches[0].pageX - this.itemTouchStartPoint.x > 0 ? 'right' : 'left';
          this.modalName = 'item';
        } else {
          this.modalName = null;
        }
      },


      // itemTouch计算滚动
      itemTouchEnd: function itemTouchEnd(e) {
        if (this.itemTouchDirection == 'left') {
          this.modalName = e.currentTarget.dataset.target;
        } else {
          this.modalName = null;
        }
        this.itemTouchDirection = null;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0tbGlzdC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwidGVhbSIsIkFycmF5IiwiaGF2ZUNhcHRhaW4iLCJCb29sZWFuIiwiZGF0YSIsImF2YXRhciIsIm1vZGFsTmFtZSIsIm1lbWJlckRldGFpbCIsIml0ZW1Ub3VjaFN0YXJ0IiwiaXRlbVRvdWNoRGlyZWN0aW9uIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwic2hvd01lbWJlckRldGFpbCIsImluZGV4IiwiaGlkZU1lbWJlckRldGFpbCIsInNob3dNb2RhbCIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInRhcmdldCIsImhpZGVNb2RhbCIsIml0ZW1Ub3VjaFN0YXJ0UG9pbnQiLCJ4IiwidG91Y2hlcyIsInBhZ2VYIiwieSIsInBhZ2VZIiwiaXRlbVRvdWNoTW92ZSIsInNwIiwieDEiLCJ5MSIsImRwIiwieDIiLCJ5MiIsImJldmVsIiwiTWF0aCIsImFicyIsInNxcnQiLCJwb3ciLCJkaWFnb25hbCIsInNpbiIsIlBJIiwiaXRlbVRvdWNoRW5kIiwiZXZlbnRzIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBR25CQyxLLEdBQVE7QUFDTkMsWUFBTUMsS0FEQTtBQUVOQyxtQkFBYUM7QUFGUCxLLFFBS1JDLEksR0FBTztBQUNMQyxjQUFPLHlGQURGO0FBRUxDLGlCQUFVLE1BRkw7QUFHTEMsb0JBQWEsSUFIUjtBQUlMQyxzQkFBZSxFQUpWO0FBS0xDLDBCQUFtQjtBQUxkLEssUUFRUEMsUSxHQUFXLEUsUUFJWEMsTyxHQUFVO0FBQ1JDLHNCQURRLDRCQUNVQyxLQURWLEVBQ2lCO0FBQ3ZCLGFBQUtOLFlBQUwsR0FBb0IsS0FBS1AsSUFBTCxDQUFVYSxLQUFWLENBQXBCO0FBQ0QsT0FITztBQUlSQyxzQkFKUSw4QkFJWTtBQUNsQixhQUFLUCxZQUFMLEdBQW9CLElBQXBCO0FBQ0QsT0FOTztBQVNSUSxlQVRRLHFCQVNFQyxDQVRGLEVBU0s7QUFDWCxhQUFLVixTQUFMLEdBQWlCVSxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsTUFBekM7QUFDRCxPQVhPO0FBWVJDLGVBWlEscUJBWUVKLENBWkYsRUFZSztBQUNYLGFBQUtWLFNBQUwsR0FBaUIsSUFBakI7QUFDRCxPQWRPOztBQWVSO0FBQ0FFLG9CQWhCUSwwQkFnQk9RLENBaEJQLEVBZ0JVO0FBQ2hCLGFBQUtLLG1CQUFMLEdBQTJCO0FBQ3pCQyxhQUFFTixFQUFFTyxPQUFGLENBQVUsQ0FBVixFQUFhQyxLQURVO0FBRXpCQyxhQUFFVCxFQUFFTyxPQUFGLENBQVUsQ0FBVixFQUFhRztBQUZVLFNBQTNCO0FBSUE7QUFDRCxPQXRCTzs7QUF1QlI7QUFDQUMsbUJBeEJRLHlCQXdCTVgsQ0F4Qk4sRUF3QlM7QUFDZixZQUFJWSxLQUFLLEtBQUtQLG1CQUFkO0FBQ0EsWUFBSVEsS0FBS0QsR0FBR04sQ0FBWjtBQUNBLFlBQUlRLEtBQUtGLEdBQUdILENBQVo7O0FBRUEsWUFBSU0sS0FBSyxFQUFDVCxHQUFFTixFQUFFTyxPQUFGLENBQVUsQ0FBVixFQUFhQyxLQUFoQixFQUFzQkMsR0FBRVQsRUFBRU8sT0FBRixDQUFVLENBQVYsRUFBYUcsS0FBckMsRUFBVDtBQUNBLFlBQUlNLEtBQUtELEdBQUdULENBQVo7QUFDQSxZQUFJVyxLQUFLRixHQUFHTixDQUFaO0FBQ0E7QUFDQSxZQUFJUyxRQUFRQyxLQUFLQyxHQUFMLENBQVNELEtBQUtFLElBQUwsQ0FBVUYsS0FBS0csR0FBTCxDQUFTVCxLQUFHRyxFQUFaLEVBQWUsQ0FBZixJQUFrQkcsS0FBS0csR0FBTCxDQUFTUixLQUFHRyxFQUFaLEVBQWUsQ0FBZixDQUE1QixDQUFULENBQVo7QUFDQTtBQUNBLFlBQUlNLFdBQVdKLEtBQUtDLEdBQUwsQ0FBU04sS0FBS0csRUFBZCxDQUFmO0FBQ0EsWUFBSU8sTUFBTUQsV0FBV0wsS0FBckI7QUFDQTs7QUFFQSxZQUFHTSxNQUFNTCxLQUFLSyxHQUFMLENBQVNMLEtBQUtNLEVBQUwsR0FBUSxDQUFqQixDQUFOLElBQTZCWixLQUFLRyxFQUFyQyxFQUF3QztBQUN0QyxlQUFLdkIsa0JBQUwsR0FBMEJPLEVBQUVPLE9BQUYsQ0FBVSxDQUFWLEVBQWFDLEtBQWIsR0FBcUIsS0FBS0gsbUJBQUwsQ0FBeUJDLENBQTlDLEdBQWtELENBQWxELEdBQXNELE9BQXRELEdBQWdFLE1BQTFGO0FBQ0EsZUFBS2hCLFNBQUwsR0FBZ0IsTUFBaEI7QUFDRCxTQUhELE1BR0s7QUFDSCxlQUFLQSxTQUFMLEdBQWdCLElBQWhCO0FBQ0Q7QUFFRixPQTlDTzs7O0FBZ0RSO0FBQ0FvQyxrQkFqRFEsd0JBaURLMUIsQ0FqREwsRUFpRFE7QUFDZCxZQUFJLEtBQUtQLGtCQUFMLElBQTBCLE1BQTlCLEVBQXFDO0FBQ25DLGVBQUtILFNBQUwsR0FBZ0JVLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxNQUF4QztBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtiLFNBQUwsR0FBZ0IsSUFBaEI7QUFDRDtBQUNELGFBQUtHLGtCQUFMLEdBQXlCLElBQXpCO0FBQ0Q7QUF4RE8sSyxRQTJEVmtDLE0sR0FBUyxFOzs7Ozs2QkFJQyxDQUNUOzs7O0VBcEZnQ0MsZUFBS0MsUzs7a0JBQW5CL0MsSyIsImZpbGUiOiJ0ZWFtLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgIHRlYW06IEFycmF5LFxyXG4gICAgICBoYXZlQ2FwdGFpbjogQm9vbGVhblxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGF2YXRhcjpcImJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vb3Nzd2ViLWltZy5xcS5jb20vaW1hZ2VzL2xvbC93ZWIyMDEzMTAvc2tpbi9iaWcxMDAwMS5qcGcpO1wiLFxyXG4gICAgICBtb2RhbE5hbWU6J2l0ZW0nLFxyXG4gICAgICBtZW1iZXJEZXRhaWw6bnVsbCxcclxuICAgICAgaXRlbVRvdWNoU3RhcnQ6JycsXHJcbiAgICAgIGl0ZW1Ub3VjaERpcmVjdGlvbjonJyxcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgc2hvd01lbWJlckRldGFpbCAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLm1lbWJlckRldGFpbCA9IHRoaXMudGVhbVtpbmRleF07XHJcbiAgICAgIH0sXHJcbiAgICAgIGhpZGVNZW1iZXJEZXRhaWwgKCkge1xyXG4gICAgICAgIHRoaXMubWVtYmVyRGV0YWlsID0gbnVsbDtcclxuICAgICAgfSxcclxuXHJcblxyXG4gICAgICBzaG93TW9kYWwoZSkge1xyXG4gICAgICAgIHRoaXMubW9kYWxOYW1lID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFyZ2V0XHJcbiAgICAgIH0sXHJcbiAgICAgIGhpZGVNb2RhbChlKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbE5hbWUgPSBudWxsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIGl0ZW1Ub3VjaOinpuaRuOW8gOWni1xyXG4gICAgICBpdGVtVG91Y2hTdGFydChlKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtVG91Y2hTdGFydFBvaW50ID0ge1xyXG4gICAgICAgICAgeDplLnRvdWNoZXNbMF0ucGFnZVgsXHJcbiAgICAgICAgICB5OmUudG91Y2hlc1swXS5wYWdlWVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gdGhpcy5tb2RhbE5hbWU9J2l0ZW0nXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIGl0ZW1Ub3VjaOiuoeeul+aWueWQkVxyXG4gICAgICBpdGVtVG91Y2hNb3ZlKGUpIHtcclxuICAgICAgICBsZXQgc3AgPSB0aGlzLml0ZW1Ub3VjaFN0YXJ0UG9pbnQ7XHJcbiAgICAgICAgbGV0IHgxID0gc3AueDtcclxuICAgICAgICBsZXQgeTEgPSBzcC55O1xyXG5cclxuICAgICAgICBsZXQgZHAgPSB7eDplLnRvdWNoZXNbMF0ucGFnZVgseTplLnRvdWNoZXNbMF0ucGFnZVl9O1xyXG4gICAgICAgIGxldCB4MiA9IGRwLng7XHJcbiAgICAgICAgbGV0IHkyID0gZHAueTtcclxuICAgICAgICAvL+aWnOi+uVxyXG4gICAgICAgIGxldCBiZXZlbCA9IE1hdGguYWJzKE1hdGguc3FydChNYXRoLnBvdyh4MS14MiwyKStNYXRoLnBvdyh5MS15MiwyKSkpO1xyXG4gICAgICAgIC8v5a+56KeS6L65XHJcbiAgICAgICAgbGV0IGRpYWdvbmFsID0gTWF0aC5hYnMoeTEgLSB5Mik7XHJcbiAgICAgICAgbGV0IHNpbiA9IGRpYWdvbmFsIC8gYmV2ZWw7XHJcbiAgICAgICAgLy/lpoLmnpzlpLnop5LlsI/kuo4zMMKw5LiU5ruR5Yqo6Led56a76LaF6L+HMTBweO+8jOWImeiuvue9ruWFgeiuuOa7keWKqFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHNpbiA8IE1hdGguc2luKE1hdGguUEkvNikgJiYgeDEgPiB4Mil7XHJcbiAgICAgICAgICB0aGlzLml0ZW1Ub3VjaERpcmVjdGlvbiA9IGUudG91Y2hlc1swXS5wYWdlWCAtIHRoaXMuaXRlbVRvdWNoU3RhcnRQb2ludC54ID4gMCA/ICdyaWdodCcgOiAnbGVmdCc7XHJcbiAgICAgICAgICB0aGlzLm1vZGFsTmFtZT0gJ2l0ZW0nO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5tb2RhbE5hbWU9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgXHJcbiAgICAgIC8vIGl0ZW1Ub3VjaOiuoeeul+a7muWKqFxyXG4gICAgICBpdGVtVG91Y2hFbmQoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLml0ZW1Ub3VjaERpcmVjdGlvbiA9PSdsZWZ0Jyl7XHJcbiAgICAgICAgICB0aGlzLm1vZGFsTmFtZT0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFyZ2V0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm1vZGFsTmFtZT0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pdGVtVG91Y2hEaXJlY3Rpb249IG51bGw7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=