'use strict';

/**
 * @ngdoc function
 * @name test1App.decorator:Http
 * @description
 * # HttpCtrl
 * Decorator of the test1App
 */
angular.module('test1App')
    .config(function ($provide) {
        $provide.decorator('$http', function ($delegate) {
            // decorate the $delegate
            return $delegate;
        });
    });
