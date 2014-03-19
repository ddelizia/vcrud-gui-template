'use strict';

angular.module('signUp.ctrl', [])
  .controller('GenericController', ['$scope', '$rootScope', 'BRD_SOCIAL', function($scope, $rootScope, BRD_SOCIAL){

    $rootScope.$on(BRD_SOCIAL.statusChanged, function (event, args) {
      $rootScope.fbStatus = args.status;
      $rootScope.$apply();
    });

    $rootScope.$on(BRD_SOCIAL.getLogInStatus, function () {
      FacebookService.getLoginStatus();
    });

    $rootScope.$on(BRD_SOCIAL.logInFailed, function () {
      //console.log("fb_login_failed");
    });
    $rootScope.$on(BRD_SOCIAL.logOutSucceded, function () {
      //console.log("fb_logout_succeded");
    });
    $rootScope.$on(BRD_SOCIAL.logOutFailed, function () {
      //console.log("fb_logout_failed!");
    });

    $rootScope.$on(BRD_SOCIAL.loggedIn, function (event, args) {
      $scope.socialData = args;
    });

  }])
  .controller('Login', ['$scope', function($scope){
    $scope.danilo='test';
  }])
  .controller('LoginBoxCtrl', ['$scope', '$rootScope' ,'LoginFactory', 'FacebookService', function($scope, $rootScope, LoginFactory, FacebookService){

    $scope.signin = LoginFactory;

    $rootScope.$on("fb_statusChange", function (event, args) {
      $rootScope.fb_status = args.status;
      $rootScope.$apply();
    });
    $rootScope.$on("fb_get_login_status", function () {
      FacebookService.getLoginStatus();
    });
    $rootScope.$on("fb_login_failed", function () {
      console.log("fb_login_failed");
    });
    $rootScope.$on("fb_logout_succeded", function () {
      console.log("fb_logout_succeded");
      $rootScope.id = "";
    });
    $rootScope.$on("fb_logout_failed", function () {
      console.log("fb_logout_failed!");
    });

    $rootScope.$on("fb_connected", function (event, args) {
      $scope.facebook = args;
    });

    $scope.login = function () {
      FacebookService.login();
    };

    $scope.logout = function () {
      FacebookService.logout();
    };

    $scope.getInfo = function () {
      alert($scope.facebook.facebook_id);

    };


  }])
  .controller('SignupBoxCtrl', ['$scope', function($scope){

  }]);