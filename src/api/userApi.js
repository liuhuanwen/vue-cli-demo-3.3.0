import * as http from '../common/http';

/**
 * 获取手机验证码
 * */
export function sendMobileCode(mobile, captcha_hash, captcha_value) {
  return http.ajax('login/mobile_send_code',
    {
      captcha_hash: captcha_hash,
      captcha_value: captcha_value,
      mobile: mobile,
      scf: 'ms'
    }
  );
}

/**
 * 获取图形验证码
 * */
export function getCaptcha(mobile) {
  return http.ajax('v3/captchas',
    {
      captcha_str: mobile
    }
  );
}

/**
 * 登录
 * */
export function login(username, password) {
  return http.ajax('login',
    {
      username: username,
      password: password
    }
  );
}
