/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-10-30 12:22:14
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-10-30 14:19:51
 * @FilePath: /student-sys/src/routes/api/download.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import express, { NextFunction, Request, Response } from "express";
import ResponseHelpers from "../responseHelpers";
import path from "path";
const router = express.Router();
router.get('/:filename', ResponseHelpers.catchHelper(async (req: Request, res: Response, next: NextFunction) => {
    const absPath = path.resolve(__dirname, '../../resources', req.params.filename)
    res.download(absPath, req.params.filename)
}))
export default router;