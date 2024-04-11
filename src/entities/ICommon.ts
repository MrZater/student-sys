/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-06 17:25:41
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-11 19:19:39
 * @FilePath: /student-sys/src/models/ICommon.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Exclude, Expose, Type } from 'class-transformer'
import { IsNotEmpty, MaxLength } from 'class-validator'
import { Model } from 'sequelize'
import BaseEntities from '../services/BaseEntities'

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
export class Student extends BaseEntities<Student> {
    @IsNotEmpty({ message: '学生姓名不能为空' })
    @Type(() => String)
    @MaxLength(10, { message: '学生姓名不能超过10个字符' })
    public name: string

    @IsNotEmpty({ message: '学生生日不能为空' })
    @Type(() => String)
    public birthday: String

    @IsNotEmpty({ message: '学生性别不能为空' })
    @Type(() => Boolean)
    public sex: boolean = false

    @IsNotEmpty({ message: '学生手机号不能为空' })
    @Type(() => String)
    public mobile: string

    @IsNotEmpty({ message: '学生地址不能为空' })
    @Type(() => String)
    public address: string

    public id?: number

    @Expose()
    @IsNotEmpty({ message: '学生班级不能为空' })
    @Type(() => Number)
    public classId: number

    public age?: number

    /**
     *  将一个平面对象转化成movie对象
     * @param plainObject 平面对象
     * @returns movie对象
     */
    public static transform(plainObject: object): Student {
        return super.baseTransform(Student, plainObject)
    }
}
export interface IStudentModel extends Model<Student>, Student { }
