'use strict';

/**
 * @ngdoc service
 * @name test1App.someProvider
 * @description
 * # someProvider
 * Provider in the test1App.
 */
angular.module('test1App')
  .provider('someProvider', function () {

    // Private variables
    var salutation = 'Hello';

    // Private constructor
    function Greeter() {
      this.greet = function () {
        return salutation;
      };
    }

    // Public API for configuration
    this.setSalutation = function (s) {
      salutation = s;
    };

    // Method for instantiating
    this.$get = function () {
      return new Greeter();
    };
  });
