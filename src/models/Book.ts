/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-06 16:38:28
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-02-29 18:38:16
 * @FilePath: /student-sys/src/models/Book.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { sequelize } from "./db";
import { DataTypes, ModelAttributes, ModelOptions } from 'sequelize'
import { Book, IBookModel } from '../entities/ICommon'

// 模型字段
const attributes: ModelAttributes<IBookModel, Book> = {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imgurl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publishDate: {
        type: DataTypes.DATE,
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

const BookSchema = sequelize.define<IBookModel>('book', attributes, options)

export default BookSchema