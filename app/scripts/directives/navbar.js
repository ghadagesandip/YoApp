'use strict';

/**
 * @ngdoc directive
 * @name yoAppApp.directive:navBar
 * @description
 * # navBar
 */
angular.module('yoAppApp')
  .directive('navBar', function () {
    return {
      templateUrl: 'views/nav-bar.html',
      restrict: 'E',
      link  : function(scope,elem,attr){
          $(elem).click(function(e){
              $(elem).find('li').removeClass('active');
              $(e.target).parent('li').addClass('active');
          });
      }

    };
  });
