'use strict';

/* jasmine specs for controllers go here */
describe('Main controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('mainApp'));
  //beforeEach(module('phonecatServices'));

  describe('mainController', function(){
    var scope, ctrl;
    
    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('mainController', {$scope:scope});
    }));

    it('should return "entry the query"', function() {
       expect(scope.query).toBe("entry the query");
    });
  });

});
