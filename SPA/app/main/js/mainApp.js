'use strict';

/* App Module */

var mainApp = angular.module('mainApp', [
  'ngRoute',

  'mainControllers',
  //'mainFilters',
  //'mainServices'
]);

mainApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/index', {
        templateUrl: 'main/template/main.html',
        controller: 'mainController'
      }).
      otherwise({
        redirectTo: '/index'
      });
  }]);
