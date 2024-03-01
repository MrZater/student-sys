/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-07 13:02:37
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-02-07 13:03:31
 * @FilePath: /student-sys/src/models/relation.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 设置模型关系
import ClassSchema from "./Class";
import StudentSchema from "./Student";
ClassSchema.hasMany(StudentSchema);
StudentSchema.belongsTo(ClassSchema);

