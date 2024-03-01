/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-29 19:21:32
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-03-01 17:34:08
 * @FilePath: /student-sys/src/entities/validate.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import validate from "validate.js"
import { Admin, Book, Class, Student } from "./ICommon"
import moment from "moment"
import ClassSchema from "../models/Class"
type Validator<T, K extends boolean> = K extends true ?
    {
        [key in keyof T]: object
    }
    :
    {
        [key in keyof T]?: object
    }

// 学生
validate.validators.classExits = async function (value) {
    const c = await ClassSchema.findByPk(value)
    if (c) {
        return
    }
    return 'is not exists'
}
export const studentValidator: Validator<Student, false> = {
    name: {
        // 是否必填
        presence: {
            // 是否可为空数组空字符空对象等
            allowEmpty: false
        },
        // 数据类型
        type: 'string',
        // 长度
        length: {
            minimum: 1,
            maximum: 10
        }
    },
    sex: {
        presence: true,
        type: 'boolean'
    },
    birthday: {
        presence: {
            allowEmpty: false
        },
        datetime: {
            dateOnly: true,
            earliest: +moment.utc().subtract(100, 'y'),
            latest: +moment.utc().subtract(5, 'y')
        }
    },
    // address: {

    // },
    mobile: {
        presence: {
            allowEmpty: false
        },
        format: /1\d{10}/
    },
    classId: {
        presence: true,
        numericality: {
            onlyInteger: true,
            strict: false
        },
        classExits: true
    }
}



// 管理员
export const adminValidator: Validator<Admin, true> = {
    name: {
        // 是否必填
        presence: {
            // 是否可为空数组空字符空对象等
            allowEmpty: false
        },
        // 数据类型
        type: 'string',
        // 长度
        length: {
            minimum: 1,
            maximum: 10
        }
    },
    loginId: {
        presence: {
            allowEmpty: false
        },
        type: 'string',
        length: {
            minimum: 1,
            maximum: 10
        }
    },
    loginPwd: {
        presence: {
            allowEmpty: false
        },
        type: 'string',
        length: {
            minimum: 6,
            maximum: 16
        }
    }
}


// 班级
export const classValidator: Validator<Class, true> = {
    name: {
        // 是否必填
        presence: {
            // 是否可为空数组空字符空对象等
            allowEmpty: false
        },
        // 数据类型
        type: 'string',
        // 长度
        length: {
            minimum: 1,
            maximum: 10
        }
    },
    openDate: {
        presence: {
            allowEmpty: false
        },
        datetime: {
            dateOnly: true,
            earliest: +moment.utc().subtract(10, 'y'),
        }
    }
}
// 书籍
export const bookValidator: Validator<Book, true> = {
    name: {
        // 是否必填
        presence: {
            // 是否可为空数组空字符空对象等
            allowEmpty: false
        },
        // 数据类型
        type: 'string',
        // 长度
        length: {
            minimum: 1,
            maximum: 10
        }
    },
    author: {
        presence: {
            allowEmpty: false
        },
        type: 'string',
        length: {
            minimum: 1,
            maximum: 10
        }
    },
    publishDate: {
        presence: {
            allowEmpty: false
        },
        datetime: {
            dateOnly: true,
            earliest: +moment.utc().subtract(100, 'y'),
        }
    },
    imgurl: {
        presence: {
            allowEmpty: false
        },
        type: 'string',
    }
}