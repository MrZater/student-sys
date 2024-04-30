/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-07 11:52:07
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-30 16:59:26
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
import { pick, props } from '../util/propertyHelper'
import { Type } from "class-transformer";
import BaseEntities from "./BaseEntities";

/**
 * 学生列表项接口
 */
interface IStudentListItem extends Student {
    class: Class
}
// 联查获取班级的属性
const classArrts:props<Class> = ['name', 'id', 'openDate']
class StndentConditionType extends BaseEntities<StndentConditionType> {
    @Type(() => Number)
    public limit: number

    @Type(() => Number)
    public page: number

    @Type(() => Number)
    public sex: 0 | -1

    @Type(() => String)
    public name: string

    /**
     *  将一个平面对象转化成movie对象
     * @param plainObject 平面对象
     * @returns movie对象
     */
    public static transform(plainObject: object): StndentConditionType {
        return super.baseTransform(StndentConditionType, plainObject)
    }
}

class StudentService implements ICommonFun<Student> {
    /**
     * 添加学生
     * 
     * @param {any} student 
     * @returns 
     */
    async add(student: Student) {
        student = Student.transform(student)
        const result = await student.validateThis()
        if (result.length > 0) {
            return result
        }
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
        if(!student.classId){
            student.classId = undefined
        }
        student = Student.transform(student)
        const result = await student.validateThis()
        if (result.length > 0) {
            return result
        }
        student = pick(student, ['name', 'address', 'mobile', 'sex', 'birthday', 'classId'])
        try {
            await validate.async(student, studentValidator)
            // 直接修改
            const resp = await StudentSchema.update(student, {
                where: {
                    id
                }
            })
            if (resp[0] === 0) {
                return ['修改失败！']
            }
            return '修改成功！'
        } catch (err) {
            return err
        }

    }
    /**
     * 学生列表查询
     * @param page 
     * @param limit 
     * @param sex 
     * @param name 
     * @returns 
     */
    async getStudents(condition): Promise<{
        total: number,
        items: IStudentListItem[]
    } | string[]> {
        const c = StndentConditionType.transform(condition)
        const result = await c.validateThis()
        if (result.length) {
            return result
        }
        const { sex = -1, name = '', page = 1, limit = 10 } = c
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
            include: [
                {
                    model: ClassSchema,
                    attributes: classArrts
                }
            ]
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
    async getStudentById(id: number | string): Promise<IStudentListItem | null> {
        const resp = await StudentSchema.findOne({
            where: {
                id
            },
            include: [
                {
                    model: ClassSchema,
                    attributes: classArrts
                }
            ]
        })
        if (resp) {
            return resp.toJSON() as IStudentListItem
        }
        return null
    }
}

export default new StudentService()