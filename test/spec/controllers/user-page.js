'use strict';

describe('Controller: UserPageCtrl', function () {

  // load the controller's module
  beforeEach(module('test1App'));

  var UserPageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserPageCtrl = $controller('UserPageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
