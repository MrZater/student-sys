/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-03-06 19:06:24
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-10 11:52:12
 * @FilePath: /student-sys/src/routes/init.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import express, { Express, Request, Response, NextFunction, IRouterMatcher } from 'express'
import errorMiddleware from './errorMiddleware'
import staticMiddleware from './staticMiddleware'
const app: Express = express()
// 错误处理中间件,静态资源中间件
app.use(errorMiddleware, staticMiddleware)
const port = 3000
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})

app.get('/test',
    (req: Request, resp: Response, next: NextFunction) => {
        console.log('handler1');
        resp.status(200)
        // resp.end()
        // next()
        throw new Error('报错')
    },
    (req: Request, resp: Response) => {
        console.log('handler2');
        resp.send()
    }
)
