/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-04-10 11:18:15
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-30 17:24:43
 * @FilePath: /student-sys/src/routes/responseType.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Request, Response, NextFunction } from 'express'
import { ErrorResponse, SuccessResponse } from './responseType'

export default class ResponseHelpers {
    public static sendError(err: Error | string[] | string, req: Request, res: Response, next: NextFunction, code: number = 500) {
        const errResponse: ErrorResponse = {
            code,
            message: err instanceof Error ?
                err.message :
                err instanceof Array ?
                    err.join(',') : err
        }
        res.status(code).send(errResponse ).end()
    }
    public static sendSuccess(data: any, req: Request, res: Response, next: NextFunction) {
        const successResponse: SuccessResponse = {
            code: 200,
            message: 'success',
            data
        }
        res.status(200).send(successResponse)
    }
    // 捕获错误辅助方法
    public static catchHelper(handler: (Request, Response, NextFunction) => void) {
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                await handler(req, res, next)
            } catch (err) {
                ResponseHelpers.sendError(err, req, res, next)
            }
        }
    }
}
