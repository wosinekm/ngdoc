'use strict';

/**
 * @ngdoc service
 * @name test1App.someFactory
 * @description
 * # someFactory
 * Factory in the test1App.
 */
angular.module('test1App')
  .factory('someFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
