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

//使用IO流的方式读写文件,都是一部分一部分的读写文件,以一个缓冲区的大小为单位.适合对大文件进行操作.
//一次性读一个缓冲区大小的文件,写一个缓冲区大小的文件,读多少写多少
//先读取文件的状态,获取文件的总大小,如果文件存在则继续读取该文件,
fs.stat("/Users/zhangjianlei/downloads/电影/八恶人_bd.mp4", (error, state)=> {
    if (error) {
        throw error;
    }
    const total = state.size;//获取文件的总大小
    let part = 0;//part变量设置的非常的巧妙,不断的加chunk.length来计算已经写入的文件的大小
    //注意:on()事件中不能传入"utf8"等编码方式
    //当读取文件,读入流中有数据的时候,触发该事件,chunk为Buffer类的对象,为一个缓冲区大小的文件
    //使用流对文件进行读写的时候,都是以chunk为单位,也就是以一个缓冲区为单位进行读写
    readStream.on("data", (chunk)=> {
        //将读取到的缓冲区中的文件(以一个缓冲区为单位)写入到另一个文件中
        writeStream.write(chunk, (error)=> {
            if (error) {
                throw error;
            }
            part += chunk.length;
            //计算已经写入的文件的百分比
            console.log("文件写入进度:" + part / total * 100 + "%");
        });
    });
});
