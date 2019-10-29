'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var editor = function (_wepy$component) {
    _inherits(editor, _wepy$component);

    function editor() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, editor);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = editor.__proto__ || Object.getPrototypeOf(editor)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            nodeList: [],
            textBufferPool: []
        }, _this.methods = {
            // 事件：添加文本
            addText: function addText(e) {
                this.writeTextToNode();
                var index = e.currentTarget.dataset.index;
                var node = {
                    name: 'p',
                    attrs: {
                        class: 'xing-p'
                    },
                    children: [{
                        type: 'text',
                        text: ''
                    }]
                };
                var nodeList = this.nodeList;
                var textBufferPool = this.textBufferPool;
                nodeList.splice(index + 1, 0, node);
                textBufferPool.splice(index + 1, 0, '');
                this.nodeList = nodeList;
                this.textBufferPool = textBufferPool;
            },

            // 事件：添加图片
            addImage: function addImage(e) {
                var _this2 = this;

                this.writeTextToNode();
                var index = e.currentTarget.dataset.index;
                wx.chooseImage({
                    success: function success(res) {
                        var tempFilePath = res.tempFilePaths[0];
                        wx.getImageInfo({
                            src: tempFilePath,
                            success: function success(res) {
                                var node = {
                                    name: 'img',
                                    attrs: {
                                        class: 'xing-img',
                                        style: 'width: 100%',
                                        src: tempFilePath,
                                        _height: res.height / res.width
                                    }
                                };
                                var nodeList = _this2.nodeList;
                                var textBufferPool = _this2.textBufferPool;
                                nodeList.splice(index + 1, 0, node);
                                textBufferPool.splice(index + 1, 0, tempFilePath);
                                _this2.nodeList = nodeList;
                                _this2.textBufferPool = textBufferPool;
                                _this2.$apply();
                            }
                        });
                    }
                });
            },

            // 事件：删除节点
            deleteNode: function deleteNode(e) {
                this.writeTextToNode();
                var index = e.currentTarget.dataset.index;
                var nodeList = this.nodeList;
                var textBufferPool = this.textBufferPool;
                nodeList.splice(index, 1);
                textBufferPool.splice(index, 1);
                this.nodeList = nodeList;
                this.textBufferPool = textBufferPool;
            },

            // 事件：文本输入
            onTextareaInput: function onTextareaInput(e) {
                var index = e.currentTarget.dataset.index;
                var textBufferPool = this.textBufferPool;
                textBufferPool[index] = e.detail.value;
                this.textBufferPool = textBufferPool;
            },
            onFinish: function onFinish(e) {
                wx.showLoading({
                    title: '正在保存'
                });
                this.writeTextToNode();
                this.handleOutput();
            }
        }, _this.props = {
            outputType: {
                type: String,
                default: 'html'
            },
            // 是否在选择图片后立即上传
            uploadImageWhenChoose: {
                type: Boolean,
                default: false
            },
            imageUploadUrl: String,
            imageUploadName: String,
            imageUploadKeyChain: String,
            html: String,
            windowHeight: Number
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(editor, [{
        key: 'onLoad',
        value: function onLoad() {
            var nodeList = this.HTMLtoNodeList();
            var textBufferPool = [];
            nodeList.forEach(function (node, index) {
                if (node.name === 'p') {
                    textBufferPool[index] = node.children[0].text;
                }
            });
            this.textBufferPool = textBufferPool;
            this.nodeList = nodeList;
        }
        // 方法：HTML转义

    }, {
        key: 'htmlDecode',
        value: function htmlDecode(str) {
            var s = "";
            if (str.length == 0) return "";
            s = str.replace(/&gt;/g, "&");
            s = s.replace(/&lt;/g, "<");
            s = s.replace(/&gt;/g, ">");
            s = s.replace(/&nbsp;/g, " ");
            s = s.replace(/&#39;/g, "\'");
            s = s.replace(/&quot;/g, "\"");
            s = s.replace(/<br>/g, "\n");
            return s;
        }
        // 方法：HTML转义

    }, {
        key: 'htmlEncode',
        value: function htmlEncode(str) {
            var s = "";
            if (str.length == 0) return "";
            s = str.replace(/&/g, "&gt;");
            s = s.replace(/</g, "&lt;");
            s = s.replace(/>/g, "&gt;");
            s = s.replace(/ /g, "&nbsp;");
            s = s.replace(/\'/g, "&#39;");
            s = s.replace(/\"/g, "&quot;");
            s = s.replace(/\n/g, "<br>");
            return s;
        }
        // 方法：将HTML转为节点

    }, {
        key: 'HTMLtoNodeList',
        value: function HTMLtoNodeList() {
            var _this3 = this;

            var html = this.html;
            var htmlNodeList = [];
            while (html.length > 0) {
                var endTag = html.match(/<\/[a-z0-9]+>/);
                if (!endTag) break;
                var htmlNode = html.substring(0, endTag.index + endTag[0].length);
                htmlNodeList.push(htmlNode);
                html = html.substring(endTag.index + endTag[0].length);
            }
            return htmlNodeList.map(function (htmlNode) {
                var node = { attrs: {} };
                var startTag = htmlNode.match(/<[^<>]+>/);
                var startTagStr = startTag[0].substring(1, startTag[0].length - 1).trim();
                node.name = startTagStr.split(/\s+/)[0];
                startTagStr.match(/[^\s]+="[^"]+"/g).forEach(function (attr) {
                    var _attr$split = attr.split('='),
                        _attr$split2 = _slicedToArray(_attr$split, 2),
                        name = _attr$split2[0],
                        value = _attr$split2[1];

                    node.attrs[name] = value.replace(/"/g, '');
                });
                if (node.name === 'p') {
                    var _endTag = htmlNode.match(/<\/[a-z0-9]+>/);
                    var text = _this3.htmlDecode(htmlNode.substring(startTag.index + startTag[0].length, _endTag.index).trim());
                    node.children = [{
                        text: text,
                        type: 'text'
                    }];
                }
                return node;
            });
        }
        // 方法：上传图片

    }, {
        key: 'uploadImage',
        value: function uploadImage(node) {
            var _this4 = this;

            return new Promise(function (resolve) {
                var options = {
                    filePath: node.attrs.src,
                    url: _this4.imageUploadUrl,
                    name: _this4.imageUploadName
                };
                options.success = function (res) {
                    var keyChain = _this4.imageUploadKeyChain.split('.');
                    var url = JSON.parse(res.data);
                    keyChain.forEach(function (key) {
                        url = url[key];
                    });
                    node.attrs.src = url;
                    node.attrs._uploaded = true;
                    resolve();
                };
                wx.uploadFile(options);
            });
        }
        // 方法：将缓冲池的文本写入节点

    }, {
        key: 'writeTextToNode',
        value: function writeTextToNode(e) {
            var textBufferPool = this.textBufferPool;
            var nodeList = this.nodeList;
            nodeList.forEach(function (node, index) {
                if (node.name === 'p') {
                    node.children[0].text = textBufferPool[index];
                }
            });
            this.nodeList = nodeList;
        }
        // 方法：处理节点，递归

    }, {
        key: 'handleOutput',
        value: function handleOutput() {
            var _this5 = this;

            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            var nodeList = this.nodeList;
            if (index >= nodeList.length) {
                wx.hideLoading();
                if (this.outputType.toLowerCase() === 'html') {
                    this.$emit('finish', { content: this.nodeListToHTML() });
                }
                return;
            }
            var node = nodeList[index];
            if (node.name === 'img' && !node.attrs._uploaded) {
                this.uploadImage(node).then(function () {
                    _this5.handleOutput(index + 1);
                });
            } else {
                this.handleOutput(index + 1);
            }
        }
        // 方法：将节点转为HTML

    }, {
        key: 'nodeListToHTML',
        value: function nodeListToHTML() {
            var _this6 = this;

            return this.nodeList.map(function (node) {
                return '<' + node.name + ' ' + Object.keys(node.attrs).map(function (key) {
                    return key + '="' + node.attrs[key] + '"';
                }).join(' ') + '>' + (node.children ? _this6.htmlEncode(node.children[0].text) : '') + '</' + node.name + '>';
            }).join('');
        }
    }]);

    return editor;
}(_wepy2.default.component);

exports.default = editor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyaXRlLmpzIl0sIm5hbWVzIjpbImVkaXRvciIsImNvbXBvbmVudHMiLCJkYXRhIiwibm9kZUxpc3QiLCJ0ZXh0QnVmZmVyUG9vbCIsIm1ldGhvZHMiLCJhZGRUZXh0IiwiZSIsIndyaXRlVGV4dFRvTm9kZSIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJub2RlIiwibmFtZSIsImF0dHJzIiwiY2xhc3MiLCJjaGlsZHJlbiIsInR5cGUiLCJ0ZXh0Iiwic3BsaWNlIiwiYWRkSW1hZ2UiLCJ3eCIsImNob29zZUltYWdlIiwic3VjY2VzcyIsInRlbXBGaWxlUGF0aCIsInJlcyIsInRlbXBGaWxlUGF0aHMiLCJnZXRJbWFnZUluZm8iLCJzcmMiLCJzdHlsZSIsIl9oZWlnaHQiLCJoZWlnaHQiLCJ3aWR0aCIsIiRhcHBseSIsImRlbGV0ZU5vZGUiLCJvblRleHRhcmVhSW5wdXQiLCJkZXRhaWwiLCJ2YWx1ZSIsIm9uRmluaXNoIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImhhbmRsZU91dHB1dCIsInByb3BzIiwib3V0cHV0VHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJ1cGxvYWRJbWFnZVdoZW5DaG9vc2UiLCJCb29sZWFuIiwiaW1hZ2VVcGxvYWRVcmwiLCJpbWFnZVVwbG9hZE5hbWUiLCJpbWFnZVVwbG9hZEtleUNoYWluIiwiaHRtbCIsIndpbmRvd0hlaWdodCIsIk51bWJlciIsIkhUTUx0b05vZGVMaXN0IiwiZm9yRWFjaCIsInN0ciIsInMiLCJsZW5ndGgiLCJyZXBsYWNlIiwiaHRtbE5vZGVMaXN0IiwiZW5kVGFnIiwibWF0Y2giLCJodG1sTm9kZSIsInN1YnN0cmluZyIsInB1c2giLCJtYXAiLCJzdGFydFRhZyIsInN0YXJ0VGFnU3RyIiwidHJpbSIsInNwbGl0IiwiYXR0ciIsImh0bWxEZWNvZGUiLCJQcm9taXNlIiwib3B0aW9ucyIsImZpbGVQYXRoIiwidXJsIiwia2V5Q2hhaW4iLCJKU09OIiwicGFyc2UiLCJrZXkiLCJfdXBsb2FkZWQiLCJyZXNvbHZlIiwidXBsb2FkRmlsZSIsImhpZGVMb2FkaW5nIiwidG9Mb3dlckNhc2UiLCIkZW1pdCIsImNvbnRlbnQiLCJub2RlTGlzdFRvSFRNTCIsInVwbG9hZEltYWdlIiwidGhlbiIsIk9iamVjdCIsImtleXMiLCJqb2luIiwiaHRtbEVuY29kZSIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7MExBQ2pCQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDSEMsc0JBQVUsRUFEUDtBQUVIQyw0QkFBZ0I7QUFGYixTLFFBSVBDLE8sR0FBVTtBQUNOO0FBQ0FDLG1CQUZNLG1CQUVFQyxDQUZGLEVBRUk7QUFDTixxQkFBS0MsZUFBTDtBQUNBLG9CQUFNQyxRQUFRRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsS0FBdEM7QUFDQSxvQkFBTUcsT0FBTztBQUNUQywwQkFBTSxHQURHO0FBRVRDLDJCQUFPO0FBQ1BDLCtCQUFPO0FBREEscUJBRkU7QUFLVEMsOEJBQVUsQ0FBQztBQUNYQyw4QkFBTSxNQURLO0FBRVhDLDhCQUFNO0FBRksscUJBQUQ7QUFMRCxpQkFBYjtBQVVBLG9CQUFNZixXQUFXLEtBQUtBLFFBQXRCO0FBQ0Esb0JBQU1DLGlCQUFpQixLQUFLQSxjQUE1QjtBQUNBRCx5QkFBU2dCLE1BQVQsQ0FBZ0JWLFFBQVEsQ0FBeEIsRUFBMkIsQ0FBM0IsRUFBOEJHLElBQTlCO0FBQ0FSLCtCQUFlZSxNQUFmLENBQXNCVixRQUFRLENBQTlCLEVBQWlDLENBQWpDLEVBQW9DLEVBQXBDO0FBQ0EscUJBQUtOLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EscUJBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0gsYUFyQks7O0FBc0JOO0FBQ0FnQixvQkF2Qk0sb0JBdUJHYixDQXZCSCxFQXVCSztBQUFBOztBQUNQLHFCQUFLQyxlQUFMO0FBQ0Esb0JBQU1DLFFBQVFGLEVBQUVHLGFBQUYs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O0FBR0gsYUFKRCxNQUlPO0FBQ0gscUJBQUtnQyxZQUFMLENBQWtCaEMsUUFBUSxDQUExQjtBQUNIO0FBQ0o7QUFDRDs7Ozt5Q0FDZ0I7QUFBQTs7QUFDWixtQkFBTyxLQUFLTixRQUFMLENBQWMrRCxHQUFkLENBQWtCO0FBQUEsNkJBQVl0RCxLQUFLQyxJQUFqQixTQUF5QjhFLE9BQU9DLElBQVAsQ0FBWWhGLEtBQUtFLEtBQWpCLEVBQXdCb0QsR0FBeEIsQ0FBNEI7QUFBQSwyQkFBVWMsR0FBVixVQUFrQnBFLEtBQUtFLEtBQUwsQ0FBV2tFLEdBQVgsQ0FBbEI7QUFBQSxpQkFBNUIsRUFBa0VhLElBQWxFLENBQXVFLEdBQXZFLENBQXpCLFVBQXdHakYsS0FBS0ksUUFBTCxHQUFnQixPQUFLOEUsVUFBTCxDQUFnQmxGLEtBQUtJLFFBQUwsQ0FBYyxDQUFkLEVBQWlCRSxJQUFqQyxDQUFoQixHQUF5RCxFQUFqSyxXQUF3S04sS0FBS0MsSUFBN0s7QUFBQSxhQUFsQixFQUF3TWdGLElBQXhNLENBQTZNLEVBQTdNLENBQVA7QUFDSDs7OztFQWpPK0JFLGVBQUtDLFM7O2tCQUFwQmhHLE0iLCJmaWxlIjoid3JpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGVkaXRvciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudHMgPSB7fTtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIG5vZGVMaXN0OiBbXSxcclxuICAgICAgICB0ZXh0QnVmZmVyUG9vbDogW10sXHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAvLyDkuovku7bvvJrmt7vliqDmlofmnKxcclxuICAgICAgICBhZGRUZXh0KGUpe1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlVGV4dFRvTm9kZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3AnLFxyXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgIGNsYXNzOiAneGluZy1wJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW3tcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICcnXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGVMaXN0ID0gdGhpcy5ub2RlTGlzdDtcclxuICAgICAgICAgICAgY29uc3QgdGV4dEJ1ZmZlclBvb2wgPSB0aGlzLnRleHRCdWZmZXJQb29sO1xyXG4gICAgICAgICAgICBub2RlTGlzdC5zcGxpY2UoaW5kZXggKyAxLCAwLCBub2RlKTtcclxuICAgICAgICAgICAgdGV4dEJ1ZmZlclBvb2wuc3BsaWNlKGluZGV4ICsgMSwgMCwgJycpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVMaXN0ID0gbm9kZUxpc3Q7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEJ1ZmZlclBvb2wgPSB0ZXh0QnVmZmVyUG9vbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOS6i+S7tu+8mua3u+WKoOWbvueJh1xyXG4gICAgICAgIGFkZEltYWdlKGUpe1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlVGV4dFRvTm9kZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBGaWxlUGF0aCA9IHJlcy50ZW1wRmlsZVBhdGhzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmdldEltYWdlSW5mbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogdGVtcEZpbGVQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW1nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3hpbmctaW1nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICd3aWR0aDogMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogdGVtcEZpbGVQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaGVpZ2h0OiByZXMuaGVpZ2h0IC8gcmVzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZUxpc3QgPSB0aGlzLm5vZGVMaXN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRCdWZmZXJQb29sID0gdGhpcy50ZXh0QnVmZmVyUG9vbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0LnNwbGljZShpbmRleCArIDEsIDAsIG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEJ1ZmZlclBvb2wuc3BsaWNlKGluZGV4ICsgMSwgMCwgdGVtcEZpbGVQYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZUxpc3QgPSBub2RlTGlzdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dEJ1ZmZlclBvb2wgPSB0ZXh0QnVmZmVyUG9vbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5LqL5Lu277ya5Yig6Zmk6IqC54K5XHJcbiAgICAgICAgZGVsZXRlTm9kZShlKXtcclxuICAgICAgICAgICAgdGhpcy53cml0ZVRleHRUb05vZGUoKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcclxuICAgICAgICAgICAgbGV0IG5vZGVMaXN0ID0gdGhpcy5ub2RlTGlzdDtcclxuICAgICAgICAgICAgbGV0IHRleHRCdWZmZXJQb29sID0gdGhpcy50ZXh0QnVmZmVyUG9vbDtcclxuICAgICAgICAgICAgbm9kZUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgdGV4dEJ1ZmZlclBvb2wuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlTGlzdCA9IG5vZGVMaXN0O1xyXG4gICAgICAgICAgICB0aGlzLnRleHRCdWZmZXJQb29sID0gdGV4dEJ1ZmZlclBvb2w7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDkuovku7bvvJrmlofmnKzovpPlhaVcclxuICAgICAgICBvblRleHRhcmVhSW5wdXQoZSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0QnVmZmVyUG9vbCA9IHRoaXMudGV4dEJ1ZmZlclBvb2w7XHJcbiAgICAgICAgICAgIHRleHRCdWZmZXJQb29sW2luZGV4XSA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRCdWZmZXJQb29sID0gdGV4dEJ1ZmZlclBvb2w7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkZpbmlzaChlKXtcclxuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmraPlnKjkv53lrZgnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLndyaXRlVGV4dFRvTm9kZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZU91dHB1dCgpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9O1xyXG5cclxuICAgIHByb3BzID0ge1xyXG4gICAgICAgIG91dHB1dFR5cGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnaHRtbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOaYr+WQpuWcqOmAieaLqeWbvueJh+WQjueri+WNs+S4iuS8oFxyXG4gICAgICAgIHVwbG9hZEltYWdlV2hlbkNob29zZTp7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1hZ2VVcGxvYWRVcmw6U3RyaW5nLFxyXG4gICAgICAgIGltYWdlVXBsb2FkTmFtZTpTdHJpbmcsXHJcbiAgICAgICAgaW1hZ2VVcGxvYWRLZXlDaGFpbjpTdHJpbmcsXHJcbiAgICAgICAgaHRtbDogU3RyaW5nLFxyXG4gICAgICAgIHdpbmRvd0hlaWdodDpOdW1iZXJcclxuICAgIH1cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIGNvbnN0IG5vZGVMaXN0ID0gdGhpcy5IVE1MdG9Ob2RlTGlzdCgpO1xyXG4gICAgICAgIGNvbnN0IHRleHRCdWZmZXJQb29sID0gW107XHJcbiAgICAgICAgbm9kZUxpc3QuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUubmFtZSA9PT0gJ3AnKSB7XHJcbiAgICAgICAgICAgIHRleHRCdWZmZXJQb29sW2luZGV4XSA9IG5vZGUuY2hpbGRyZW5bMF0udGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy50ZXh0QnVmZmVyUG9vbCA9IHRleHRCdWZmZXJQb29sXHJcbiAgICAgICAgdGhpcy5ub2RlTGlzdCA9IG5vZGVMaXN0XHJcbiAgICB9XHJcbiAgICAvLyDmlrnms5XvvJpIVE1M6L2s5LmJXHJcbiAgICBodG1sRGVjb2RlKHN0cil7XHJcbiAgICAgICAgdmFyIHMgPSBcIlwiO1xyXG4gICAgICAgIGlmKHN0ci5sZW5ndGggPT0gMCkgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgcyA9IHN0ci5yZXBsYWNlKC8mZ3Q7L2csIFwiJlwiKTtcclxuICAgICAgICBzID0gcy5yZXBsYWNlKC8mbHQ7L2csIFwiPFwiKTtcclxuICAgICAgICBzID0gcy5yZXBsYWNlKC8mZ3Q7L2csIFwiPlwiKTtcclxuICAgICAgICBzID0gcy5yZXBsYWNlKC8mbmJzcDsvZywgXCIgXCIpO1xyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UoLyYjMzk7L2csIFwiXFwnXCIpO1xyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UoLyZxdW90Oy9nLCBcIlxcXCJcIik7XHJcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvPGJyPi9nLCBcIlxcblwiKTtcclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH1cclxuICAgIC8vIOaWueazle+8mkhUTUzovazkuYlcclxuICAgIGh0bWxFbmNvZGUoc3RyKXtcclxuICAgICAgICB2YXIgcyA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPT0gMCkgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgcyA9IHN0ci5yZXBsYWNlKC8mL2csIFwiJmd0O1wiKTtcclxuICAgICAgICBzID0gcy5yZXBsYWNlKC88L2csIFwiJmx0O1wiKTtcclxuICAgICAgICBzID0gcy5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKTtcclxuICAgICAgICBzID0gcy5yZXBsYWNlKC8gL2csIFwiJm5ic3A7XCIpO1xyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UoL1xcJy9nLCBcIiYjMzk7XCIpO1xyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UoL1xcXCIvZywgXCImcXVvdDtcIik7XHJcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvXFxuL2csIFwiPGJyPlwiKTtcclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH1cclxuICAgIC8vIOaWueazle+8muWwhkhUTUzovazkuLroioLngrlcclxuICAgIEhUTUx0b05vZGVMaXN0KCl7XHJcbiAgICAgICAgbGV0IGh0bWwgPSB0aGlzLmh0bWw7XHJcbiAgICAgICAgbGV0IGh0bWxOb2RlTGlzdCA9IFtdO1xyXG4gICAgICAgIHdoaWxlIChodG1sLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZW5kVGFnID0gaHRtbC5tYXRjaCgvPFxcL1thLXowLTldKz4vKTtcclxuICAgICAgICAgICAgaWYgKCFlbmRUYWcpIGJyZWFrO1xyXG4gICAgICAgICAgICBjb25zdCBodG1sTm9kZSA9IGh0bWwuc3Vic3RyaW5nKDAsIGVuZFRhZy5pbmRleCArIGVuZFRhZ1swXS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBodG1sTm9kZUxpc3QucHVzaChodG1sTm9kZSk7XHJcbiAgICAgICAgICAgIGh0bWwgPSBodG1sLnN1YnN0cmluZyhlbmRUYWcuaW5kZXggKyBlbmRUYWdbMF0ubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGh0bWxOb2RlTGlzdC5tYXAoaHRtbE5vZGUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHthdHRyczoge319O1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFRhZyA9IGh0bWxOb2RlLm1hdGNoKC88W148Pl0rPi8pO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFRhZ1N0ciA9IHN0YXJ0VGFnWzBdLnN1YnN0cmluZygxLCBzdGFydFRhZ1swXS5sZW5ndGggLSAxKS50cmltKCk7XHJcbiAgICAgICAgICAgIG5vZGUubmFtZSA9IHN0YXJ0VGFnU3RyLnNwbGl0KC9cXHMrLylbMF07XHJcbiAgICAgICAgICAgIHN0YXJ0VGFnU3RyLm1hdGNoKC9bXlxcc10rPVwiW15cIl0rXCIvZykuZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBhdHRyLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmF0dHJzW25hbWVdID0gdmFsdWUucmVwbGFjZSgvXCIvZywgJycpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiAobm9kZS5uYW1lID09PSAncCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZFRhZyA9IGh0bWxOb2RlLm1hdGNoKC88XFwvW2EtejAtOV0rPi8pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuaHRtbERlY29kZShodG1sTm9kZS5zdWJzdHJpbmcoc3RhcnRUYWcuaW5kZXggKyBzdGFydFRhZ1swXS5sZW5ndGgsIGVuZFRhZy5pbmRleCkudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4gPSBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8g5pa55rOV77ya5LiK5Lyg5Zu+54mHXHJcbiAgICB1cGxvYWRJbWFnZShub2RlKXtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgZmlsZVBhdGg6IG5vZGUuYXR0cnMuc3JjLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLmltYWdlVXBsb2FkVXJsLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5pbWFnZVVwbG9hZE5hbWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3B0aW9ucy5zdWNjZXNzID0gcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleUNoYWluID0gdGhpcy5pbWFnZVVwbG9hZEtleUNoYWluLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBrZXlDaGFpbi5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsW2tleV07XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgbm9kZS5hdHRycy5zcmMgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICBub2RlLmF0dHJzLl91cGxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd3gudXBsb2FkRmlsZShvcHRpb25zKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vIOaWueazle+8muWwhue8k+WGsuaxoOeahOaWh+acrOWGmeWFpeiKgueCuVxyXG4gICAgd3JpdGVUZXh0VG9Ob2RlKGUpe1xyXG4gICAgICAgIGNvbnN0IHRleHRCdWZmZXJQb29sID0gdGhpcy50ZXh0QnVmZmVyUG9vbDtcclxuICAgICAgICBjb25zdCBub2RlTGlzdCA9IHRoaXMubm9kZUxpc3Q7XHJcbiAgICAgICAgbm9kZUxpc3QuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUubmFtZSA9PT0gJ3AnKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmNoaWxkcmVuWzBdLnRleHQgPSB0ZXh0QnVmZmVyUG9vbFtpbmRleF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZUxpc3QgPSBub2RlTGlzdFxyXG4gICAgfVxyXG4gICAgLy8g5pa55rOV77ya5aSE55CG6IqC54K577yM6YCS5b2SXHJcbiAgICBoYW5kbGVPdXRwdXQoaW5kZXggPSAwKXtcclxuICAgICAgICBsZXQgbm9kZUxpc3QgPSB0aGlzLm5vZGVMaXN0O1xyXG4gICAgICAgIGlmIChpbmRleCA+PSBub2RlTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3V0cHV0VHlwZS50b0xvd2VyQ2FzZSgpID09PSAnaHRtbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2ZpbmlzaCcsIHsgY29udGVudDogdGhpcy5ub2RlTGlzdFRvSFRNTCgpIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVMaXN0W2luZGV4XTtcclxuICAgICAgICBpZiAobm9kZS5uYW1lID09PSAnaW1nJyAmJiAhbm9kZS5hdHRycy5fdXBsb2FkZWQpIHtcclxuICAgICAgICAgICAgdGhpcy51cGxvYWRJbWFnZShub2RlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVPdXRwdXQoaW5kZXggKyAxKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZU91dHB1dChpbmRleCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOaWueazle+8muWwhuiKgueCuei9rOS4ukhUTUxcclxuICAgIG5vZGVMaXN0VG9IVE1MKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZUxpc3QubWFwKG5vZGUgPT4gYDwke25vZGUubmFtZX0gJHtPYmplY3Qua2V5cyhub2RlLmF0dHJzKS5tYXAoa2V5ID0+IGAke2tleX09XCIke25vZGUuYXR0cnNba2V5XX1cImApLmpvaW4oJyAnKX0+JHtub2RlLmNoaWxkcmVuID8gdGhpcy5odG1sRW5jb2RlKG5vZGUuY2hpbGRyZW5bMF0udGV4dCkgOiAnJ308LyR7bm9kZS5uYW1lfT5gKS5qb2luKCcnKTtcclxuICAgIH1cclxufVxyXG4iXX0=