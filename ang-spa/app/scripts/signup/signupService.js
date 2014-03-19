'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('signUp.service', [])
  .service('AuthService', ['SOCIAL_TYPE','FacebookService', function (SOCIAL_TYPE, FacebookService) {

    this.username = '';
    this.password = '';

    this.getSocialLoginService = function(socialType){
      switch (socialType){
      case SOCIAL_TYPE.facebook:
        return FacebookService;
      default:
        return null;
      }
    };

    this.logInViaSocial = function(socialType){
      var socialService = getSocialLoginService(socialType);
      if (socialService !== null){
        socialService.login();
      }
    };

    this.logInViaBasic = function(){

    };

    this.logOutFromSocial = function(socialType){
      var socialService = getSocialLoginService(socialType);
      if (socialService !== null){
        socialService.logout();
      }
    };

  }])
  .costant('BRD_SOCIAL',{
    'loggedIn':'socialConnected',
    'logInFailed':'socialLoginFailed',
    'logOutFailed':'socialLogoutFailed',
    'logOutSucceded': 'socialLogoutSucceded',
    'statusChanged': 'socialStatusChanged',
    'getLogInStatus': 'socialGetLogInStatus'
  })
  .costant('SOCIAL_TYPE',{
    'facebook':'facebook',
    'twitter':'twitter',
    'googlePlus':'googlePlus'
  })
  .service('AuthService',[function(){

  }])
  .service('SocialService', [function(){

    this.getLoginStatus = function(){
      console.log('Not Supported');
    };
    this.login = function(){
      console.log('Not Supported');
    };
    this.logout = function(){
      console.log('Not Supported');
    };
    this.unsubscribe = function(){
      console.log('Not Supported');
    };

    this.userData = {
      'id':null,
      'accessToken':null,
      'notAuthorized':false
    };

  }])
  .service('FacebookService', ['SocialService', '$rootScope','BRD_SOCIAL', function(SocialService, $rootScope, BRD_SOCIAL){

    this._self = angular.extend(SocialService, {});

    this.getLoginStatus = function () {
      FB.getLoginStatus(function (response) {
        $rootScope.$broadcast(BRD_SOCIAL.statusChanged,  {'status':response.status});
      }, true);
    };


    this.login = function () {
      FB.getLoginStatus(function (response) {
        switch (response.status) {
        case 'connected':
          this.userData.id = response.authResponse.userID;
          this.userData.accessToken = response.authResponse.accessToken;
          $rootScope.$broadcast(BRD_SOCIAL.loggedIn, this.userData);
          break;

        case 'not_authorized':

        case 'unknown':
          FB.login(function (response) {
            if (response.authResponse) {
              this.userData.id = response.authResponse.userID;
              this.userData.accessToken = response.authResponse.accessToken;
              this.userData.notAuthorized = true;
              $rootScope.$broadcast(BRD_SOCIAL.loggedIn, this.userData);
            } else {
              $rootScope.$broadcast(BRD_SOCIAL.logInFailed);
            }
          }, {scope:'read_stream, publish_stream, email'});
          break;

        default:
          FB.login(function (response) {
            if (response.authResponse) {
              this.userData.id = response.authResponse.userID;
              this.userData.accessToken = response.authResponse.accessToken;
              $rootScope.$broadcast(BRD_SOCIAL.loggedIn, this.userData);
              $rootScope.$broadcast(BRD_SOCIAL.getLogInStatus);
            } else {
              $rootScope.$broadcast(BRD_SOCIAL.logInFailed);
            }
          });
          break;
        }
      }, true);
    };

    this.logout = function(){
      FB.logout(function (response) {
        if (response) {
          $rootScope.$broadcast(BRD_SOCIAL.logOutSucceded);
        } else {
          $rootScope.$broadcast(BRD_SOCIAL.logOutFailed);
        }
      });
    };

    this.unsubscribe = function(){
      FB.api('/me/permissions', 'DELETE', function (response) {
        $rootScope.$broadcast(BRD_SOCIAL.getLogInStatus);
      });
    };

  }]);
