import {
  wxRequest
} from '@/utils/wxRequest';

const apiMall = 'http://10.75.18.51:8080'//局域网ip
// 获取团队用户的id
const getTeamByUserID = (params) => wxRequest(params, apiMall+'/Ajax/data.json');
// 获取论坛数据列表
const getForumData=(params)=>wxRequest(params, apiMall+'/Ajax/data.json');
export default {
  getTeamByUserID,
  getForumData
}

export function getAdList() {
  return new Promise((resolve) => {
    wx.request({
      url: 'http://127.0.0.1:3000/lunbo',
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        resolve(res.data.message.images)
      }
    })
  })
}