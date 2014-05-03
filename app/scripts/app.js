'use strict';

angular.module('vcrudGuiTemplateApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'mgcrea.ngStrap',
  'vcrudTranslator',
  'vcrudGuiTemplateApp',
  'vcrudBasicComponents',
  'vcrudSign'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'loginFormCtrl'
      })
      .when('/login', {
        templateUrl: 'views/sign/login.html',
        controller: 'loginFormCtrl'
      })
      .when('/register', {
        templateUrl: 'views/sign/register.html',
        controller: 'registerFormCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
