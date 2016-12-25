/**
 * Created by zhangjianlei on 2016/12/25.
 */
var appModule = angular.module("app",["ngRoute"]);
//设置模块的配置
appModule.config(["$routeProvider",function ($routeProvider) {
    $routeProvider
        .when("/a",{//当URL中的锚点值为/a的时候,显示templateUrl中的HTML代码块,数据使用controller中的数据
            controller:"Acontroller",//类似于数据绑定,controller为数据,templateUrl为视图,将数据和视图绑定在一起
            templateUrl:"a.html",//templateUrl中的HTML用到了controller中的数据
        })
        .when("/b",{//根据不同的锚点值显示不同的视图,显示不同的数据
            controller:"Bcontroller",//控制器和视图一对一的绑定在一起,不同的锚点值显示不同的视图
            templateUrl:"b.html",
        })
        .when("/c",{
            controller:"Ccontroller",
            templateUrl:"c.html",
        })
        .when("/d",{
            controller:"Dcontroller",
            templateUrl:"d.html",
        });
}]);
//创建四个不同的控制器,绑定四个不同的HTML代码块(视图),根据不同的锚点值显示不同的数据内容
appModule.controller("Acontroller",["$scope",function ($scope) {
    $scope.title = "这里是Acontroller的内容";
}]);
appModule.controller("Bcontroller",["$scope",function ($scope) {
    $scope.title = "这里是Bcontroller的内容";
}]);
appModule.controller("Ccontroller",["$scope",function ($scope) {
    $scope.title = "这里是Ccontroller的内容";
}]);
appModule.controller("Dcontroller",["$scope",function ($scope) {
    $scope.title = "这里是Dcontroller的内容";
}]);