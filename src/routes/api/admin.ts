/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-04-10 15:10:56
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-12 18:50:57
 * @FilePath: /student-sys/src/routes/api/student.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import express, { NextFunction, Request, Response } from "express";
import ResponseHelpers from "../responseHelpers";
import AdminService from "../../services/AdminService";

const router = express.Router();

router.get('/', (req: Request, res: Response, nex: NextFunction) => {
    res.send('分页获取管理员')
})

router.post('/login', ResponseHelpers.catchHelper(async (req: Request, res: Response, next: NextFunction) => {
    const { loginId = '', loginPwd = '' } = req.body
    const result = await AdminService.login(loginId, loginPwd)
    if (result) {
        // 登录成功
        res.header("set-cookie", `token=${result.name + loginId}; path=/; max-age=3600`)
        ResponseHelpers.sendSuccess(result, req, res, next)
    } else {
        ResponseHelpers.sendError('用户名或密码错误', req, res, next)
    }
}))

// router.post('/', (req: Request, res: Response, nex: NextFunction) => {
//     res.send('添加管理员')
// })

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    res.send('删除管理员')
})

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    res.send('修改管理员')
})

export default router;