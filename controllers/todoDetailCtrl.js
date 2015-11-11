var app = angular.module('app', []);

app.controller('TodoDetailCtrl', [
    '$scope',
    '$routeParams',
    'todos',
    '$location',
    function ($scope, $routeParams, todos, $location) {
        todos.getTodo($routeParams.id).success(function (todo) {
            console.log(todo);
            $scope.todo = todo;
        });

//                $scope.todo = todos.get({id: $routeParams.id});

        $scope.update = function () {
            todos.update({id: $scope.todo._id}, $scope.todo, function () {
                $location.url('/');
            });
        };

        $scope.remove = function () {
            todos.remove({id: $scope.todo._id}, function () {
                $location.url('/');
            });
        }
    }]);
