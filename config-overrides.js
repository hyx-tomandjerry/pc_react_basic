const {override,
    addLessLoader,
    fixBabelImports,
    addDecoratorsLegacy,
    addWebpackAlias
} = require('customize-cra')
const path = require('path')
// const theme = require('./theme')
module.exports = override(
  addDecoratorsLegacy(),//装饰器
    addLessLoader({
      javascriptEnabled:true,
      // modifyVars:theme //自定义主题
    }),
    fixBabelImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        style:true
    }),
      addWebpackAlias({
          '@':path.resolve(__dirname,'./src'),
          'components':path.resolve(__dirname,'./src/components'),
          'views':path.resolve(__dirname,'./src/views'),
          'service':path.resolve(__dirname,'./src/service'),
          'redux':path.resolve(__dirname,'./src/redux'),
          'routes':path.resolve(__dirname,'./src/routes'),
          'utils':path.resolve(__dirname,'./src/utils'),
      })
)
