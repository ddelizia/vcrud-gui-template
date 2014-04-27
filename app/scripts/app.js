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
        controller: 'vcrudSignLoginCtrl'
      })
      .when('/login', {
        templateUrl: 'views/signup/login.html',
        controller: 'vcrudSignLoginCtrl'
      })
      .when('/register', {
        templateUrl: 'views/signup/register.html',
        controller: 'vcrudSignLoginCtrl'
      })
      .when('/blank', {
        templateUrl: 'views/blank.html',
        controller: 'vcrudSignLoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
