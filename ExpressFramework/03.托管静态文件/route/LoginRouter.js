const express = require("express");
const router = express.Router();


router.get("/home", (req, res) => {
  res.send("home");
});
//  路由级别的响应前端的 get 请求
router.get("/user", (req, res) => {
    console.log(req.query) // 可以输出一个search params 对象：{ name: 'philip', id: '007' }
  res.send("user");
});

//  路由级别的响应前端的 post 请求

router.post('/',(req,res)=>{
    console.log(req.body) // post 请求内容封装在 req.body 对象中，必须配置好中间件，现在是内置的
    res.send({ok:1})
})
module.exports = router;
