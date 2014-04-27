'use strict';

angular.module('vcrudLoginForm', ['angular-growl'])
  .controller('loginFormCtrl', ['$scope', 'growl', function ($scope, growl) {

    $scope.test='';
    $scope.addSpecialWarnMessage = function() {
      growl.addWarnMessage('This adds a warn message');
      growl.addInfoMessage('This adds a info message');
      growl.addSuccessMessage('This adds a success message');
      growl.addErrorMessage('This adds a error message');
    };

  }])
  .directive('loginForm', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/sign/componentt/loginForm.tpl.html'
    };
  });