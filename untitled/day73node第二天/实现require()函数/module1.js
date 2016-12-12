/**
 * Created by zhangjianlei on 2016/12/12.
 */
"use strict";
function papapa() {
    process.stdout.write("module1啦啦啦\n");
}
var module2 = $require("./module2.js");
module.exprots = {module1:{papapa},module2:module2,date:new Date()};