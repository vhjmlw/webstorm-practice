/**
 * Created by zhangjianlei on 2016/12/13.
 */
const fs = require("fs");
const path = require("path");
//向一个文件中写入内容,如果文件中存在内容,则原内容被覆盖掉,如果文件路径找不到,则报错
    "use strict";
    fs.writeFile(path.join(__dirname,"./demo.txt"),"what the hell",(error)=>{
        if(error) {
            throw error;
        }
    });
//创建一个输出流,如果原文件中有内容,则原内容被保存,写入的内容追加到原内容的最后面
const writeStream = fs.createWriteStream(path.join(__dirname,"./demo2.txt"));
let i = 0;
setInterval(()=>{
    writeStream.write(`helloworld${i}\n`,(error)=>{
        if(error) {
            throw error;
        }
        i++;
        //在读取文件的时候,如果指定了编码方式,则读取后自动解码返回的就是文本文件,
        //否则返回的是Buffer字节数组,需要手动的转换为字符串data.toString();
        fs.readFile(path.join(__dirname,"./demo2.txt"),"utf8",(error,data)=>{
            if (error) {
                throw error;
            }
            console.log(data);
        });
    });
},1000);