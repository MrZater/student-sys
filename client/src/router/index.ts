/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-08-28 15:18:06
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-09-02 15:09:10
 * @FilePath: /client/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEnam
 */
import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/store/user'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* App: "home" */ '@/views/Home/index.vue')
  },
  {
    path: '/protect',
    name: 'Protect',
    component: () => import(/* App: "Protect" */ '@/views/Protect/index.vue'),
    beforeEnter: (to, from, next) => {
      const userStore = useUserStore()
      if (userStore.token) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* App: "Login" */ '@/views/Login/index.vue')
  }
]

export default createRouter({
  routes,
  history: createWebHashHistory()
})
