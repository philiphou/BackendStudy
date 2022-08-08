var http = require("http");
var renderHTML = require('../utils/renderHTML')
const querystring=require('querystring')

var renderStatus=require('../utils/renderStatus')
// 导出的是一个模块对象，调用时候要使用对象里的方法属性；


http
  .createServer((req, res) => {
    //  浏览器会默认每次都先请求一次 favicon.ico 网站图标信息；
    // if (req.url === "/favicon.ico") {
    //   //  将来读取本地图标
    //   return;
    // }
    // console.log(req.url); // 输出请求的url路径信息
    const myURL= new URL('/home?id=5&name=philip','http://127.0.0.1:3000')
    console.log('@@',myURL) // 输出一个对象，里面有属性：{pathname:xxx, search:?id=5xxx,searchParams:{迭代器} }
    const {pathname,searchParams,search}=myURL
    console.log(pathname)
    console.log("@",searchParams) // searchParams是一个迭代器， 可以使用迭代器的自身API：
    console.log(searchParams.get('id')) // 输出5
    console.log(searchParams.get('name')) // 输出philip
    console.log(searchParams.entries()) // 输出： { [ 'id', '5' ], [ 'name', 'philip' ] }
    for (let [key,value] of searchParams){
        console.log(key,value) // 输出： id 5  name philip 
    }
    console.log('@5',search.slice(1))
    console.log(querystring.parse(search.slice(1)))
    var obj = {id:'255',name:'clcs'}
    var str2 = querystring.stringify(obj)
    console.log("@6:",str2) // 输出：  id=255&name=clcs
    var str2escaped = querystring.escape(str2)
    //  querystring.escape()可以转议字符串，实线安全保护
    console.log(str2escaped) // 输出：id%3D255%26name%3Dclcs
    var str2unescaped = querystring.unescape(str2escaped)
    console.log(str2unescaped)// 输出：id=255&name=clcs



    res.writeHead(renderStatus.renderStatus(pathname), {
      "Content-Type": "text/html;charset=utf-8",
    });
    res.write(renderHTML.renderHTML(pathname));
    res.end();
  })
  .listen(3000, () => {
    console.log("server is on at 3000");
  });

