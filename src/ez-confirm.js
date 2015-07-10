angular.module('ez.confirm', [])

  .constant('EzConfirmConfig', {
    heading: 'Confirmation Required',
    text: 'Are you sure you want to proceed?',
    html: null,
    confirmBtn: 'Yes',
    cancelBtn: 'Cancel',
  })

  .controller('EzConfirmCtrl', [
    '$scope',
    '$sce',
    '$modalInstance',
    'EzConfirmConfig',
    'config',
    function(
      $scope,
      $sce,
      $modalInstance,
      EzConfirmConfig,
      config
    ) {

    $scope.options = angular.extend({}, EzConfirmConfig);

    if (angular.isObject(config)) {
      angular.extend($scope.options, config);
    }

    if (null !== $scope.options.html && undefined !== $scope.options.html) {
      $scope.data = {
        html: $sce.trustAsHtml($scope.options.html)
      };
    }

    $scope.dismiss = $modalInstance.dismiss;

    $scope.close = $modalInstance.close;

  }])

  .factory('EzConfirm', [
    '$modal',
    function(
      $modal
    ) {

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
  }]);
