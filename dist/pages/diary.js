'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _diaryHead = require('./../components/diary/diary-head.js');

var _diaryHead2 = _interopRequireDefault(_diaryHead);

var _diaryList = require('./../components/diary/diary-list.js');

var _diaryList2 = _interopRequireDefault(_diaryList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      navigationBarTitleText: '日记'
    }, _this.components = {
      DiaryHead: _diaryHead2.default,
      DiaryList: _diaryList2.default
    }, _this.mixins = [], _this.data = {
      showHead: true
    }, _this.computed = {}, _this.methods = {
      onScroll: function onScroll(e) {

        this.showHead = e.detail.deltaY > 0 || e.detail.scrollTop <= 0;
      }
    }, _this.events = {
      searchByDate: function searchByDate(date) {
        console.log(date);
      },
      searchByUser: function searchByUser(user) {
        console.log(user);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Diary, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Diary;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Diary , 'pages/diary'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYXJ5LmpzIl0sIm5hbWVzIjpbIkRpYXJ5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJEaWFyeUhlYWQiLCJEaWFyeUxpc3QiLCJtaXhpbnMiLCJkYXRhIiwic2hvd0hlYWQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJvblNjcm9sbCIsImUiLCJkZXRhaWwiLCJkZWx0YVkiLCJzY3JvbGxUb3AiLCJldmVudHMiLCJzZWFyY2hCeURhdGUiLCJkYXRlIiwiY29uc29sZSIsImxvZyIsInNlYXJjaEJ5VXNlciIsInVzZXIiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQyxvQ0FEVztBQUVYQztBQUZXLEssUUFLYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLGdCQUFTO0FBREosSyxRQUlQQyxRLEdBQVcsRSxRQUlYQyxPLEdBQVU7QUFDUkMsY0FEUSxvQkFDRUMsQ0FERixFQUNLOztBQUVYLGFBQUtKLFFBQUwsR0FBZ0JJLEVBQUVDLE1BQUYsQ0FBU0MsTUFBVCxHQUFrQixDQUFsQixJQUF1QkYsRUFBRUMsTUFBRixDQUFTRSxTQUFULElBQXNCLENBQTdEO0FBQ0Q7QUFKTyxLLFFBT1ZDLE0sR0FBUztBQUNQQyxrQkFETyx3QkFDTUMsSUFETixFQUNXO0FBQ2hCQyxnQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0QsT0FITTtBQUlQRyxrQkFKTyx3QkFJTUMsSUFKTixFQUlXO0FBQ2hCSCxnQkFBUUMsR0FBUixDQUFZRSxJQUFaO0FBQ0Q7QUFOTSxLOzs7Ozs2QkFTQSxDQUVSOzs7O0VBckNnQ0MsZUFBS0MsSTs7a0JBQW5CeEIsSyIsImZpbGUiOiJkaWFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IERpYXJ5SGVhZCBmcm9tICdAL2NvbXBvbmVudHMvZGlhcnkvZGlhcnktaGVhZCdcclxuICBpbXBvcnQgRGlhcnlMaXN0IGZyb20gJ0AvY29tcG9uZW50cy9kaWFyeS9kaWFyeS1saXN0J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFyeSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfml6XorrAnXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4gICAgICBEaWFyeUhlYWQsXHJcbiAgICAgIERpYXJ5TGlzdFxyXG4gICAgfVxyXG5cclxuICAgIG1peGlucyA9IFtdXHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgc2hvd0hlYWQ6dHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVkID0ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBvblNjcm9sbCAoZSkge1xyXG5cclxuICAgICAgICB0aGlzLnNob3dIZWFkID0gZS5kZXRhaWwuZGVsdGFZID4gMCB8fCBlLmRldGFpbC5zY3JvbGxUb3AgPD0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgc2VhcmNoQnlEYXRlKGRhdGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGUpO1xyXG4gICAgICB9LFxyXG4gICAgICBzZWFyY2hCeVVzZXIodXNlcil7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuIl19