'use strict';

/**
 * @ngdoc directive
 * @name test1App.directive:contenteditable
 * @description
 * # contenteditable
 * Directive to replace content with custom text.
 */
angular.module('test1App')
  .directive('contenteditable', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the contenteditable directive');
      }
    };
  });
