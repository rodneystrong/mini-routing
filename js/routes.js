angular
  .module('miniRouting')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url:'/',
        templateUrl: '/views/home.html',
        controller: 'homeCtrl'
      })
      .state('products', {
        url: '/products/:id',
        templateUrl: '/views/products.html',
        controller: 'productsCtrl'
      })
      .state('settings',{
        url: '/settings',
        templateUrl: '/views/settings.html',
        controller: 'settingsCtrl'
      });
      //This is a catch all for our routes.
      //"If you can't find the route, send back to home".
      //Kinda' like a global 404
      $urlRouterProvider.otherwise("/");
  });
