
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

//  错误中间件,放在最后，如果前面的全部匹配不到，则进入这个错误回调函数执行；修改 status 然后发送错误信息
app.use((req,res)=>{
  res.status(404).send('丢了')
})

app.listen(3000, () => {
  console.log("server is on at 3000");
});

