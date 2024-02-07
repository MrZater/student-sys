/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-06 17:19:48
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-02-07 11:31:48
 * @FilePath: /student-sys/src/services/commonClass.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface ICommonFun<T> {
    add: (obj: T) => void
    update: (id: number, obj: T) => void
    delete: (id: number) => void
}