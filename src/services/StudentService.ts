/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-07 11:52:07
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-03-01 18:50:07
 * @FilePath: /student-sys/src/services/StudentService.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import { Op, WhereOptions } from "sequelize";
import { Class, Student } from "../entities/ICommon";
import StudentSchema from "../models/Student";
import { ICommonFun } from "./IService";
import ClassSchema from "../models/Class";
import validate from 'validate.js'
import { studentValidator } from "../entities/validate";
import {pick, props} from '../util/propertyHelper'

/**
 * 学生列表项接口
 */
interface IStudentListItem extends Student {
    class: Class
}

class StudentService implements ICommonFun<Student> {
    /**
     * 添加学生
     * 
     * @param {any} student 
     * @returns 
     */
    async add(student: Student) {
        student = pick(student, ['name', 'address', 'mobile', 'sex', 'birthday', 'classId'])
        await validate.async(student, studentValidator)
        const ins = await StudentSchema.create(student)
        return ins.toJSON()
    }

    /*
     * 删除学生
     * 
     * @param {any} id 
     * @param {any} student 
    * */
    async delete(id) {
        // 直接删除
        const result = await StudentSchema.destroy({
            where: {
                id
            }
        })
        return result
    }

    /**
     * 修改学生
     * @param id 
     * @param student 
     * @returns 
     */
    async update(id, student) {
        student = pick(student, ['name', 'address', 'mobile', 'sex', 'birthday', 'classId'])
        await validate.async(student, studentValidator)
        // 直接修改
        const result = await StudentSchema.update(student, {
            where: {
                id
            }
        })
        return result
    }
    /**
     * 学生列表查询
     * @param page 
     * @param limit 
     * @param sex 
     * @param name 
     * @returns 
     */
    async getStudents(page: number = 1, limit: number = 10, sex: number = -1, name: string = ''): Promise<{
        total: number,
        items: Array<IStudentListItem>
    }> {
        // 指定查询字段
        const attributes: props<Student> = ['id', 'name', 'address', 'birthday', 'mobile', 'sex', 'age']
        // 指定查询条件
        let whereObj: WhereOptions<Student> = {}
        if (sex !== -1) {
            whereObj = {
                sex: !!sex
            }
        }
        if (name) {
            whereObj = {
                ...whereObj,
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        }
        const resp = await StudentSchema.findAndCountAll({
            offset: (page - 1) * limit,
            limit,
            where: whereObj,
            attributes,
            // 联查
            include: [ClassSchema]
        })
        return {
            total: resp.count,
            items: resp.rows.map(item => item.toJSON())
        }
    }
    /**
     * 通过id查学生
     * @param id 
     * @returns 
     */
    async getStudentById(id: number): Promise<IStudentListItem | null> {
        const resp = await StudentSchema.findOne({
            where: {
                id
            },
            include: [ClassSchema]
        })
        if (resp) {
            return resp.toJSON() as IStudentListItem
        }
        return null
    }
}

export default new StudentService()