/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-04-10 16:53:45
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-12 10:40:01
 * @FilePath: /student-sys/src/services/BaseEntities.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ClassConstructor, ClassTransformOptions, plainToClass } from "class-transformer"
import { validate } from "class-validator"

abstract class BaseEntities<T> {
    /*
* 
* 验证当前电影对象
* @param {boolean} [skipMissingProperties=false] 是否跳过未传入参数的验证
* @returns {Promise<string[]>} 
* 
* @memberOf Movie
* */
    public async validateThis(): Promise<string[]> {
        const errors = await validate(this)
        const temp = errors.map(err => Object.values(err.constraints as object))
        const result = []
        temp.forEach((e) => {
            result.push(...e as [])
        })
        return result
    }
    /**
    *  将一个平面对象转化成movie对象
    * @param plainObject 平面对象
    * @returns movie对象
    */
    protected static baseTransform<T>(cls: ClassConstructor<T>, plainObject: object): T {
        if (plainObject instanceof cls) return plainObject
        const options: ClassTransformOptions = {
            enableImplicitConversion: false, // 禁用隐式转换
        };
        return plainToClass(cls, plainObject, options)
    }

}


export default BaseEntities