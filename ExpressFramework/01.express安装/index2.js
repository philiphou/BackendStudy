
const express = require("express");
const app = express();
const indexRouter = require('./router2/indexRouter')
//  应用级别中间件应用
app.use(function(req,res,next){
    console.log('这是应用级别中间件,用来验证token')
    next()
})
//  路由级别的中间件应用：也可以继续拆分，注册 '/home' 下的路由中间件： app.use('/home',homeRouter)
app.use('/',indexRouter)

app.listen(3000, () => {
  console.log("server is on at 3000");
});
