/**
 * Created by zhangjianlei on 2016/9/24.
 */

window.onload = function () {
        //冒泡排序-资料
        function insertionSort(arr) {
            var len = arr.length;
            var preIndex, current;
            for (var i = 1; i < len; i++) {
                preIndex = i - 1;
                current = arr[i];
                while(preIndex >= 0 && arr[preIndex] > current) {
                    arr[preIndex+1] = arr[preIndex];
                    preIndex--;
                }
                arr[preIndex+1] = current;
            }
            return arr;
        }
        console.log(insertionSort([2,4,1,67,23,22,77]));
        var arr = [99, 34, 9, 31, 73, 23, 42, 55, 0];
        //冒泡排序-自己
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j + 1] <= arr[j]) {
                    var tmp;
                    tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
        console.log(arr);
        var arr1 = [99, 34, 9, 31, 73, 23, 42, 55, 0];
        //直接排序
        for (var i = 0; i < arr1.length - 1; i++) {
            var minIndex = i;
            for (var j = i + 1; j < arr1.length; j++) {
                if (arr1[j] < arr1[minIndex]) {
                    minIndex = j;
                }
            }
            var tmp;
            tmp = arr1[i];
            arr1[i] = arr1[minIndex];
            arr1[minIndex] = tmp;
        }
        console.log(arr1);
        var arr2 = [99, 34, 9, 31, 73, 23, 42, 55, 0];
        //插入排序
        for (var i = 1; i < arr2.length; i++) {
            for (var j = i; j > 0; j--) {
                if ( arr2[j] <= arr2[j-1]) {
                    var tmp;
                    tmp = arr2[j];
                    arr2[j] = arr2[j - 1];
                    arr2[j - 1] = tmp;
                }
            }
        }
        console.log(arr2);
    }