const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.write('helloworld')
    res.end()
})
app.get('/login',(req,res)=>{
   res.send('login 登录')
})
app.get('/home',(req,res)=>{
    res.send(
        `
        <html>
           <h2>我爱你，中国</h2>
        </html>
        `
    )
 })

//   中间件 回调函数可以加多级，中间用 next()链接,也可以将中间件函数cb1,cb2组装成一个数组，把这个数组传入进去 [cb1,cb2,cb3...]
const func1=(req,res,next)=>{
    const isValid=true
    if(isValid){
        console.log('中间件函数func1处理结果')
    }
    next()

}
//  应用级别的中间件可以使用 app.use()方法提前绑定给 app, 如果是万能匹配，则不需要加路径，如果是给 "/home"路由下添加中间件，则需要：app.use('/home',func1)


app.use('/list',func1)
app.get('/list',(req,res)=>{
    res.send({
        name:'liyi',
        age:18,
        address:'regina'
    })
 })
//  b?表示 b可以有，也可以没有
 app.get('/ab?cd',(req,res)=>{
    res.send({
        name:'philip',
        age:28,
        address:'regina'
    })
 })
//   :2/:4 是占位符，需要有个id展位符号，是几不重要，有才可以返回；
 app.get('/detail/:2/:4',(req,res)=>{
    res.send({
        name:'shoes',
        color:'white',
        price:108
    })
 })
app.listen(3000,()=>{
    console.log('server is on at 3000')
})