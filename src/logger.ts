/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-03-01 19:40:44
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-03-04 11:15:24
 * @FilePath: /student-sys/src/logger.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import log, { Logger } from "log4js"
import path from "path"
log.configure({
    appenders: {
        sql: {
            type: 'dateFile',
            keepFileExt: true,
            filename: path.resolve(__dirname, 'logs', 'sql', 'logging.log'),
            maxLogSize: 1024 * 10,
            layout: {
                type: 'pattern',
                pattern: '%c %d{yyyy-MM-dd hh:mm:ss} [%p]- %m',
            }
        },
        default: {
            type: 'file',
            filename: path.resolve(__dirname, 'logs', 'sql', 'logging.log')
        }
    },
    categories: {
        sql: {
            appenders: ['sql'],
            level: 'all'
        },
        default: {
            appenders: ['default'],
            level: 'all'
        },
    }
})
process.on('exit', () => {
    log.shutdown()
})
const logger = log.getLogger('sql')
const logger2: Logger = log.getLogger()
export default {
    sqlLogger: logger,
    defaultLogger: logger2
}
