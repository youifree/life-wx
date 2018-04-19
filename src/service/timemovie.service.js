import { get } from './https.base'
export default class timeMovieService {
  /**
   * 获取城市列表
   * @param {*} city [必须] 城市码
   * @return
   */
  getCityList(params = {}) {
    return get('/Showtime/HotCitiesByCinema.api', params)
  }
  /**
   * 正在售票电影列表
   * @param {*} locationId [必须] 城市码
   * @return
   */
  getPlayMoviesList(params = {}) {
    return get('/PageSubArea/HotPlayMovies.api', params)
  }
  /**
   * 热映电影列表
   * @param {*} locationId [必须] 城市码
   * @return
   */
  getHotMoviesList(params = {}) {
    return get('/Showtime/LocationMovies.api', params)
  }
  /**
   * 即将上映电影列表
   * @param {*} locationId [必须] 城市码
   * @return
   */
  getComingMoviesList(params = {}) {
    return get('/Movie/MovieComingNew.api', params)
  }
}
