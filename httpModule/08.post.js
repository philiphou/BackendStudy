const http = require("http");
const https = require("https");
const url = require("url");
http
  .createServer((req, response) => {
    const urlObj = url.parse(req.url, true);
    response.writeHead(200, {
      "content-Type": "application/json;charset=utf-8",
      "access-control-allow-origin": "*",
    });
    switch (urlObj.pathname) {
      case "/api/list":
        //  客户端要去小米优品发送POST请求，获取数据：
        httppost((data) => {
          response.end(data);
        });
        break;
      default:
        response.end("404,not found");
    }
  })
  .listen(3000, () => {
    console.log("server is on at 3000 with 8.post.js");
  });

//  此处nodejs作为一个服务器也是一个中间件去小米优品搞数据： 利用 http模块里的request方法：
function httppost(cb) {
  //  如果请求的api网站是 http协议的，就用 http.get()方法，此处猫眼是基于 https 协议的
  let data = "";
  let options = {
    hostname: "10.10.10.21:80",
    port: "443",
    pathname: "/member/login",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let req = https.request(options, (res) => {
    // 相当于有个数据流，数据发生变化时候，就会调用回调函数：
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      console.log(data);
      cb(data);
    });
  });
  //  发送POST请求数据： req.write()
  req.write(JSON.stringify([{}, { baseParam: {nickname:xxx,password:xxx} }]));
  req.end();
}
