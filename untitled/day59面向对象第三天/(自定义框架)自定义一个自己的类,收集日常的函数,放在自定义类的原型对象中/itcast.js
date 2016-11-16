/**
 * Created by Lenovo on 2016/1/4.
 */


function itcast(){

}

itcast.prototype ={
    $id:function (str){
    return document.getElementById(str)
    },
    $tag:function(tag){
        return document.getElementsByTagName(tag)
    },
    //数据类型检测
    isNumber:function (val){
        return typeof val === 'number' && isFinite(val)
    },
    isBoolean:function (val) {
        return typeof val ==="boolean";
    },
    isString:function (val) {
        return typeof val === "string";
    },
    isUndefined:function (val) {
        return typeof val === "undefined";
    },
    isObj:function (str){
        if(str === null || typeof str === 'undefined'){
            return false;
        }
        return typeof str === 'object';
    },
    isNull:function (val){
        return  val === null;
    },
    isArray:function (arr) {
        if(arr === null || typeof arr === 'undefined'){
            return false;
        }
        return arr.constructor === Array;
    },
    trim:function(str){
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    ltrim:function(str) {
    return str.replace(/(^\s*)/g,'');
},
    //删除右边的空格
    rtrim:function(str) {
    return str.replace(/(\s*$)/g,'');
},
    ajax:function(){},
    dateFormate:function(){}
}

var $$ = new itcast()