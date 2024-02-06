/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-05 18:56:43
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-02-06 14:30:38
 * @FilePath: /student-sys/src/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import mysql, { OkPacket,QueryError, FieldPacket, Connection} from 'mysql2';


const connection: Connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    database: 'student-sys',
    password: '12345678'
})

connection.query(
    'insert into `company`(`name`, location, buildDate) values("test", "北京", curdate());',
    // "UPDATE company SET `name`='周' WHERE id=2;",
    (err: QueryError | null, result: OkPacket, fields: FieldPacket [] | undefined) => {
        console.log(result);
        console.log(err);
    }
)