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

var util = require('./../../utils/util.js');

var DiaryHead = function (_wepy$component) {
    _inherits(DiaryHead, _wepy$component);

    function DiaryHead() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DiaryHead);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DiaryHead.__proto__ || Object.getPrototypeOf(DiaryHead)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.props = {}, _this.data = {
            date: util.formatTime(new Date(), 'Y-M-D')
        }, _this.computed = {}, _this.methods = {
            DateChange: function DateChange(e) {
                this.date = e.detail.value;
                this.$emit('searchByDate', e.detail.value);
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DiaryHead, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return DiaryHead;
}(_wepy2.default.component);

exports.default = DiaryHead;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYXJ5LWhlYWQuanMiXSwibmFtZXMiOlsidXRpbCIsInJlcXVpcmUiLCJEaWFyeUhlYWQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJkYXRhIiwiZGF0ZSIsImZvcm1hdFRpbWUiLCJEYXRlIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiRGF0ZUNoYW5nZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsIiRlbWl0IiwiZXZlbnRzIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU1DLFFBQVEscUJBQVIsQ0FBWjs7SUFHcUJDLFM7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsVSxHQUFhLEUsUUFJYkMsSyxHQUFRLEUsUUFHUkMsSSxHQUFPO0FBQ0xDLGtCQUFLTixLQUFLTyxVQUFMLENBQWdCLElBQUlDLElBQUosRUFBaEIsRUFBMkIsT0FBM0I7QUFEQSxTLFFBTVBDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVTtBQUNSQyxzQkFEUSxzQkFDR0MsQ0FESCxFQUNNO0FBQ1oscUJBQUtOLElBQUwsR0FBWU0sRUFBRUMsTUFBRixDQUFTQyxLQUFyQjtBQUNBLHFCQUFLQyxLQUFMLENBQVcsY0FBWCxFQUEwQkgsRUFBRUMsTUFBRixDQUFTQyxLQUFuQztBQUNEO0FBSk8sUyxRQU9WRSxNLEdBQVMsRTs7Ozs7aUNBSUEsQ0FDUjs7OztFQTlCb0NDLGVBQUtDLFM7O2tCQUF2QmhCLFMiLCJmaWxlIjoiZGlhcnktaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4gIGNvbnN0IHV0aWw9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWwuanMnKVxyXG5cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhcnlIZWFkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgY29tcG9uZW50cyA9IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvcHMgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgZGF0ZTp1dGlsLmZvcm1hdFRpbWUobmV3IERhdGUoKSwnWS1NLUQnKVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbXB1dGVkID0ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBEYXRlQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLmRhdGUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ3NlYXJjaEJ5RGF0ZScsZS5kZXRhaWwudmFsdWUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfVxyXG4gIH1cclxuIl19