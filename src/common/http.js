import axios from 'axios';
import qs from 'qs';

function get(options) {
  return promise(options, 'get');
}

function post(options) {
  return promise(options, 'post');
}

const promise = (options, method) => {
  return new Promise((resolve, reject) => {
    options.data = qs.stringify(options.data);
    axios.create({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      timeout: 30 * 1000,
      method: method
    })(options)
      .then(response => {
        switch (response.data.s) {
          case '0':
          case '1001':
            resolve(response.data.c);
            break;
          case '-100':
            window.location.href = '/';
            reject(new Error('登录过期'));
            break;
          case '-101':
            reject(new Error('没有权限访问，请检查后重试'));
            break;
          case '-110':
            reject(new Error('参数错误，请检查后重试'));
            break;
          case '-111':
            reject(new Error('网络异常，请检查后重试'));
            break;
          case '-112':
            reject(new Error('系统异常，请检查后重试'));
            break;
          default:
            if (response.data.m) {
              reject(new Error(response.data.m));
            } else {
              reject(new Error('请求失败'));
            }
            break;
        }
      })
      .catch(() => {
        reject(new Error('系统异常，请检查后重试'));
      });
  });
};

export {
  get,
  post
};
