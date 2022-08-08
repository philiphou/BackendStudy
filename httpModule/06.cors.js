var http = require("http");
const url=require('url')
http.createServer((req, res) => {
    var urlobj = url.parse(req.url,true)
    //  在后端层面解决前端发送网络请求时候的跨域问题：添加属性： access-control-allow-origin: "*"
    res.writeHead(200,{"content-Type":"application/json;charset=utf-8","access-control-allow-origin":"*"})
    switch(urlobj.pathname){
        case "/api/list":
            res.end(`
            ${JSON.stringify({
                name:'philip',
                age:35
            })}`);
            break;
        default:
            res.end('404 not found')
    }
   
  })
  .listen(3000, () => {
    console.log("server is on at  3000 @@@");
  });
