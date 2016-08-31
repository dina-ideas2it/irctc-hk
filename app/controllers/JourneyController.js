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
  JourneyController.$inject = ['$scope', '$filter', '$mdSidenav', '$mdDialog', 'DataService', 'Utils'];

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
  function JourneyController($scope, $filter, $mdSidenav, $mdDialog, DataService, Utils) {
    var vm = this;

    vm.journey = {};

    vm.ticketTypes = [
      {
        'value' : 'GN',
        'label' : 'GENERAL'
      },{
        'value' : 'CK',
        'label' : 'TATKAL'
      },
    ]

    vm.classes = [
      {
        'value' : '2S',
        'label' : 'SECOND SEATER'
      }, {
        'value' : 'CC',
        'label' : 'CHAIR CAR'
      }, {
        'value' : 'SL',
        'label' : 'SLEEPER'
      }, {
        'value' : '3A',
        'label' : 'THIRD AC'
      }, {
        'value' : '2A',
        'label' : 'SECOND AC'
      }, {
        'value' : '1A',
        'label' : 'FIRST AC'
      }
    ]

    vm.inBank = [{'value':'-1','label':'Select Bank'},{'value':'1','label':'State Bank of India'},{'value':'10','label':'State Bank of India and Associates'},{'value':'22','label':'Federal Bank'},{'value':'29','label':'Indian Bank'},{'value':'28','label':'Union Bank of India'},{'value':'31','label':'Andhra Bank'},{'value':'34','label':'Punjab National Bank '},{'value':'35','label':'Allahabad Bank'},{'value':'38','label':'Vijaya Bank'},{'value':'39','label':'AXIS Bank'},{'value':'36','label':'HDFC Bank'},{'value':'37','label':'Bank of Baroda'},{'value':'42','label':'Karnataka Bank'},{'value':'40','label':'Karur Vysya Bank'},{'value':'46','label':'Kotak Mahindra Bank'},{'value':'47','label':'INGVysya Bank'},{'value':'44','label':'ICICI Bank '},{'value':'45','label':'IndusInd Bank'},{'value':'51','label':'IMPS'},{'value':'50','label':'Central Bank of India'},{'value':'48','label':'Bank of India'},{'value':'54','label':'Syndicate Bank'},{'value':'53','label':'Bank of Maharashatra'},{'value':'52','label':'IDBI Bank'},{'value':'56','label':'Corporation Bank'}];
    vm.pg = [{'value':'-1','label':'Select Bank'},{'value':'4','label':'Visa/Master Card(Powered By ICICI BANK)'},{'value':'17','label':'Visa/Master Card(Powered By CITI BANK)'},{'value':'21','label':'Visa/Master Card(Powered By HDFC BANK)'},{'value':'27','label':'American Express'},{'value':'30','label':'Visa/Master Card(Powered By AXIS BANK)'},{'value':'58','label':'RuPay Card (Powered by Kotak Bank)'}];
    vm.debit = [{'value':'-1','label':'Select Bank'},{'value':'3','label':'State Bank of India'},{'value':'9','label':'Punjab National Bank'},{'value':'15','label':'Indian Bank'},{'value':'16','label':'Union Bank of India '},{'value':'19','label':'Bank of India'},{'value':'25','label':'Andhra Bank'},{'value':'26','label':'Canara Bank'},{'value':'32','label':'CITI Bank'},{'value':'41','label':'ICICI Bank'},{'value':'57','label':'HDFC Bank'},{'value':'66','label':'AXIS Bank'}];

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
      Utils.showToast('Journey Details saved');
      $scope.$emit('activateTab', Utils.getTabs()[1]);
    }

    function init() {

    }

    init();
  }
})();
