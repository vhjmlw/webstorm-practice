/**
 * Created by zhangjianlei on 2016/12/16.
 */
"use strict";
var ProgressBar = require('progress');

//':bar' the progress bar itself;":bar"指的是进度条本身.也可以添加自己的内容如'进度条:bar'等
//第二个参数对象的属性:total进度条总的要跑的长度;width进度条显示出来的长度;
//complete进度条完成后显示的样式;incomplete进度条还未完成显示的样式
var bar = new ProgressBar(':bar', {total: 300, width: 30, complete: "6", incomplete: "-"});
var timer = setInterval(function () {
    bar.tick();//进度条向前进一个格子
    //进度条跑完之后执行的逻辑
    if (bar.complete) {
        console.log('\ncomplete\n');
        clearInterval(timer);
    }
}, 100);