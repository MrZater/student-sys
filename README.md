<!--
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-05 18:17:39
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-03-06 18:25:56
 * @FilePath: /student-sys/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
-->
# http模块

1. 根据不同的请求路径、请求方法、做不同的事，处理起来比较麻烦
2. 读取请求体和写入响应体是通过流的方式，比较麻烦

## 使用第三方库

1. express
   [express官网](https://www.expressjs.com.cn)
2. koa2

一个完整的系统，最重要的验证，一定是在服务器端

1. 客户端（浏览器、app、pad、小程序）：用户体验
2. 服务器端逻辑验证（业务逻辑层的验证）：为了业务逻辑性的安全性、完整性
3. 数据库验证：为了保证数据完整性


## REST风格的API接口

1. /api/student post 添加
2. /api/student get 获取
3. /api/student put 修改
3. /api/student delete 删除

