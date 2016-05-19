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
    AppController.$inject = ['$scope', 'Utils'];

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
    function AppController($scope, Utils) {

      var vm = this;

      vm.tab = {};

      $scope.$on("activateTab", function(targetScope, tab){
        var tabs = Utils.getTabs();
        for(var i = 0;i<tabs.length;i++){
          if(tab.id == tabs[i].id){
            tab.index = i;
          }
        }
        vm.tab = tab;
      });

      vm.fabAction = function($event, contextId){
        $scope.$broadcast('fabAction:'+contextId, $event);
      }
    }
})();
