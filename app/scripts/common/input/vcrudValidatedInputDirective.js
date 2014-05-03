'use strict';

angular.module('vcrudValidatedInputDirective', [])
  .directive('validatedInput', function() {
    return {
      restrict: 'A',
      scope:{
        feedbackType: '@',
        label:'@',
        formValidation:'@',
        formControl:'='
      },
      link: function(scope, element, attrs){
        var inputElement = element;

        inputElement.wrap('<div class="form-group"></div>');
        var formGroup = inputElement.parent();


        inputElement.before('<label class="control-label"></label>');
        var formLabel = inputElement.prev();
        formLabel.attr('for',attrs.id);
        formLabel.html(scope.label);


        inputElement.after('<span class="glyphicon form-control-feedback"></span>');
        var formControlFeedback = inputElement.next();

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

        //$compile(formGroup)(scope);
        //$compile(formLabel)(scope);

        // when model change, update our view (just update the div content)
        calculateFeedback(scope.feedbackType);

        scope.internalControl = scope.formControl || {};
        scope.$on('validateFormEvent', function(event, msg) {
          if(scope.formValidation==='true'){
            calculateFeedback('SUCCESS');
          } else{
            calculateFeedback('ERROR');
          }
        });


      }
    };
  });
