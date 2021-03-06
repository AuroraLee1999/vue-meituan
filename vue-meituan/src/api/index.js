import axios from '@/axios.js'

var api = {
  searchHotSuggest() {
    return axios.get('/api/meituan/header/searchHotWords.json');
  },
  searchInputList() {
    return axios.get('/api/meituan/header/search.json');
  },
  getRightNav() {
    return axios.get('/api/meituan/index/nav.json'); 
  },
  getProvinceList() {
    return axios.get('/api/meituan/city/province.json')
  },
  getRecentCity() {
    return axios.get('/api/meituan/city/recents.json')
  },
  getHotCity() {
    return axios.get('/api/meituan/city/hot.json')
  },
  getCategroyCity() {
    return axios.get('/api/meituan/city/cityList.json')
  },
  getPosition() {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  userRegister(params) {
    return axios.get('/api/meituan/register', params)
  },
  userLogin(params) {
    return axios.get('/api/meituan/login', params)
  },
  getDetailInfo() {
    return axios.get('/api/meituan/product/detail.json')
  }
}

export default api;