"use strict";
const readline = require("readline");
const net = require("net");
const readinter = readline.createInterface(process.stdin, process.stdout);
readinter.question("你叫啥？", (name) => {
    if (!name) {
        throw new Error("还没有名字呢");
    }
    readinter.setPrompt(`${name}>`);
    const socket = net.connect({ port: 8866 }, () => {
        readinter.prompt();
        readinter.on("line", (buffer) => {
            const message = buffer.toString().trim();
            const send = {
                "protocol": "broadcast",
                "name": name,
                "message": message,
            }
            socket.write(JSON.stringify(send));
        });
        socket.on("data", (buffer) => {
            //{"protocol":"broadcast","frome":"jianlei","message":"helloworld"}
            const json = JSON.parse(buffer.toString().trim());
            const protocol = json.protocol;
            switch (protocol) {
                case "broadcast":
                    console.log(`\nbroadcast[${json.name}]：：${json.message}\n`);
                    break;
                default:
                    console.log("啥？");
            }
            readinter.prompt();
        });
    });
});