/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-04-10 15:10:56
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-04-30 17:18:08
 * @FilePath: /student-sys/src/routes/api/student.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import express, { NextFunction, Request, Response } from "express";
import StudentService from "../../services/StudentService";
import ResponseHelpers from "../responseHelpers";
const router = express.Router();

router.get('/', ResponseHelpers.catchHelper(async (req: Request, res: Response, next: NextFunction) => {
    const result = await StudentService.getStudents(req.body as any)
    if (Array.isArray(result)) {
        ResponseHelpers.sendError(result, req, res, next)
    } else {
        ResponseHelpers.sendSuccess(result, req, res, next)
    }
})
)


router.get('/:id', ResponseHelpers.catchHelper(async (req: Request, res: Response, next: NextFunction) => {
    const result = await StudentService.getStudentById(req.params.id)
    if (result) {
        ResponseHelpers.sendSuccess(result, req, res, next)
    } else {
        ResponseHelpers.sendError('没有找到该学生', req, res, next)
    }
})
)


router.post('/', ResponseHelpers.catchHelper(async (req: Request, res: Response, next: NextFunction) => {
    const result = await StudentService.add(req.body)
    if (Array.isArray(result)) {
        ResponseHelpers.sendError(result, req, res, next)
    } else if (result instanceof Object) {
        ResponseHelpers.sendSuccess(result, req, res, next)
    } else {
        ResponseHelpers.sendError(result, req, res, next)
    }
})
)

router.delete('/:id', ResponseHelpers.catchHelper(async (req: Request, res: Response, next: NextFunction) => {
    const result = await StudentService.delete(req.params.id)
    if (result) {
        ResponseHelpers.sendSuccess('删除成功！', req, res, next)
    } else {
        ResponseHelpers.sendError('没有找到该学生', req, res, next)
    }
}))

router.put('/:id', ResponseHelpers.catchHelper(async (req:Request, res:Response, next: NextFunction) => {
    const result = await StudentService.update(req.params.id, req.body)
        if (Array.isArray(result)) {
        ResponseHelpers.sendError(result, req, res, next)
    } else if (result instanceof Object || typeof result === 'string') {
        ResponseHelpers.sendSuccess(result, req, res, next)
    } else {
        ResponseHelpers.sendError(result, req, res, next)
    }
})
)

export default router;