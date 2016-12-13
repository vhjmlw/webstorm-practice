/**
 * Created by zhangjianlei on 2016/12/13.
 */
const fs = require("fs");
const path = require("path");
const readline = require("readline");
const iconv = require("iconv-lite");
const readStream = fs.createReadStream(path.join(__dirname,"../歌词显示/血染的风采.lrc"));
let str = "";
//当输入流中读入文件内容的时候触发该事件,chunk是读入的文件的内容,只是文件的一部分内容
//读取文件内容的时候,不是一次性读完的,而是一次读取chunk大小
readStream.on("data",(chunk)=>{
    "use strict";
    //对读取的文件内容进行解码
    str += iconv.decode(chunk,"GBK");
});
//当文件读取完毕,触发该事件,此时获取到的是完整的文件内容
readStream.on("end",()=>{
    "use strict";
    console.log(str);
});