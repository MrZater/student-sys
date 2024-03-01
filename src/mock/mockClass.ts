/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-07 12:30:32
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-02-07 12:47:31
 * @FilePath: /student-sys/src/mock/mockClass.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Mock from "mockjs";
import ClassSchema from "../models/Class";
const mock = Mock.mock({
   "datas|3-10": [{
    "id|+1":1, 
    "name": '九年级 @id 班',
    openDate: '@date'
   }]
}).datas
console.log(mock);
ClassSchema.bulkCreate(mock)