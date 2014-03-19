'use strict';

angular.module('angSpaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/signup/login.html',
        controller: 'MainCtrl'
      })
      .when('/register', {
        templateUrl: 'views/signup/register.html',
        controller: 'MainCtrl'
      })
      .when('/blank', {
        templateUrl: 'views/blank.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(['$rootScope', '$window',
    function($rootScope, $window){
      $window.fbAsyncInit = function () {
        FB.init({
          appId:'106734969496571',
          status:true,
          cookie:true,
          xfbml:true
        });

        FB.Event.subscribe('auth.statusChange', function(response) {
          $rootScope.$broadcast('fb_statusChange', {'status': response.status});
        });
      };

      (function (d) {
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement('script');
        js.id = id;
        js.async = true;
        js.src = '//connect.facebook.net/en_US/all.js';
        ref.parentNode.insertBefore(js, ref);
      }(document));

    }]);
