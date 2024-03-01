import StudentService from "./services/StudentService"

/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-05 18:56:43
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-03-01 18:08:43
 * @FilePath: /student-sys/src/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
require('./init')


StudentService.getStudents().then(res=> {
    console.log(res);
})