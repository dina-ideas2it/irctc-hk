(function() {
  'use strict';

  angular
    .module('irctcHK')
    .controller('JourneyController', JourneyController);

  /**
   * @ngdoc Injector
   * @name JourneyController
   * @private
   * @module irctcHK
   * @description
   * //Description goes here
   * @author Dinakaran Santhanam
   * @copyright
   */
  JourneyController.$inject = ['$scope', '$filter', '$mdSidenav', '$mdDialog', 'DataService'];

  /**
   * @ngdoc Controller
   * @name JourneyController
   * @module irctcHK
   * @requires
   * @description
   * //Description goes here
   * @author Dinakaran Santhanam
   * @copyright
   */
  function JourneyController($scope, $filter, $mdSidenav, $mdDialog, DataService) {
    var vm = this;

    vm.journey = {};

    vm.ticketTypes = [
      {
        "value" : "GN",
        "label" : "GENERAL"
      },{
        "value" : "CK",
        "label" : "TATKAL"
      },
    ]

    vm.classes = [
      {
        "value" : "2S",
        "label" : "SECOND SEATER"
      }, {
        "value" : "CC",
        "label" : "CHAIR CAR"
      }, {
        "value" : "SL",
        "label" : "SLEEPER"
      }, {
        "value" : "3A",
        "label" : "THIRD AC"
      }, {
        "value" : "2A",
        "label" : "SECOND AC"
      }, {
        "value" : "1A",
        "label" : "FIRST AC"
      }
    ]

    vm.stations = loadAll();

    function loadAll() {
      return stations.map(function(station) {
        return {
          value: station.toLowerCase(),
          display: station
        };
      });
    }

    vm.selectedItemChange = function(station) {
      console.log(vm.selectedFromStation);
      console.log(station);
    }

    vm.querySearch = function(query) {
      var results = query ? vm.stations.filter(createFilterFor(query)) : [];
      return results;
    };

    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(station) {
        return (station.value.indexOf(lowercaseQuery) >= 0);
      };
    }

    vm.saveJourney = function(){
      vm.journey.journeyDate = $filter('date')(vm.journey.boardingDate, 'dd-MM-yyyy');
      console.log(JSON.stringify(vm.journey));
      DataService.saveJourney(vm.journey);
    }

    function init() {

    }

    init();
  }
})();
