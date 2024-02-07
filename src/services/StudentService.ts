/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-07 11:52:07
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-02-07 11:53:48
 * @FilePath: /student-sys/src/services/StudentService.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import { IStudent } from "../models/ICommon";
import Student from "../models/Student";
import { ICommonFun } from "./IService";
const StudentService: ICommonFun<IStudent> = {
    /**
     * 添加学生
     * 
     * @param {any} student 
     * @returns 
     */
    async add(student) {
        const ins = await Student.create(student)
        return ins.toJSON()
    },

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
    },

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
}

export default StudentService;