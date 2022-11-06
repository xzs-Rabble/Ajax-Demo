//1.引入express
const { response } = require("express");
const express = require("express");

//2.创建应用对象
const app = express();

//3.创建路由规则
//request是对请求报文的封装
//response是对请求报文的封装
app.get("/server", (request, response) => {
  //设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置响应
  response.send("HELLO AJAX -2");
});
app.post("/server", (request, response) => {
  //设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置响应
  response.send("HELLO AJAX POST");
});
//接收任意类型的响应
app.all("/json-server", (request, response) => {
  //设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  //设置响应
  // response.send("HELLO AJAX POST");
  const data = {
    name: "atguigu",
  };
  //对对象进行字符串拼接
  let str = JSON.stringify(data);
  //设置响应体
  response.send(str);
});
//延迟响应
app.all("/yc-server", (request, response) => {
  //设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  setTimeout(() => {
    //设置响应
    response.send("延迟响应");
  }, 3000);
});
//jquery
app.all("/jquery-server", (request, response) => {
  //设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // response.send("jquery响应成功");
  const data = { name: "张三" };
  response.send(JSON.stringify(data));
});
//axios
app.all("/axios-server", (request, response) => {
  //设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // response.send("axios响应成功");
  const data = { name: "李四" };
  response.send(JSON.stringify(data));
});
//AJAX请求——fetch
app.all("/fetch-server", (request, response) => {
  //设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  // response.send("axios响应成功");
  const data = { name: "王五" };
  response.send(JSON.stringify(data));
});
//cors请求
app.all("/cors-server", (request, response) => {
  //设置响应头 设置允许跨域
  // response.setHeader("Access-Control-Allow-Origin", "*");
  // response.setHeader("Access-Control-Allow-Headers", "*");
  response.send("cors响应成功");
  // const data = { name: "王五" };
  // response.send(JSON.stringify(data));
});

//4.监听端口启动服务
app.listen(8000, () => {
  console.log("服务已经启动，8000端口监听中....");
});
