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
     * @author Ideas2IT Technologies
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
