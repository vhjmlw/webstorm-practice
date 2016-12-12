/**
 * Created by zhangjianlei on 2016/12/12.
 */
"use strict";
const argvs = process.argv.slice(2);
console.log(argvs);//注意:process.argv数组中的内容都是字符串
//该方法对于× * ÷没有效果
//eval(`${argvs[0]} ${argvs[1]} ${argvs[2]}`)进行数学运算非常的巧妙
console.log(eval(`${argvs[0]} ${argvs[1]} ${argvs[2]}`));
//注意process.stdout.write()不可以输出数字
// process.stdout.write(eval(`${argvs[0]} ${argvs[1]} ${argvs[2]}`));报错


