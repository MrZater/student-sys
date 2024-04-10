/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-04-10 11:18:15
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-10 11:39:03
 * @FilePath: /student-sys/src/routes/responseType.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Request, Response, NextFunction } from 'express'
import { ErrorResponse, SuccessResponse } from './responseType'

export default class ResponseHelpers {
    public static sendError(err: Error, req: Request, res: Response, next: NextFunction) {
        const errResponse:ErrorResponse = {
            code: 500,
            message: err.message
        }
        res.status(500).send(errResponse)
    }
    public static sendSuccess(data: any, req: Request, res: Response, next: NextFunction) {
        const successResponse:SuccessResponse = {
            code: 200,
            message: 'success',
            data: data
        }
        res.status(200).send(successResponse)
    }
}