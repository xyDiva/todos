angular.module('app', ['ngRoute'])
    .controller('homeCtrl', ['$scope', function ($scope) {
        $scope.title = 'I am home';
    }])
    .controller('todoCtrl', function ($scope) {
        $scope.title = 'I am todo';
    })
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }); // 移除url中的管理路径#
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'homeCtrl'
            })
            .when('/todo', {
                templateUrl: 'todo.html',
                controller: 'todoCtrl'
            })
            .when('/cv', {
                templateUrl: 'cv.html',
                controller: 'cvCtrl'
            })
            .when('/message', {
                templateUrl: 'message.html',
                controller: 'messageCtrl'
            })
            .otherwise({
                redirectTo: '/' // it will be redirected to index when user visits undefined url address.
            });
    }]);
