module.exports = {
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
