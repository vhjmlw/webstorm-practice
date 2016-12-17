"use strict";
const net = require("net");
//A factory function, which returns a new net.Socket and automatically connects with the supplied options
//client就是一个socket对象
const client = net.connect({ port: 8989 }, () => {
    client.write("client:侬好，我是client");
});
client.on("data", (buffer) => {
    console.log(buffer.toString().trim());
    client.end();
});
//当客服端与服务端之间的链接关闭的时候，触发该end事件
//也就是socket调用end()的时候触发该事件
//监听socket.end()
client.on("end", () => {
    console.log("client：socket已经关闭");
});