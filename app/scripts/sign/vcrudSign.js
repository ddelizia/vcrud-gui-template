'use strict';

angular.module('vcrudSign', ['vcrudSignService', 'vcrudSignDirective'])
  .controller('loginFormCtrl', ['$scope', function ($scope) {
    $scope.validationControl = {
    };

    $scope.validateForm = function() { $scope.$broadcast('validateFormEvent'); };
  }])
  .controller('registerFormCtrl', ['$scope', function ($scope) {
    $scope.test='';
  }]);

