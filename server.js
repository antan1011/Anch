const http = require('http')
const url = require('url')
const fs = require('fs')


http.createServer((req, res) => {
    console.log('请求来源:',req.url)
    const params = url.parse(req.url, true).query
    const path = url.parse(req.url, true).pathname

    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:9000') // 允许跨越(同源无需设置亦可)

    // console.log(path)

    if (path == '/page') {
        const content = fs.readFileSync('./page.html')
        res.setHeader('Content-Type', 'text/html')
        res.end(content)
    }

    else if(path == '/seo') {
        const text = fs.readFileSync('./a.txt')
        res.end(text)
    }

    else if (path == '/favicon.ico') {
        const img = fs.readFileSync('./Liu_yifei/LiuYF3.webp')
        res.end(img)
    }

    else if (path == '/image') {
        res.setHeader('Date','The day before tomorow!')
        res.setHeader('Content-Type', 'image/jpeg')
        const img = fs.readFileSync('./Liu_yifei/LiuYF3.webp')
        res.end(img)
    }

    else if(path == '/download') {
        res.setHeader('Content-Type','video/mp4')
        const video = fs.readFileSync('./Liu_yifei/bailitufu.mp4')
        res.end(video)
    }

    else {
        res.end(params.name)
    }


}).listen(9000)