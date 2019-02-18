import * as http from '../common/http';

/**
 * 获取手机验证码
 * */
export function sendMobileCode(mobile, captcha_hash, captcha_value) {
  return http.post({
    url: 'login/mobile_send_code',
    data: {
      captcha_hash: captcha_hash,
      captcha_value: captcha_value,
      mobile: mobile,
      scf: 'ms'
    }
  });
}

/**
 * 获取图形验证码
 * */
export function getCaptchas(mobile) {
  return http.post({
    url: `${base}v3/captchas`,
    data: {
      captcha_str: mobile
    }
  });
}

/**
 * 登录
 * */
export function login(username, password) {
  return http.post({
    url: `${base}login`,
    data: {
      username: username,
      password: password
    }
  });
}
