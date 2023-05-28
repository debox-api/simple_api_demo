const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  devServer:{
    proxy:{
      '/api':{
        target: 'https://open.debox.pro/openapi',
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  } 
})
