/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-05 18:56:43
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-03-06 18:29:18
 * @FilePath: /student-sys/src/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import express, { Express, Request, Response } from 'express'
const app: Express = express()
const port = 3000
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})

app.get('/test', (request: Request, response: Response) => {
    // response.setHeader('hahahha', '111')
    // response.send('Hello World!')
    // response.status(302).header('location', 'http://www.baidu.com').end()
    response.status(302).location('http://www.baidu.com').end()
})

app.get('/test/:id', (request: Request, response: Response) => {
    console.log(request.path, request.headers, request.query, request.params);
    response.send('Hello World!' + request.params.id)
})