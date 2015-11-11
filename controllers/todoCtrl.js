var app = angular.module('app', []);

app.controller('TodoCtrl', ['$scope', 'todos', function ($scope, todos) {
    $scope.editing = [];
    todos.getTodos().success(function (arr) {
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
        todos.addTodo(todo).success(function (r) {
            alert('added successfully');
            $scope.todos.unshift(todo);
            $scope.newTodo = ''; // clear textbox
        })
    };

    $scope.update = function (index) {
        var todo = $scope.todos[index];
        todos.updateTodo(todo);
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
        todos.deleteTodo(todo).success(function (r) {
            alert('delete successfully');
            $scope.todos.splice(index, 1);
        })
    }
}]);

