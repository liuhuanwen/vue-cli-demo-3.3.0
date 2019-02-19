import * as http from '../common/http';

/**
 * 获取手机验证码
 * */
export function sendMobileCode(mobile, captchaHash, captchaValue) {
  return http.ajax('login/mobile_send_code',
    {
      captcha_hash: captchaHash,
      captcha_value: captchaValue,
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
export function login(mobile, validateToken, validateCode) {
  return http.ajax('login/login_by_mobile',
    {
      validate_token: validateToken,
      validate_code: validateCode,
      mobile: mobile,
      scf: 'ms'
    }
  );
}
