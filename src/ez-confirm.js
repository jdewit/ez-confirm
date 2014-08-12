angular.module('ez.confirm', ['ui.bootstrap'])

  .constant('EzConfirmConfig', {
    heading: 'Confirm',
    text: 'Are you sure you want to do this?'
  })

  .controller('EzConfirmCtrl', ['$scope', '$modalInstance', 'heading', 'text', function($scope, $modalInstance, heading, text) {

    $scope.cancel = function() {
      $modalInstance.dismiss();
    };

    $scope.ok = function() {
      $modalInstance.close();
    };

    $scope.heading =  heading;

    $scope.text = text;

  }])

  .factory('EzConfirm', ['$modal', 'EzConfirmConfig', function($modal, EzConfirmConfig) {
    return {
      create: function(param1, param2, param3) {
        var heading = EzConfirmConfig.heading,
            text = EzConfirmConfig.text,
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
          controller: 'EzConfirmCtrl',
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
