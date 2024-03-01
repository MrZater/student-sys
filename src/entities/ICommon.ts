/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-06 17:25:41
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-03-01 11:40:57
 * @FilePath: /student-sys/src/models/ICommon.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Model } from 'sequelize'

// 管理员
export class Admin {
    public name: string
    public loginId: string
    public loginPwd: string
    public id?: number
}
export interface IAdminModel extends Model<Admin>, Admin { }


// 书籍
export class Book {
    name: string
    imgurl: string
    author: string
    publishDate: String
    id?: number
}
export interface IBookModel extends Model<Book>, Book { }


// 班级
export class Class {
    name: string
    openDate: String
    id?: number
}
export interface IClassModel extends Model<Class>, Class { }

// 学生
export class Student {
    name: string
    birthday: String
    sex: boolean
    mobile: string
    address: string
    id?: number
    classId: number
}
export interface IStudentModel extends Model<Student>, Student { }
