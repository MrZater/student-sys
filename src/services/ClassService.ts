
import Class from "../models/Class";
import { IClass } from "../models/ICommon";
import { ICommonFun } from "./IService";
const ClassService: ICommonFun<IClass> = {
    /**
     * 添加班级
     * 
     * @param {any} c 
     * @returns 
     */
    async add(c) {
        const ins = await Class.create(c)
        return ins.toJSON()
    },

    /*
     * 删除班级
     * 
     * @param {any} id 
     * @param {any} c 
    * */
    async delete(id) {
        // 直接删除
        const result = await Class.destroy({
            where: {
                id
            }
        })
        return result
    },

    /**
     * 删除班级
     * @param id 
     * @param c 
     * @returns 
     */
    async update(id, c) {
        // 直接修改
        const result = await Class.update(c, {
            where: {
                id
            }
        })
        return result
    }
}

export default ClassService;