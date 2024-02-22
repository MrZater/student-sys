/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-06 17:18:36
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-02-22 15:39:23
 * @FilePath: /student-sys/src/services/AdminService.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { IAdmin } from "../models/ICommon";
import { ICommonFun } from "./IService";
import Admin from "../models/admin";
import { Op } from "sequelize";
class AdminService implements ICommonFun<IAdmin>  {
    /**
     * 添加管理员
     * 
     * @param {any} admin 
     * @returns 
     */
    async add(admin:IAdmin):Promise<IAdmin> {
        const ins = await Admin.create(admin)
        return ins.toJSON()
    }

    /*
     * 删除管理员
     * 
     * @param {any} id 
     * @param {any} admin 
    * */
    async delete(id) {
        // 直接删除
        const result = await Admin.destroy({
            where: {
                id
            }
        })
        return result
    }


    async update(id, admin):Promise<number[]> {
        // 直接修改
        const result = await Admin.update(admin, {
            where: {
                id
            }
        })
        return result
    }
    async login (loginId, loginPwd):Promise<IAdmin | null>  {
        const resp = await Admin.findOne({
            where: {
                loginId,
                loginPwd
            }
        })
        if (resp && resp.loginId === loginId && resp.loginPwd === loginPwd) {
            return resp.toJSON()
        }
        return null
    }
    async getAdminById (id:string | number):Promise<IAdmin | null> {
        const resp = await Admin.findOne({
            where: {
                id
            }
        })
        if (resp) {
            return resp.toJSON()
        }
        return null
    }
    async getAdminList (page: number = 1, limit: number= 10, name: string = ''):Promise<{
        total: number
        items: IAdmin[]
    }> {
        const resp = await Admin.findAndCountAll({
            offset: (page - 1) * limit,
            limit,
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        })
        return {
            total: resp.count,
            items: resp.rows.map((item) => item.toJSON())
        }
    }
}

export default new AdminService();