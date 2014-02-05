'use strict';

describe('Service: someProvider', function () {

  // load the service's module
  beforeEach(module('test1App'));

  // instantiate service
  var someProvider;
  beforeEach(inject(function (_someProvider_) {
    someProvider = _someProvider_;
  }));

  it('should do something', function () {
    expect(!!someProvider).toBe(true);
  });

});
