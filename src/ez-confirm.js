angular.module('ez.confirm', [])

  .constant('EzConfirmConfig', {
    heading: 'Confirmation Required',
    text: 'Are you sure you want to proceed?',
    confirmBtn: 'Yes',
    cancelBtn: 'Cancel',
  })

  .controller('EzConfirmCtrl', ['$scope', '$modalInstance', 'EzConfirmConfig', 'config', function($scope, $modalInstance, EzConfirmConfig, config) {

    $scope.options = angular.extend({}, EzConfirmConfig);

    if (angular.isObject(config)) {
      $scope.options = angular.extend({}, config);
    }

    $scope.dismiss = $modalInstance.dismiss;

    $scope.close = $modalInstance.close;

  }])

  .factory('EzConfirm', ['$modal', function($modal) {
    return {
      create: function(config) {
        return $modal.open({
          templateUrl: 'ez-confirm-tpl.html',
          controller: 'EzConfirmCtrl',
          resolve: {
            config: function() {
              return config;
            }
          }
        }).result;
      }
    };
  }])
;
