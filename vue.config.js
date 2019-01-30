module.exports = {
  devServer: {
    proxy:{
      '/api': {
        target: 'http://www.itop.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '/api': '/'
        }
      }
    }
  }
};
