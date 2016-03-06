(function() {
  'use strict';

  angular
    .module('irctcHK')
    .controller('PassengerListController', PassengerListController);

  /**
   * @ngdoc Injector
   * @name PassengerListController
   * @private
   * @module irctcHK
   * @description
   * //Description goes here
   * @author Dinakaran Santhanam
   * @copyright
   */
  PassengerListController.$inject = ['$scope', '$mdDialog', 'DataService', 'Utils'];

  /**
   * @ngdoc Controller
   * @name PassengerListController
   * @module irctcHK
   * @requires
   * @description
   * //Description goes here
   * @author Dinakaran Santhanam
   * @copyright
   */
  function PassengerListController($scope, $mdDialog, DataService, Utils) {
    var vm = this;

    vm.passengers = [];

    vm.genders = {
      "F": "Female",
      "M": "Male"
    }

    vm.berths = {
      " ": "No Preference",
      "LB": "Lower",
      "MB": "Middle",
      "UB": "Upper",
      "SL": "Side Lower",
      "SU": "Side Upper",
      "WS": "Window"
    };

    $scope.$on("fabAction:passengers", function($evt, param){
      vm.showPassengersForm(param);
    });

    vm.showPassengersForm = function(ev) {
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

    function init() {
      DataService.getPassengers(function(data) {
        vm.passengers = data;
      })
    }

    init();

  };
})();
