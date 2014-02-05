'use strict';

/**
 * @ngdoc filter
 * @name test1App.filter:hideEmails
 * @function
 * @description
 * # hideEmails
 * Filter to change your value.
 */
angular.module('test1App')
  .filter('hideEmails', function () {
    return function (input) {
      return 'hideEmails filter: ' + input;
    };
  });
