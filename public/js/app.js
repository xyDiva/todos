angular.module('app', ['ngRoute'])
    .controller('homeCtrl', function ($scope) {
        $scope.title = 'I am home';
    })
    .controller('todoCtrl', function ($scope) {
        $scope.title = 'I am todo';
    })
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true); // �Ƴ�url�еĹ���·��#
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            })
            .when('/todo', {
                templateUrl: 'views/todo.html',
                controller: 'todoCtrl'
            })
            .when('/cv', {
                templateUrl: 'views/cv.html',
                controller: 'cvCtrl'
            })
            .when('/message', {
                templateUrl: 'views/message.html',
                controller: 'messageCtrl'
            })
            .otherwise({
                redirectTo: '/' // it will be redirected to index when user visits undefined url address.
            });
    }]);
