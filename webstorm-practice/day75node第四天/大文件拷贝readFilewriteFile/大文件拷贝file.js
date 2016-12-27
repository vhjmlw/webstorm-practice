/**
 * Created by zhangjianlei on 2016/12/16.
 */
"use strict";
const fs = require("fs");
const path = require("path");
//简单粗暴的直接读写文件,没有使用IO流,也没有使用缓冲区
//该方法适用于文件较小的情况,不适合对大文件进行操作
//先读取文件,一次性将文件的所有的内容读入到内存当中;再将读取到的内容写入到另一个文件当中.
fs.readFile("/Users/zhangjianlei/downloads/电影/八恶人_bd.mp4",(error,data)=>{
    if(error) {
        throw error;
    }
    console.log("文件读取完毕");
    fs.writeFile(path.join(__dirname,"./八恶人.mp4"),data,(error)=>{
        if(error) {
            throw error;
        }
        console.log("文件写入完成");
    });
});