var app = angular.module('app', []);
app.factory('messages', ['$http', function ($http) {
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