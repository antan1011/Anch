const express = require('express');
const fs = require('fs')
const path = require('path')

const app = express();

// 配置 body-parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.get('/page',(req,res) => {
    // res.render('./page.html')
    res.send(fs.readFileSync('./page.html').toString())
})

// 然后在路由中可以访问原始请求正文
app.post('/p', (req, res) => {
    res.send(`How do you do,${req.body.name}!`)
});

app.get('/',(req,res) => {
    res.sendFile(__dirname+'/page.html') // res.sendFile(absolutepath) 必须要绝对路径or详细路径
})

app.get('/a',(req,res) => {
    res.sendFile(__dirname+'/a.txt')
})

app.get('/newpath',(req,res) => {
    res.send('https://antan1011.github.io/view/pexels-mayu-6348820.jpg')
})






app.get('/page2',(req,res) => {
    res.sendFile(__dirname+'/page2.html')
})



app.get('/page3',(req,res) => {
    res.sendFile(__dirname+'/page3.html')
})



app.get('/topage3',(req,res) => {
    res.redirect('/page3')
})

app.get('/418',(req,res) => {
    res.sendStatus(418)
})

app.get('/404',(req,res) => {
    res.status(404).sendFile(__dirname+'/public/page/404.html')
    // res.status(404).sendFile('http://127.0.0.1:9000/page/404.html')           // 错误url 不可用 只能绝对路径 或者 直接找 http://127.0.0.1:9000/page/404.html
})


// 启动服务器
app.listen(9000, () => {
    console.log('Server is running on port 3000');
});
