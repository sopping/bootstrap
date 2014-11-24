'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Main App', function() {

  it('should redirect any to index.html', function() {
    browser.get('app');
    browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/index');
      });
  });


  describe('mainControllers', function() {

    beforeEach(function() {
      browser.get('app');
    });


    it('should show the query ', function() {

      var queryShow = element(by.css('#show-query')).getText();
      var query = element(by.model('query'));

      queryShow.getText().then(function(name) {
        expect(name).toBe('show: entry the query');
      });
      expect(query.getAttribute('value')).toBe('entry the query');

      query.clear();
      query.sendKeys('nexus');
      queryShow.getText().then(function(name) {
        expect(name).toBe('show: nexus');
      });
      expect(query.getAttribute('value')).toBe('nexus');
    });

  });

});
