(function() {
  'use strict';

  angular
    .module('irctcHK')
    .controller('NavigationController', NavigationController);

  /**
   * @ngdoc Injector
   * @name NavigationController
   * @private
   * @module irctcHK
   * @description
   * //Description goes here
   * @author Dinakaran Santhanam
   * @copyright
   */
  NavigationController.$inject = ['$scope', 'DataService', 'Utils'];

  /**
   * @ngdoc Controller
   * @name NavigationController
   * @module irctcHK
   * @requires
   * @description
   * //Description goes here
   * @author Dinakaran Santhanam
   * @copyright
   */
  function NavigationController($scope, DataService, Utils) {
    var vm = this;

    vm.menu = [{
      link: '',
      title: 'Dashboard',
      icon: 'dashboard'
    }, {
      link: '',
      title: 'Friends',
      icon: 'group'
    }, {
      link: '',
      title: 'Messages',
      icon: 'message'
    }];
    vm.admin = [{
      link: '',
      title: 'Trash',
      icon: 'delete'
    }, {
      link: 'showListBottomSheet($event)',
      title: 'Settings',
      icon: 'settings'
    }];


  };
})();
