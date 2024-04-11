
/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-03-01 11:59:56
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-10 16:52:53
 * @FilePath: /student-sys/src/entities/propertyHelper.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { ClassConstructor, plainToClass } from "class-transformer"


export type props<T extends object> = Array<keyof T>

/**
 * 挑捡出需要的属性，形成新对象
 * @param obj 原对象
 * @param props 需要挑捡的属性
 * @returns 新对象
 */
export const pick = function <T extends object>(obj: T, props: props<T>) {
    if (!obj || typeof obj !== 'object') {
        return obj
    }
    const newObj: any = {}
    for (const key in obj) {
        if (props.includes(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}



