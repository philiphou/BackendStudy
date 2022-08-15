const fs = require('fs')
const rs=fs.createReadStream('./sample.txt','utf-8')
rs.on('data',(chunk)=>{
    console.log(chunk)
})
rs.on('end',()=>{
    console.log('读取完毕 end')
})
rs.on('error',(error)=>{
    console.log(error)
})
// 创建一个管道，一边读，一边写入另一个文件：适用于大型文件的复制；
const ws=fs.createWriteStream('./target.txt')
rs.pipe(ws)
