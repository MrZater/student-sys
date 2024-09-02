/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-05-07 19:03:29
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-05-07 19:10:04
 * @FilePath: /client/src/core/icon.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {
  Edit
} from '@element-plus/icons-vue'
import { App } from 'vue'
export default {
  install (app: App) {
    // 全局引入element-plus/icons
    // for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    //   app.component(key, component)
    // }

    // 按需引入element-plus/icons
    const iconList = Object.entries({
      Edit
    })
    for (const [key, component] of iconList) {
      app.component(key, component)
    }
  }
}
