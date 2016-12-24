"use strict";
var appModule = angular.module("app", ["ngRoute"]);
appModule.controller("appController", ["$scope", "$location","$routeParams", function($scope, $location,$routeParams) {
    //todo:{id:1,text:"hello world",completed:false}
    $scope.text = "hello wolrd";
    $scope.todos = [{ id: 1, text: "哎呀", completed: true, }, { id: 2, text: "艾斯凯梵", completed: false, }, { id: 3, text: "asldf", completed: false }];

    $scope.currentEditingId = -1;
    $scope.add = function(text) {
        $scope.todos.push({
            id: new Date().valueOf(),
            text: text,
            completed: false,
        });
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
    }
    var selectedAll = true;
    $scope.toggleAll = function() {
        for (var i = 0; i < $scope.todos.length; i++) {
            $scope.todos[i].completed = selectedAll;
        }
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
    }
    $scope.show = function() {
        for (var i = 0; i < $scope.todos.length; i++) {
            if ($scope.todos[i].completed) {
                return true;
            }
        }
        console.log(123);
        console.log($routeParams.status);
        return false;
    }
    switch($routeParams.status){
        case "active":
            $scope.filter = "active";
            break;
        case "completed":
            $scope.filter = "completed";
            break;
        default:
            $scope.filter = "default";
    }
}]);