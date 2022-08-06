var http = require("http");
var renderHTML = require('../utils/renderHTML')
console.log(renderHTML)
var renderStatus=require('../utils/renderStatus')
// 导出的是一个模块对象，调用时候要使用对象里的方法属性；
console.log(renderStatus)

http
  .createServer((req, res) => {
    //  浏览器会默认每次都先请求一次 favicon.ico 网站图标信息；
    if (req.url === "/favicon.ico") {
      //  将来读取本地图标
      return;
    }
    console.log(req.url); // 输出请求的url路径信息
    res.writeHead(renderStatus.renderStatus(req.url), {
      "Content-Type": "text/html;charset=utf-8",
    });
    res.write(renderHTML.renderHTML(req.url));
    res.end();
  })
  .listen(3000, () => {
    console.log("server is on at 3000");
  });


