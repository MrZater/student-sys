import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

router.get('/', (req: Request, res: Response, nex: NextFunction) => {
    res.send('分页获取书籍')
})

router.get('/:id', (req: Request, res: Response, nex: NextFunction) => {
    res.send('获取单个书籍')
})

router.post('/', (req: Request, res: Response, nex: NextFunction) => {
    res.send('添加书籍')
})

router.delete('/:id', (req: Request, res: Response, nex: NextFunction) => {
    res.send('删除书籍')
})

router.put('/:id', (req: Request, res: Response, nex: NextFunction) => {
    res.send('修改书籍')
})

export default router;