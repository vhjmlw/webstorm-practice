/**
 * Created by zhangjianlei on 2016/12/13.
 */
const fs = require("fs");
const path = require("path");
const iconv = require("iconv-lite");//引入第三方的模块,专业解决字符编码问题
const begin = new Date().getTime();
fs.readFile(path.join(__dirname,"./血染的风采.lrc"),(error,data)=>{
    "use strict";
    if (error) {
        throw error;
    }
    // console.log(data.toString());读取的文件采用GBK编码方式,但是node不支持该编码方式
    //需要借助第三方的模块iconv-lite
    //由于读取的文件采用GBK编码方式,故采用GBK解码,返回解码后的字符串
    const lrc = iconv.decode(data,"GBK");
    console.log(lrc);//歌词的全部内容,一长条字符串
    const array = lrc.split("\n");
    console.log(array);//将一整条歌词按照\n(换行符)切割为一个数组,每一行的歌词为数组中的每一项
    //遍历数组中的每一项,数组中的每一项就是文件中的每一行歌词
    array.forEach((item)=>{
        //[01:52.73] 也许我的眼睛 再不能睁开
        const regexp = /\[(\d{2})\:(\d{2})\.(\d{2})\]\s(.+)/;
        const test = regexp.test(item);//检测item是否匹配正则表达式,
        if (test) {
            const array = regexp.exec(item);//返回一个数组,数组的第一项是item本身,之后的每一项都是regexp中()的内容
            console.log(array);//[ '[00:01.21] 歌曲：血染的风采','00','01','21','歌曲：血染的风采']
            const m = Number(array[1]);//分
            const s = Number(array[2]);//秒
            const ms = Number(array[3]);//毫秒
            const lrcLine = array[4];//歌词
            const end = new Date().getTime();
            const region = end - begin;
            setTimeout(()=>{
                console.log(lrcLine);
            },m*60*1000+s*1000+ms-region);
        } else {//如果不匹配的话,直接打印输出内容
            console.log(item);
        }
    });
});