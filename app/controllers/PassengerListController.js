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

    vm.syncedPassengers = [];
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

    $scope.$on("update:passengersList", function($evt, param){
      getPassengers();
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


    vm.addPassengersToJourney = function(passengerId){
      var index = vm.passengers.indexOf(passengerId);
      if(index > -1){
        vm.passengers.splice(index, 1);
      }else{
        vm.passengers.push(passengerId);
      }
      DataService.addJourneyPassengers(vm.passengers, function(){
        console.log("Journey Passenger saved");
      })
    }

    vm.goToPaymentTab = function(){
      $scope.$emit("activateTab", Utils.getTabs()[2]);
    }

    function getPassengers(){
      DataService.getPassengers(function(data) {
        vm.syncedPassengers = data;
      })
    }

    function init() {
      getPassengers();
    }

    init();

  };
})();
