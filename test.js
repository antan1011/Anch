const axios = require('axios')
const fs = require('fs')

const url = 'https://www.douyin.com/search/%E5%B1%B1%E7%88%B1%E4%B8%80?aid=3d8c186c-5cdc-4f0e-a090-8ce19469ff06&modal_id=7367739476854066459&type=general'


const writer = fs.createWriteStream('./a.html')
writer.on('finish', () => {
    console.log('Done!')
})
writer.on('error',(err) => {
    console.log(err)
})

axios({
    url
}).then(res => {
    writer.write(res.data)
    writer.end()
})