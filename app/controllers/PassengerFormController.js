(function() {
  'use strict';

  angular
    .module('irctcHK')
    .controller('PassengerFormController', PassengerFormController);

  /**
   * @ngdoc Injector
   * @name ControllerName
   * @private
   * @module ModuleName
   * @description
   * //Description goes here
   * @author Ideas2IT Technologies
   * @copyright
   */
  PassengerFormController.$inject = ['$scope', '$mdDialog', 'DataService', 'Utils'];

  /**
   * @ngdoc Controller
   * @name ControllerName
   * @module ModuleName
   * @requires
   * @description
   * //Description goes here
   * @author Ideas2IT Technologies
   * @copyright
   */
  function PassengerFormController($scope, $mdDialog, DataService, Utils) {
    var vm = this;

    vm.passengers = [];
    vm.berthTypes = [{
      "value": " ",
      "label": "No Preference"
    }, {
      "value": "LB",
      "label": "LOWER"
    }, {
      "value": "MB",
      "label": "MIDDLE"
    }, {
      "value": "UB",
      "label": "UPPER"
    }, {
      "value": "SIDE LOWER",
      "label": "SL"
    }, {
      "value": "SIDE UPPER",
      "label": "SU"
    }, {
      "value": "WINDOW SIDE",
      "label": "WS"
    }];

    vm.savePassengers = function() {
      var passengers = angular.fromJson(angular.toJson(vm.passengers));
      for(var i=0;i<passengers.length;i++){
        var passenger = Utils.validatePassenger(passenger[i]);
      }

    //  DataService.addPassenger();
      $mdDialog.hide();
    };

    vm.addPassenger = function() {
      var passenger = {
        "name": "",
        "gender": "",
        "age": "",
        "berthType": " "
      };
      vm.passengers.push(passenger);
    };

    vm.cancel = function(){
      $mdDialog.hide();
    }

    var init = function(){
      vm.berthTypes = DataService.getBerthTypes();
      console.log(vm.berthTypes);
      vm.addPassenger();
    }
    init();


  };
})();
