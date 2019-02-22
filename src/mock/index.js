const Mock = require('mockjs');

Mock.setup({
  timeout: '500-1000'
});

Mock.mock(/login\/mobile_send_code/, 'post', options => {
  console.log(`${options.url}：${options.body}`);
  if (options.body) {
    const data = {};
    console.log(data);
    return data;
  }
});

Mock.mock(/login\/login_by_mobile/, 'post', {
  userId: 431140010
});

