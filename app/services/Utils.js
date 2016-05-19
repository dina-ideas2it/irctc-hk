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
    Utils.$inject = ['$mdToast'];

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
    function Utils($mdToast) {
        var _self = this;

        _self.guid = guid;
        _self.getTabs = getTabs;
        _self.showToast = showToast;

        function validatePassenger(passenger){
          if(passenger.name != ''){
            passenger.message = "Name is mandatory"
            passesnger.valid = false;
          }
          return passenger;
        }

        function guid() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
        }

        function getTabs(){
          return [{
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
          }];
        }

        function showToast(message){
          $mdToast.show(
            $mdToast.simple()
              .textContent(message)
              .position({
                "left" : true,
                "right" : false,
                "top" : false,
                "bottom" : true
              })
              .highlightAction(false)
              .hideDelay(6000)
          );
        }

    }
})();
