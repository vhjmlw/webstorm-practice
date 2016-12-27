/**
 * Created by zhangjianlei on 2016/12/12.
 */
"use strict";
const argvs = process.argv.slice(2);
console.log(argvs);//注意:process.argv数组中的内容都是字符串
let result = 0;
switch (argvs[1]) {
    case "+":
        result = Number(argvs[0]) + Number(argvs[2]);
        break;
    case "-":
        result = Number(argvs[0]) - Number(argvs[2]);
        break;
    // case "*":为什么会报错???argvs数字为[ '123', '计算器.js', '123' ]
    case "乘":
    case "×":
        result = Number(argvs[0]) * Number(argvs[2]);
        break;
    case "/":
    case "÷":
        result = Number(argvs[0]) / Number(argvs[2]);
        break;
    default:
        throw new Error("输入的有误");
}
//注意process.stdout.write()不可以输出数字
// process.stdout.write(result);报错
console.log(result);
