/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-04-10 15:10:30
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-10 15:27:11
 * @FilePath: /student-sys/src/routes/api/apiRoutePath.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// api枚举
const basePath = `/api`
export enum apiPath {
    student = `${basePath}/student`,
    class = `${basePath}/class`,
    book = `${basePath}/book`,
    admin = `${basePath}/admin`
}