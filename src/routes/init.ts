/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-03-06 19:06:24
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-10 16:42:45
 * @FilePath: /student-sys/src/routes/init.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import express, { Express, static as static_, urlencoded, json } from 'express'
import errorMiddleware from './errorMiddleware'
import path from 'path'
import { apiPath } from './api/apiRoutePath'
import student from './api/student'
import book from './api/book'
import admin from './api/admin'
import class_ from './api/class'
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

// 处理api的请求
app.use(apiPath.student, student)
app.use(apiPath.book, book)
app.use(apiPath.admin, admin)
app.use(apiPath.class, class_)

const port = 3000
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})