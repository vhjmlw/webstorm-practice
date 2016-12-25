"use strict";
var appModule = angular.module("app", ["ngRoute"]);
appModule.controller("appController", ["$scope", "$location", "$routeParams", function ($scope, $location, $routeParams) {
    //todo:{id:1,text:"hello world",completed:false}
    $scope.text = "hello wolrd";
    $scope.todos = [{
        id: 1,
        text: "哎呀",
        completed: true,
    }, {
        id: 2,
        text: "艾斯凯梵",
        completed: false,
    }, {
        id: 3,
        text: "asldf",
        completed: false
    }];

    $scope.currentEditingId = -1;
    $scope.add = function (text) {
        $scope.todos.push({
            id: new Date().valueOf(),
            text: text,
            completed: false,
        });
    }
    $scope.currentEditing = function (id) {
        $scope.currentEditingId = id;
    }
    $scope.cancelEditing = function () {
        $scope.currentEditingId = -1;
    }
    $scope.remove = function (id) {
        for (var i = 0; i < $scope.todos.length; i++) {
            if ($scope.todos[i].id === id) {
                $scope.todos.splice(i, 1);
                console.log(i);
            }
        }
    }
    var selectedAll = true;
    $scope.toggleAll = function () {
        for (var i = 0; i < $scope.todos.length; i++) {
            $scope.todos[i].completed = selectedAll;
        }
        selectedAll = !selectedAll;
    }
    $scope.clearCompleted = function () {
        var uncompleted = [];
        for (var i = 0; i < $scope.todos.length; i++) {
            if (!$scope.todos[i].completed) {
                uncompleted.push($scope.todos[i]);
            }
        }
        $scope.todos = uncompleted;
    }
    $scope.show = function () {
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
    $scope.$location = $location;//将$location添加到$scope身上,然后对其监视$watch
    window.$location = $location;//仅仅是为了调试,debug
    //注意:对以前的笔记进行更正,$location.hash()获取到的是URL中的锚点值,该锚点值不包含#
    //而不是视频中讲的$location.path()
    //对$scope中的$location.hash()进行监视,一旦URL中的锚点变化,则触发该事件
    //重新获取URL中的hash值,更改$scope.selector的值,更改filter过滤器的匹配规则
    $scope.$watch("$location.hash()", function (now, old) {
        switch (now) {
            case "/completed":
                $scope.selector = {completed: true};
                break;
            case "/active":
                $scope.selector = {completed: false};
                break;
            default:
                $scope.selector = {};
                break;
        }
    });
    //自定义比较函数,filter过滤器在过滤的时候的过滤规则
    $scope.compare = function (source,target) {
        return source===target;
    }
}]);