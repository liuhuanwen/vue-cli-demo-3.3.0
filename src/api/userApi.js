import * as http from '../common/http';

/**
 * 获取手机验证码
 * */
export function sendMobileCode(mobile) {
  return http.ajax('login/mobile_send_code',
    {
      mobile: mobile,
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
export function login(mobile, validateCode) {
  return http.ajax('login/login_by_mobile',
    {
      validate_code: validateCode,
      mobile: mobile,
    }
  );
}

/**
 * 获取用户信息
 * */
export function getUserInfo(userId) {
  return http.ajax(`v3/users/${userId}`);
}
