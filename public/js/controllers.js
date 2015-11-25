'use strict';

var controller = angular.module('controllers', ['services']);

controller.controller('MainCtrl', function ($scope, $location) {
    $scope.$location = $location;
});

controller.controller('TodoCtrl', ['$scope', 'TodoService', function ($scope, TodoService) {
    $scope.editing = [];
    TodoService.getTodos().success(function (arr) {
        $scope.todos = arr;
    });

    $scope.add = function () {
        var todo = {};
        if (!$scope.newTodo) {
            alert('name required');
            return false;
        }
        else {
            todo.name = $scope.newTodo;
            todo.completed = false;
        }
        TodoService.addTodo(todo).success(function (r) {
            alert('added successfully');
            $scope.todos.unshift(todo);
            $scope.newTodo = ''; // clear textbox
        })
    };

    $scope.update = function (index) {
        var todo = $scope.todos[index];
        TodoService.updateTodo(todo);
        $scope.editing[index] = false;
    };

    $scope.edit = function (index) {
        $scope.editing[index] = angular.copy($scope.todos[index]);
    };

    $scope.cancel = function (index) {
        $scope.todos[index] = angular.copy($scope.editing[index]);
        $scope.editing[index] = false;
    };

    $scope.remove = function (index) {
        var todo = $scope.todos[index];
        TodoService.deleteTodo(todo).success(function (r) {
            alert('delete successfully');
            $scope.todos.splice(index, 1);
        })
    }
}]);

controller.controller('TodoDetailCtrl', [
    '$scope',
    '$routeParams',
    '$location',
    'TodoService',
    function ($scope, $routeParams, $location, TodoService) {
        TodoService.getTodo($routeParams.id).success(function (todo) {
            $scope.todo = todo;
        });

        $scope.update = function () {
            TodoService.updateTodo($scope.todo, function () {
                $location.url('/');
            });
        };

        $scope.remove = function () {
            TodoService.deleteTodo({id: $scope.todo._id}, function () {
                $location.url('/');
            });
        }
    }]);

controller.controller('MessageCtrl', ['$scope', 'MessageService', function ($scope, MessageService) {
    // list of messages
    MessageService.getMessages().success(function (arr) {
        for (var i in arr) {
            var item = arr[i],
                time = item.time;
            item.time = Tool.convertDate(time);
        }
        $scope.messages = arr;
    });

    // leave a message
    $scope.add = function () {
        var message = $scope.message || {};
        if (!message.name) {
            alert('name required!');
            return false;
        }
        else if (!message.email) {
            alert('email required');
            return false;
        }
        else if (!message.content) {
            alert('content required');
            return false;
        }
        MessageService.addMessage(message).success(function () {
            alert('added successfully');
            message.time = Tool.convertDate(new Date());
            $scope.messages.push(message);
            $scope.message = {}; // clear textbox
        });
    };
}]);