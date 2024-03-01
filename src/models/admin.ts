/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-06 15:03:24
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-02-29 18:52:52
 * @FilePath: /student-sys/src/models/admin.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { sequelize } from "./db";
import { DataTypes, ModelAttributes, ModelOptions, Model } from 'sequelize'
import { Admin, IAdminModel } from "../entities/ICommon";

// 模型字段
const attributes: ModelAttributes<IAdminModel, Admin> = {
    loginId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

// 模型配置
const options: ModelOptions = {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    // tableName: 'Admin',
    // 是否物理删除，若非物理删除则记录删除时间
    paranoid: true
}

const AdminSchema = sequelize.define<IAdminModel, Admin>('admin', attributes, options)

export default AdminSchema