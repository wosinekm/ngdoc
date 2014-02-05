'use strict';

/**
 * @ngdoc function
 * @name test1App.controller:UserPageCtrl
 * @description
 * # UserPageCtrl
 * Controller of the test1App
 */
angular.module('test1App')
  .controller('UserPageCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
