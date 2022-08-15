const fs = require('fs')
//  创建一个目录
//fs.mkdir('./avatar',(err)=>{console.log(err)})
// 重命名
//fs.rename('./avatar','test',(err)=>{console.log(err)})
// 写入文件：
//fs.writeFile('./test/a.txt','hello fs write world',err=>{console.log(err)}) // 如果没有文件就创建文件，如果原来有内容就会被覆盖掉；
// 追加文件 appendFile
//fs.appendFile('./test/a.txt','\n我是新加的',err=>{console.log(err)})
// 回调函数的err first 风格
/*
fs.readFile('./test/a.txt',(err,data)=>{
if(!err){
    console.log(data)
    console.log(data.toString('utf-8'))
}
})
*/
// 删除文件：
// fs.unlink('./test/a.txt',err=>{console.log(err)})
//  删除目录： 注意 如果目录下面有文件，需要先把文件删除干净才可以删除目录
//fs.rmdir('./test',err=>{console.log(err)})
// 读取一个目录：
fs.readdir('../httpModule',(err,data)=>{
    if(!err){
        console.log(data)
    }
})
fs.stat('../httpModule',(err,data)=>{
    if(!err){
        console.log(data)
    }
})
//  删除有内容的目录：
fs.readdir('./test',(err,data)=>{
    console.log(data)
    // 此处是异步删除所有的文件
    data.forEach(item=>{
        fs.unlink(`./test/${item}`,err=>{console.log(err)})
    })
})