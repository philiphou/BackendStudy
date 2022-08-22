const express = require("express");
const router = express.Router();

//  路由级别的响应前端的 get 请求
router.get("/", (req, res) => {
  console.log(req.query); // 可以输出一个search params 对象：{ name: 'philip', id: '007' }
  // res.send("login success");

  // 渲染登录页面, render方法用来送 ejs模板，send 方法可以送模板，也可以送数据， res.json()只传递json数据，
  res.render("login", { error: "" }); // res.render参数除了模板，还可以加传递的参数： 比如 {title:'EXO'}, 这样 模板里可以使用这个参数
});

router.post("/", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  if (username === "philip" && password === "888") {
    console.log("it is you");
    //   重定向到home页面
    res.redirect("/home");
  } else {
    res.render("login",{error:'username does not exist'});
  }
});

module.exports = router;
