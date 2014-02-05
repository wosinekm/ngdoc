'use strict';

describe('Service: someFactory', function () {

  // load the service's module
  beforeEach(module('test1App'));

  // instantiate service
  var someFactory;
  beforeEach(inject(function (_someFactory_) {
    someFactory = _someFactory_;
  }));

  it('should do something', function () {
    expect(!!someFactory).toBe(true);
  });

});
