import { API_HOST } from '../config/global.config'
// import wepy from 'wepy'
const CONFIG = {
  isAutoMsg: true,
  // 自动loading
  isLoading: true,
  isUsreId: true,
  // 是否需要认证Id
  isAuthorityId: true,
  // 1代表豆瓣接口、2代表天气接口、空值表示时光网
  apiVal: ''
}
export function get(url, params = {}, config = {}) {
  return new Promise((resolve, reject) => {
    let opts = {...CONFIG, ...config}
    // let userInfo = wx.getStorageSync('userHouseInfo')
    if (opts.isLoading) {
      wx.showLoading({ title: '数据加载中' })
    }
    let api = API_HOST(opts.apiVal)
    wx.request({
      url: api + url,
      data: params,
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: function(res) {
         resolve(res.data)
        // if (res.data.code === '0') {
        //   resolve(res.data.data)
        // } else {
        //   if (opts.isAutoMsg) {
        //     wx.showToast({ title: res.data.message, icon: 'none', duration: 3000 })
        //   } else {
        //     resolve(res.data)
        //   }
        // }
      },
      fail: function(res) {
        wx.showToast({ title: '请求失败', icon: 'none', duration: 3000 })
        reject(res)
      },
      complete: function() {
        wx.hideLoading()
      }
    })
  })
}
export function post(url, params = {}, config = {}) {
  return new Promise((resolve, reject) => {
    let opts = {...CONFIG, ...config}
    // let userInfo = wx.getStorageSync('userHouseInfo')
    if (opts.isLoading) {
      wx.showLoading({ title: '数据加载中' })
    }
    let api = API_HOST(opts.apiVal)
    wx.request({
      url: api + url,
      data: params,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: function(res) {
        resolve(res.data)
        // if (res.data.code === '0') {
        //   console.log(res)
        //   resolve(res.data)
        // } else {
        //   if (opts.isAutoMsg) {
        //     wx.showToast({ title: res.data.message, icon: 'none', duration: 3000 })
        //   } else {
        //     resolve(res.data)
        //   }
        // }
      },
      fail: function(res) {
        wx.showToast({ title: '请求失败', icon: 'none', duration: 3000 })
        reject(res)
      },
      complete: function() {
        wx.hideLoading()
      }
    })
  })
}
