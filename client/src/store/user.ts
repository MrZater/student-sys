/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-08-28 14:18:35
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-09-02 15:14:43
 * @FilePath: /client/src/store/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import loginSevice from '@/service/loginService'
import { IUserInfo, IUserLoginData } from '@/types/user'

interface IUserState {
  data: IUserInfo | null
  isLoading: boolean,
  token: string | null
}
interface IUserGetter<T> {
  [key: string]: (state: T) => any;
}

interface IUserActions {
  login: (data: IUserLoginData) => Promise<any>
  loginOut: () => void
  whoAmI: () => void
}

export const useUserStore = defineStore<'user', IUserState, IUserGetter<IUserState>, IUserActions>('user', {
  state: () => ({
    data: null,
    isLoading: false,
    token: localStorage.getItem('token')
  }),
  actions: {
    // 登陆
    async login ({ loginId, loginPwd }: IUserLoginData) {
      this.isLoading = true
      const resp = await loginSevice.login(loginId, loginPwd)
      if (resp.data) {
        this.token = localStorage.getItem('token')
        this.data = resp.data
        this.isLoading = false
      }
      return resp
    },
    // 退出登录
    loginOut () {
      this.data = null
      this.token = null
      loginSevice.loginOut()
    },
    // 获取用户信息
    async whoAmI () {
      this.isLoading = true
      try {
        const resp = await loginSevice.whoAmI()
        if (resp) {
          this.data = resp.data
          this.token = localStorage.getItem('token')
        }
      } catch (error) {
        this.data = null
      }
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  }
})
