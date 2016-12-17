"use strict";
const net = require("net");
const socket = net.connect({ port: 8899 }, () => {
    console.log("helloworld");
    process.stdin.on("data", (buffer) => {
        // console.log(buffer.toString().trim());
        socket.write("client:" + buffer.toString().trim());
    });
});
socket.on("data", (buffer) => {
    console.log(buffer.toString().trim());
});