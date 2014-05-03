'use strict';

angular.module('vcrudTopNavBarDirective', [])
  .directive('topNavBar', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/component/common/topNavBar.tpl.html'
    };
  });
