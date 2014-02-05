'use strict';

describe('Filter: hideEmails', function () {

  // load the filter's module
  beforeEach(module('test1App'));

  // initialize a new instance of the filter before each test
  var hideEmails;
  beforeEach(inject(function ($filter) {
    hideEmails = $filter('hideEmails');
  }));

  it('should return the input prefixed with "hideEmails filter:"', function () {
    var text = 'angularjs';
    expect(hideEmails(text)).toBe('hideEmails filter: ' + text);
  });

});
