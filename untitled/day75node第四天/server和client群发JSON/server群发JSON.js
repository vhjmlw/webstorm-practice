"use client";
const net = require("net");
//如果有多个客户端连接了服务器，则会多次执行回调函数connectListen
//每个连接的socket都不一样，每个连接的回调函数的内容都不一样
//如：第二个client又连接了服务器，则变量i是从0开始的
//socket绑定的是一个client和一个server，是一对一的关系
//socket代表的是一个连接，一个客户端和服务端一对一的链接
let sockets = [];
const server = net.createServer((socket) => { //connectListener
    //server接收到client发送到的信息后，可以使用socket.remoteAddress和socket.remotePort来识别是哪一个socket链接发来的信息
    console.log(socket.remoteAddress + ":" + socket.remotePort);
    sockets.push(socket);
    socket.on("data", (buffer) => {
        //{protocol:"broadcast",frome:"58798",message:"helloworld"}
        //{protocol:"p2p",frome:"58798",to:"58800",message:"helloworld"}
        const str = buffer.toString().trim();
        console.log(str);
        const json = JSON.parse(str.replace("client:", ""));
        switch (json.protocol) {
            case "broadcast":
                sockets.forEach((socket) => {
                    socket.write(json.message);
                });
                break;
            default:
                socket.write("shit");
        }
    });
});
server.listen(8877, () => {
    console.log("server:服务器监听端口【8899】成功");
});