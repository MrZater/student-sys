/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-04-10 11:15:10
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-10-30 10:23:59
 * @FilePath: /student-sys/src/routes/errorMiddleware.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NextFunction, Request, Response } from 'express'
import multer from 'multer'
import ResponseHelpers from './responseHelpers'
export default (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            ResponseHelpers.sendError(err, req, res, next, 200)
        } else {
            ResponseHelpers.sendError(err, req, res, next)
        }
    } else {
        next()
    }
}