'use strict';

/* App Module */

var mainApp = angular.module('mainApp', [
  'ngRoute',

  'mainControllers',
  'mainDirectives',
  //'mainFilters',
  //'mainServices'
]);

mainApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'main/template/main.html',
        controller: 'mainController'
      }).
      when('/:appId*',{
        templateUrl: function($routeParams){
          return $routeParams.appId + '/template/main.html';
        },
        controller: 'appController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
