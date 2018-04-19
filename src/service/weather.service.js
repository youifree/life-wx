import { get } from './https.base'
export default class weatherService {
  /**
   * 获取中央天气预报
   * @param {*} city [必须] 城市码
   * @param {*} language 固定值 zh-chs
   * @param {*} unit 温度单位固定值 c。可不填。也可省略该参数
   * @param {*} aqi 固定值 city。可不填。也可省略该参数
   * @param {*} aqi 固定值 city。可不填。也可省略该参数
   * @param {*} alarm 固定值 1。可不填。也可省略该参数
   * @param {*} key 固定值 78928e706123c1a8f1766f062bc8676b。也可省略该参数
   * @return
   */
  getAllInfo(params = {}) {
    return get('/Heart/index/all', params, {apiVal: 2})
  }
}
