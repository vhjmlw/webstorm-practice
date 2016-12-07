/**
 * Created by zhangjianlei on 2016/12/7.
 */
//使用define()定义一个模块
define(function (require,exports,module) {
    //使用require()来引入依赖的其他的模块
    //require()方法返回的就是被依赖的模块暴露出的exports对象
    var export2 = require("./converse.js");
    function add(a,b) {
        return export2.converse2(a) + export2.converse2(b);
    }
    function subtract(a,b) {
        return export2.converse2(a) - export2.converse2(b);
    }
    function multiply(a,b) {
        return export2.converse2(a) * export2.converse2(b);
    }
    function divide(a,b) {
        return export2.converse2(a) / export2.converse2(b);
    }
    //add2 subtract2 multiply2 divide2是暴露出去的函数
    //add subtract multiply divide是模块中私有的函数
    //在使用的时候,使用的是exports暴露出去的函数add2等
    //exports.变量1 = 变量2;
    //变量1是模块暴露出去的内容,变量2是模块私有的内容.
    //使用模块的时候,使用的是变量1,模块暴露出去的内容.
    //exports是一个对象,模块暴露出去的对象,
    //add2等函数是添加在exports对象的身上
    exports.add2 = add;
    exports.subtract2 = subtract;
    exports.multiply2 = multiply;
    exports.divide2 = divide;
    console.log(module.exports===exports);//true
    //module.exports和exports是同一个对象,
    //优先级:return>module.exports>exports
    console.log(export2);
});