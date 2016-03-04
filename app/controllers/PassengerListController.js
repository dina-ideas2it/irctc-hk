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
  PassengerListController.$inject = ['$scope', 'DataService', 'Utils'];

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
  function PassengerListController($scope, DataService, Utils) {
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


    function init() {
      DataService.getPassengers(function(data) {
        vm.passengers = data;
      })
    }

    init();

  };
})();
