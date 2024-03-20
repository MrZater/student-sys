/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-03-06 19:06:24
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-03-06 19:28:46
 * @FilePath: /student-sys/src/routes/init.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import express, { Express, Request, Response, NextFunction,IRouterMatcher } from 'express'
const app: Express = express()
const port = 3000
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})

app.get('/test',
    (req: Request, resp: Response, next: NextFunction) => {
        console.log('handler1');
        resp.status(200)
        resp.end()
        next()
    },
    (req: Request, resp: Response) => {
        console.log('handler2');
        // resp.send('end')
    })