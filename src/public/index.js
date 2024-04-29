/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-04-10 12:04:20
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-29 19:33:31
 * @FilePath: /student-sys/src/public/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// fetch('http://localhost:3000/api/student').then(res=> {
//     console.log(res)
// })
fetch('http://localhost:3000/api/student', {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'a': '123'
    },
    credentials: 'include'
}).then(res => {
    console.log(res)
})