var http = require("http");
http
  .createServer((req, res) => {
    res.end(`
    hou(${JSON.stringify({
      name: "philip",
      age: 35,
      city: "toronto",
    })})
    `);
  })
  .listen(3000, () => {
    console.log("server is on at  3000 @@@");
  });
