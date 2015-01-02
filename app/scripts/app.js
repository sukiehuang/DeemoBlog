'use strict';

/**
 * @ngdoc overview
 * @name deemoBlogApp
 * @description
 * # deemoBlogApp
 *
 * Main module of the application.
 */
var deemoApp = angular.module('deemoBlogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);


deemoApp.config(['$routeProvider','$locationProvider','$sceProvider',function ($routeProvider,$locationProvider,$sceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/list',{
        templateUrl:'views/route/list.html',
        controller:'RouteListCtrl'
      })
      .when('/detail',{
        templateUrl:'views/route/detail.html',
        controller:'RouteDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }]);
