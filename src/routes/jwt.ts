/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-05-06 16:03:55
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-05-06 17:04:45
 * @FilePath: /student-sys/src/routes/jwt.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Response, Request } from 'express'
import jwt from 'jsonwebtoken'
const secret = 'zhoutao'
const cookieKey: string = 'token'
export default class {
    public static publish(res: Response, maxAge: number = 3600 * 24, info: object = {}) {
        const token = jwt.sign(info, secret, {
            expiresIn: maxAge
        })
        res.header('authorization', token)
    }
    public static verify(req: Request,) {
        let parts: string[] = []
        let token: string | undefined = req.headers.authorization
        if (!token) {
            return null
        }
        parts = token.split(' ')
        token = parts.length === 1 ? parts[0] : parts[1]
        try {
            const result = jwt.verify(token, secret)
            return result
        } catch (error) {
            return null
        }
    }
}
