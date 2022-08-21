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

 app.get('/list',(req,res)=>{
    res.send({
        name:'liyi',
        age:18,
        address:'regina'
    })
 })
app.listen(3000,()=>{
    console.log('server is on at 3000')
})