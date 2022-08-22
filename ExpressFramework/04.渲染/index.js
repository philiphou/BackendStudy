const express = require("express");
const app = express();
const HomeRouter = require("./route/HomeRouter");
const LoginRouter = require("./route/LoginRouter");
//  配置渲染引擎和view
app.set('views','./views')
app.set('view engine','ejs')
// 配置静态资源
app.use(express.static("public")); // 配置好之后，直接 localhost:3000/login.html 就找到了， 不需要加 public路径,如果非要加public路径 可以配置成：app.use('/public',express.static('public'))

// 配置解析 post 参数的中间件：不用下载第三方的了，内置了

app.use(express.urlencoded({ extended: false })); // 可以解析post参数： username=philip&passsword=007

//  应用级别中间件应用
// app.use(function (req, res, next) {
//   console.log("这是应用级别中间件,用来验证token");
//   next();
// });
//  路由级别的中间件应用：也可以继续拆分，注册 '/home' 下的路由中间件： app.use('/home',homeRouter)
app.use("/home", HomeRouter);
app.use("/login", LoginRouter);

//  错误中间件,放在最后，如果前面的全部匹配不到，则进入这个错误回调函数执行；修改 status 然后发送错误信息
app.use((req, res) => {
  res.status(404).send("丢了");
});

app.listen(3000, () => {
  console.log("server is on at 3000");
});
