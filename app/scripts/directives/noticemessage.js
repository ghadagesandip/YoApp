'use strict';

/**
 * @ngdoc directive
 * @name yoAppApp.directive:noticeMessage
 * @description
 * # noticeMessage
 */
angular.module('yoAppApp')
  .directive('noticeMessage', function () {
    return {
      template: '<div data-ng-show="message" class="alert" ng-class="{\'alert-danger\':danger,\'alert-success\':success}" role="alert" data-ng-bind="message"></div>',
      restrict: 'E',
      scope:{},
      link: function postLink(scope, element, attrs) {

      }
    };
  });
