/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-03-06 19:06:24
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-10 14:57:42
 * @FilePath: /student-sys/src/routes/init.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import express, { Express, static as static_, urlencoded, json } from 'express'
import errorMiddleware from './errorMiddleware'
import path from 'path'
const app: Express = express()
// 错误处理中间件
app.use(errorMiddleware)
// 静态资源中间件
app.use('/static',static_(path.resolve(__dirname, '../public')))
// 请求体解析中间件
app.use(urlencoded({
    extended: true
}))
// JSON解析中间件
app.use(json())
const port = 3000
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})
app.post('/test', (req, res, next) => {
    console.log(req.body)
    res.send('test')
})
app.get('/test', (req, res, next) => {
    console.log(req.body)
    res.send('test')
})