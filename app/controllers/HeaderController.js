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
    HeaderController.$inject = ['$scope', '$mdSidenav', '$mdDialog'];

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
    function HeaderController($scope, $mdSidenav, $mdDialog) {
        var vm = this;

        vm.tabs = [{
            "id": "new-journey",
            "name": "New Journey",
            "url": "app/views/new-journey.html"
        }, {
            "id": "passengers",
            "name": "Saved Passengers",
            "url": "app/views/passengers.html"
        }, {
            "id": "payment",
            "name": "Payment Details",
            "url": "app/views/payment.html"
        }]

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
