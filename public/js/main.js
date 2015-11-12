'use strict';

angular.module('app', ['ngRoute', 'controllers'])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }); // 移除url中的管理路径#
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            })
            .when('/todo', {
                templateUrl: 'todo.html',
                controller: 'TodoCtrl'
            })
            .when('/todo/:id', {
                templateUrl: 'todoDetail.html',
                controller: 'TodoDetailCtrl'
            })
            .when('/cv', {
                templateUrl: 'cv.html',
                controller: 'CVCtrl'
            })
            .when('/message', {
                templateUrl: 'message.html',
                controller: 'MessageCtrl'
            })
            .otherwise({
                redirectTo: '/' // it will be redirected to index when user visits undefined url address.
            });
    }]);
