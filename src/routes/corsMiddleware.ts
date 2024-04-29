/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-04-17 15:16:38
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-29 19:29:24
 * @FilePath: /student-sys/src/routes/corsMiddleware.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NextFunction, Request, Response } from "express";
const allowOrigins = [
    "http://localhost:3000",
    "null"
]

export default (req: Request, res: Response, next: NextFunction) => {
    // 需要预检的请求
    if (req.method === 'OPTIONS') {
        res.header(
            "Access-Control-Allow-Methods",
            req.headers["access-control-request-method"]
          );
          res.header(
            "Access-Control-Allow-Headers",
            req.headers["access-control-request-headers"]
          );
          res.header("access-control-max-credentials", 'true');
}
    // 处理简单请求
    if ("origin" in req.headers && req.headers.origin && allowOrigins.includes(req.headers.origin)) {
        res.header("access-control-allow-origin", req.headers.origin)
    }
    next()
}