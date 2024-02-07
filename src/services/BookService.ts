/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-07 11:46:04
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-02-07 11:52:01
 * @FilePath: /student-sys/src/services/BookService.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { IBook } from "../models/ICommon";
import { ICommonFun } from "./IService";
import Book from "../models/Book";
const BookService: ICommonFun<IBook> = {
    /**
     * 添加书籍
     * 
     * @param {any} book 
     * @returns 
     */
    async add(book) {
        const ins = await Book.create(book)
        return ins.toJSON()
    },

    /*
     * 删除书籍
     * 
     * @param {any} id 
     * @param {any} book 
    * */
    async delete(id) {
        // 直接删除
        const result = await Book.destroy({
            where: {
                id
            }
        })
        return result
    },

    /**
     * 删除书籍
     * @param id 
     * @param book 
     * @returns 
     */
    async update(id, book) {
        // 直接修改
        const result = await Book.update(book, {
            where: {
                id
            }
        })
        return result
    }
}

export default BookService;