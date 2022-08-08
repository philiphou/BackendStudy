const http = require("http");
const https = require("https");
const url = require("url");
http.createServer((req, response) => {
  const urlObj = url.parse(req.url, true);
  response.writeHead(200, {
    "content-Type": "application/json;charset=utf-8",
    "access-control-allow-origin": "*",
  });
  switch (urlObj.pathname) {
    case "/api/list":
      //  客户端要去猫眼要数据了：调用 httpget函数：
      httpget(response);
     break;
    default:
      response.end("404,not found");
  }

}).listen(3000,()=>{console.log('server is on at 3000 with 7.get.js')});

//  此处nodejs作为一个服务器也是一个中间件去找猫眼搞数据： 利用 http模块里的get方法：
function httpget(response) {
  //  如果请求的api网站是 http协议的，就用 http.get()方法，此处猫眼是基于 https 协议的
  let data = ''
  https.get(
    "https://m.maoyan.com/ajax/comingList?ci=10&token=&limit=10",
    (res) => {
      // 相当于有个数据流，数据发生变化时候，就会调用回调函数：
      res.on("data", (chunk) => {data+=chunk});
      res.on("end", () => {console.log(data); response.end(data)});
    }
  );
}
