(function() {
  'use strict';
  angular
    .module('genes', [
      'ngRoute',
      'underscore'
    ])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/',{
        templateUrl: 'index.html'
      })
      .when('/beer', {
        templateUrl: 'beer.html',
        controller: 'BeerController'
      })
      .when('/food', {
        templateUrl: 'food.html',
        controller: 'FoodController'
      })
      .when('/map', {
        templateUrl: 'map.html',
        // controller: 'MapController'
      })
      .when('/contact', {
        templateUrl: 'contact.html',
        // controller: 'MainController'
      })
      .when('/404', {
        template: '404.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
    });

}());
