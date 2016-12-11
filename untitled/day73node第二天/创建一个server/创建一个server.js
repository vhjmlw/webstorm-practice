/**
 * Created by zhangjianlei on 2016/12/12.
 */
const fs = require("fs");
const http = require("http");
let count = 0;
//创建一个服务器
var server = http.createServer((request,respond)=>{
    "use strict";
    //使用respond.write()设置响应体的内容
    //访问localhost:8989的时候,页面显示的是响应体的内容
    respond.write(`响应体的内容为${count++}`);
    //记得最后务必要关闭请求respond.end()
    respond.end();

});
//服务器监听8989端口
server.listen("8989",(error,data)=>{
    "use strict";
    if (error) {
        throw error
    } else {
        process.stdout.write("监听成功\n");
    }
});