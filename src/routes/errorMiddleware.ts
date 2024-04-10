/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-04-10 11:15:10
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-10 11:45:38
 * @FilePath: /student-sys/src/routes/errorMiddleware.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NextFunction, Request, Response } from 'express'
import ResponseHelpers from './responseHelpers'
export default (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        ResponseHelpers.sendError(err, req, res, next)
    } else {
        next()
    }
}