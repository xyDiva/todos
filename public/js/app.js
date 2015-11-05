angular.module('app', ['ngRoute'])
    .controller('homeCtrl', ['$scope', '$templateCache', function ($scope, $templateCache) {
        $scope.title = 'I am home';
        $templateCache.put('views/home.html', '<b>Second</b> template');
    }])
    .controller('todoCtrl', function ($scope) {
        $scope.title = 'I am todo';
    })
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true); // 移除url中的管理路径#
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
