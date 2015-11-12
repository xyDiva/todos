'use strict';

var controller = angular.module('controllers', ['services']);

controller.controller('HomeCtrl', function ($scope) {
    $scope.title = 'this is home';
    $scope.cssFiles = ['index'];
    console.log($scope.title);
});

controller.controller('TodoCtrl', ['$scope', 'TodoService', function ($scope, TodoService) {
    $scope.editing = [];
    TodoService.getTodos().success(function (arr) {
        $scope.todos = arr;
    });

    $scope.add = function () {
        var todo = {};
        if ($scope.newTodo) {
            todo.name = $scope.newTodo;
            todo.completed = false;
        }
        else {
            alert('name required...');
            return false;
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
            console.log(todo);
            $scope.todo = todo;
        });

//                $scope.todo = todos.get({id: $routeParams.id});

        $scope.update = function () {
            TodoService.update({id: $scope.todo._id}, $scope.todo, function () {
                $location.url('/');
            });
        };

        $scope.remove = function () {
            TodoService.remove({id: $scope.todo._id}, function () {
                $location.url('/');
            });
        }
    }]);

controller.controller('MessageCtrl', ['$scope', 'MessageService', function ($scope, messageService) {
    messageService.getMessages().success(function (arr) {
        $scope.messages = arr;
    });
    $scope.add = function () {
        var message = $scope.message;
        if (!message.name) {
            alert('name required');
        }
        else if (!message.email) {
            alert('email required');
        }
        else if (!message.content) {
            alert('content required');
        }
    };
}]);

controller.controller('CVCtrl', ['$scope', function ($scope) {
    $scope.title = 'this is cv';
}]);