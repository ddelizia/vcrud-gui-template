'use strict';

angular.module('vcrudSign', ['vcrudSignService', 'vcrudSignDirective'])
  .controller('loginFormCtrl', ['$scope', function ($scope) {

  }])
  .controller('registerFormCtrl', ['$scope', function ($scope) {
    $scope.test='';
  }]);

