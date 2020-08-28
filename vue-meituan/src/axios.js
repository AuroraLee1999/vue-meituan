import axios from 'axios'

axios.defaults.baseURL = "http://open.duyiedu.com"
//拦截器
axios.interceptors.request.use(function (config) {
  // console.log(config);
  config.params = {
    ...config.params,
    appkey: "17351870505_1590131393187",
  }
  return config;
}, function (error) {
    return Promise.reject.error;
})
export default axios