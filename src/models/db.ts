/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-06 14:50:16
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-03-04 11:06:38
 * @FilePath: /student-sys/src/models/db.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Sequelize } from 'sequelize'
import logger from '../logger'


export const sequelize: Sequelize = new Sequelize('student-sys','root', '12345678',{
  host: 'localhost',
  dialect:'mysql',
  logging: (msg: string) => {
    logger.sqlLogger.debug(msg)
  } 
})
