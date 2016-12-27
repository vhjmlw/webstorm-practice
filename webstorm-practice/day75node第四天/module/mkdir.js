/**
 * Created by zhangjianlei on 2016/12/14.
 */
"use strict";
const fs = require("fs");
const path = require("path");
//封装一个函数,传入两个参数,实现递归创建目录的功能
// 第一个参数为要创建的文件夹的路径,可以为绝对路径,也可以为相对路径,相对路径会转变为绝对路径
//第二个参数为报错时调用的回调函数,负责对error进行处理
function mkdirs(target, callback) {
    //module.parent获取调用当前模块的父模块,
    //module.parent.filename调用父模块的filename,然后path.dirname()获取父模块的dirname
    const parentPath = path.dirname(module.parent.filename);
    //对调用mkdirs函数时传入的target进行检验,如果为绝对路径则直接使用,如果为相对路径则转变为绝对路径
    target = path.isAbsolute(target) ? target : path.join(parentPath, target);
    //path.relative()方法返回的相对路径不包含'.'或'..',获取target相对于父模块的相对路径
    //然后对该相对路径进行切分,分割为多个子目录
    const dirs = path.relative(parentPath, target).split(path.sep);
    let prefix = "";//变量prefix的使用特别的巧妙
    try {
        //遍历dirs数组,由外而内的创建每个子目录,每向内深入一层目录,prefix就多加一个dir
        dirs.forEach((dir)=> {
            try {
                //创建dir目录之前先读取dir目录的状态,如果读取到状态则说明该目录已经存在,没必要再创建该目录
                //如果无法读取到状态,报错了,说明该目录不存在,再创建该目录
                fs.statSync(path.join(parentPath, prefix, dir));
            } catch (error) {
                fs.mkdirSync(path.join(parentPath, prefix, dir));
            }
            console.log(prefix);
            /*不断地向下深入
            * ""
            * "demo"
            * "demo/demo"
            * "demo/demo/demo"*/
            //创建完一个dir目录后,prefix就多加一层dir目录
            prefix = path.join(prefix, dir);
            callback && callback(null);
        });
    } catch (error) {
        //短路运算符:如果没有传入callback回调函数,则不执行回调函数,如果传入了则执行
        callback && callback(error);
    }
}
module.exports = mkdirs;

