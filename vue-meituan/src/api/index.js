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
  }
}

export default api;