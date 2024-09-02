/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-08-30 16:04:51
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-08-30 16:17:49
 * @FilePath: /client/src/types/interface.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export type TLoginId = string
export type TLoginPwd = string

export interface IUserInfo{
  id: number
  name: string
  loginId: TLoginId
}

export interface IUserLoginData{
  loginId: TLoginId
  loginPwd: TLoginPwd
}
