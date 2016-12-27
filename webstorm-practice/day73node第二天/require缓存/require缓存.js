/**
 * Created by zhangjianlei on 2016/12/12.
 */
"use strict";
//注意:文件一定要使用"use strict"模式;
// console.log(require.cache);
setInterval(()=>{
    //清除掉require的缓存
    Object.keys(require.cache).forEach((item,index)=>{
        delete require.cache[item];
    });;
    const date = require("./module");
    //由于require缓存机制的存在,每次打印的毫秒数都是不变的,
    // 因为module.js中的代码只有第一次被调用的时候执行了
    //之后date对象就被缓存了起来
    console.log(date.getTime());
},2000);
