module.exports = {
  transpileDependencies: true
}

module.exports = {
  //配置devServer 实现代理转发，从而实现跨域
  devServer: {
    proxy:{
      '/api':{
        target:process.env.VUE_APP_BASE_API,
        changeOrigin:true,
        pathRewrite:{
          '^/api':'api'
        }
      }
    }

  }
}