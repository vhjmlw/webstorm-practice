"use strict";
const net = require("net");
const sockets = [];
const server = net.createServer((socket) => {
    sockets.push(socket);
    socket.setEncoding("utf8");
    console.log(`欢迎${socket.remotePort}进入8866聊天室，当前在线人数：${sockets.length}`);
    socket.on("data", (buffer) => {
        const str = buffer.toString().trim();
        // console.log(str);
        const json = JSON.parse(str);
        console.log(`${json.name}：：${json.message}`);
        switch (json.protocol) {
            case "broadcast":
                const send = {
                        "protocol": json.protocol,
                        "frome": socket.remoteAddress,
                        "name": json.name,
                        "message": json.message,
                    }
                    //{"protocol":"broadcast","frome":"192.168.0.3","name":"建磊","message":"helloworld"}
                sockets.forEach((socket) => {
                    socket.write(JSON.stringify(send));
                });
                break;
        }
    }).on("error", (error) => { //???一个client断开连接后，为何on error事件没有被触发？？？
        //数组的splice方法，返回的是被删除的内容组成的数组
        sockets.splice(sockets.indexOf(socket), 1);
        console.log(`很遗憾，${socket.remotePort}掉线了，还剩${sockets.length}人`);
    });
});
server.listen(8866, () => {
    console.log(`服务器【server】已经开启`);
});