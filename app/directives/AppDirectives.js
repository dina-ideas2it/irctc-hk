(function() {
    'use strict';

    angular
      .module('irctcHK')
        .directive('userAvatar', userAvatar);

    /**
     * @ngdoc Directive
     * @name DirectiveName
     * @module ModuleName
     * @require
     * @restrict
     * @description
     * //Description goes here
     * @author Dinakaran Santhanam
     * @copyright
     */
    function userAvatar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/views/partials/user-avatar.html',
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }
})();


(function() {
    'use strict';

    angular
      .module('irctcHK')
        .directive('hkSideMenu', hkSideMenu);

    /**
     * @ngdoc Directive
     * @name hkSideMenu
     * @module ModuleName
     * @require
     * @restrict
     * @description
     * //Description goes here
     * @author Dinakaran Santhanam
     * @copyright
     */
    function hkSideMenu() {
        var directive = {
            restrict: 'E',
            controller: "NavigationController",
            replace: true,
            controllerAs: 'navCtrl',
            templateUrl: 'app/views/partials/side-menu.html',
        };

        return directive;
    }
})();
