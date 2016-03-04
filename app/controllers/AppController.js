(function() {
    'use strict';

    angular
      .module('irctcHK')
      .controller('AppController', AppController);

    /**
     * @ngdoc Injector
     * @name AppController
     * @private
     * @module irctcHK
     * @description
     * //Description goes here
     * @author Ideas2IT Technologies
     * @copyright
     */
    AppController.$inject = ['$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog'];

    /**
     * @ngdoc Controller
     * @name AppController
     * @module irctcHK
     * @requires
     * @description
     * //Description goes here
     * @author Ideas2IT Technologies
     * @copyright
     */
    function AppController($scope, $mdBottomSheet, $mdSidenav, $mdDialog) {
      $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
      };

      $scope.showAdd = function(ev) {
        $mdDialog.show({
            controller: 'PassengerFormController',
            controllerAs: 'pfCtrl',
            templateUrl: 'app/views/partials/passenger-form.html',
            targetEvent: ev,
          //  fullscreen : true
          })
          .then(function(answer) {
            $scope.alert = 'You said the information was "' + answer + '".';
          }, function() {
            $scope.alert = 'You cancelled the dialog.';
          });
      };
    }
})();
