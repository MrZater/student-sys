/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-07 12:48:19
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-02-07 13:06:07
 * @FilePath: /student-sys/src/mock/mockStudent.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Mock from "mockjs";
import StudentSchema from "../models/Student";
const mock = Mock.mock({
   "datas|500-800": [{
    "name": '@cname',
    birthday: '@date',
    'sex|1-2': true,
    'mobile': /^1[3-9]\d{9}$/,
    address: '@city(true)',
    "classId|1-9": 0
   }]
}).datas
console.log(mock);
StudentSchema.bulkCreate(mock)