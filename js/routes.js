angular
  .module('miniRouting')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url:'/',
        templateUrl: 'home.html',
        controller: 'homeCtrl'
      });
  });
