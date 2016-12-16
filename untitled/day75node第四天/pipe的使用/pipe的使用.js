/**
 * Created by zhangjianlei on 2016/12/16.
 */
"use strict";
const fs = require("fs");
const path = require("path");
//创建读入流
const readStream = fs.createReadStream("/Users/zhangjianlei/downloads/电影/八恶人_bd.mp4");
//创建写出流
const writeStream = fs.createWriteStream(path.join(__dirname, "./八恶人.mp4"));

/*readStream.on("pipe",(str)=>{
    console.log(str);
});*/
//简化版的大文件读写,使用管道pipe直接将写出流和读入流连接在一起
readStream.pipe(writeStream);