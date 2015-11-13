'use strict';

angular.module('app', ['ngRoute', 'controllers','door3.css'])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }); // 移除url中的管理路径#
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                css:'css/index.css'
            })
            .when('/todo', {
                templateUrl: 'todo.html',
                controller: 'TodoCtrl',
                css:'css/todo.css'
            })
            .when('/todo/:id', {
                templateUrl: 'todoDetail.html',
                controller: 'TodoDetailCtrl',
                css:'css/todo.css'
            })
            .when('/cv', {
                templateUrl: 'cv.html',
                css:'css/cv.css'
            })
            .when('/message', {
                templateUrl: 'message.html',
                controller: 'MessageCtrl',
                css:'css/message.css'
            })
            .otherwise({
                redirectTo: '/' // it will be redirected to index when user visits undefined url address.
            });
    }]);
