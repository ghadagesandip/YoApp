'use strict';

describe('Service: apibaseurl', function () {

  // load the service's module
  beforeEach(module('yoAppApp'));

  // instantiate service
  var apibaseurl;
  beforeEach(inject(function (_apibaseurl_) {
    apibaseurl = _apibaseurl_;
  }));

  it('should do something', function () {
    expect(!!apibaseurl).toBe(true);
  });

});
