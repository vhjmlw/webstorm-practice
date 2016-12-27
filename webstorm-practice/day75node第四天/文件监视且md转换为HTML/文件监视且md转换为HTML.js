/**
 * Created by zhangjianlei on 2016/12/15.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const marked = require("marked");//引入marked模块,实现MarkDown转HTML的功能
const browserSync = require("browser-sync");//引入browser-sync模块,实现浏览器同步功能
const target = path.join(__dirname,process.argv[2]||"./README.md");//MarkDown文件所在的文件夹
const htmlFile = target.replace(path.extname(target),".html");//转换成的HTML文件所在的文件夹
//开启一个服务器:server:指定服务器打开的文件夹;就是读取的MarkDown文件所在的文件夹
//index:指定默认服务器打开文件夹下的文件;就是MarkDown文件转换成的HTML文件
// notify:每次同步的时候不提示
browserSync({
    server:path.dirname(target),
    index:path.basename(htmlFile),
    notify: false,
});
//监视文件,每次文件被修改的时候,触发该事件
//{interval:300}文件被修改后,隔300毫秒触发该事件,
//currenttate:文件被修改后的状态;preState:文件被修改之前的状态
fs.watchFile(target,{interval:300},(currentState,preState)=>{
    //检测两次状态的文件修改时间,如果两次时间相同,则说明文件没有被修改
    if(preState.mtime===currentState.mtime) {
        return;
    }
    //读取MarkDown文件
    fs.readFile(target,"utf8",(error,data)=>{
        if(error) {
            throw error;
        }
        //使用marked模块将MarkDown格式的文件转换为HTML格式的文件
        const html = marked(data);
        console.log(htmlFile);
        //MarkDown文件读取完之后,接着读取CSS样式文件,
        fs.readFile(path.join(__dirname,"./github-markdown.css"),"utf8",(error,cssdata)=>{
            if(error) {
                throw error;
            }
            //将HTML数据和CSS数据嵌套在str(HTML框架)里面,形成一个整体的HTML文档
            //注意:此处的str容易犯错,不能写成str=str.replace("{{{content}}}",html)...,要声明一个新的变量接收
            const strnew = str.replace("{{{content}}}",html).replace("{{{css}}}",cssdata);
            //将HTML文档写入与MarkDown同名同文件夹的HTML文件
            fs.writeFile(htmlFile,strnew,(error)=>{
                console.log("文件写入完毕");
                //每次HTML文件写入完之后,重新加载该HTML文件
                browserSync.reload(path.basename(htmlFile));
            });
        });

    });
});
let str = `<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style>{{{css}}}</style>
</head>
<body>
<div class="markdown-body">
{{{content}}}
</div>
</body>
</html>`;

/*
fs.watchFile(target,(currentState,preState)=>{
    if(preState.mtime===currentState.mtime) {
        return;
    }
    const data = fs.readFileSync(target,"utf8");
    const html = marked(data);
    const dataCSS = fs.readFileSync(path.join(__dirname,"./node_modules/github-markdown-css/github-markdown.css"),"utf8");
    str = str.replace("{{{css}}}",dataCSS).replace("{{{content}}}",html);
    fs.writeFileSync(htmlFile,str);
    browerSync.reload(path.basename(htmlFile));
});*/
