(function() {
    'use strict';

    angular
        .module('irctcHK')
        .service('Utils', Utils);

    /**
     * @ngdoc Injector
     * @name Utils
     * @private
     * @module irctcHK
     * @description
     * //Description goes here
     * @author Dinakaran Santhanam
     * @copyright
     */
    Utils.$inject = [];

    /**
     * @ngdoc Service
     * @name Utils
     * @module irctcHK
     * @requires
     * @description
     * //Description goes here
     * @author Dinakaran Santhanam
     * @copyright
     */
    function Utils() {
        return {

        }

        function validatePassenger(passenger){
          if(passenger.name != ''){
            passenger.message = "Name is mandatory"
            passesnger.valid = false;
          }
          return passenger;
        }
    }
})();
