import wepy from 'wepy';
import util from './util';
import tip from './tip'

// 发送请求
const wxRequest = async(params = {}, url) => {
    tip.loading();//提示弹框
    let data = params.query || {};//???
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: { 'Content-Type': 'application/json' },
    });
    tip.loaded();//隐藏弹框
    return res;
};


module.exports = {
    wxRequest
}
