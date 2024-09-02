/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-08-30 16:23:19
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-08-30 16:25:03
 * @FilePath: /client/src/store/response.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface IResponse<T>{
  code: number,
  message: string
  data: T
}
