/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-06 17:18:36
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-02-07 11:44:56
 * @FilePath: /student-sys/src/services/AdminService.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { IAdmin } from "../models/ICommon";
import { ICommonFun } from "./IService";
import Admin from "../models/admin";
const AdminService: ICommonFun<IAdmin> = {
    /**
     * 添加管理员
     * 
     * @param {any} admin 
     * @returns 
     */
    async add(admin) {
        const ins = await Admin.create(admin)
        return ins.toJSON()
    },

    /*
     * 删除管理员
     * 
     * @param {any} id 
     * @param {any} admin 
    * */
    async delete(id) {
        // // 方式一
        // // 1. 得到实例
        // const ins = await Admin.findByPk(id)
        // // 2. 删除实例
        // if (ins) {
        //     await ins.destroy()
        // }

        // 方式二
        // 直接删除
        const result = await Admin.destroy({
            where: {
                id
            }
        })
        return result
    },


    async update(id, admin) {
        //  // 方式一
        // // 1. 得到实例
        // const ins = await Admin.findByPk(id)
        // // 2. 删除实例
        // if (ins) {
        //     await ins.update({
        //         ...admin,
        //         loginId: '123123'
        //     })
        // }

        // 方式二
        // 直接修改
        const result = await Admin.update(admin, {
            where: {
                id
            }
        })
        return result
    }
}

export default AdminService;