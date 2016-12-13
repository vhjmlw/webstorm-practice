/**
 * Created by zhangjianlei on 2016/12/13.
 */
const fs = require("fs");
const path = require("path");
const iconv = require("iconv-lite");
const readline = require("readline");
const readStream = fs.createReadStream(path.join(__dirname,"../歌词显示/血染的风采.lrc"))
                     .pipe(iconv.decodeStream("GBK"));
const interface = readline.createInterface({input:readStream});
//[01:52.73] 也许我的眼睛 再不能睁开
const regexp = /\[(\d{2})\:(\d{2})\.(\d{2})\]\s(.+)/;
const begin = new Date().getTime();
interface.on("line",(line)=>{
    "use strict";
    // console.log(line);//此时读取到的数据已经被解码了
    //此时的line就是歌词文件中一行的内容
    /*const array = regexp.exec(line);
    if (array) {
        const m = Number(array[1]);
        const s = Number(array[2]);
        const ms = Number(array[3]);
        const songLrc = array[4];
        const end = new Date().getTime();
        const region = end - begin;
        setTimeout(()=>{
            console.log(songLrc);
        },m*60*1000+s*1000+ms - region);
    } else {
        console.log(line);
    }*/
    read(line);
});
function read(line) {
     const array = regexp.exec(line);
     if (array) {
     const m = Number(array[1]);
     const s = Number(array[2]);
     const ms = Number(array[3]);
     const songLrc = array[4];
     const end = new Date().getTime();
     const region = end - begin;
     setTimeout(()=>{
     console.log(songLrc);
     },m*60*1000+s*1000+ms - region);
     } else {
     console.log(line);
     }
}