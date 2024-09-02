/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-05-06 17:17:36
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-09-02 15:37:30
 * @FilePath: /client/vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const {
  defineConfig
} = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const path = require('path')
const Components = require('unplugin-vue-components/webpack')
const ElementPlus = require('unplugin-element-plus/webpack')
// 自动导入Icon图标
const IconsResolver = require('unplugin-icons/resolver')
const Icons = require('unplugin-icons/webpack')
const {
  ElementPlusResolver
} = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  outputDir: path.resolve(__dirname, '../src/public'),
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // 自动导入依赖包
      AutoImport.default({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver.default({
            prefix: 'Icon'
          })
        ]
      }),
      //
      // 按需引入自定义组件
      Components.default({
        // 配置elementPlus采用sass样式配色系统
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass'
          }),
          IconsResolver.default({
            // 修改Icon组件前缀，不设置则默认为i,禁用则设置为false
            prefix: 'icon',
            enabledCollections: ['ep']
          })
        ]
      }),
      // 开启ElementPlus自动引入CSS
      ElementPlus({
        useSource: true
      }),
      Icons.default({
        autoInstall: true
      })
    ]
  },
  // 源码地图
  productionSourceMap: false,
  devServer: {
    open: true,
    port: 6060,
    proxy: {
      '/api': {
        target: 'http://localhost:5008'
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@use "@/styles/element/index.scss" as *;'
      }
    }
  }
})
