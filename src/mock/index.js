const Mock = require('mockjs');
import entryData from './entryData';
import bannerData from './bannerData';
import restaurantData from './restaurantData';

Mock.setup({
  timeout: '600-1000'
});

Mock.mock(/mobile_send_code/, 'post', options => {
  if (options.body) {
    return {};
  }
});

Mock.mock(/login_by_mobile/, 'post', {
  "user_id": 431140010
});

Mock.mock(/v3\/users/, 'get', {
  "avatar": "c/d9/d3a3450338506d4f38d31048e4a31jpeg",
  "balance": 0,
  "brand_member_new": 0,
  "delivery_card_expire_days": 0,
  "email": "",
  "gift_amount": 3,
  "is_email_valid": false,
  "is_mobile_valid": true,
  "mobile": "18576652123",
  "point": 141,
  "real_point": 0,
  "supervip_status": 1,
  "user_id": 431140010,
  "username": "liuhuansir"
});

Mock.mock(/shopping\/v2\/entries/, 'get', entryData);

Mock.mock(/shopping\/v2\/banners/, 'get', bannerData);

Mock.mock(/shopping\/v3\/restaurants/, 'get', restaurantData);

