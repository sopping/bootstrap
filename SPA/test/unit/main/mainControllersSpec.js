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
    var scope, ctrl, $httpBackend;
    
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('main/appList.json').
          respond({brandName:'name', appList:[{name: 'app1'}, {name: 'app2'}]});
      scope = $rootScope.$new();
      ctrl = $controller('mainController', {$scope:scope});
    }));

    it('should create "appList" model with 2 apps', function() {
      expect(scope.apps).toBeUndefined();
      $httpBackend.flush();

      expect(scope.apps.brandName).toEqual('name');
      expect(scope.apps.appList).toEqual([{name: 'app1'}, {name: 'app2'}]);
    });
  });

  describe('appController', function(){




  });

});

