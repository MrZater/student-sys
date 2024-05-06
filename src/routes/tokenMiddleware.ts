/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-04-15 16:41:46
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-05-06 16:55:59
 * @FilePath: /student-sys/src/routes/tokenMiddleware.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NextFunction, Request, Response } from "express";
import ResponseHelpers from "./responseHelpers";
import { pathToRegexp } from "path-to-regexp";
import Crypt from "../util/crypt";
import jwt from "./jwt";
import { JwtPayload } from 'jsonwebtoken'
type ApiType = {
    path: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
}

interface IPayload extends JwtPayload {
    id: number;
}

export default class TokenMiddleware {
    public static needTokenApi: ApiType[] = [
        { method: 'POST', path: '/api/student' },
        { method: 'PUT', path: '/api/student/:id' },
        { method: 'GET', path: '/api/student' },
        { method: 'GET', path: '/api/admin/whoami' },
    ]
    public static middleware(req: Request, res: Response, next: NextFunction) {
        const apis = TokenMiddleware.needTokenApi.filter((api) => {
            const regexp = pathToRegexp(api.path);
            return api.method === api.method && regexp.test(req.path)
        })
        if (apis.length === 0) {
            next()
            return
        }
        const result: string | IPayload | undefined = jwt.verify(req) as IPayload
        // 验证通过
        if (result) {
            req['userId'] = result.id
            console.log('验证通过')
            next()
        } else {
            console.log('未通过认证')
            TokenMiddleware.handleNonToken(req, res, next);
        }
    }

    // 处理未认证情况
    private static handleNonToken(req: Request, res: Response, next: NextFunction) {
        ResponseHelpers.sendError('you dont has any token to access the api', req, res, next, 403)
    }
}
