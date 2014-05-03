'use strict';

angular.module('vcrudValidatedInputDirective', [])
  .directive('validatedInput',['$tooltip', function($tooltip) {
    return {
      restrict: 'E',
      scope:{
        feedbackType: '=',
        label:'@',
        model:'='
      },
      templateUrl: 'views/component/common/validatedInput.tpl.html',
      link: function(scope, element, attrs){
        var inputElement = element.find('.form-control');
        var formGroup = element.find('.form-group');
        var formLabel = element.find('.control-label');
        var formControlFeedback = element.find('.form-control-feedback');

        inputElement.attr('name',attrs.name);
        inputElement.attr('required',attrs.required);
        inputElement.attr('ng-required',attrs.ngRequired);
        //inputElement.attr('ng-minlength',attrs.ngMinlength);
        inputElement.attr('ng-maxlength',attrs.ngMaxlength);
        inputElement.attr('ng-pattern',attrs.ngPattern);
        inputElement.attr('ng-change',attrs.ngChange);

        inputElement.attr('type',attrs.type);
        inputElement.attr('id',attrs.id);
        inputElement.attr('name',attrs.id);
        inputElement.attr('placeholder',attrs.placeholder);

        formLabel.attr('for',attrs.id);
        formLabel.html(scope.label);

        function calculateFeedback(feedbackType){
          function removeAllFeedbackClasses(){
            formGroup.removeClass('has-feedback');
            formGroup.removeClass('has-success');
            formGroup.removeClass('has-warning');
            formGroup.removeClass('has-error');

            formControlFeedback.removeClass('glyphicon-ok');
            formControlFeedback.removeClass('glyphicon-warning-sign');
            formControlFeedback.removeClass('glyphicon-remove');
          }

          removeAllFeedbackClasses();

          if (feedbackType === 'SUCCESS'){
            formGroup.addClass('has-feedback');
            formGroup.addClass('has-success');
            formControlFeedback.addClass('glyphicon-ok');
          }else if (feedbackType === 'WARNING'){
            formGroup.addClass('has-feedback');
            formGroup.addClass('has-warning');
            formControlFeedback.addClass('glyphicon-warning-sign');
          }else if (feedbackType === 'ERROR'){
            formGroup.addClass('has-feedback');
            formGroup.addClass('has-error');
            formControlFeedback.addClass('glyphicon-remove');
          }
        }

        //$compile(inputElement);

        scope.$watch('feedbackType', function(newValue,oldValue) {
          console.log(newValue);
          calculateFeedback(newValue);
        }, true);

      }
    };
  }]);
