"use strict";
const net = require("net");
//创建一个server，当有客户端链接server的时候触发里面的回调函数
//回调函数为connectListen
const server = net.createServer((socket) => {
    socket.on("data", (buffer) => {
        console.log(socket.remoteAddress + ":" + socket.remotePort);
        console.log(socket.localAddress + ":" + socket.localPort);
        console.log(buffer.toString().trim());
        socket.write("server:client,侬好。我是server");
        socket.end();
    });
    socket.on("end", () => {
        console.log("server:socket已经关闭");
    });
});

server.listen(8989, () => {
    console.log("helloworld");
    console.log(server.address()); //{ address: '::', family: 'IPv6', port: 8989 }
});