var http = require('http')
http.createServer((req,res)=>{
    console.log(req.url)
    res.write('hello world')
    res.end()
}).listen(3000,()=>{console.log("server is on at port: 3000")})