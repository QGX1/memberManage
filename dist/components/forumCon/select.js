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

var Select = function (_wepy$component) {
  _inherits(Select, _wepy$component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.properties = {
      propArray: {
        type: Array
      }
      /**
       * 组件的初始数据
       */
    }, _this.data = {
      selectShow: false, //初始option不显示
      nowText: "请选择", //初始内容
      animationData: {} //右边箭头的动画

      /**
       * 组件的方法列表
       */
    }, _this.methods = {
      //option的显示与否
      selectToggle: function selectToggle() {
        var nowShow = this.data.selectShow; //获取当前option显示的状态
        //创建动画
        var animation = _wepy2.default.createAnimation({
          timingFunction: "ease"
        });
        this.animation = animation;
        if (nowShow) {
          animation.rotate(0).step();
          this.animationData = animation.export();
        } else {
          animation.rotate(180).step();
          this.animationData = animation.export();
        }
        this.selectShow = !nowShow;
      },
      //设置内容
      setText: function setText(e) {

        var nowData = this.properties.propArray; //当前option的数据是引入组件的页面传过来的，所以这里获取数据只有通过this.properties
        var nowIdx = e.target.dataset.index; //当前点击的索引
        var nowText = nowData[nowIdx].text; //当前点击的内容
        //再次执行动画，注意这里一定，一定，一定是this.animation来使用动画
        this.animation.rotate(0).step();
        this.setData({
          selectShow: false,
          nowText: nowText,
          animationData: this.animation.export()
        });

        var nowDate = {
          id: nowIdx,
          text: nowText
        };
        this.triggerEvent('myget', nowDate);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /**
  * 组件的属性列表
  */


  return Select;
}(_wepy2.default.component);

exports.default = Select;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJwcm9wZXJ0aWVzIiwicHJvcEFycmF5IiwidHlwZSIsIkFycmF5IiwiZGF0YSIsInNlbGVjdFNob3ciLCJub3dUZXh0IiwiYW5pbWF0aW9uRGF0YSIsIm1ldGhvZHMiLCJzZWxlY3RUb2dnbGUiLCJub3dTaG93IiwiYW5pbWF0aW9uIiwid2VweSIsImNyZWF0ZUFuaW1hdGlvbiIsInRpbWluZ0Z1bmN0aW9uIiwicm90YXRlIiwic3RlcCIsImV4cG9ydCIsInNldFRleHQiLCJlIiwibm93RGF0YSIsIm5vd0lkeCIsInRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsInRleHQiLCJzZXREYXRhIiwibm93RGF0ZSIsImlkIiwidHJpZ2dlckV2ZW50IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBSW5CQyxVLEdBQVk7QUFDVkMsaUJBQVc7QUFDVEMsY0FBTUM7QUFERztBQUliOzs7QUFMWSxLLFFBUVpDLEksR0FBSztBQUNIQyxrQkFBWSxLQURULEVBQ2U7QUFDbEJDLGVBQVMsS0FGTixFQUVZO0FBQ2ZDLHFCQUFlLEVBSFosQ0FHYzs7QUFFbkI7OztBQUxLLEssUUFRTEMsTyxHQUFRO0FBQ0g7QUFDSEMsb0JBQWMsd0JBQVk7QUFDeEIsWUFBSUMsVUFBVSxLQUFLTixJQUFMLENBQVVDLFVBQXhCLENBRHdCLENBQ1c7QUFDbkM7QUFDQSxZQUFJTSxZQUFZQyxlQUFLQyxlQUFMLENBQXFCO0FBQ25DQywwQkFBZ0I7QUFEbUIsU0FBckIsQ0FBaEI7QUFHQSxhQUFLSCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFlBQUlELE9BQUosRUFBYTtBQUNYQyxvQkFBVUksTUFBVixDQUFpQixDQUFqQixFQUFvQkMsSUFBcEI7QUFDQSxlQUFLVCxhQUFMLEdBQW9CSSxVQUFVTSxNQUFWLEVBQXBCO0FBRUQsU0FKRCxNQUlPO0FBQ0xOLG9CQUFVSSxNQUFWLENBQWlCLEdBQWpCLEVBQXNCQyxJQUF0QjtBQUNBLGVBQU1ULGFBQU4sR0FBcUJJLFVBQVVNLE1BQVYsRUFBckI7QUFDRDtBQUNELGFBQUtaLFVBQUwsR0FBaUIsQ0FBQ0ssT0FBbEI7QUFDRCxPQWxCSztBQW1CTjtBQUNBUSxlQUFTLGlCQUFVQyxDQUFWLEVBQWE7O0FBRXBCLFlBQUlDLFVBQVUsS0FBS3BCLFVBQUwsQ0FBZ0JDLFNBQTlCLENBRm9CLENBRW9CO0FBQ3hDLFlBQUlvQixTQUFTRixFQUFFRyxNQUFGLENBQVNDLE9BQVQsQ0FBaUJDLEtBQTlCLENBSG9CLENBR2dCO0FBQ3BDLFlBQUlsQixVQUFVYyxRQUFRQyxNQUFSLEVBQWdCSSxJQUE5QixDQUpvQixDQUllO0FBQ25DO0FBQ0EsYUFBS2QsU0FBTCxDQUFlSSxNQUFmLENBQXNCLENBQXRCLEVBQXlCQyxJQUF6QjtBQUNBLGFBQUtVLE9BQUwsQ0FBYTtBQUNYckIsc0JBQVksS0FERDtBQUVYQyxtQkFBU0EsT0FGRTtBQUdYQyx5QkFBZSxLQUFLSSxTQUFMLENBQWVNLE1BQWY7QUFISixTQUFiOztBQU1BLFlBQUlVLFVBQVU7QUFDWkMsY0FBSVAsTUFEUTtBQUVaSSxnQkFBTW5CO0FBRk0sU0FBZDtBQUlBLGFBQUt1QixZQUFMLENBQWtCLE9BQWxCLEVBQTJCRixPQUEzQjtBQUNEO0FBdENLLEs7O0FBbkJOOzs7Ozs7RUFEZ0NmLGVBQUtrQixTOztrQkFBcEIvQixNIiwiZmlsZSI6InNlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXHJcbiAgICovXHJcbiAgcHJvcGVydGllcz0ge1xyXG4gICAgcHJvcEFycmF5OiB7XHJcbiAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhPXtcclxuICAgIHNlbGVjdFNob3c6IGZhbHNlLC8v5Yid5aeLb3B0aW9u5LiN5pi+56S6XHJcbiAgICBub3dUZXh0OiBcIuivt+mAieaLqVwiLC8v5Yid5aeL5YaF5a65XHJcbiAgICBhbmltYXRpb25EYXRhOiB7fS8v5Y+z6L65566t5aS055qE5Yqo55S7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxyXG4gICAqL1xyXG4gIG1ldGhvZHM9e1xyXG4gICAg44CA44CA44CALy9vcHRpb27nmoTmmL7npLrkuI7lkKZcclxuICAgIHNlbGVjdFRvZ2dsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgbm93U2hvdyA9IHRoaXMuZGF0YS5zZWxlY3RTaG93Oy8v6I635Y+W5b2T5YmNb3B0aW9u5pi+56S655qE54q25oCBXHJcbiAgICAgIC8v5Yib5bu65Yqo55S7XHJcbiAgICAgIHZhciBhbmltYXRpb24gPSB3ZXB5LmNyZWF0ZUFuaW1hdGlvbih7XHJcbiAgICAgICAgdGltaW5nRnVuY3Rpb246IFwiZWFzZVwiXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xyXG4gICAgICBpZiAobm93U2hvdykge1xyXG4gICAgICAgIGFuaW1hdGlvbi5yb3RhdGUoMCkuc3RlcCgpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YT0gYW5pbWF0aW9uLmV4cG9ydCgpXHJcbiAgICAgICAgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLnJvdGF0ZSgxODApLnN0ZXAoKTtcclxuICAgICAgICB0aGlzLiBhbmltYXRpb25EYXRhPSBhbmltYXRpb24uZXhwb3J0KClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlbGVjdFNob3c9ICFub3dTaG93XHJcbiAgICB9LFxyXG4gICAgLy/orr7nva7lhoXlrrlcclxuICAgIHNldFRleHQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgbm93RGF0YSA9IHRoaXMucHJvcGVydGllcy5wcm9wQXJyYXk7Ly/lvZPliY1vcHRpb27nmoTmlbDmja7mmK/lvJXlhaXnu4Tku7bnmoTpobXpnaLkvKDov4fmnaXnmoTvvIzmiYDku6Xov5nph4zojrflj5bmlbDmja7lj6rmnInpgJrov4d0aGlzLnByb3BlcnRpZXNcclxuICAgICAgdmFyIG5vd0lkeCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7Ly/lvZPliY3ngrnlh7vnmoTntKLlvJVcclxuICAgICAgdmFyIG5vd1RleHQgPSBub3dEYXRhW25vd0lkeF0udGV4dDsvL+W9k+WJjeeCueWHu+eahOWGheWuuVxyXG4gICAgICAvL+WGjeasoeaJp+ihjOWKqOeUu++8jOazqOaEj+i/memHjOS4gOWumu+8jOS4gOWumu+8jOS4gOWumuaYr3RoaXMuYW5pbWF0aW9u5p2l5L2/55So5Yqo55S7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uLnJvdGF0ZSgwKS5zdGVwKCk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgc2VsZWN0U2hvdzogZmFsc2UsXHJcbiAgICAgICAgbm93VGV4dDogbm93VGV4dCxcclxuICAgICAgICBhbmltYXRpb25EYXRhOiB0aGlzLmFuaW1hdGlvbi5leHBvcnQoKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdmFyIG5vd0RhdGUgPSB7XHJcbiAgICAgICAgaWQ6IG5vd0lkeCxcclxuICAgICAgICB0ZXh0OiBub3dUZXh0XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ215Z2V0Jywgbm93RGF0ZSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19