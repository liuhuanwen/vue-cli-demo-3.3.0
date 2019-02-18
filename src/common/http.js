import axios from 'axios';
import qs from 'qs';
import {BASE_URL} from '../config/env';

const instance = axios.create();
instance.defaults.baseURL = BASE_URL;
instance.defaults.timeout = 30 * 1000;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
instance.interceptors.response.use(
  res => {
    return res.data;
  },
  err => {
    if (err && err.response) {
      switch (err.response) {
        case 403:
          err.message = '拒绝访问';
          break;
        case 404:
          err.message = `请求${err.response.config.url
            .split('/')
            .pop()
            .replace(/\.html/, '')}接口出错`;
          break;
        case 408:
          err.message = '请求超时';
          break;
        case 500:
          err.message = '服务器内部错误';
          break;
        case 501:
          err.message = '服务未实现';
          break;
        case 502:
          err.message = '网关错误';
          break;
        case 503:
          err.message = '服务不可用';
          break;
        case 504:
          err.message = '网关超时';
          break;
        case 505:
          err.message = 'HTTP版本不受支持';
          break;
      }
    }
  }
);

export function ajax(url, params, type = 'post') {
  let config = {method: type};
  if (type === 'get') {
    config.params = params;
  } else if (type === 'put' || type === 'patch' || type === 'delete') {
    config.data = type ? {} : params;
    config.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    config.transformRequest = [() => {
        let ret = new URLSearchParams();
        for (let [key, value] in params) {
          ret.append(key, value)
        }
        return ret
      }
    ]
  } else {

  }
}
