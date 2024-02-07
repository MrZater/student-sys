/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-06 16:38:43
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-02-06 18:30:46
 * @FilePath: /student-sys/src/models/Student.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { DataTypes, ModelAttributes, ModelOptions } from 'sequelize'
import { sequelize } from './db'
import {IStudent, IStudentModel} from './ICommon'

// 模型字段
const attributes: ModelAttributes<IStudentModel, IStudent> = {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false
    },
    sex: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    mobile: {
        type: DataTypes.STRING(11),
        allowNull: false
    }
}

// 模型配置
const options: ModelOptions = {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    // 是否物理删除，若非物理删除则记录删除时间
    paranoid: true
}

const Student = sequelize.define<IStudentModel>('student', attributes, options)
export default Student

