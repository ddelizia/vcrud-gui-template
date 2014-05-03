'use strict';

angular.module('vcrudSignDirective', [])
  .directive('loginForm', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/sign/component/loginForm.tpl.html'
    };
  })
  .directive('registerForm', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/sign/component/registerForm.tpl.html'
    };
  });