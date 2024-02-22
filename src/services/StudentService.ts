/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-07 11:52:07
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-02-22 15:44:25
 * @FilePath: /student-sys/src/services/StudentService.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import { Op, WhereOptions } from "sequelize";
import { IClass, IStudent } from "../models/ICommon";
import Student from "../models/Student";
import { ICommonFun } from "./IService";
import Class from "../models/Class";

/**
 * 学生列表项接口
 */
interface IStudentListItem extends IStudent {
    class: IClass
}

class StudentService implements ICommonFun<IStudent> {
    /**
     * 添加学生
     * 
     * @param {any} student 
     * @returns 
     */
    async add(student) {
        const ins = await Student.create(student)
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
        const result = await Student.destroy({
            where: {
                id
            }
        })
        return result
    }

    /**
     * 删除学生
     * @param id 
     * @param student 
     * @returns 
     */
    async update(id, student) {
        // 直接修改
        const result = await Student.update(student, {
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
        const attributes: Array<keyof IStudent> = ['id', 'name', 'address', 'birthday', 'mobile', 'sex']
        // 指定查询条件
        let whereObj: WhereOptions<IStudent> = {}
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
        const resp = await Student.findAndCountAll({
            offset: (page - 1) * limit,
            limit,
            where: whereObj,
            attributes,
            // 联查
            include: [Class]
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
        const resp = await Student.findOne({
            where: {
                id
            },
            include: [Class]
        })
        if (resp) {
            return resp.toJSON() as IStudentListItem
        }
        return null
    }
}

export default new StudentService()