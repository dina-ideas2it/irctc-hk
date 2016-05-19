(function() {
    'use strict';

    angular
        .module('irctcHK')
        .controller('HeaderController', HeaderController);

    /**
     * @ngdoc Injector
     * @name HeaderController
     * @private
     * @module irctcHK
     * @description
     * //Description goes here
     * @author Dinakaran Santhanam
     * @copyright
     */
    HeaderController.$inject = ['$scope', '$mdSidenav', '$mdDialog', 'Utils'];

    /**
     * @ngdoc Controller
     * @name HeaderController
     * @module irctcHK
     * @requires
     * @description
     * //Description goes here
     * @author Dinakaran Santhanam
     * @copyright
     */
    function HeaderController($scope, $mdSidenav, $mdDialog, Utils) {
        var vm = this;

        vm.tabs = Utils.getTabs();

        vm.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

        vm.activateTab = function(tab) {
            $scope.$emit("activateTab", tab);
        }

        function init() {
            vm.activateTab(vm.tabs[0]);
        }

        init();
    }
})();
