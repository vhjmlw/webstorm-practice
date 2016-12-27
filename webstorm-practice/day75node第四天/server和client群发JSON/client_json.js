"use strict";
const net = require("net");
const socket = net.connect({ port: 8877 }, () => {
    console.log("helloworld");
    process.stdin.on("data", (buffer) => {
        // console.log(buffer.toString().trim());
        //{protocol:"broadcast",frome:"58798",message:"helloworld"}
        const str = buffer.toString().trim();
        const json = `{"protocol":"broadcast","frome":"58798","message":"${str}"}`;
        socket.write("client:" + json);
    });
});
socket.on("data", (buffer) => {
    console.log(buffer.toString().trim());
});