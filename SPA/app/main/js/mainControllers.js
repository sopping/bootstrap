'use strict';

/* Controllers */

var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('mainController', ['$scope', '$http', function($scope, $http) {
    $http.get('main/appList.json').success(function(data){
    	$scope.apps = data;
    });
  }]);

mainControllers.controller('appController', ['$scope','$routeParams', function($scope, $routeParams) {
	$scope.appId = $routeParams.appId;
  }]);
