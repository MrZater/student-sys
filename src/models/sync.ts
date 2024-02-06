/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-06 16:44:47
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-02-06 17:05:07
 * @FilePath: /student-sys/src/models/sync.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
require('./admin')
require('./Class')
require('./Student')
require('./Book')

import { sequelize, } from "./db"
import { SyncOptions } from 'sequelize'

// 同步配置
const syncOptions: SyncOptions = {
    alter: true
}
// 数据库与模型同步
sequelize.sync(syncOptions).then(() => {
    console.log('所有模型同步完成');
})