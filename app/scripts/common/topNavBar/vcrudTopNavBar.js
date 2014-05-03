'use strict';

angular.module('vcrudTopNavBar', ['mgcrea.ngStrap', 'vcrudTopNavBarDirective'])
  .controller('topNavbarController', ['$scope', '$translate', function ($scope, $translate) {
    $translate(['lang.es', 'lang.en', 'lang.it']).then(function (translations) {
      $scope.topNavBarLang = {
        selected: 'it',
        elements: [
          {value: 'it', label: '<span class="flag-icon it"></span> ' + translations['lang.it']},
          {value: 'es', label: '<span class="flag-icon es"></span> ' + translations['lang.es']},
          {value: 'en', label: '<span class="flag-icon en_UK"></span> ' + translations['lang.en']}
        ]
      };
    });
  }]);
