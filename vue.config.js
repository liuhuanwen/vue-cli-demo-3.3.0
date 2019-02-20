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
        // }
      }
    }
  }
};
