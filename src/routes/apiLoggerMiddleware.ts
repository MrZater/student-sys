/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-09-02 16:45:41
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-09-02 16:58:17
 * @FilePath: /student-sys/src/routes/apiLoggerMiddleware.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import logger from '../logger'
const apiLogger = logger.apiLogger

// module.exports = (req, res, next) => {
//     next()
//     apiLogger.debug(`${req.method} ${req.path} ${req.ip}`)
// }

const log4js = require('log4js')
module.exports = log4js.connectLogger(apiLogger, {
    level: 'auto'
})