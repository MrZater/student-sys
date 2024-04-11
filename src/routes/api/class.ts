/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-04-10 15:10:56
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-10 15:32:47
 * @FilePath: /student-sys/src/routes/api/student.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

router.get('/', (req: Request, res: Response, nex: NextFunction) => {
    res.send('分页获取班级')
})

router.get('/:id', (req: Request, res: Response, nex: NextFunction) => {
    res.send('获取单个班级')
})

router.post('/', (req: Request, res: Response, nex: NextFunction) => {
    res.send('添加班级')
})

router.delete('/:id', (req: Request, res: Response, nex: NextFunction) => {
    res.send('删除班级')
})

router.put('/:id', (req: Request, res: Response, nex: NextFunction) => {
    res.send('修改班级')
})

export default router;