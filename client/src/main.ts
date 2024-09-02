/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-05-06 17:17:36
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-09-02 15:05:47
 * @FilePath: /client/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import '@/styles/global.scss'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import ImportElIcon from '@/plugins/icon'
const pinia = createPinia()
const app = createApp(App)

app.use(router).use(ImportElIcon).use(pinia)

app.mount('#app')
