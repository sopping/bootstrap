'use strict';

/* Directives */
angular.module('mainDirectives', [])
    .directive('mainHeader', function() {
        return {
            restrict: 'E',
            scope: {
                apps : "=apps"
            },
            transclude: true,
            templateUrl: 'main/template/mainHeader.html',
            link : function(scope, element, attrs){
                scope.buildAppLiUrl = function(isMultiple){
                    return isMultiple ? "main/template/multiAppLi.html" : "main/template/singleAppLi.html";
                }
            }
        };
    });
