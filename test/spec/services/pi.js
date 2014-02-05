'use strict';

describe('Service: pi', function () {

  // load the service's module
  beforeEach(module('test1App'));

  // instantiate service
  var pi;
  beforeEach(inject(function (_pi_) {
    pi = _pi_;
  }));

  it('should do something', function () {
    expect(!!pi).toBe(true);
  });

});
