// token加密
// const secret = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
import crypto from 'crypto'

export default class Crypt {
    constructor() {
        this.secret = Buffer.from('zvis0bbaftlok3pt')
        this.iv = Buffer.from('zvis0bbaftlok3pt')
    }
    // 密钥
    public secret: Buffer
    // iv
    public iv: Buffer
    // 加密
    public encrypt(str: string) {
        const cry = crypto.createCipheriv('aes-128-cbc', this.secret, this.iv)
        // utf-8 ====> 二进制
        let result = cry.update(str, 'utf-8', 'hex')
        result += cry.final('hex')
        return result
    }
    // 解密
    public decrypt(signed: string) {
        const cry = crypto.createDecipheriv('aes-128-cbc', this.secret, this.iv)
        // 二进制 ====> utf-8
        let result = cry.update(signed, 'hex', 'utf-8')
        result += cry.final('utf-8')
        return result
    }
}
