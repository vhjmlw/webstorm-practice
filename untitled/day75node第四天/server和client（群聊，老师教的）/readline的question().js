"use strict";
const readline = require("readline");
const readinter = readline.createInterface(process.stdin, process.stdout);
//首先会在控制台弹出一个问题，回答完问题回车之后就会触发后面的回调函数，回调函数会获取到我们输入的内容
//输入完成回车之后会触发该事件，name就是我们输入的内容。
readinter.question("你的名字叫啥？", (name) => {
    console.log(`你的名字叫：${name}`);
    //设置每次prompt时显示的前缀。
    readinter.setPrompt(`${name}>`);
    //控制台等待输入内容
    readinter.prompt();
    //当输入完内容回车后，会触发该事件，buffer就是获取到的在控制台输入的内容
    readinter.on("line", (buffer) => {
        console.log(buffer.toString().trim());
        //打印输出获取到的内容之后，再次等待输入
        readinter.prompt();
    });
});