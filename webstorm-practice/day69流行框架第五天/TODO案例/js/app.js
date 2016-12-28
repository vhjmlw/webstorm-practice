"use strict";
var appModule = angular.module("app", ["ngRoute"]);
appModule.controller("appController", ["$scope", "$location", "$routeParams","$window", function($scope, $location, $routeParams,$window) {
    //todo:{id:1,text:"hello world",completed:false}
    $scope.text = "";
    //给项目添加本地缓存的功能，将数据存储到window.localStorage缓存上面，每次开启该站点的时候，先检查本地是否存在缓存内容
    //如果存在缓存内容则直接使用该缓存内容，记得要引入$window对象
    //先对本地缓存进行判断，如果本地存储了$window.localStorage["todo_list"]，则反序列化后直接调用；否则新建一个空数组
    $scope.todos = $window.localStorage["todo_list"]?JSON.parse($window.localStorage["todo_list"]):[];

    //每次对$scope.todos数组进行更改过后，就调用下该函数，将$scope.todos的内容序列化后重新存储到localStorage缓存里面
    function save(){
        $window.localStorage["todo_list"] = JSON.stringify($scope.todos);
    }

    $scope.currentEditingId = -1;
    $scope.add = function(text) {
        if (!text) {
            return false;
        }
        $scope.todos.push({
            id: new Date().valueOf(),
            text: text,
            completed: false,
        });
        save();//todos的内容被更改，重新将该内容添加到本地缓存里面
        console.log($window.localStorage);//仅仅是用来测试用的，说明内容已经存储到todos里面了
        $scope.text = "";
    }
    $scope.currentEditing = function(id) {
        $scope.currentEditingId = id;
    }
    $scope.cancelEditing = function() {
        $scope.currentEditingId = -1;
    }
    $scope.remove = function(id) {
        for (var i = 0; i < $scope.todos.length; i++) {
            if ($scope.todos[i].id === id) {
                $scope.todos.splice(i, 1);
                console.log(i);
            }
        }
        save();
    }
    var selectedAll = true;
    $scope.toggleAll = function() {
        for (var i = 0; i < $scope.todos.length; i++) {
            $scope.todos[i].completed = selectedAll;
        }
        save();
        selectedAll = !selectedAll;
    }
    $scope.clearCompleted = function() {
        var uncompleted = [];
        for (var i = 0; i < $scope.todos.length; i++) {
            if (!$scope.todos[i].completed) {
                uncompleted.push($scope.todos[i]);
            }
        }
        $scope.todos = uncompleted;
        save();
    }
    $scope.show = function() {
            for (var i = 0; i < $scope.todos.length; i++) {
                if ($scope.todos[i].completed) {
                    return true;
                }
            }
            console.log(123);
            // console.log($location.path());
            return false;
        }
        /*switch($routeParams.status){
         case "active":
         $scope.filter = "active";
         break;
         case "completed":
         $scope.filter = "completed";
         break;
         default:
         $scope.filter = "default";
         }*/
    $scope.$location = $location; //将$location添加到$scope身上,然后对其监视$watch
    window.$location = $location; //仅仅是为了调试,debug
    //注意:对以前的笔记进行更正,$location.hash()获取到的是URL中的锚点值,该锚点值不包含#
    //而不是视频中讲的$location.path()
    //对$scope中的$location.hash()进行监视,一旦URL中的锚点变化,则触发该事件
    //重新获取URL中的hash值,更改$scope.selector的值,更改filter过滤器的匹配规则
    $scope.$watch("$location.hash()", function(now, old) {
        switch (now) {
            case "/completed":
                $scope.selector = { completed: true };
                break;
            case "/active":
                $scope.selector = { completed: false };
                break;
            default:
                $scope.selector = {};
                break;
        }
    });
    //自定义比较函数,filter过滤器在过滤的时候的过滤规则
    $scope.compare = function(source, target) {
        return source === target;
    }
}]);