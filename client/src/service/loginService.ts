/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-05-06 17:22:31
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-09-02 14:51:01
 * @FilePath: /client/src/service/loginService.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from './request'
import { TLoginId, TLoginPwd, IUserInfo } from '@/types/user'
import { IResponse } from '@/types/response'
import { AxiosResponse } from 'axios'
// 1. 发送请求的时候，如果有token，就要附带到响应头中
// 2. 请求响应的时候，如果有token，就保存到本地（cookie，localstorage）
// 3. 响应的时候，如果响应的状态码是403（没有token，token失效），在本地删除token
class Account {
  public static async login (loginId: TLoginId, loginPwd: TLoginPwd) {
    const resp = await request().post('/admin/login', {
      loginId,
      loginPwd
    })
    return resp.data
  }

  public static async loginOut () {
    localStorage.removeItem('token')
  }

  public static async whoAmI () {
    let resp:AxiosResponse<IResponse<IUserInfo>> | null = null
    try {
      resp = await request().get('/admin/whoami')
    } catch (error) {
      localStorage.removeItem('token')
    }
    return resp?.data
  }
}
export default Account
