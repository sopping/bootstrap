'use strict';

/* Controllers */

var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('mainController', ['$scope', function($scope) {
    $scope.query = "entry the query";
  }]);

