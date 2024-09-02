/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-05-06 18:35:58
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-09-02 14:49:29
 * @FilePath: /client/src/service/request.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios, { AxiosStatic, AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'
const errorHandler = (err: any) => {
  // 3. 响应的时候，如果响应的状态码是403（没有token，token失效），在本地删除token
  if (err.response.status === 403) {
    localStorage.removeItem('token')
  }
  ElMessage.error(err.response.data.message || '请求失败')
  return err.response
}
export default () => {
  const instance: AxiosStatic | AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 5000
  })

  // 请求拦截
  instance.interceptors.request.use(
    req => {
      const token = localStorage.getItem('token')
      // 1. 发送请求的时候，如果有token，就要附带到响应头中
      if (token) {
        req.headers.authorization = token
      }
      return req
    },
    errorHandler
  )

  // 响应拦截
  instance.interceptors.response.use(
    resp => {
      // 2. 请求响应的时候，如果有token，就保存到本地（cookie，localstorage）
      if (resp.headers.authorization) {
        localStorage.setItem('token', resp.headers.authorization)
      }
      if (resp.data.code === 200) {
        return resp
      } else {
        return resp
      }
    },
    errorHandler
  )
  return instance
}
