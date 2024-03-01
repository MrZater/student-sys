/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-07 11:46:04
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-03-01 17:40:24
 * @FilePath: /student-sys/src/services/BookService.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Book } from "../entities/ICommon";
import { ICommonFun } from "./IService";
import BookSchema from "../models/Book";
import { async } from "validate.js";
import { bookValidator } from "../entities/validate";
import { pick } from "../util/propertyHelper";
class BookService implements ICommonFun<Book> {
    /**
     * 添加书籍
     * 
     * @param {any} book 
     * @returns 
     */
    async add(book) {
        book = pick(book, ['name', 'author', 'imgurl', 'publishDate'])
        await async(book, bookValidator)
        const ins = await BookSchema.create(book)
        return ins.toJSON()
    }

    /*
     * 删除书籍
     * 
     * @param {any} id 
     * @param {any} book 
    * */
    async delete(id) {
        // 直接删除
        const result = await BookSchema.destroy({
            where: {
                id
            }
        })
        return result
    }

    /**
     * 修改书籍
     * @param id 
     * @param book 
     * @returns 
     */
    async update(id, book) {
        book = pick(book, ['name', 'author', 'imgurl', 'publishDate'])
        await async(book, bookValidator)
        // 直接修改
        const result = await BookSchema.update(book, {
            where: {
                id
            }
        })
        return result
    }
}

export default new BookService();