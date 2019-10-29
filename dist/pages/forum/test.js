'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Test = function (_wepy$page) {
  _inherits(Test, _wepy$page);

  function Test() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Test);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Test.__proto__ || Object.getPrototypeOf(Test)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      getData: '',
      top: 0,
      lastTop: 0,
      canDrag: false,
      list: []
    }, _this.methods = {
      moveFn: function moveFn(ev) {
        var nowY = ev.changedTouches[0].clientY;
        nowY = nowY - this.lastTop;
        if (nowY > 0) this.canDrag = false;
        if (nowY <= 0 && this.canDrag) {
          this.top = nowY;
        }
        if (-this.top >= this.maxTop) this.top = -this.maxTop;
      },
      startFn: function startFn(ev) {
        this.lastTop = ev.changedTouches[0].clientY;
      },
      endFn: function endFn() {
        var _this2 = this;

        if (this.top <= -this.maxTop) {
          this.text = "去请求数据了";
          setTimeout(function () {
            var _list;

            _this2.text = "请求回来了";
            _this2.canDrag = false;
            (_list = _this2.list).push.apply(_list, ["数据", "数据", "数据"]);
            _this2.$apply();
            _this2.top = 0;
            return;
          }, 1000);
        }
      },
      gotoTop: function gotoTop() {
        _wepy2.default.pageScrollTo({
          scrollTop: 0
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Test, [{
    key: 'onReachBottom',
    value: function onReachBottom() {
      this.canDrag = true;
    }
  }]);

  return Test;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Test , 'pages/forum/test'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiVGVzdCIsImRhdGEiLCJnZXREYXRhIiwidG9wIiwibGFzdFRvcCIsImNhbkRyYWciLCJsaXN0IiwibWV0aG9kcyIsIm1vdmVGbiIsImV2Iiwibm93WSIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WSIsIm1heFRvcCIsInN0YXJ0Rm4iLCJlbmRGbiIsInRleHQiLCJzZXRUaW1lb3V0IiwicHVzaCIsIiRhcHBseSIsImdvdG9Ub3AiLCJ3ZXB5IiwicGFnZVNjcm9sbFRvIiwic2Nyb2xsVG9wIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ2pCQyxJLEdBQU87QUFDVEMsZUFBUyxFQURBO0FBRVRDLFdBQUssQ0FGSTtBQUdUQyxlQUFTLENBSEE7QUFJVEMsZUFBUyxLQUpBO0FBS1RDLFlBQU07QUFMRyxLLFFBVVhDLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxFQURDLEVBQ0c7QUFDVCxZQUFJQyxPQUFPRCxHQUFHRSxjQUFILENBQWtCLENBQWxCLEVBQXFCQyxPQUFoQztBQUNBRixlQUFPQSxPQUFLLEtBQUtOLE9BQWpCO0FBQ0EsWUFBR00sT0FBTyxDQUFWLEVBQ0UsS0FBS0wsT0FBTCxHQUFlLEtBQWY7QUFDRixZQUFJSyxRQUFNLENBQU4sSUFBVyxLQUFLTCxPQUFwQixFQUE4QjtBQUM1QixlQUFLRixHQUFMLEdBQVdPLElBQVg7QUFDRDtBQUNELFlBQUksQ0FBQyxLQUFLUCxHQUFOLElBQVksS0FBS1UsTUFBckIsRUFDRSxLQUFLVixHQUFMLEdBQVcsQ0FBQyxLQUFLVSxNQUFqQjtBQUVMLE9BWlM7QUFhUkMsYUFiUSxtQkFhQUwsRUFiQSxFQWFJO0FBQ1YsYUFBS0wsT0FBTCxHQUFlSyxHQUFHRSxjQUFILENBQWtCLENBQWxCLEVBQXFCQyxPQUFwQztBQUNELE9BZk87QUFnQlJHLFdBaEJRLG1CQWdCQTtBQUFBOztBQUNOLFlBQUcsS0FBS1osR0FBTCxJQUFZLENBQUMsS0FBS1UsTUFBckIsRUFBNkI7QUFDM0IsZUFBS0csSUFBTCxHQUFZLFFBQVo7QUFDQUMscUJBQVcsWUFBSTtBQUFBOztBQUNiLG1CQUFLRCxJQUFMLEdBQVksT0FBWjtBQUNBLG1CQUFLWCxPQUFMLEdBQWUsS0FBZjtBQUNBLDRCQUFLQyxJQUFMLEVBQVVZLElBQVYsY0FBa0IsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLElBQVgsQ0FBbEI7QUFDQSxtQkFBS0MsTUFBTDtBQUNBLG1CQUFLaEIsR0FBTCxHQUFXLENBQVg7QUFDQTtBQUNELFdBUEQsRUFPRSxJQVBGO0FBUUQ7QUFDRixPQTVCTztBQTZCUmlCLGFBN0JRLHFCQTZCRTtBQUNSQyx1QkFBS0MsWUFBTCxDQUFrQjtBQUNoQkMscUJBQVc7QUFESyxTQUFsQjtBQUdEO0FBakNPLEs7Ozs7O29DQUhNO0FBQ2YsV0FBS2xCLE9BQUwsR0FBZSxJQUFmO0FBQ0E7Ozs7RUFWaUNnQixlQUFLRyxJOztrQkFBbEJ4QixJIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBkYXRhID0ge1xyXG4gIGdldERhdGE6ICcnLFxyXG4gIHRvcDogMCxcclxuICBsYXN0VG9wOiAwLFxyXG4gIGNhbkRyYWc6IGZhbHNlLFxyXG4gIGxpc3Q6IFtdXHJcbn1cclxub25SZWFjaEJvdHRvbSgpIHtcclxuIHRoaXMuY2FuRHJhZyA9IHRydWVcclxufVxyXG5tZXRob2RzID0ge1xyXG4gIG1vdmVGbihldikge1xyXG4gICAgbGV0IG5vd1kgPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXHJcbiAgICBub3dZID0gbm93WS10aGlzLmxhc3RUb3BcclxuICAgIGlmKG5vd1kgPiAwIClcclxuICAgICAgdGhpcy5jYW5EcmFnID0gZmFsc2VcclxuICAgIGlmKCBub3dZPD0wICYmIHRoaXMuY2FuRHJhZyApIHtcclxuICAgICAgdGhpcy50b3AgPSBub3dZXHJcbiAgICB9XHJcbiAgICBpZiggLXRoaXMudG9wPj0gdGhpcy5tYXhUb3AgIClcclxuICAgICAgdGhpcy50b3AgPSAtdGhpcy5tYXhUb3BcclxuXHJcbn0sXHJcbiAgc3RhcnRGbihldikge1xyXG4gICAgdGhpcy5sYXN0VG9wID0gZXYuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSBcclxuICB9LFxyXG4gIGVuZEZuKCkge1xyXG4gICAgaWYodGhpcy50b3AgPD0gLXRoaXMubWF4VG9wKSB7XHJcbiAgICAgIHRoaXMudGV4dCA9IFwi5Y676K+35rGC5pWw5o2u5LqGXCJcclxuICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgIHRoaXMudGV4dCA9IFwi6K+35rGC5Zue5p2l5LqGXCJcclxuICAgICAgICB0aGlzLmNhbkRyYWcgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubGlzdC5wdXNoKC4uLltcIuaVsOaNrlwiLFwi5pWw5o2uXCIsXCLmlbDmja5cIl0pXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIHRoaXMudG9wID0gMDtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfSwxMDAwKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ290b1RvcCgpIHtcclxuICAgIHdlcHkucGFnZVNjcm9sbFRvKHtcclxuICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG59XHJcbiJdfQ==