/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-03-01 11:11:00
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-03-01 11:21:08
 * @FilePath: /student-sys/src/services/init.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import moment from "moment";
import validate from "validate.js";

validate.extend(validate.validators.datetime, {
    /**
     * 该函数会自动用于日期格式转换
     * 他会在验证时自动触发，他需要将任何数据转换为时间戳返回
     * 如果无法转换，返回null
     * @param {any} value 需要转换的值
     * @param {any} options 正对某个属性的验证配置
     */
    parse(value, options) {
        let format = ['YYYY-MM-DD HH:mm:ss', 'YYYY-M-D H:m:s', 'x']
        if (options.dateOnly) {
            format = ['YYYY-MM-DD', 'YYYY-M-D', 'x']
        }
        return +moment.utc(value, format, true)
    },
    /*
     * 用于显示错误消息时，使用的显示信息
     * @param {any} value 
     * @param {any} options 
    * */
    format(value, options) {
        let format = 'YYYY-MM-DD'
        if (!options.dateOnly) {
            format += 'HH:mm:ss'
        }
        return moment.utc(value).format(format)
    }
})