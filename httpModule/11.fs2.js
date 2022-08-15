// const fs = require('fs')
// 删除有内容的目录：
// fs.readdir('./test',(err,data)=>{
//     console.log(data)
//     data.forEach(item=>{
//         //  保证是同步删除完毕，防止过早执行删除目录，所以加 Sync, 
//         fs.unlinkSync(`./test/${item}`,err=>{console.log(err)})
//     })
//     fs.rmdir('/test',err=>{console.log(err)})
// })

const  fs = require('fs').promises
fs.readFile('./test/1.txt').then(result=>{console.log(result.toString('utf-8'))})
fs.readdir('./test').then(async(data)=>{
    // 此处for循环是异步处理删除文件，可以推入一个数组，以便检查是否全部的promise都已经执行成功
    let arr = []
    data.forEach(item=>{
        arr.push(fs.unlink(`./test/${item}`))
       
    })
    await Promise.all(arr) // 保证 for循环结束后才执行下面的
    await fs.rmdir('./test')
})
