module.exports = {
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  devServer: {
    proxy: {  //配置跨域
      '/a': {
        target: 'https://as.hypergryph.com',  //填写真实的后台接口
        secure: true,
        changOrigin: true,  //允许跨域
        pathRewrite: {
          '^/a': ''
        }
      },
    }
  },

  productionSourceMap: false
}
