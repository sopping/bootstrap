'use strict';

/* Services */

var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('MainApp', ['$resource',
  function($resource){
    return $resource('main/:appId.json', {}, {
      query: {method:'GET', params:{appId:'appList'}, isArray:true}
    });
  }]);
