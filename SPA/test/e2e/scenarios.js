'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Main App', function() {

  it('should redirect empty to main.html', function() {
    browser.get('app');
    browser.getLocationAbsUrl().then(function(url) {
      expect(url.split('#')[1]).toBe('/');
    });

    browser.get('app/#/appId');
    browser.getLocationAbsUrl().then(function(url){
      expect(url.split('#')[1]).toBe('/appId');
    });
  });


  describe('mainControllers', function() {

    beforeEach(function() {
      browser.get('app');
    });



  });

});
