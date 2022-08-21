## 后端学习
# stream 模块
    1. stream 是 node.js提供的又一个仅在服务端可以用的模块，目的是支持 "流" 这种数据结构；
# Express 模块
    1. Express是一个自身功能极简，完全是由路由和中间件构成的一个web开发框架，本质上说，一个express应用就是在调用各种中间件
    2. 中间件（middleware)是一个函数，它可以访问请求对象（req object) 和 响应对象 （res object) 以及web应用中处于请求响应循环流程中的中间件，一般命名为next的变量
    3. 中间件可以分为： 应用级别中间件，路由级中间件，错误处理中间件，内置中间件以及第三方中间件；
    4. 应用级中间件可以利用 app.use()方法绑定到app对象上，或者用 app.METHOD()，其中METHOD是需要处理的HTTP请求的方法：GET,POST,PUT等：
       