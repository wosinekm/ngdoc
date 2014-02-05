'use strict';

describe('Service: frequence', function () {

  // load the service's module
  beforeEach(module('test1App'));

  // instantiate service
  var frequence;
  beforeEach(inject(function (_frequence_) {
    frequence = _frequence_;
  }));

  it('should do something', function () {
    expect(!!frequence).toBe(true);
  });

});
