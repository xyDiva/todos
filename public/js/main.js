'use strict';

var app = angular.module('app', ['ngRoute', 'controllers', 'door3.css', 'ui.bootstrap']);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    // 移除url中的管理路径#
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
        .when('/', {
            templateUrl: '/views/home.html',
            css: '/css/index.css'
        })
        .when('/todo', {
            templateUrl: '/views/todo.html',
            controller: 'TodoCtrl',
            css: '/css/todo.css'
        })
        .when('/todo/:id', {
            templateUrl: '/views/todoDetail.html',
            controller: 'TodoDetailCtrl',
            css: '/css/todo.css'
        })
        .when('/cv', {
            templateUrl: '/views/cv.html',
            css: '/css/cv.css'
        })
        .when('/message', {
            templateUrl: '/views/message.html',
            controller: 'MessageCtrl',
            css: '/css/message.css'
        })
        .otherwise({
            redirectTo: '/' // it will be redirected to index when user visits undefined url address.
        });
}]);
