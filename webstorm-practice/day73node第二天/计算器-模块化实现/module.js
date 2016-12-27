/**
 * Created by zhangjianlei on 2016/12/12.
 */
// define((require,exports,module)=>{
//COMMENTJS语法中不需要使用define函数,其他与sea.js相同
    "use strict";
    function add(a,b) {
        return Number(a) + Number(b);
    }
    function subtract(a,b) {
        return Number(a) - Number(b);
    }
    function mutiply(a,b) {
        return Number(a) * Number(b);
    }
    function divide(a,b) {
        return Number(a) / Number(b);
    }
    //ES6新语法,当属性名和属性值相同的时候,可以省略属性值
    module.exports = {add,subtract,mutiply,divide};
// });