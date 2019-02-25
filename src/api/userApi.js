import * as http from '../common/http';

/**
 * 获取手机验证码
 * */
export function sendMobileCode(mobile) {
  return http.ajax('eus/login/mobile_send_code', {mobile});
}

/**
 * 获取图形验证码
 * */
export function getCaptcha(mobile) {
  return http.ajax('eus/v3/captchas', {captcha_str: mobile});
}

/**
 * 登录
 * */
export function login(mobile, validateCode) {
  return http.ajax('eus/login/login_by_mobile', {validate_code: validateCode, mobile: mobile});
}

/**
 * 获取用户信息
 * */
export function getUserInfo(userId) {
  return http.ajax(`eus/v3/users/${userId}`, {}, 'get');
}

/**
 * 首页分类
 * */
export function getEntries(latitude, longitude) {
  return http.ajax('shopping/v2/entries', {latitude, longitude}, 'get');
}

/**
 * 首页轮播图
 * */
export function getBanners(latitude, longitude) {
  return http.ajax('/shopping/v2/banners', {latitude, longitude}, 'get')
}

/**
 * 首页推荐餐馆列表
 * */
export function getRestaurants(latitude, longitude) {
  return http.ajax('/shopping/v3/restaurants', {latitude, longitude}, 'get')
}

/**
 * 首页排序和过滤条件
 * */
export function getSortFilters(latitude, longitude) {
  return http.ajax('/shopping/restaurants/batch_filter', {latitude, longitude}, 'get')
}
