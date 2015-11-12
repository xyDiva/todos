'use strict';

var services = angular.module('services',[]);

services.factory('TodoService', ['$http', function ($http) {
    var path = '/api/todo';
    var todos = {};

    todos.getTodos = function () {
        return $http.get(path);
    };
    todos.addTodo = function (params) {
        return $http.post(path, params);
    };
    todos.getTodo = function (id) {
        return $http.get(path + '/' + id);
    };
    todos.updateTodo = function (params) {
        return $http.put(path + '/' + params._id, params);
    };
    todos.deleteTodo = function (params) {
        return $http.delete(path + '/' + params._id);
    };
    return todos;
}]);

services.factory('MessageService', ['$http', function ($http) {
    var path = '/api/message';
    var messages = {};

    messages.getMessages = function () {
        return $http.get(path);
    };

    messages.add = function () {
        return $http.post();
    };

    return messages;
}]);