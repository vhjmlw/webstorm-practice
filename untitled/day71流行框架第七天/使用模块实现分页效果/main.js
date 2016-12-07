/**
 * Created by zhangjianlei on 2016/12/8.
 */
define(function (require,exports,module) {
    var Obj = require("./pagination.js");
    var obj = new Obj(15,7,30);
    obj.render(".pagination");
    //调用pagination.js文件,返回Pagination构造函数,使用Obj来接收
    //实例化Obj对象,调用render()方法,实现分页的效果.
});