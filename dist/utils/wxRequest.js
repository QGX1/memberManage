'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _util = require('./util.js');

var _util2 = _interopRequireDefault(_util);

var _tip = require('./tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// 发送请求
var wxRequest = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var url = arguments[1];
        var data, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _tip2.default.loading(); //提示弹框
                        data = params.query || {}; //???

                        _context.next = 4;
                        return _wepy2.default.request({
                            url: url,
                            method: params.method || 'GET',
                            data: data,
                            header: { 'Content-Type': 'application/json' }
                        });

                    case 4:
                        res = _context.sent;

                        _tip2.default.loaded(); //隐藏弹框
                        return _context.abrupt('return', res);

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function wxRequest() {
        return _ref.apply(this, arguments);
    };
}();

module.exports = {
    wxRequest: wxRequest
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJ0aXAiLCJsb2FkaW5nIiwiZGF0YSIsInF1ZXJ5Iiwid2VweSIsInJlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXIiLCJyZXMiLCJsb2FkZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBLElBQU1BO0FBQUEsdUVBQVk7QUFBQSxZQUFNQyxNQUFOLHVFQUFlLEVBQWY7QUFBQSxZQUFtQkMsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RDLHNDQUFJQyxPQUFKLEdBRGMsQ0FDQTtBQUNWQyw0QkFGVSxHQUVISixPQUFPSyxLQUFQLElBQWdCLEVBRmIsRUFFZ0I7O0FBRmhCO0FBQUEsK0JBR0VDLGVBQUtDLE9BQUwsQ0FBYTtBQUN6Qk4saUNBQUtBLEdBRG9CO0FBRXpCTyxvQ0FBUVIsT0FBT1EsTUFBUCxJQUFpQixLQUZBO0FBR3pCSixrQ0FBTUEsSUFIbUI7QUFJekJLLG9DQUFRLEVBQUUsZ0JBQWdCLGtCQUFsQjtBQUppQix5QkFBYixDQUhGOztBQUFBO0FBR1ZDLDJCQUhVOztBQVNkUixzQ0FBSVMsTUFBSixHQVRjLENBU0Q7QUFUQyx5REFVUEQsR0FWTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O0FBY0FFLE9BQU9DLE9BQVAsR0FBaUI7QUFDYmQ7QUFEYSxDQUFqQiIsImZpbGUiOiJ3eFJlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgdGlwIGZyb20gJy4vdGlwJ1xuXG4vLyDlj5HpgIHor7fmsYJcbmNvbnN0IHd4UmVxdWVzdCA9IGFzeW5jKHBhcmFtcyA9IHt9LCB1cmwpID0+IHtcbiAgICB0aXAubG9hZGluZygpOy8v5o+Q56S65by55qGGXG4gICAgbGV0IGRhdGEgPSBwYXJhbXMucXVlcnkgfHwge307Ly8/Pz9cbiAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIG1ldGhvZDogcGFyYW1zLm1ldGhvZCB8fCAnR0VUJyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgaGVhZGVyOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICB9KTtcbiAgICB0aXAubG9hZGVkKCk7Ly/pmpDol4/lvLnmoYZcbiAgICByZXR1cm4gcmVzO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB3eFJlcXVlc3Rcbn1cbiJdfQ==