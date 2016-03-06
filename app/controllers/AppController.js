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
     * @author Dinakaran Santhanam
     * @copyright
     */
    AppController.$inject = ['$scope'];

    /**
     * @ngdoc Controller
     * @name AppController
     * @module irctcHK
     * @requires
     * @description
     * //Description goes here
     * @author Dinakaran Santhanam
     * @copyright
     */
    function AppController($scope) {

      var vm = this;

      vm.tab = {};

      $scope.$on("activateTab", function(targetScope, tab){
        console.log(tab);
        vm.tab = tab;
      });

      vm.fabAction = function($event, contextId){
        $scope.$broadcast('fabAction:'+contextId, $event);
      }
    }
})();
