/**
 * Created by zhangjianlei on 2016/12/7.
 */
define(function (require,exports,module) {
    //module指的是当前模块对象
    function converse(data) {
        return parseFloat(data);
    }
    exports.converse2 = converse;
    //如果exports和module.exports同时存在,则以module.exports为准
    //使用exports暴露:exports.converse2=converse
    //使用module.exports暴露:module.exports={converse2:converse}
    //exports和module.exports原先指向了同一个对象
    //但是module.exports={name:"world"},重新指向了一个新的对象
    exports.name = "hello";
    module.exports = {name:"world"};
    return {name:"hello world"};//最终导出的是{name:"hello world"}
    //导出模块exports对象的三种方式:return module.exports exports
    //他们三个的优先级:return>module.exports>exports,最终导出的都是exports对象
});