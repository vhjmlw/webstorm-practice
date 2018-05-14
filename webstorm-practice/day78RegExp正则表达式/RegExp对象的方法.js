"use strict";
var str = "a1b2c3d4e5";
var reg = /\d(\w)\d/;
var variable = reg.test(str);
console.log(variable); //true
var reg = /\d(\w)\d/;
var str = "a1b2c3d4e5";
var array = reg.exec(str); //非全局调用exec()只返回第一个匹配的文本
console.log(array); //[ '1b2', 'b', index: 1, input: 'a1b2c3d4e5' ]
var reg = /\d(\w)\d/g;
var arr;
while (arr = reg.exec(str)) { //如果reg无法匹配到str，则会返回null
    console.log(arr);
    //[ '1b2', 'b', index: 1, input: 'a1b2c3d4e5' ]
    //[ '3d4', 'd', index: 5, input: 'a1b2c3d4e5' ]
}

var reg = /\d(\w)\d/g;
var str = "a1b2c3d4e5";
var param = str.match(reg);
console.log(param); //全局调用match()返回一个数组，包含所有匹配的文本[ '1b2', '3d4' ]
console.log(str.match(/\d(\w)\d/));
//非全局调用match()，返回一个数组，仅包含第一个匹配的文本
//返回的数组的内容同非全局调用exec()返回的数组相同
//[ '1b2', 'b', index: 1, input: 'a1b2c3d4e5' ]

var str = "a1b2c3d4e5";
console.log(str.search(/\d\w\d/)); //1，search()不支持全局匹配，总是忽视g，返回的是第一个匹配文本的第一个字符的index

var str = "a1b2c3d4e5";
var arr = str.replace("1b2", "B");
console.log(arr); //aBc3d4e

var str = "a1b2c3d4e5";
var arr = str.replace(/\d\w\d/, function(match, index, origin) {
    console.log("匹配的文本：" + match);
    console.log("索引：" + index);
    console.log("原来的文本：" + origin);
    //匹配的文本：1b2
    //索引：1
    //原来的文本：a1b2c3d4e5
});
var arr2 = str.replace(/\d(\w)\d/g, function(match, group, index, origin) {
    console.log("匹配的文本：" + match);
    console.log("分组：" + group);
    console.log("索引：" + index);
    console.log("原来的文本：" + origin);
    /*匹配的文本：1b2
    分组：b
    索引：1
    原来的文本：a1b2c3d4e5
    匹配的文本：3d4
    分组：d
    索引：5
    原来的文本：a1b2c3d4e5*/
    // hexo-blog推送出错，打个注释测试下
    // 再加个注释试试
});