/**
 * Created by zhangjianlei on 2016/12/12.
 */
"use strict";
function $require(id) {
    //引入fs和path模块
    const fs = require("fs");
    const path = require("path");
    //使用path.join()方法,将__dirname和id拼接在一起
    //__dirname是当前文件的dir路径,id是文件相对于当前文件的路径,两个拼接在一起正好
    const filename = path.join(__dirname,id);
    //使用path.dirname()方法,获取filename中的dir路径
    const dirname = path.dirname(filename);
    //使用path.basename()方法,获取filename中文件的名字
    const basename = path.basename(filename);
    //获取文件的名字,不包含扩展名
    // const basename_文件名 = path.basename(filename,"文件的扩展名");
    //自定义一个module对象和exports对象,并将module.exports赋值给exports

    $require.cache = $require.cache || {};
    if($require.cache[filename]) {
        console.log(123);
        console.log($require.cache[filename]);
        return $require.cache[filename].exports;
    }

    let module = {id:filename,exports:{}};
    let exports = module.exports;
    //读取文件的内容,注意:一定要使用同步的方式读取文件内容,code是读取到的文件的内容
    let code = fs.readFileSync(filename,"utf8");
    //自定义一个自执行函数,在自执行函数的内容调用code的内容
    code = `(function($require,exports,module,dirname,filename){
        ${code}
    })($require,exports,module,dirname,filename);`;
    //执行code的代码,返回module.exports对象
    eval(code);
    //执行了code代码之后,对module.exports进行了赋值,module的值也变了
    //module = {id:filename,exports:{module1:{papapa},module2:module2,date:new Date()}}
    $require.cache[filename] = module;
    //module.exprots = {module1:{papapa},module2:module2,date:new Date()};
    return module.exprots;
}
/*let obj = $require("./module1.js");
obj.module1.papapa();
obj.module2.papapa();*/
//module1啦啦啦
//module2砰砰砰
setInterval(()=>{
    let object = $require("./module1.js");
    console.log(object);
    console.log(object.date);
},2000);