const EventEmitter = require("events");
// const event = new EventEmitter();
// event.on("play", (data) => {
//   console.log("play event is triggered with data:", data);
// });
// event.on("run", (data) => {
//   console.log("run 事件已被触发，速度：", data);
// });
// setTimeout(() => {
//   event.emit("play", { name: "liyi", age: "18" });
// }, 2000);
// setTimeout(() => {
//   event.emit("run", { speed: "50km/h", time: "01:08" });
// }, 1000);
//  利用这个事件订阅与发布可以解决异步处理问题：

const http = require("http");
const https = require("https");
const url = require("url");
let event = "";
http
  .createServer((req, response) => {
    const urlObj = url.parse(req.url, true);
    response.writeHead(200, {
      "content-Type": "application/json;charset=utf-8",
      "access-control-allow-origin": "*",
    });
    switch (urlObj.pathname) {
      case "/api/list":
        event = new EventEmitter();
        event.on("play", (data) => {
          console.log(data);
          response.end(data);
        });

        httpget();
        break;
      default:
        response.end("404,not found");
    }
  })
  .listen(3000, () => {
    console.log("server is on at 3000 with 09.event.js");
  });

function httpget() {
  let data = "";
  https.get(
    "https://m.maoyan.com/ajax/comingList?ci=10&token=&limit=10",
    (res) => {
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        console.log(data);
        event.emit("play", data);
      });
    }
  );
}
