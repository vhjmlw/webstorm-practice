/**
 * Created by zhangjianlei on 16/9/18.
 */
function $id(id) {
    return document.getElementById(id);
}
function hide(obj) {
    obj.style.display = "none";
}
function show(obj) {
    obj.style.display = "block";
}
//获取scrollTop和scrollLeft
function getScroll() {//整个函数返回的是一个JSON对象
    //整个判断的过程是按照从好到坏的过程进行的
    //浏览器能力判断,必须判断!=null,因为window.pageYOffset有可能等于0
    if (window.pageYOffset != null) {
        return {
            left : window.pageXOffset,
            top : window.pageYOffset
        };//怪异模式判断,判断是够进行了DTD声明<!DOCTYPE html>
    } else if (document.compatMode == "CSS1Compat") {//声明了DTD
        return {
            left : document.documentElement.scrollLeft,
            top : document.documentElement.scrollTop
        };
    }//未进入if循环,说明if中的判断都不符合,未声明DTD,进行怪异模式解析
    return {
        left : document.body.scrollLeft,
        top : document.body.scrollTop
    };
}
//更具传入的形参,获取对象
var getClass = function (id) {
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(id);
    }
    var arr = [];
    var arr1 = document.getElementsByTagName("*");
    for (var i = 0; i < arr1.length; i++) {
        var arr2 = arr1[i].className.split(" ");
        for (var j = 0; j < arr2.length; j++) {
            if (arr2[j] == id) {
                arr.push(arr1[i]);
                break;
            }
        }
    }
    return arr;
}
function $(id) {
    var s = id.charAt(0);
    var ss = id.substr(1);
    switch (s) {
        case "#":
            return document.getElementById(ss);
            break;
        case ".":
            return getClass(ss);
            break;
        default :
            return document.getElementsByTagName(id);
            break;
    }
}