angular.module('ez.confirm', ['ui.bootstrap'])

  .constant('ezConfirmConfig', {
    heading: 'Confirm',
    text: 'Are you sure you want to do this?'
  })

  .controller('ezConfirmCtrl', ['$scope', '$modalInstance', 'heading', 'text', function($scope, $modalInstance, heading, text) {

    $scope.cancel = function() {
      $modalInstance.dismiss();
    };

    $scope.ok = function() {
      $modalInstance.close();
    };

    $scope.heading =  heading;

    $scope.text = text;

  }])

    .directive('focusMe', function($timeout) {
        return {
            scope: { trigger: '@focusMe' },
            link: function(scope, element) {
                scope.$watch('trigger', function(value) {
                    if(value === 'true') {
                        $timeout(function() {
                            element[0].focus();
                        });
                    }
                });
            }
        };
    })

    .directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind('keydown keypress', function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.ngEnter);
                    });
                    event.preventDefault();
                }
            });
        };
    })

  .factory('ezConfirm', ['$modal', 'ezConfirmConfig', function($modal, ezConfirmConfig) {
    return {
      create: function(param1, param2, param3) {
        var heading = ezConfirmConfig.heading,
            text = ezConfirmConfig.text,
            callback = false;

        if (typeof param1 === 'function') {
          callback = param1;
        } else if (typeof param2 === 'function')  {
          text = param1;
          callback = param2;
        } else {
          heading = param1;
          text = param2;
          callback = param3;
        }

        $modal.open({
          templateUrl: 'ez-confirm-tpl.html',
          controller: 'ezConfirmCtrl',
          resolve: {
            heading: function() {
              return heading;
            },
            text: function() {
              return text;
            }
          }
        }).result.then(function() {
          callback();
        });
      }
    };

  }])

;
