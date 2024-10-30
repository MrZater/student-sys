/*
 * @Author: zhoutao mrzater@163.com
 * @Date: 2024-10-29 18:36:29
 * @LastEditors: zhoutao mrzater@163.com
 * @LastEditTime: 2024-10-30 15:54:15
 * @FilePath: /student-sys/src/routes/api/upload.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import express, { NextFunction, Request, Response } from 'express';
import ResponseHelpers from '../responseHelpers';
import multer from 'multer'
import path from 'path';
import { Jimp, BlendMode } from 'jimp'

async function mark(waterFile, originFile, targetFile, proportion = 3, marginProportion = 0.01) {
    const [water, origin] = await Promise.all([Jimp.read(waterFile), Jimp.read(originFile)])
    const curProportion = origin.bitmap.width / water.bitmap.width
    water.scale(curProportion / proportion)
    const right = origin.bitmap.width * marginProportion
    const bottom = origin.bitmap.height * marginProportion
    const x = origin.bitmap.width - water.bitmap.width - right
    const y = origin.bitmap.height - water.bitmap.height - bottom
    origin.composite(water, x, y, {
        opacitySource: 0.3,
        mode: BlendMode.SRC_OVER
    }).write(targetFile)

}
const router = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/origin'))
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + Math.random().toString(36).slice(-6) + path.extname(file.originalname))
    }
})
const upload = multer({ 
    storage,
    limits: {
        fileSize: 1024 * 1024 // 限制文件大小为5MB
    },
    fileFilter: (req, file, cb) => {
        const extname = path.extname(file.originalname)
        const whiteList  = ['.jpg', '.jpeg', '.png', '.gif']
        if (whiteList.includes(extname)) {
            cb(null, true)
        } else {
            cb(new Error('只允许上传图片文件'))
        }
    }
 })
router.post('/', upload.single('img'), ResponseHelpers.catchHelper(async (req, res: Response, next: NextFunction) => {
    const url = `/upload/${req.file.filename}`
    // 加水印
    await mark(path.resolve(__dirname, '../../public/upload/water/water.jpg'), path.resolve(__dirname, `../../public/origin/${req.file.filename}`), path.resolve(__dirname, `../../public/upload/${req.file.filename}`))
    if (req.file.filename) {
        ResponseHelpers.sendSuccess(url, req, res, next)
    } else {
        ResponseHelpers.sendError('上传失败', req, res, next)
    }
}))
export default router;
