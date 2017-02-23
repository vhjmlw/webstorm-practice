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
        for (var i = 0; i < array.length - 1; i++) {
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
    //判断一个数字是否为质数
    isZhiShu: function (data) {
        data = Number(data);
        //较简单的写法
        for (var i = 2; i < data / 2; i++) {
            if (data % i === 0) {
                console.log("您输入的数字不是质数");
                return;
            }
        }
        console.log("您输入的数字是质数");
        //最简单的写法
        for (var j = 2; j < Math.sqrt(data); j++) {
            if (data % j === 0) {
                console.log("您输入的数字不是质数");
                return;
            }
        }
        console.log("您输入的数字是质数");
    },
    //计算一个数字的阶乘
    jiecheng: function (data) {
        data = Number(data);
        var product = 1;
        for (var i = 1; i <= data; i++) {
            product *= i;
        }
        console.log(`${data}阶乘的结果是:${product}`);
    },
    //递归实现阶乘
    digvjiecheng:function (data) {
      data = Number(data);
        if(data===1) {
            return 1;
        }
        return data * MyCollection.prototype.digvjiecheng(data - 1);
    },
    //给定一个数字,先阶乘后求和1!+2!+3!...
    sumAndJieCheng: function (data) {
        data = Number(data);
        //方法一
        var result = 0;
        for (var i = 1; i <= data; i++) {
            var product = 1;
            for (var j = 1; j <= i; j++) {
                product *= j;
            }
            result += product;
        }
        console.log(`${data}先阶乘后求和结算的结果为:${result}`);
        // return result;
        //方法二
        var result2 = 0;
        for (var m = 1; m <= data; m++) {
            var product2 = 1;
            for (var n = 1; n <= data - m + 1; n++){
                product2 *= n;
            }
            result2 += product2;
        }
        console.log(`${data}先阶乘后求和计算的结果为:${result2}`);
    },
    //输入一个数字,使用递归求这个数字的各位之和
    everNumSum: function (data) {
        data = Number(data);
        if(data < 10) {
            return data;
        }  
        return data%10 + MyCollection.prototype.everNumSum(Math.floor(data/10));
    },
    //使用递归,求斐波那契数列的第n个数字
    numAt: function(n){
        n = Number(n);
        if(n <= 0) {
            return -1;
        }
        if (n === 1 || n === 2) {
            return 1;
        }
        return MyCollection.prototype.numAt(n - 1) + MyCollection.prototype.numAt(n - 2);
    },
    //自己实现getElementsByClassName()方法，该方法是ES5中的新方法，兼容性不太好
    getByClassName: function(className){
        if(document.getElementsByClassName) {
            return document.getElementsByClassName(className);
        }
        var array = [];
        var elements = documents.getElementsByTagName("*");
        for(var i = 0; i < elements.length; i++) {
            var array2 = elements[i].className.split(" ");
            for (var j = 0; j < array2.length; j++) {
                if(array2[j]==className) {
                    array.push(elements[i]);
                    break;
                }
            }
        }
        return array;
    },
    //使用classlist实现getElementsByClassName()方法
    getByClassName2: function(className) {
        if (document.getElementsByClassName) {
            return document.getElementsByClassName(className);
        }
        var array = [];
        var elements = document.getElementsByTagName("*");
        for(var i = 0; i < elements.length; i++) {
            if(elements[i].classList.contains(className)) {
                array.push(elements[i]);
            }
        }
        return array;
    },
    fun: function(){
        console.log(window);
    }
    
}