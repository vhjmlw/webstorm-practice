/**
 * Created by zhangjianlei on 2016/12/6.
 */
function MyCollection() {

}
MyCollection.prototype = {
    //输入一个数字,判断数字的位数,方法一
    numLength1: function (num) {
        var newNum = parseInt(num);
        if (newNum) {
            var i = 1;
            while (newNum >= 10) {
                newNum = Number(newNum / 10);
                i++;
            }
            console.log("数字的位数为:" + i);
        } else if (newNum === 0) {
            console.log("数字的位数为:" + 1);
        } else {
            console.log("您输入的有误,请输入数字");
        }
    },
    //输入一个数字,判断数字的位数,方法二
    numLength2: function (num) {
        var newNum = parseInt(num);
        var i = 0;
        if (newNum) {
            while (newNum) {
                i++;
                newNum = parseInt(newNum / 10);
            }
            console.log("数字的位数为:" + i);
        } else if (newNum === 0) {
            console.log("数字的位数为:" + 1);
        } else {
            console.log("您输入的有误,请输入数字");
        }
    },
    //翻转输出一个数字的每一位数字
    reverseNum: function (num) {
        var newNum = parseInt(num);
        var tmp = 0;
        if (newNum) {
            do {
                tmp = newNum % 10;
                console.log(tmp);
                newNum = parseInt(newNum / 10);
            } while (newNum);
        } else if (newNum === 0) {
            console.log(0);
        } else {
            console.log("您输入的有误,请输入数字");
        }
    },
    //求一组数中的最大值 最小值,及其索引
    //如果数组中有重复的数字,只会索取到第一个最大值或最小值
    controlArray: function (array) {
        var max = array[0];
        var maxIndex = 0;
        var min = array[0];
        var minIndex = 0;
        for (var i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
                maxIndex = i;
            }
            if (array[i] < min) {
                min = array[i];
                minIndex = i;
            }
        }
        console.log("最大值为:" + max);
        console.log("最大值的索引为:" + maxIndex);
        console.log("最小值为:" + min);
        console.log("最小值的索引为:" + minIndex);
    },
    //将数组中的0去掉,将不为0的元素存入一个新的数组
    deleteArrayItem: function (array) {
        var arrayNew = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i] == 0) {
                continue;
            }
            arrayNew[arrayNew.length] = array[i];
        }
        console.log(arrayNew);
        return arrayNew;
    },
    //翻转数组,方法一
    reverseArray1: function (array) {
        var newArray = [];
        for (var i = 0; i < array.length; i++) {
            newArray[i] = array[array.length - 1 - i];
        }
        console.log(newArray);
        return newArray;
    },
    //翻转数组,方法二
    reverseArray2: function (array) {
        var newArray = [];
        for (var i = array.length - 1; i >= 0; i--) {
            newArray[newArray.length] = array[i];
        }
        console.log(newArray);
        return newArray;
    },
    //翻转数组,方法三
    reverseArray3: function (array) {
        var tmp;
        for (var i = 0; i < array.length / 2; i++) {
            tmp = array[array.length - 1 - i];
            array[array.length - 1 - i] = array[i];
            array[i] = tmp;
        }
        console.log(array);
        return array;
    },
    //冒泡求数组最大值
    bubbleMax: function (array) {
        var tmp;
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                tmp = array[i];
                array[i + 1] = array[i];
                array[i] = tmp;
            }
        }
        console.log(array[array.length - 1]);
    },
    //冒泡排序:从小到大排序
    sortArray: function (array) {
        var tmp;
        for(var i = 0; i < array.length - 1; i++) {
            var isSort = true;
            for (var j = 0; j < array.length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    isSort = false;
                    tmp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = tmp;
                }
            }
            if (isSort) {
                break;
            }
        }
        console.log(array);
        return array;
    },
    //将日期转换为指定的显示格式,返回一个字符串
    formateDate: function (date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        //转换为"yy/mm/dd hh:mm:ss"
        const dateStr1 = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
        //转换为"yy年mm月dd日 hh时mm分ss秒"
        const dateStr2 = `${year}年${month}月${day}日 ${hours}时${minutes}分${seconds}秒`;
        return dateStr2;
    },
}