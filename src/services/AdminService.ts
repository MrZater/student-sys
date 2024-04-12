/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-06 17:18:36
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-12 18:17:11
 * @FilePath: /student-sys/src/services/AdminService.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Admin } from "../entities/ICommon";
import { ICommonFun } from "./IService";
import AdminSchema from "../models/admin";
import { Op } from "sequelize";
import md5 from "md5";
import validate from "validate.js";
import { adminValidator } from "../entities/validate";
import { pick } from "../util/propertyHelper";
class AdminService implements ICommonFun<Admin>  {
    /**
     * 添加管理员
     * 
     * @param {any} admin 
     * @returns 
     */
    async add(admin:Admin):Promise<Admin> {
        admin = pick(admin, ['loginId', 'loginPwd', 'name'])
        await validate.async(admin, adminValidator)
        admin.loginPwd = md5(admin.loginPwd)
        const ins = await AdminSchema.create(admin)
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
        const result = await AdminSchema.destroy({
            where: {
                id
            }
        })
        return result
    }

    /**
     * 修改管理员
     * @param id 
     * @param admin 
     * @returns 
     */
    async update(id, admin):Promise<number[]> {
        admin = pick(admin, ['loginId', 'loginPwd', 'name'])
        await validate.async(admin, adminValidator)
        admin.loginPwd = md5(admin.loginPwd)
        // 直接修改
        const result = await AdminSchema.update(admin, {
            where: {
                id
            }
        })
        return result
    }
    async login (loginId, loginPwd):Promise<Admin | null>  {
        loginPwd = md5(loginPwd)
        const resp = await AdminSchema.findOne({
            where: {
                loginId,
                loginPwd
            },
            attributes: {exclude: ['loginPwd', 'deletedAt']}
        })
        if (resp && resp.loginId === loginId) {
            return resp.toJSON()
        }
        return null
    }
    async getAdminById (id:string | number):Promise<Admin | null> {
        const resp = await AdminSchema.findOne({
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
        items: Admin[]
    }> {
        const resp = await AdminSchema.findAndCountAll({
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