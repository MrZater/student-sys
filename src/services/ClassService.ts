/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-07 11:57:47
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-03-01 17:38:27
 * @FilePath: /student-sys/src/services/ClassService.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import ClassSchema from "../models/Class";
import { Class } from "../entities/ICommon";
import { ICommonFun } from "./IService";
import { async } from "validate.js";
import { classValidator } from "../entities/validate";
import { pick } from "../util/propertyHelper";
class ClassService implements ICommonFun<Class>  {
    /**
     * 添加班级
     * 
     * @param {any} c 
     * @returns 
     */
    async add(c) {
        c = pick(c, ['name', 'openDate'])
        await async(c, classValidator)
        const ins = await ClassSchema.create(c)
        return ins.toJSON()
    }

    /*
     * 删除班级
     * 
     * @param {any} id 
     * @param {any} c 
    * */
    async delete(id) {
        // 直接删除
        const result = await ClassSchema.destroy({
            where: {
                id
            }
        })
        return result
    }

    /**
     * 修改班级
     * @param id 
     * @param c 
     * @returns 
     */
    async update(id, c) {
        c = pick(c, ['name', 'openDate'])
        await async(c, classValidator)
        // 直接修改
        const result = await ClassSchema.update(c, {
            where: {
                id
            }
        })
        return result
    }
}

export default new ClassService();