/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-04-10 11:47:09
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-10 11:50:17
 * @FilePath: /student-sys/src/routes/staticMiddleware.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Request, Response, NextFunction } from 'express';
export default (req:Request,res:Response,next:NextFunction)=>  {
    if (req.path.startsWith('/api')) {
        next()
    } else {
        res.send('静态资源')
    }
}