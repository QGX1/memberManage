'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _test = require('./../../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

var _editor = require('./editor.js');

var _editor2 = _interopRequireDefault(_editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edit = function (_wepy$page) {
  _inherits(Edit, _wepy$page);

  function Edit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Edit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Edit.__proto__ || Object.getPrototypeOf(Edit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '发布论坛'
    }, _this.$repeat = {}, _this.$props = { "editor": { "bindfinish": "finish", "xmlns:v-bind": "", "v-bind:outputType.once": "outputType", "v-bind:imageUploadUrl.once": "imageUploadUrl", "v-bind:imageUploadName.once": "imageUploadName", "v-bind:imageUploadKeyChain.once": "imageUploadKeyChain", "v-bind:uploadImageWhenChoose.once": "uploadImageWhenChoose", "v-bind:html.once": "html", "v-bind:windowHeight.sync": "windowHeight" } }, _this.$events = {}, _this.components = {
      editor: _editor2.default //editor组件
    }, _this.data = {
      windowHeight: 0,
      //   html: '<p class="xing-p">你可以在此处输入文本内容，也可以点击上方图标进行增加段落或图片</p><img class="xing-img" style="width: 100%" src="http://c12.eoemarket.net/app0/532/532969/screen/2751542.png" _height="0.61983" _uploaded="true"></img>',

      //图片上传相关属性，参考wx.uploadFile
      imageUploadUrl: 'http://localhost:8080/upload',
      imageUploadName: 'image',
      imageUploadKeyChain: 'image.url',
      outputType: 'html',
      uploadImageWhenChoose: false //是否在选择图片后立即上传
    }, _this.computed = {}, _this.events = {
      finish: function finish(e) {
        console.log(e.content);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // events是WePY组件事件处理函数对象


  _createClass(Edit, [{
    key: 'onReady',
    value: function onReady() {
      this.windowHeight = wx.getSystemInfoSync().windowHeight;
      // 小程序 wx.getSystemInfoSync 获取 windowHeight屏幕高度 
    }
  }]);

  return Edit;
}(_wepy2.default.page);

exports.default = Edit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuanMiXSwibmFtZXMiOlsiRWRpdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJlZGl0b3IiLCJkYXRhIiwid2luZG93SGVpZ2h0IiwiaW1hZ2VVcGxvYWRVcmwiLCJpbWFnZVVwbG9hZE5hbWUiLCJpbWFnZVVwbG9hZEtleUNoYWluIiwib3V0cHV0VHlwZSIsInVwbG9hZEltYWdlV2hlbkNob29zZSIsImNvbXB1dGVkIiwiZXZlbnRzIiwiZmluaXNoIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50Iiwid3giLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXVCO0FBRGhCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGNBQWEsUUFBZCxFQUF1QixnQkFBZSxFQUF0QyxFQUF5QywwQkFBeUIsWUFBbEUsRUFBK0UsOEJBQTZCLGdCQUE1RyxFQUE2SCwrQkFBOEIsaUJBQTNKLEVBQTZLLG1DQUFrQyxxQkFBL00sRUFBcU8scUNBQW9DLHVCQUF6USxFQUFpUyxvQkFBbUIsTUFBcFQsRUFBMlQsNEJBQTJCLGNBQXRWLEVBQVYsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsOEJBRFEsQ0FDRjtBQURFLEssUUFHVkMsSSxHQUFPO0FBQ0xDLG9CQUFhLENBRFI7QUFFUDs7QUFFRTtBQUNBQyxzQkFBZSw4QkFMVjtBQU1MQyx1QkFBZ0IsT0FOWDtBQU9MQywyQkFBb0IsV0FQZjtBQVFMQyxrQkFBVyxNQVJOO0FBU0xDLDZCQUFzQixLQVRqQixDQVN1QjtBQVR2QixLLFFBWVBDLFEsR0FBVyxFLFFBR1hDLE0sR0FBUztBQUNQQyxjQUFPLGdCQUFDQyxDQUFELEVBQUs7QUFDVkMsZ0JBQVFDLEdBQVIsQ0FBWUYsRUFBRUcsT0FBZDtBQUNEO0FBSE0sSzs7QUFEVDs7Ozs7OEJBT1U7QUFDUixXQUFLWixZQUFMLEdBQW9CYSxHQUFHQyxpQkFBSCxHQUF1QmQsWUFBM0M7QUFDRTtBQUNKOzs7O0VBbENnQ2UsZUFBS0MsSTs7a0JBQWxCekIsSSIsImZpbGUiOiJlZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgdGVzdE1peGluIGZyb20gXCIuLi8uLi9taXhpbnMvdGVzdFwiO1xyXG4gIGltcG9ydCBlZGl0b3IgZnJvbSAnQC9jb21wb25lbnRzL2ZvcnVtQ29uL2VkaXRvcidcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6J+WPkeW4g+iuuuWdmydcclxuICAgIH1cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJlZGl0b3JcIjp7XCJiaW5kZmluaXNoXCI6XCJmaW5pc2hcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6b3V0cHV0VHlwZS5vbmNlXCI6XCJvdXRwdXRUeXBlXCIsXCJ2LWJpbmQ6aW1hZ2VVcGxvYWRVcmwub25jZVwiOlwiaW1hZ2VVcGxvYWRVcmxcIixcInYtYmluZDppbWFnZVVwbG9hZE5hbWUub25jZVwiOlwiaW1hZ2VVcGxvYWROYW1lXCIsXCJ2LWJpbmQ6aW1hZ2VVcGxvYWRLZXlDaGFpbi5vbmNlXCI6XCJpbWFnZVVwbG9hZEtleUNoYWluXCIsXCJ2LWJpbmQ6dXBsb2FkSW1hZ2VXaGVuQ2hvb3NlLm9uY2VcIjpcInVwbG9hZEltYWdlV2hlbkNob29zZVwiLFwidi1iaW5kOmh0bWwub25jZVwiOlwiaHRtbFwiLFwidi1iaW5kOndpbmRvd0hlaWdodC5zeW5jXCI6XCJ3aW5kb3dIZWlnaHRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBlZGl0b3IvL2VkaXRvcue7hOS7tlxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgd2luZG93SGVpZ2h0OjAsXHJcbiAgICAvLyAgIGh0bWw6ICc8cCBjbGFzcz1cInhpbmctcFwiPuS9oOWPr+S7peWcqOatpOWkhOi+k+WFpeaWh+acrOWGheWuue+8jOS5n+WPr+S7peeCueWHu+S4iuaWueWbvuagh+i/m+ihjOWinuWKoOauteiQveaIluWbvueJhzwvcD48aW1nIGNsYXNzPVwieGluZy1pbWdcIiBzdHlsZT1cIndpZHRoOiAxMDAlXCIgc3JjPVwiaHR0cDovL2MxMi5lb2VtYXJrZXQubmV0L2FwcDAvNTMyLzUzMjk2OS9zY3JlZW4vMjc1MTU0Mi5wbmdcIiBfaGVpZ2h0PVwiMC42MTk4M1wiIF91cGxvYWRlZD1cInRydWVcIj48L2ltZz4nLFxyXG4gICAgICBcclxuICAgICAgLy/lm77niYfkuIrkvKDnm7jlhbPlsZ7mgKfvvIzlj4LogIN3eC51cGxvYWRGaWxlXHJcbiAgICAgIGltYWdlVXBsb2FkVXJsOidodHRwOi8vbG9jYWxob3N0OjgwODAvdXBsb2FkJyxcclxuICAgICAgaW1hZ2VVcGxvYWROYW1lOidpbWFnZScsXHJcbiAgICAgIGltYWdlVXBsb2FkS2V5Q2hhaW46J2ltYWdlLnVybCcsXHJcbiAgICAgIG91dHB1dFR5cGU6J2h0bWwnLFxyXG4gICAgICB1cGxvYWRJbWFnZVdoZW5DaG9vc2U6ZmFsc2UgLy/mmK/lkKblnKjpgInmi6nlm77niYflkI7nq4vljbPkuIrkvKBcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICB9XHJcbiAgICAvLyBldmVudHPmmK9XZVBZ57uE5Lu25LqL5Lu25aSE55CG5Ye95pWw5a+56LGhXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgIGZpbmlzaDooZSk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhlLmNvbnRlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodDtcclxuICAgICAgICAvLyDlsI/nqIvluo8gd3guZ2V0U3lzdGVtSW5mb1N5bmMg6I635Y+WIHdpbmRvd0hlaWdodOWxj+W5lemrmOW6piBcclxuICAgfVxyXG4gIH1cclxuIl19