const { contentType } = require('express/lib/response')
var http = require('http')
http.createServer((req,res)=>{
    console.log(req.url)
    // res.write('hello world')
    // res.write('[1,2,3]')
    // res.writeHead(200,{contentType:'text/html')
    res.write(`
    <html>
    <h1> Hello China <h1/>
    <html/>
    
    `)
    res.end()
}).listen(3000,()=>{console.log("server is on at port: 3000")})