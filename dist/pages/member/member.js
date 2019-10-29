'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _footer = require('./../../components/footer.js');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 前后端联调 api


var Nember = function (_wepy$page) {
  _inherits(Nember, _wepy$page);

  function Nember() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Nember);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Nember.__proto__ || Object.getPrototypeOf(Nember)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人中心',
      navigationBarBackgroundColor: '#66B1FF',
      navigationBarTextStyle: 'black',
      backgroundColor: '#eeeeee',
      backgroundTextStyle: 'light'
    }, _this.data = {
      avatarUrl: '',
      nickName: ''
    }, _this.$repeat = {}, _this.$props = { "footer": { "currentId": "3" } }, _this.$events = {}, _this.components = {
      // head: head,
      // forumlist: forumList,
      footer: _footer2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Nember, [{
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      var userInfo = _wepy2.default.getStorageSync('userinfo');
      that.avatarUrl = userInfo.avatarUrl;
      that.nickName = userInfo.nickName;
    }
  }]);

  return Nember;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Nember , 'pages/member/member'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci5qcyJdLCJuYW1lcyI6WyJOZW1iZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwiZGF0YSIsImF2YXRhclVybCIsIm5pY2tOYW1lIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZm9vdGVyIiwidGhhdCIsInVzZXJJbmZvIiwid2VweSIsImdldFN0b3JhZ2VTeW5jIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsb0NBQThCLFNBRnZCO0FBR1BDLDhCQUF3QixPQUhqQjtBQUlQQyx1QkFBaUIsU0FKVjtBQUtQQywyQkFBcUI7QUFMZCxLLFFBUVRDLEksR0FBTztBQUNMQyxpQkFBVyxFQUROO0FBRUxDLGdCQUFVO0FBRkwsSyxRQUlSQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsYUFBWSxHQUFiLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUjtBQUNBO0FBQ0FDLGNBQVFBO0FBSEEsSzs7Ozs7NkJBS0Q7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxVQUFJQyxXQUFXQyxlQUFLQyxjQUFMLENBQW9CLFVBQXBCLENBQWY7QUFDQUgsV0FBS1AsU0FBTCxHQUFpQlEsU0FBU1IsU0FBMUI7QUFDQU8sV0FBS04sUUFBTCxHQUFnQk8sU0FBU1AsUUFBekI7QUFDRDs7OztFQTFCaUNRLGVBQUtFLEk7O2tCQUFwQm5CLE0iLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIC8vIOWJjeWQjuerr+iBlOiwgyBhcGlcbiAgaW1wb3J0IGZvb3RlciBmcm9tICdAL2NvbXBvbmVudHMvZm9vdGVyJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE5lbWJlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uuS4reW/gycsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzY2QjFGRicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZWVlZScsXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGF2YXRhclVybDogJycsXG4gICAgICBuaWNrTmFtZTogJydcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImZvb3RlclwiOntcImN1cnJlbnRJZFwiOlwiM1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAvLyBoZWFkOiBoZWFkLFxuICAgICAgLy8gZm9ydW1saXN0OiBmb3J1bUxpc3QsXG4gICAgICBmb290ZXI6IGZvb3RlclxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICAgIGxldCB1c2VySW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJpbmZvJylcbiAgICAgIHRoYXQuYXZhdGFyVXJsID0gdXNlckluZm8uYXZhdGFyVXJsXG4gICAgICB0aGF0Lm5pY2tOYW1lID0gdXNlckluZm8ubmlja05hbWVcbiAgICB9XG4gIH1cbiJdfQ==