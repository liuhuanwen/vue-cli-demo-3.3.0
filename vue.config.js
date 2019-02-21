module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/ele/' : '/',
  productionSourceMap: false,
  devServer: {
    proxy:{
      '/restapi': {
        target: 'https://h5.ele.me',
        ws: true,
        changeOrigin: true,
        // pathRewrite: {
        //   '/restapi': '/'
        // },
        onProxyRes: function(proxyRes) {
          let cookies = proxyRes.headers['set-cookie'];
          console.log(cookies);
          const cookieRegex = /Path=\/XXX\//i;
          if (cookies) {
            let newCookie = cookies.map(function(cookie) {
              if (cookieRegex.test(cookie)) {
                return cookie.replace(cookieRegex, 'Path=/');
              }
              return cookie;
            });
            delete proxyRes.headers['set-cookie'];
            proxyRes.headers['set-cookie'] = newCookie;
          }
        }
      }
    }
  }
};
