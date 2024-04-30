/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-04-10 12:04:20
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-30 17:05:41
 * @FilePath: /student-sys/src/public/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// fetch('http://localhost:5008/api/student').then(res=> {
//     console.log(res)
// })
login.onclick = function () {
    fetch('/api/admin/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                loginId: 'admin',
                loginPwd: '123456'
            })
        }).then(res => res.json())
        .then(res => {
            console.log(res)
        })
}
update.onclick = function () {
    fetch('/api/student/3000', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                name: '张三',
                classId: '3',
                address: 'test',
                mobile: '18505532898',
                birthday: '1996-11-02'
            })
        }).then(res => res.json())
        .then(res => {
            console.log(res)
        })
}