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

var editor = function (_wepy$component) {
    _inherits(editor, _wepy$component);

    function editor() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, editor);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = editor.__proto__ || Object.getPrototypeOf(editor)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.props = ['pselectArray'], _this.data = {
            nodeList: [], //节点列表
            textBufferPool: [], //文本缓冲区
            toggleDelay: false,
            platformIndex: 0,
            selectShow: false, //初始option不显示
            nowText: "分类", //初始内容
            categoryid: 0,
            animationData: {}, //右边箭头的动画
            currentNodeIndex: -1, //当前节点下标···
            title: "",
            loadingFlag: true,
            selectArray: [{
                "id": 0,
                "text": "综合"
            }, {
                "id": 1,
                "text": "前端"
            }, {
                "id": 2,
                "text": "架构"
            }, {
                "id": 3,
                "text": "数据库"
            }, {
                "id": 4,
                "text": "移动开发"
            }, {
                "id": 5,
                "text": "编程语言"
            }, {
                "id": 6,
                "text": "运维"
            }, {
                "id": 7,
                "text": "人工智能"
            }]
        }, _this.methods = {
            getTitle: function getTitle(e) {
                // console.log("获取标题")
                _this.title = e.detail.value;
                // console.log(this.title);
            },
            //option的显示与否
            selectToggle: function selectToggle() {
                var nowShow = this.data.selectShow; //获取当前option显示的状态
                //创建动画
                var animation = _wepy2.default.createAnimation({
                    timingFunction: "ease",
                    transformOrigin: 'left top 0rpx'
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
            setText: function setText(e) {
                // console.log("获取选择")
                // console.log(this.selectArray[e.currentTarget.dataset.index])
                var nowData = this.selectArray[e.currentTarget.dataset.index]; //当前option的数据是引入组件的页面传过来的，所以这里获取数据只有通过this.properties
                console.log(nowData);
                var nowIdx = e.target.dataset.index; //当前点击的索引
                console.log(nowIdx);
                var nowText = nowData.text; //当前点击的内容
                // console.log(nowText)
                //再次执行动画，注意这里一定，一定，一定是this.animation来使用动画
                this.animation.rotate(0).step();
                this.selectShow = false, this.nowText = nowText, this.categoryid = nowIdx, this.animationData = this.animation.export();
                var nowDate = {
                    id: nowIdx,
                    text: nowText
                    //   this.triggerEvent('myget', nowDate)
                };
            },
            // 事件：添加文本
            addText: function addText(e) {
                // console.log("添加文本")
                // console.log(this)
                // console.log(e)
                this.writeTextToNode(); //调用方法，添加节点，数组进栈
                var index = e.currentTarget.dataset.index;
                // console.log("数组下标")
                // console.log(index);
                // 声明对象，文本标签
                var node = {
                    name: 'p',
                    attrs: {
                        class: 'xing-p'
                    },
                    children: [{
                        type: 'text',
                        text: ''
                    }]
                    // 节点列表
                };var nodeList = this.nodeList;
                // 文本缓冲区
                var textBufferPool = this.textBufferPool;
                // 节点列表数组尾巴中添加新元素，node为一个对象，包含标签名，内容
                this.nodeList.push(node);
                this.textBufferPool.push('');
                // textBufferPool.splice(index + 1, 0, '');
                this.currentNodeIndex = Number(index) + 1;
                // console.log("当前下标")
                // console.log(this.currentNodeIndex)
                // this.textBufferPool = textBufferPool;
            },

            // 事件：添加图片
            addImage: function addImage(e) {
                var _this2 = this;

                this.writeTextToNode();
                // 获取当前数组下标
                // console.log("获取当前数组下标")
                // console.log(e.currentTarget.dataset.index)
                var index = e.currentTarget.dataset.index;
                //实现图片选择上传的api,从本地相册选择图片或使用相机拍照。
                wx.chooseImage({
                    success: function success(res) {
                        var tempFilePath = res.tempFilePaths[0];
                        // console.log("图片上传,图片的本地临时文件路径列表")
                        // console.log(tempFilePath)
                        wx.getImageInfo({
                            // 获取图片信息。网络图片需先配置download域名才能生效
                            src: tempFilePath,
                            // 图片的路径，可以是相对路径、临时文件路径、存储文件路径、网络图片路径
                            success: function success(res) {
                                // 成功调用接口 
                                var node = {
                                    name: 'img',
                                    attrs: {
                                        class: 'xing-img',
                                        style: 'width: 100%',
                                        src: tempFilePath,
                                        _height: res.height / res.width
                                    }
                                    // 节点信息
                                };
                                var nodeList = _this2.nodeList;
                                // console.log("图片")
                                // console.log(nodeList+"数组，包含所有节点信息")
                                var textBufferPool = _this2.textBufferPool;
                                // console.log(textBufferPool)

                                // nodeList.splice(index + 1, 0, node);
                                _this2.nodeList.push(node);
                                // 将节点信息存入nodelist数组
                                _this2.textBufferPool.push(tempFilePath);
                                // textBufferPool.splice(index + 1, 0, tempFilePath);
                                // 将相对图片路径存入文本缓冲区
                                // 修改this里的值
                                // this.nodeList = nodeList;
                                // this.textBufferPool = textBufferPool;
                                _this2.currentNodeIndex = Number(index) + 1;
                                // console.log("当前下标")
                                // console.log(this.currentNodeIndex)
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
                // console.log("删除节点")
                // console.log(index)
                var nodeList = this.nodeList;
                var textBufferPool = this.textBufferPool;
                nodeList.splice(index, 1);
                textBufferPool.splice(index, 1);
                this.currentNodeIndex = textBufferPool.length - 1;
                // console.log("当前下标")
                // console.log(this.currentNodeIndex)
                this.nodeList = nodeList;
                this.textBufferPool = textBufferPool;
            },

            // 事件：文本输入
            onTextareaInput: function onTextareaInput(e) {
                // console.log("文本输入")
                // console.log(e)
                var index = e.currentTarget.dataset.index;
                // console.log(index)
                var textBufferPool = this.textBufferPool;
                textBufferPool[index] = e.detail.value;
                this.textBufferPool = textBufferPool;
            },
            onFinish: function onFinish(e) {
                var that = this;
                var userId = that.$parent.$parent.globalData.userInfo.session_id;
                console.log("发送");
                console.log(e);
                console.log(this);
                wx.showLoading({
                    title: '正在发送'
                });
                var postData = {
                    openid: that.$parent.$parent.globalData.userInfo.openid,
                    posttitle: this.title,
                    postcontent: this.textBufferPool,
                    categoryid: this.categoryid
                };
                console.log("传输信息");
                console.log(postData);
                wx.request({
                    url: 'http://10.75.18.51:8080/post/addPost', //开发者服务器接口地址",
                    data: postData, //请求的参数",
                    method: 'POST',
                    dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
                    header: {
                        // 设置请求头
                        "token": userId,
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function success(res) {
                        console.log(res);
                        wx.hideLoading();
                        _wepy2.default.redirectTo({ url: '/pages/forum/forum' });
                    },
                    fail: function fail() {},
                    complete: function complete() {}
                });

                this.writeTextToNode();
                this.handleOutput();
            }
            // 加载


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
    // 接收父组件传递过来的的数据


    _createClass(editor, [{
        key: 'onLoad',
        value: function onLoad() {

            // 初始化，渲染页面
            var nodeList = this.nodeList;
            var textBufferPool = [];
            nodeList.forEach(function (node, index) {
                if (node.name === 'p') {
                    textBufferPool[index] = node.children[0].text;
                }
            });
            this.textBufferPool = textBufferPool;
            this.nodeList = nodeList;
            this.currentNodeIndex = -1;
            // console.log("当前下标")
            // console.log(this.currentNodeIndex)
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
        // 方法：上传图片

    }, {
        key: 'uploadImage',
        value: function uploadImage(node) {
            var _this3 = this;

            return new Promise(function (resolve) {
                var options = {
                    filePath: node.attrs.src,
                    url: _this3.imageUploadUrl,
                    name: _this3.imageUploadName
                };
                options.success = function (res) {
                    var keyChain = _this3.imageUploadKeyChain.split('.');
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
            // console.log("缓冲池")
            // console.log(e)
            var textBufferPool = this.textBufferPool;
            var nodeList = this.nodeList;
            // forEach遍历数组
            nodeList.forEach(function (node, index) {
                if (node.name === 'p') {
                    // 给文本标签进栈
                    node.children[0].text = textBufferPool[index];
                }
            });
            this.nodeList = nodeList;
        }
        // 方法：处理节点，递归

    }, {
        key: 'handleOutput',
        value: function handleOutput() {
            var _this4 = this;

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
                    _this4.handleOutput(index + 1);
                });
            } else {
                this.handleOutput(index + 1);
            }
        }
        // 方法：将节点转为HTML

    }, {
        key: 'nodeListToHTML',
        value: function nodeListToHTML() {
            var _this5 = this;

            return this.nodeList.map(function (node) {
                return '<' + node.name + ' ' + Object.keys(node.attrs).map(function (key) {
                    return key + '="' + node.attrs[key] + '"';
                }).join(' ') + '>' + (node.children ? _this5.htmlEncode(node.children[0].text) : '') + '</' + node.name + '>';
            }).join('');
        }
    }]);

    return editor;
}(_wepy2.default.component);

exports.default = editor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci5qcyJdLCJuYW1lcyI6WyJlZGl0b3IiLCJjb21wb25lbnRzIiwicHJvcHMiLCJkYXRhIiwibm9kZUxpc3QiLCJ0ZXh0QnVmZmVyUG9vbCIsInRvZ2dsZURlbGF5IiwicGxhdGZvcm1JbmRleCIsInNlbGVjdFNob3ciLCJub3dUZXh0IiwiY2F0ZWdvcnlpZCIsImFuaW1hdGlvbkRhdGEiLCJjdXJyZW50Tm9kZUluZGV4IiwidGl0bGUiLCJsb2FkaW5nRmxhZyIsInNlbGVjdEFycmF5IiwibWV0aG9kcyIsImdldFRpdGxlIiwiZSIsImRldGFpbCIsInZhbHVlIiwic2VsZWN0VG9nZ2xlIiwibm93U2hvdyIsImFuaW1hdGlvbiIsIndlcHkiLCJjcmVhdGVBbmltYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsInRyYW5zZm9ybU9yaWdpbiIsInJvdGF0ZSIsInN0ZXAiLCJleHBvcnQiLCJzZXRUZXh0Iiwibm93RGF0YSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwibm93SWR4IiwidGFyZ2V0IiwidGV4dCIsIm5vd0RhdGUiLCJpZCIsImFkZFRleHQiLCJ3cml0ZVRleHRUb05vZGUiLCJub2RlIiwibmFtZSIsImF0dHJzIiwiY2xhc3MiLCJjaGlsZHJlbiIsInR5cGUiLCJwdXNoIiwiTnVtYmVyIiwiYWRkSW1hZ2UiLCJ3eCIsImNob29zZUltYWdlIiwic3VjY2VzcyIsInRlbXBGaWxlUGF0aCIsInJlcyIsInRlbXBGaWxlUGF0aHMiLCJnZXRJbWFnZUluZm8iLCJzcmMiLCJzdHlsZSIsIl9oZWlnaHQiLCJoZWlnaHQiLCJ3aWR0aCIsIiRhcHBseSIsImRlbGV0ZU5vZGUiLCJzcGxpY2UiLCJsZW5ndGgiLCJvblRleHRhcmVhSW5wdXQiLCJvbkZpbmlzaCIsInRoYXQiLCJ1c2VySWQiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwic2Vzc2lvbl9pZCIsInNob3dMb2FkaW5nIiwicG9zdERhdGEiLCJvcGVuaWQiLCJwb3N0dGl0bGUiLCJwb3N0Y29udGVudCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJkYXRhVHlwZSIsImhlYWRlciIsImhpZGVMb2FkaW5nIiwicmVkaXJlY3RUbyIsImZhaWwiLCJjb21wbGV0ZSIsImhhbmRsZU91dHB1dCIsIm91dHB1dFR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidXBsb2FkSW1hZ2VXaGVuQ2hvb3NlIiwiQm9vbGVhbiIsImltYWdlVXBsb2FkVXJsIiwiaW1hZ2VVcGxvYWROYW1lIiwiaW1hZ2VVcGxvYWRLZXlDaGFpbiIsImh0bWwiLCJ3aW5kb3dIZWlnaHQiLCJmb3JFYWNoIiwic3RyIiwicyIsInJlcGxhY2UiLCJQcm9taXNlIiwib3B0aW9ucyIsImZpbGVQYXRoIiwia2V5Q2hhaW4iLCJzcGxpdCIsIkpTT04iLCJwYXJzZSIsImtleSIsIl91cGxvYWRlZCIsInJlc29sdmUiLCJ1cGxvYWRGaWxlIiwidG9Mb3dlckNhc2UiLCIkZW1pdCIsImNvbnRlbnQiLCJub2RlTGlzdFRvSFRNTCIsInVwbG9hZEltYWdlIiwidGhlbiIsIm1hcCIsIk9iamVjdCIsImtleXMiLCJqb2luIiwiaHRtbEVuY29kZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7MExBQ2pCQyxVLEdBQWEsRSxRQUdiQyxLLEdBQU0sQ0FBQyxjQUFELEMsUUFFTkMsSSxHQUFPO0FBQ0hDLHNCQUFVLEVBRFAsRUFDVTtBQUNiQyw0QkFBZ0IsRUFGYixFQUVnQjtBQUNuQkMseUJBQWEsS0FIVjtBQUlIQywyQkFBZSxDQUpaO0FBS0hDLHdCQUFZLEtBTFQsRUFLZTtBQUNsQkMscUJBQVMsSUFOTixFQU1XO0FBQ2RDLHdCQUFXLENBUFI7QUFRSEMsMkJBQWUsRUFSWixFQVFlO0FBQ2xCQyw4QkFBaUIsQ0FBQyxDQVRmLEVBU2lCO0FBQ3BCQyxtQkFBTSxFQVZIO0FBV0hDLHlCQUFZLElBWFQ7QUFZSEMs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Q0FBYyxDQUFkLEVBQWlCVCxJQUFqQyxDQUFoQixHQUF5RCxFQUFqSyxXQUF3S0ssS0FBS0MsSUFBN0s7QUFBQSxhQUFsQixFQUF3TWlGLElBQXhNLENBQTZNLEVBQTdNLENBQVA7QUFDSDs7OztFQWxXK0J2RyxlQUFLeUcsUzs7a0JBQXBCakksTSIsImZpbGUiOiJlZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGVkaXRvciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3BzPVsncHNlbGVjdEFycmF5J11cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIG5vZGVMaXN0OiBbXSwvL+iKgueCueWIl+ihqFxyXG4gICAgICAgIHRleHRCdWZmZXJQb29sOiBbXSwvL+aWh+acrOe8k+WGsuWMulxyXG4gICAgICAgIHRvZ2dsZURlbGF5OiBmYWxzZSxcclxuICAgICAgICBwbGF0Zm9ybUluZGV4OiAwLFxyXG4gICAgICAgIHNlbGVjdFNob3c6IGZhbHNlLC8v5Yid5aeLb3B0aW9u5LiN5pi+56S6XHJcbiAgICAgICAgbm93VGV4dDogXCLliIbnsbtcIiwvL+WIneWni+WGheWuuVxyXG4gICAgICAgIGNhdGVnb3J5aWQ6MCxcclxuICAgICAgICBhbmltYXRpb25EYXRhOiB7fSwvL+WPs+i+ueeureWktOeahOWKqOeUu1xyXG4gICAgICAgIGN1cnJlbnROb2RlSW5kZXg6LTEsLy/lvZPliY3oioLngrnkuIvmoIfCt8K3wrdcclxuICAgICAgICB0aXRsZTpcIlwiLFxyXG4gICAgICAgIGxvYWRpbmdGbGFnOnRydWUsXHJcbiAgICAgICAgc2VsZWN0QXJyYXk6IFt7XHJcbiAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi57u85ZCIXCJcclxuICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIuWJjeerr1wiXHJcbiAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIuaetuaehFwiXHJcbiAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogMyxcclxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIuaVsOaNruW6k1wiXHJcbiAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjo0LFxyXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi56e75Yqo5byA5Y+RXCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IDUsXHJcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCLnvJbnqIvor63oqIBcIlxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiA2LFxyXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi6L+Q57u0XCJcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogNyxcclxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIuS6uuW3peaZuuiDvVwiXHJcbiAgICAgICAgfV1cclxuICAgIH07XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIGdldFRpdGxlOihlKT0+e1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuiOt+WPluagh+mimFwiKVxyXG4gICAgICAgICAgICB0aGlzLnRpdGxlPWUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRpdGxlKTtcclxuICAgICAgICB9LFxyXG4gICAgLy9vcHRpb27nmoTmmL7npLrkuI7lkKZcclxuICAgICAgICBzZWxlY3RUb2dnbGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG5vd1Nob3cgPSB0aGlzLmRhdGEuc2VsZWN0U2hvdzsvL+iOt+WPluW9k+WJjW9wdGlvbuaYvuekuueahOeKtuaAgVxyXG4gICAgICAgICAgICAvL+WIm+W7uuWKqOeUu1xyXG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gd2VweS5jcmVhdGVBbmltYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgdGltaW5nRnVuY3Rpb246IFwiZWFzZVwiLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOidsZWZ0IHRvcCAwcnB4JyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb247XHJcbiAgICAgICAgICAgIGlmIChub3dTaG93KSB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24ucm90YXRlKDApLnN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YT0gYW5pbWF0aW9uLmV4cG9ydCgpIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnJvdGF0ZSgxODApLnN0ZXAoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuIGFuaW1hdGlvbkRhdGE9IGFuaW1hdGlvbi5leHBvcnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0U2hvdz0gIW5vd1Nob3dcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFRleHQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6I635Y+W6YCJ5oupXCIpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0QXJyYXlbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdKVxyXG4gICAgICAgICAgICB2YXIgbm93RGF0YSA9IHRoaXMuc2VsZWN0QXJyYXlbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdOy8v5b2T5YmNb3B0aW9u55qE5pWw5o2u5piv5byV5YWl57uE5Lu255qE6aG16Z2i5Lyg6L+H5p2l55qE77yM5omA5Lul6L+Z6YeM6I635Y+W5pWw5o2u5Y+q5pyJ6YCa6L+HdGhpcy5wcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vd0RhdGEpXHJcbiAgICAgICAgICAgIHZhciBub3dJZHggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4Oy8v5b2T5YmN54K55Ye755qE57Si5byVXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vd0lkeClcclxuICAgICAgICAgICAgdmFyIG5vd1RleHQgPSBub3dEYXRhLnRleHQ7Ly/lvZPliY3ngrnlh7vnmoTlhoXlrrlcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobm93VGV4dClcclxuICAgICAgICAgICAgLy/lho3mrKHmiafooYzliqjnlLvvvIzms6jmhI/ov5nph4zkuIDlrprvvIzkuIDlrprvvIzkuIDlrprmmK90aGlzLmFuaW1hdGlvbuadpeS9v+eUqOWKqOeUu1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5yb3RhdGUoMCkuc3RlcCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdFNob3c9IGZhbHNlLFxyXG4gICAgICAgICAgICB0aGlzLm5vd1RleHQ9IG5vd1RleHQsXHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlpZD1ub3dJZHgsXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YT0gdGhpcy5hbmltYXRpb24uZXhwb3J0KClcclxuICAgICAgICAgICAgdmFyIG5vd0RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogbm93SWR4LFxyXG4gICAgICAgICAgICAgICAgdGV4dDogbm93VGV4dFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAgIHRoaXMudHJpZ2dlckV2ZW50KCdteWdldCcsIG5vd0RhdGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8g5LqL5Lu277ya5re75Yqg5paH5pysXHJcbiAgICAgICAgYWRkVGV4dChlKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmt7vliqDmlofmnKxcIilcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcylcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgdGhpcy53cml0ZVRleHRUb05vZGUoKTsvL+iwg+eUqOaWueazle+8jOa3u+WKoOiKgueCue+8jOaVsOe7hOi/m+agiFxyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaVsOe7hOS4i+agh1wiKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgICAgICAgIC8vIOWjsOaYjuWvueixoe+8jOaWh+acrOagh+etvlxyXG4gICAgICAgICAgICBjb25zdCBub2RlID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3AnLFxyXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgICAgIGNsYXNzOiAneGluZy1wJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW3tcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICcnXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOiKgueCueWIl+ihqFxyXG4gICAgICAgICAgICBjb25zdCBub2RlTGlzdCA9IHRoaXMubm9kZUxpc3Q7XHJcbiAgICAgICAgICAgIC8vIOaWh+acrOe8k+WGsuWMulxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0QnVmZmVyUG9vbCA9IHRoaXMudGV4dEJ1ZmZlclBvb2w7XHJcbiAgICAgICAgICAgIC8vIOiKgueCueWIl+ihqOaVsOe7hOWwvuW3tOS4rea3u+WKoOaWsOWFg+e0oO+8jG5vZGXkuLrkuIDkuKrlr7nosaHvvIzljIXlkKvmoIfnrb7lkI3vvIzlhoXlrrlcclxuICAgICAgICAgICAgdGhpcy5ub2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRCdWZmZXJQb29sLnB1c2goJycpO1xyXG4gICAgICAgICAgICAvLyB0ZXh0QnVmZmVyUG9vbC5zcGxpY2UoaW5kZXggKyAxLCAwLCAnJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGVJbmRleD0oTnVtYmVyKGluZGV4KSsxKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlvZPliY3kuIvmoIdcIilcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jdXJyZW50Tm9kZUluZGV4KVxyXG4gICAgICAgICAgICAvLyB0aGlzLnRleHRCdWZmZXJQb29sID0gdGV4dEJ1ZmZlclBvb2w7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDkuovku7bvvJrmt7vliqDlm77niYdcclxuICAgICAgICBhZGRJbWFnZShlKXtcclxuICAgICAgICAgICAgdGhpcy53cml0ZVRleHRUb05vZGUoKTtcclxuICAgICAgICAgICAgLy8g6I635Y+W5b2T5YmN5pWw57uE5LiL5qCHXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6I635Y+W5b2T5YmN5pWw57uE5LiL5qCHXCIpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KVxyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICAgICAgICAvL+WunueOsOWbvueJh+mAieaLqeS4iuS8oOeahGFwaSzku47mnKzlnLDnm7jlhozpgInmi6nlm77niYfmiJbkvb/nlKjnm7jmnLrmi43nhafjgIJcclxuICAgICAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wRmlsZVBhdGggPSByZXMudGVtcEZpbGVQYXRoc1swXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWbvueJh+S4iuS8oCzlm77niYfnmoTmnKzlnLDkuLTml7bmlofku7bot6/lvoTliJfooahcIilcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgd3guZ2V0SW1hZ2VJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W5Zu+54mH5L+h5oGv44CC572R57uc5Zu+54mH6ZyA5YWI6YWN572uZG93bmxvYWTln5/lkI3miY3og73nlJ/mlYhcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB0ZW1wRmlsZVBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWbvueJh+eahOi3r+W+hO+8jOWPr+S7peaYr+ebuOWvuei3r+W+hOOAgeS4tOaXtuaWh+S7tui3r+W+hOOAgeWtmOWCqOaWh+S7tui3r+W+hOOAgee9kee7nOWbvueJh+i3r+W+hFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5oiQ5Yqf6LCD55So5o6l5Y+jIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW1nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3hpbmctaW1nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICd3aWR0aDogMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogdGVtcEZpbGVQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaGVpZ2h0OiByZXMuaGVpZ2h0IC8gcmVzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6IqC54K55L+h5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZUxpc3QgPSB0aGlzLm5vZGVMaXN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlm77niYdcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5vZGVMaXN0K1wi5pWw57uE77yM5YyF5ZCr5omA5pyJ6IqC54K55L+h5oGvXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dEJ1ZmZlclBvb2wgPSB0aGlzLnRleHRCdWZmZXJQb29sO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGV4dEJ1ZmZlclBvb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vZGVMaXN0LnNwbGljZShpbmRleCArIDEsIDAsIG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5bCG6IqC54K55L+h5oGv5a2Y5YWlbm9kZWxpc3TmlbDnu4RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dEJ1ZmZlclBvb2wucHVzaCh0ZW1wRmlsZVBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGV4dEJ1ZmZlclBvb2wuc3BsaWNlKGluZGV4ICsgMSwgMCwgdGVtcEZpbGVQYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWwhuebuOWvueWbvueJh+i3r+W+hOWtmOWFpeaWh+acrOe8k+WGsuWMulxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5L+u5pS5dGhpc+mHjOeahOWAvFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlTGlzdCA9IG5vZGVMaXN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy50ZXh0QnVmZmVyUG9vbCA9IHRleHRCdWZmZXJQb29sO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZUluZGV4PShOdW1iZXIoaW5kZXgpKzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlvZPliY3kuIvmoIdcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudE5vZGVJbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5LqL5Lu277ya5Yig6Zmk6IqC54K5XHJcbiAgICAgICAgZGVsZXRlTm9kZShlKXtcclxuICAgICAgICAgICAgdGhpcy53cml0ZVRleHRUb05vZGUoKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLliKDpmaToioLngrlcIilcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgICAgIGxldCBub2RlTGlzdCA9IHRoaXMubm9kZUxpc3Q7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0QnVmZmVyUG9vbCA9IHRoaXMudGV4dEJ1ZmZlclBvb2w7XHJcbiAgICAgICAgICAgIG5vZGVMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHRleHRCdWZmZXJQb29sLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vZGVJbmRleD0odGV4dEJ1ZmZlclBvb2wubGVuZ3RoLTEpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuW9k+WJjeS4i+agh1wiKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnROb2RlSW5kZXgpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZUxpc3QgPSBub2RlTGlzdDtcclxuICAgICAgICAgICAgdGhpcy50ZXh0QnVmZmVyUG9vbCA9IHRleHRCdWZmZXJQb29sO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5LqL5Lu277ya5paH5pys6L6T5YWlXHJcbiAgICAgICAgb25UZXh0YXJlYUlucHV0KGUpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaWh+acrOi+k+WFpVwiKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgICAgICAgbGV0IHRleHRCdWZmZXJQb29sID0gdGhpcy50ZXh0QnVmZmVyUG9vbDtcclxuICAgICAgICAgICAgdGV4dEJ1ZmZlclBvb2xbaW5kZXhdID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEJ1ZmZlclBvb2wgPSB0ZXh0QnVmZmVyUG9vbDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBvbkZpbmlzaChlKXtcclxuICAgICAgICAgICAgdmFyIHRoYXQ9dGhpc1xyXG4gICAgICAgICAgICBsZXQgdXNlcklkPXRoYXQuJHBhcmVudC4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8uc2Vzc2lvbl9pZFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWPkemAgVwiKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmraPlnKjlj5HpgIEnLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGV0IHBvc3REYXRhPXtcclxuICAgICAgICAgICAgICAgIG9wZW5pZDp0aGF0LiRwYXJlbnQuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvLm9wZW5pZCxcclxuICAgICAgICAgICAgICAgIHBvc3R0aXRsZTp0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgcG9zdGNvbnRlbnQ6dGhpcy50ZXh0QnVmZmVyUG9vbCxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5aWQ6dGhpcy5jYXRlZ29yeWlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLkvKDovpPkv6Hmga9cIilcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocG9zdERhdGEpXHJcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMC43NS4xOC41MTo4MDgwL3Bvc3QvYWRkUG9zdCcsIC8v5byA5Y+R6ICF5pyN5Yqh5Zmo5o6l5Y+j5Zyw5Z2AXCIsXHJcbiAgICAgICAgICAgICAgZGF0YTogcG9zdERhdGEsIC8v6K+35rGC55qE5Y+C5pWwXCIsXHJcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgLy/lpoLmnpzorr7kuLpqc29u77yM5Lya5bCd6K+V5a+56L+U5Zue55qE5pWw5o2u5YGa5LiA5qyhIEpTT04ucGFyc2VcclxuICAgICAgICAgICAgICBoZWFkZXI6e1xyXG4gICAgICAgICAgICAgIC8vIOiuvue9ruivt+axguWktFxyXG4gICAgICAgICAgICAgIFwidG9rZW5cIjp1c2VySWQsXHJcbiAgICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXHJcbiAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgIHdlcHkucmVkaXJlY3RUbyh7IHVybDogJy9wYWdlcy9mb3J1bS9mb3J1bScgfSk7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBmYWlsOiAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHt9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy53cml0ZVRleHRUb05vZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVPdXRwdXQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBcclxuICAgICAgICAvLyDliqDovb1cclxuXHJcbiAgICAgIFxyXG4gICAgfTtcclxuLy8g5o6l5pS254i257uE5Lu25Lyg6YCS6L+H5p2l55qE55qE5pWw5o2uXHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgICBvdXRwdXRUeXBlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgZGVmYXVsdDogJ2h0bWwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmmK/lkKblnKjpgInmi6nlm77niYflkI7nq4vljbPkuIrkvKBcclxuICAgICAgICB1cGxvYWRJbWFnZVdoZW5DaG9vc2U6e1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGltYWdlVXBsb2FkVXJsOlN0cmluZyxcclxuICAgICAgICBpbWFnZVVwbG9hZE5hbWU6U3RyaW5nLFxyXG4gICAgICAgIGltYWdlVXBsb2FkS2V5Q2hhaW46U3RyaW5nLFxyXG4gICAgICAgIGh0bWw6IFN0cmluZyxcclxuICAgICAgICB3aW5kb3dIZWlnaHQ6TnVtYmVyXHJcbiAgICB9XHJcbiAgICAgb25Mb2FkKCl7XHJcbiAgICAgICBcclxuICAgICAgICAvLyDliJ3lp4vljJbvvIzmuLLmn5PpobXpnaJcclxuICAgICAgICBjb25zdCBub2RlTGlzdCA9IHRoaXMubm9kZUxpc3Q7XHJcbiAgICAgICAgY29uc3QgdGV4dEJ1ZmZlclBvb2wgPSBbXTtcclxuICAgICAgICBub2RlTGlzdC5mb3JFYWNoKChub2RlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5uYW1lID09PSAncCcpIHtcclxuICAgICAgICAgICAgdGV4dEJ1ZmZlclBvb2xbaW5kZXhdID0gbm9kZS5jaGlsZHJlblswXS50ZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnRleHRCdWZmZXJQb29sID0gdGV4dEJ1ZmZlclBvb2xcclxuICAgICAgICB0aGlzLm5vZGVMaXN0ID0gbm9kZUxpc3RcclxuICAgICAgICB0aGlzLmN1cnJlbnROb2RlSW5kZXg9LTE7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLlvZPliY3kuIvmoIdcIilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnROb2RlSW5kZXgpXHJcbiAgICB9XHJcbiAgICAvLyDmlrnms5XvvJpIVE1M6L2s5LmJXHJcbiAgICBodG1sRW5jb2RlKHN0cil7XHJcbiAgICAgICAgdmFyIHMgPSBcIlwiO1xyXG4gICAgICAgIGlmIChzdHIubGVuZ3RoID09IDApIHJldHVybiBcIlwiO1xyXG4gICAgICAgIHMgPSBzdHIucmVwbGFjZSgvJi9nLCBcIiZndDtcIik7XHJcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvPC9nLCBcIiZsdDtcIik7XHJcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvPi9nLCBcIiZndDtcIik7XHJcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvIC9nLCBcIiZuYnNwO1wiKTtcclxuICAgICAgICBzID0gcy5yZXBsYWNlKC9cXCcvZywgXCImIzM5O1wiKTtcclxuICAgICAgICBzID0gcy5yZXBsYWNlKC9cXFwiL2csIFwiJnF1b3Q7XCIpO1xyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UoL1xcbi9nLCBcIjxicj5cIik7XHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9XHJcbiAgICAvLyDmlrnms5XvvJrkuIrkvKDlm77niYdcclxuICAgIHVwbG9hZEltYWdlKG5vZGUpe1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlUGF0aDogbm9kZS5hdHRycy5zcmMsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMuaW1hZ2VVcGxvYWRVcmwsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmltYWdlVXBsb2FkTmFtZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MgPSByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5Q2hhaW4gPSB0aGlzLmltYWdlVXBsb2FkS2V5Q2hhaW4uc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGtleUNoYWluLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmxba2V5XTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBub2RlLmF0dHJzLnNyYyA9IHVybDtcclxuICAgICAgICAgICAgICAgIG5vZGUuYXR0cnMuX3VwbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3eC51cGxvYWRGaWxlKG9wdGlvbnMpO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8g5pa55rOV77ya5bCG57yT5Yay5rGg55qE5paH5pys5YaZ5YWl6IqC54K5XHJcbiAgICB3cml0ZVRleHRUb05vZGUoZSl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLnvJPlhrLmsaBcIilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgIGNvbnN0IHRleHRCdWZmZXJQb29sID0gdGhpcy50ZXh0QnVmZmVyUG9vbDtcclxuICAgICAgICBjb25zdCBub2RlTGlzdCA9IHRoaXMubm9kZUxpc3Q7XHJcbiAgICAgICAgLy8gZm9yRWFjaOmBjeWOhuaVsOe7hFxyXG4gICAgICAgIG5vZGVMaXN0LmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLm5hbWUgPT09ICdwJykge1xyXG4gICAgICAgICAgICAgICAgLy8g57uZ5paH5pys5qCH562+6L+b5qCIXHJcbiAgICAgICAgICAgICAgICBub2RlLmNoaWxkcmVuWzBdLnRleHQgPSB0ZXh0QnVmZmVyUG9vbFtpbmRleF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZUxpc3QgPSBub2RlTGlzdFxyXG4gICAgfVxyXG4gICAgLy8g5pa55rOV77ya5aSE55CG6IqC54K577yM6YCS5b2SXHJcbiAgICBoYW5kbGVPdXRwdXQoaW5kZXggPSAwKXtcclxuICAgICAgICBsZXQgbm9kZUxpc3QgPSB0aGlzLm5vZGVMaXN0O1xyXG4gICAgICAgIGlmIChpbmRleCA+PSBub2RlTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3V0cHV0VHlwZS50b0xvd2VyQ2FzZSgpID09PSAnaHRtbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2ZpbmlzaCcsIHsgY29udGVudDogdGhpcy5ub2RlTGlzdFRvSFRNTCgpIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVMaXN0W2luZGV4XTtcclxuICAgICAgICBpZiAobm9kZS5uYW1lID09PSAnaW1nJyAmJiAhbm9kZS5hdHRycy5fdXBsb2FkZWQpIHtcclxuICAgICAgICAgICAgdGhpcy51cGxvYWRJbWFnZShub2RlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVPdXRwdXQoaW5kZXggKyAxKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZU91dHB1dChpbmRleCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOaWueazle+8muWwhuiKgueCuei9rOS4ukhUTUxcclxuICAgIG5vZGVMaXN0VG9IVE1MKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZUxpc3QubWFwKG5vZGUgPT4gYDwke25vZGUubmFtZX0gJHtPYmplY3Qua2V5cyhub2RlLmF0dHJzKS5tYXAoa2V5ID0+IGAke2tleX09XCIke25vZGUuYXR0cnNba2V5XX1cImApLmpvaW4oJyAnKX0+JHtub2RlLmNoaWxkcmVuID8gdGhpcy5odG1sRW5jb2RlKG5vZGUuY2hpbGRyZW5bMF0udGV4dCkgOiAnJ308LyR7bm9kZS5uYW1lfT5gKS5qb2luKCcnKTtcclxuICAgIH1cclxufVxyXG4iXX0=