var app = angular.module('app', []);

app.controller('messageCtrl', function ($scope) {
    messages.getMessages().success(function (arr) {
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

        todos.addTodo(todo).success(function (r) {
            alert('added successfully');
            $scope.todos.unshift(todo);
            $scope.newTodo = ''; // clear textbox
        })
    };
});
