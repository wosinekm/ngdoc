'use strict';

/**
 * @ngdoc overview
 * @name test1App
 * @description
 * # test1App
 *
 * Main module of the application.
 */
angular.module('test1App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
