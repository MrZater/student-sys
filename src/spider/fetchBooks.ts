/*
 * @Author: zt zhoutao@ydmob.com
 * @Date: 2024-02-07 14:29:44
 * @LastEditors: zt zhoutao@ydmob.com
 * @LastEditTime: 2024-02-07 16:26:11
 * @FilePath: /student-sys/src/spider/fetchBooks.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// const  axios =    require ("axios")
// async function getBooksHtml() {

import axios from "axios";
import Cheerio from "cheerio";
import Book from "../models/Book";
import { IBook } from "../models/ICommon";

async function getBooksHtml() {
    const resp = await axios.get("https://book.douban.com/latest");
    return resp.data
}

async function getBookLinks() {
    const html = await getBooksHtml()
    const $ = Cheerio.load(html)
    const linkAs = $(".chart-dashed-list .media .media__img a")
    const linkList = linkAs.map((a, ele) => {
        const href = ele.attribs['href']
        return href
    })
    return linkList.get()
}


async function getBookdetail(dataurl) {
    const resp = await axios.get(dataurl)
    const $ = Cheerio.load(resp.data)
    const name = $('h1').text().trim()
    const imgurl = $('#mainpic .nbg img').attr('src')
    const spans = $('#info span.pl')
    const AuthorSpan = spans.filter((i, ele) => {
        return $(ele).text().includes('作者')
    })
    const author = AuthorSpan.next('a').text()
    const publishSpan = spans.filter((i, ele) => {
        return $(ele).text().includes('出版年')
    })
    const publish: any = publishSpan[0].nextSibling
    const publishDate = publish?.nodeValue.trim()
    return {
        name,
        imgurl,
        author,
        publishDate
    }
}
async function fetchAll() {
    const links = await getBookLinks()
    const list = links.map(async (link) => {
        await duration(20)
        return getBookdetail(link)
    })
    return Promise.all(list)
}
// 做延迟，防止网站出现防爬
function duration(dura: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(undefined)
        }, dura * 1000 * Math.random());
    })
}


async function saveBookDetailToDb() {
    const books = await fetchAll()
    const b = books.map((book) => {
        return {
            author: book.author || '',
            imgurl: book.imgurl || '',
            name: book.name || '',
            publishDate: new Date(book.publishDate) || new Date(),
        }
    })
    Book.bulkCreate(b)
    console.log('抓去并保存成功');
}

saveBookDetailToDb()