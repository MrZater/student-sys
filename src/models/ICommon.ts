/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-06 17:25:41
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-02-07 12:54:19
 * @FilePath: /student-sys/src/models/ICommon.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Model } from 'sequelize'

// 管理员
export interface IAdmin {
    name: string,
    loginId: string,
    loginPwd: string,
    id?: number
}
export interface IAdminModel extends Model<IAdmin>, IAdmin { }


// 书籍
export interface IBook {
    name: string,
    imgurl: string,
    author: string,
    publishDate: Date
    id?: number
}
export interface IBookModel extends Model<IBook>, IBook { }


// 班级
export interface IClass {
    name: string,
    openDate: Date
    id?: number
}
export interface IClassModel extends Model<IClass>, IClass { }

// 学生
export interface IStudent {
    name: string
    birthday: Date
    sex: boolean
    mobile: string
    address: string
    id?: number
}
export interface IStudentModel extends Model<IStudent>, IStudent { }
