/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-03-01 19:40:44
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-09-02 16:29:32
 * @FilePath: /student-sys/src/logger.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import log, { Logger } from "log4js"
import path from "path"
const getCommonAppender = (pathSeg) => {
    return {
        type: 'dateFile',
        keepFileExt: true,
        filename: path.resolve(__dirname, 'logs', pathSeg, 'logging.log'),
        maxLogSize: 1024 * 10,
        // daysToKeep: 10,
        numbarToKeep: 10,
        layout: {
            type: 'pattern',
            pattern: '%c %d{yyyy-MM-dd hh:mm:ss} [%p]- %m',
        }
    }
}
log.configure({
    appenders: {
        sql: getCommonAppender('sql'),
        default: {
            type: 'file',
            filename: path.resolve(__dirname, 'logs', 'sql', 'logging.log')
        },
        api: getCommonAppender('api'),
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
        api: {
            appenders: ['api'],
            level: 'all'
        }
    }
})
process.on('exit', () => {
    log.shutdown()
})
const logger = log.getLogger('sql')
const logger2: Logger = log.getLogger()
const logger3: Logger = log.getLogger('api')
export default {
    sqlLogger: logger,
    defaultLogger: logger2,
    apiLogger: logger3
}
