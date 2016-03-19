(function() {
  'use strict';

  angular
    .module('irctcHK')
    .controller('PaymentInfoController', PaymentInfoController);

  /**
   * @ngdoc Injector
   * @name PaymentInfoController
   * @private
   * @module irctcHK
   * @description
   * //Description goes here
   * @author Dinakaran Santhanam
   * @copyright
   */
  PaymentInfoController.$inject = ['$scope', '$filter', '$mdSidenav', '$mdDialog', 'DataService'];

  /**
   * @ngdoc Controller
   * @name PaymentInfoController
   * @module irctcHK
   * @requires
   * @description
   * //Description goes here
   * @author Dinakaran Santhanam
   * @copyright
   */
  function PaymentInfoController($scope, $filter, $mdSidenav, $mdDialog, DataService) {
    var vm = this;

    vm.journey = {};

    vm.cardTypes = [{
        "value" : "VISA",
        "label" : "VISA"
    },{
        "value" : "MC",
        "label" : "MASTER"
    }];

    vm.months = [{"value":"mm","label":"mm"},{"value":"01","label":"01 (Jan)"},{"value":"02","label":"02 (Feb)"},{"value":"03","label":"03 (Mar)"},{"value":"04","label":"04 (Apr)"},{"value":"05","label":"05 (May)"},{"value":"06","label":"06 (Jun)"},{"value":"07","label":"07 (Jul)"},{"value":"08","label":"08 (Aug)"},{"value":"09","label":"09 (Sep)"},{"value":"10","label":"10 (Oct)"},{"value":"11","label":"11 (Nov)"},{"value":"12","label":"12 (Dec)"}];

    vm.inBank = [{"value":"-1","label":"Select Bank"},{"value":"1","label":"State Bank of India"},{"value":"10","label":"State Bank of India and Associates"},{"value":"22","label":"Federal Bank"},{"value":"29","label":"Indian Bank"},{"value":"28","label":"Union Bank of India"},{"value":"31","label":"Andhra Bank"},{"value":"34","label":"Punjab National Bank "},{"value":"35","label":"Allahabad Bank"},{"value":"38","label":"Vijaya Bank"},{"value":"39","label":"AXIS Bank"},{"value":"36","label":"HDFC Bank"},{"value":"37","label":"Bank of Baroda"},{"value":"42","label":"Karnataka Bank"},{"value":"40","label":"Karur Vysya Bank"},{"value":"46","label":"Kotak Mahindra Bank"},{"value":"47","label":"INGVysya Bank"},{"value":"44","label":"ICICI Bank "},{"value":"45","label":"IndusInd Bank"},{"value":"51","label":"IMPS"},{"value":"50","label":"Central Bank of India"},{"value":"48","label":"Bank of India"},{"value":"54","label":"Syndicate Bank"},{"value":"53","label":"Bank of Maharashatra"},{"value":"52","label":"IDBI Bank"},{"value":"56","label":"Corporation Bank"}];

    vm.pg = [{"value":"-1","label":"Select Bank"},{"value":"4","label":"Visa/Master Card(Powered By ICICI BANK)"},{"value":"17","label":"Visa/Master Card(Powered By CITI BANK)"},{"value":"21","label":"Visa/Master Card(Powered By HDFC BANK)"},{"value":"27","label":"American Express"},{"value":"30","label":"Visa/Master Card(Powered By AXIS BANK)"},{"value":"58","label":"RuPay Card (Powered by Kotak Bank)"}];

    vm.debits = [{"value":"-1","label":"Select Bank"},{"value":"3","label":"State Bank of India"},{"value":"9","label":"Punjab National Bank"},{"value":"15","label":"Indian Bank"},{"value":"16","label":"Union Bank of India "},{"value":"19","label":"Bank of India"},{"value":"25","label":"Andhra Bank"},{"value":"26","label":"Canara Bank"},{"value":"32","label":"CITI Bank"},{"value":"41","label":"ICICI Bank"},{"value":"57","label":"HDFC Bank"},{"value":"66","label":"AXIS Bank"}];


    vm.savePaymentInfoForCurent = function(){
        console.log("hello");
    }

  }
})();
