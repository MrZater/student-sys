/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-04-15 16:41:46
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-29 18:11:25
 * @FilePath: /student-sys/src/routes/tokenMiddleware.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NextFunction, Request, Response } from "express";
import ResponseHelpers from "./responseHelpers";
import { pathToRegexp } from "path-to-regexp";
import Crypt from "../util/crypt";
type ApiType = {
    path: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
}

export default class TokenMiddleware {
    public static needTokenApi: ApiType[] = [
        { method: 'POST', path: '/api/student' },
        { method: 'PUT', path: '/api/student/:id' },
        { method: 'GET', path: '/api/student' },
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
        let token: string = req.cookies.token;
        if (req.cookies && !token && req.headers.authorization) {
            // 从authentication中获取token
            token = req.headers.authorization;
        }
        if (!token) {
            // 未通过认证
            console.log('未通过认证')
            TokenMiddleware.handleNonToken(req, res, next);
            return
        }
        // 验证token
        const userId = new Crypt().decrypt(token)
        req['userId'] = userId
        // AdminService.getAdminById(userId)
        // 验证通过
        console.log('验证通过')
        next()
    }

    // 处理未认证情况
    private static handleNonToken(req: Request, res: Response, next: NextFunction) {
        ResponseHelpers.sendError('you dont has any token to access the api', req, res, next, 403)
    }
}
